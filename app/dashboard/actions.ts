"use server"

import { primaryPrisma as prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { calculateScoresWithGPT } from "@/lib/ai/gptScoring"
import { checkGoldenRules } from "@/lib/ai/goldenRules"
import { generateContent } from "@/lib/ai"
import { compileTailoringPrompt } from "@/lib/ai/promptCompiler"
import { extractToneFromText } from "@/lib/ai/toneExtractor"
import { cleanResumeOutput } from "@/lib/cleanResumeOutput"
import { incrementUsage } from "@/lib/usage"
import {
  logResumeEventDirect,
  logTailoringAnalyticsDirect,
  logResumeDirect,
  logSavedResumeDirect,
  logInteractionDirect,
} from "@/lib/model-logger"

/**
 * Submits a resume and job description for tailoring analysis.
 * @param resumeText The resume text.
 * @param jobDescription The job description.
 * @returns Object containing success status and either the resume ID or error message.
 */
export async function submitResume(resumeText: string, jobDescription: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    console.log("Creating resume for user:", user.id)

    // Check if prisma is defined
    if (!prisma || typeof prisma.resume?.create !== "function") {
      console.error("Prisma client or resume model is undefined")
      return { success: false, error: "Database client error" }
    }

    // Create a new resume
    const resume = await prisma.resume.create({
      data: {
        user_id: user.id,
        resume_text: resumeText,
        job_description: jobDescription,
      },
    })

    // Log the resume upload to the model database
    let logSuccess = false
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging resume upload for user: ${user.id}, resumeId: ${resume.id}`)
      await logResumeEventDirect(user.id, {
        eventType: "upload",
        resumeId: resume.id,
        resumeText: resumeText,
        jobDescription: jobDescription,
      })
      logSuccess = true
      console.log("[MODEL LOG] SUCCESS: Resume upload logged successfully:", resume.id)
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log resume upload:", modelError)
    }

    if (!logSuccess) {
      console.error("[MODEL LOG] FAILURE: Resume upload logging was not successful")
    }

    // Log the resume itself to the model database
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging resume to model DB for user: ${user.id}, resumeId: ${resume.id}`)
      await logResumeDirect(user.id, {
        id: resume.id,
        resume_text: resumeText,
        job_description: jobDescription,
        version: 1,
      })
      console.log("[MODEL LOG] SUCCESS: Resume logged to model DB successfully:", resume.id)
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log resume to model DB:", modelError)
    }

    // Log the interaction of creating a resume
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging resume creation interaction for user: ${user.id}`)
      await logInteractionDirect(user.id, {
        action: "create",
        element: "resume",
        metadata: { resumeId: resume.id },
      })
      console.log("[MODEL LOG] SUCCESS: Resume creation interaction logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log resume creation interaction:", modelError)
    }

    console.log("Resume created successfully:", resume.id)
    revalidatePath("/dashboard")

    return { success: true, message: "Resume submitted successfully", data: { id: resume.id } }
  } catch (error) {
    console.error("Error submitting resume:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit resume",
      details: error instanceof Error ? error.stack : undefined,
    }
  }
}

/**
 * Runs the tailoring analysis for a resume with up to 3 attempts to pass golden rules.
 * @param resumeText The resume text.
 * @param jobDescription The job description.
 * @param resumeId The ID of the resume to update.
 * @param isRefinement Whether this is a refinement of an existing resume.
 * @returns Object containing success status and either the updated resume data or an error message.
 */
export async function runTailoringAnalysis(
  resumeText: string,
  jobDescription: string,
  resumeId: string,
  isRefinement = false,
) {
  try {
    console.log(`Starting tailoring analysis for resume ${resumeId}, refinement: ${isRefinement}`)

    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated" }
    }

    // Get the resume
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      return { success: false, error: "Resume not found" }
    }

    // Get the user's tailoring mode
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        tailoring_mode: true,
        is_premium: true,
        subscription_tier: true,
      },
    })

    const tailoringMode = userData?.tailoring_mode || "personalized"
    const isPremium = userData?.is_premium || userData?.subscription_tier === "premium"

    // Check if user can use this tailoring mode
    if (tailoringMode === "aggressive" && !isPremium) {
      return { success: false, error: "Aggressive tailoring is a premium feature" }
    }

    // Track usage for non-premium users
    if (!isPremium) {
      // Determine which feature to increment
      const feature =
        tailoringMode === "basic" || tailoringMode === "quick" ? "basic_tailoring" : "personalized_tailoring"

      // Increment usage
      const usageResult = await incrementUsage(user.id, feature)

      if (!usageResult.success || !usageResult.usage) {
        return { success: false, error: usageResult.error || "Failed to track usage" }
      }

      // Check if user has reached their limit
      let currentUsage = 0
      let dailyLimit = 0

      if (feature === "basic_tailoring") {
        currentUsage = usageResult.usage.basic_tailorings_used
        dailyLimit = 100 // Updated from any previous value to 100
      } else {
        currentUsage = usageResult.usage.personalized_tailorings_used
        dailyLimit = 100 // Updated from any previous value to 100
      }

      if (currentUsage > dailyLimit) {
        return {
          success: false,
          error: "Daily limit reached",
          subscription: {
            current: "free",
            feature,
            limit: dailyLimit,
            used: currentUsage,
          },
        }
      }
    }

    // Track the best attempt
    let bestAttempt = null
    let bestScore = -1
    let iterations = 0
    const MAX_ATTEMPTS = 3

    // Track feedback from previous attempts
    let previousFeedback = ""
    let previousSuggestions = ""

    // Attempt tailoring up to MAX_ATTEMPTS times
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      iterations = attempt
      console.log(`Tailoring attempt ${attempt} of ${MAX_ATTEMPTS}...`)

      // Extract the user's tone from their resume text
      const inferredTone = extractToneFromText(resumeText)
      console.log(`Inferred user tone: ${inferredTone}`)

      // Create a prompt for resume tailoring using the compiler
      let tailoringPrompt = compileTailoringPrompt({
        resumeText,
        jobDescription,
        tailoringMode:
          tailoringMode === "aggressive"
            ? "Aggressive"
            : tailoringMode === "personalized" || tailoringMode === "story"
              ? "Personalized"
              : "Basic",
        userTone: inferredTone,
      })

      // Add feedback from previous attempts if available
      if (attempt > 1 && previousFeedback && previousSuggestions) {
        tailoringPrompt += `

Feedback from previous attempt:
${previousFeedback}

Suggestions for improvement:
${previousSuggestions}

Please address these points in this iteration.`
        console.log(`Including feedback from previous attempt in prompt for attempt ${attempt}`)
      }

      // Generate the tailored resume
      console.log(`Generating tailored resume with AI (attempt ${attempt})...`)
      const { success, text: tailoredResume } = await generateContent(
        "dummy-key", // This is ignored as we check env vars directly
        tailoringPrompt,
        "gemini-1.5-flash",
        0.5,
      )

      if (!success || !tailoredResume || tailoredResume.length < 300) {
        console.error(`Failed to generate tailored resume on attempt ${attempt}`)
        continue // Try next attempt
      }

      console.log(`Resume tailored successfully on attempt ${attempt}, length: ${tailoredResume.length}`)

      // Check golden rules
      console.log(`Checking golden rules for attempt ${attempt}...`)
      const goldenRulesResult = await checkGoldenRules(tailoredResume, jobDescription)

      // Store feedback for next attempt
      previousFeedback = goldenRulesResult.feedback.join("\n")
      previousSuggestions = goldenRulesResult.suggestions.join("\n")
      console.log(`Feedback captured for next attempt: ${previousFeedback.substring(0, 100)}...`)

      // Score the tailored resume
      console.log(`Scoring tailored resume for attempt ${attempt}...`)
      const { ats_score, jd_score } = await calculateScoresWithGPT(resumeText, tailoredResume, jobDescription)

      // Calculate combined score for comparison
      const totalScore = (ats_score || 0) + (jd_score || 0)

      console.log(
        `Attempt ${attempt} results: ATS: ${ats_score}, JD: ${jd_score}, Golden Rules: ${goldenRulesResult.passed}`,
      )

      // Check if this attempt is better than previous best
      if (totalScore > bestScore) {
        bestAttempt = {
          resumeText: tailoredResume,
          ats_score: ats_score || 0,
          jd_score: jd_score || 0,
          golden_passed: goldenRulesResult.passed,
        }
        bestScore = totalScore
      }

      // If golden rules passed, we can stop trying
      if (goldenRulesResult.passed) {
        console.log(`Golden rules passed on attempt ${attempt}, stopping further attempts`)
        break
      }
    }

    // Get the current version if this is a refinement
    let currentVersion = 1
    if (isRefinement) {
      currentVersion = resume.version + 1
    }

    // If we have a best attempt, update the resume
    if (!bestAttempt) {
      return { success: false, error: "Failed to generate a valid tailored resume after multiple attempts" }
    }

    console.log(
      `Updating resume with best attempt (iterations: ${iterations}, golden passed: ${bestAttempt.golden_passed})`,
    )

    // Clean the resume text before saving to remove any AI artifacts
    const cleanedResume = cleanResumeOutput(bestAttempt.resumeText)

    // Log when cleanup occurs (in development mode)
    if (process.env.NODE_ENV === "development" && cleanedResume !== bestAttempt.resumeText) {
      console.warn("⚠️ Resume cleaned of LLM metadata before saving.")
    }

    // Update the resume with the cleaned tailored resume and scores
    const updatedResume = await prisma.resume.update({
      where: {
        id: resumeId,
        user_id: user.id,
      },
      data: {
        modified_resume: cleanedResume,
        ats_score: bestAttempt.ats_score,
        jd_score: bestAttempt.jd_score,
        version: currentVersion,
        tailoring_mode: tailoringMode,
      },
    })

    // Create a tailoring analytics entry in the primary database
    await prisma.tailoringAnalytics.create({
      data: {
        user_id: user.id,
        resume_id: resumeId,
        tailoring_mode: tailoringMode,
        iterations: iterations,
        ats_score: bestAttempt.ats_score,
        jd_score: bestAttempt.jd_score,
        golden_passed: bestAttempt.golden_passed,
      },
    })

    // Log tailoring analytics directly to the model database
    // Add explicit console log before calling the function
    console.log(`[MODEL LOG] ENTRY: logTailoringAnalyticsDirect(${user.id}, ${resumeId})`)
    console.log("[DEBUG] Original actions.ts attempting to log tailoring analytics")
    console.log(`[MODEL LOG] Attempting to log tailoring analytics with data:`, {
      resumeId,
      tailoringMode,
      atsScore: bestAttempt.ats_score,
      jdScore: bestAttempt.jd_score,
      isRefinement,
      iterations,
      goldenPassed: bestAttempt.golden_passed,
    })

    try {
      const analyticsLogResult = await logTailoringAnalyticsDirect(user.id, {
        resumeId: resumeId,
        originalText: resumeText,
        jobDescription: jobDescription,
        tailoredText: cleanedResume,
        atsScore: bestAttempt.ats_score,
        jdScore: bestAttempt.jd_score,
        tailoringMode: tailoringMode,
        isRefinement: isRefinement,
        iterations: iterations,
        goldenPassed: bestAttempt.golden_passed,
      })

      // Log the result of the operation
      console.log(`[TAILORING ANALYTICS] Logging status: ${analyticsLogResult ? "true" : "false"}`)
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log tailoring analytics directly:", modelError)
      console.log(`[TAILORING ANALYTICS] Logging status: false`)
    }

    // Update the resume in the model database
    try {
      console.log(`[MODEL LOG] ATTEMPT: Updating resume in model DB for user: ${user.id}, resumeId: ${resumeId}`)
      await logResumeDirect(user.id, {
        id: resumeId,
        resume_text: resumeText,
        job_description: jobDescription,
        modified_resume: cleanedResume,
        ats_score: bestAttempt.ats_score,
        jd_score: bestAttempt.jd_score,
        tailoring_mode: tailoringMode,
        version: currentVersion,
      })
      console.log("[MODEL LOG] SUCCESS: Resume updated in model DB successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to update resume in model DB:", modelError)
    }

    revalidatePath("/dashboard")
    revalidatePath(`/dashboard/resume/${resumeId}`)

    // Log the tailoring event directly to the model database
    let modelLogSuccess = false
    try {
      console.log(`[MODEL LOG] ATTEMPT: Direct logging of tailoring event for user: ${user.id}, resumeId: ${resumeId}`)
      await logResumeEventDirect(user.id, {
        eventType: isRefinement ? "refined" : "tailored",
        resumeId: resumeId,
        resumeText: resumeText,
        jobDescription: jobDescription,
        tailoredText: cleanedResume,
        atsScore: bestAttempt.ats_score,
        jdScore: bestAttempt.jd_score,
        tailoringMode: tailoringMode,
        version: currentVersion,
      })
      modelLogSuccess = true
      console.log(`[MODEL LOG] SUCCESS: Direct tailoring event logged successfully`)
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log tailoring event directly:", modelError)
    }

    if (!modelLogSuccess) {
      console.error("[MODEL LOG] FAILURE: Direct tailoring event logging was not successful")
    }

    // Log the interaction of tailoring a resume
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging resume tailoring interaction for user: ${user.id}`)
      await logInteractionDirect(user.id, {
        action: isRefinement ? "refine" : "tailor",
        element: "resume",
        metadata: {
          resumeId: resumeId,
          version: currentVersion,
          atsScore: bestAttempt.ats_score,
          jdScore: bestAttempt.jd_score,
          tailoringMode: tailoringMode,
        },
      })
      console.log("[MODEL LOG] SUCCESS: Resume tailoring interaction logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log resume tailoring interaction:", modelError)
    }

    revalidatePath("/dashboard")
    revalidatePath(`/dashboard/resume/${resumeId}`)

    // Return success
    return {
      success: true,
      data: updatedResume,
      goldenPassed: bestAttempt.golden_passed,
      attempts: iterations,
      ats: bestAttempt.ats_score,
      jd: bestAttempt.jd_score,
    }
  } catch (error) {
    console.error("Error running tailoring analysis:", error)
    return { success: false, error: "Failed to run tailoring analysis" }
  }
}

/**
 * Saves a resume to the user's saved collection.
 * @param resumeId The ID of the resume to save.
 * @returns Object containing success status and either a success message or an error message.
 */
export async function saveResume(resumeId: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated" }
    }

    console.log(`[MODEL LOG] ATTEMPT: Saving resume for user: ${user.id}, resumeId: ${resumeId}`)

    // Get the resume details
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      return { success: false, error: "Resume not found" }
    }

    // Save the resume
    await prisma.savedResume.create({
      data: {
        user_id: user.id,
        resume_id: resumeId,
      },
    })

    // Log the saved resume to the model database
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging saved resume to model DB for user: ${user.id}, resumeId: ${resumeId}`)
      await logSavedResumeDirect(user.id, {
        resumeId: resumeId,
      })
      console.log("[MODEL LOG] SUCCESS: Saved resume logged to model DB successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log saved resume to model DB:", modelError)
    }

    // Log the save event to the model database
    let logSuccess = false
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging resume save for user: ${user.id}, resumeId: ${resumeId}`)
      await logResumeEventDirect(user.id, {
        eventType: "save",
        resumeId: resumeId,
      })
      logSuccess = true
      console.log("[MODEL LOG] SUCCESS: Resume save logged successfully:", resumeId)
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log resume save:", modelError)
    }

    if (!logSuccess) {
      console.error("[MODEL LOG] FAILURE: Resume save logging was not successful")
    }

    // Log the interaction of saving a resume
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging resume save interaction for user: ${user.id}`)
      await logInteractionDirect(user.id, {
        action: "save",
        element: "resume",
        metadata: { resumeId: resumeId, version: resume.version },
      })
      console.log("[MODEL LOG] SUCCESS: Resume save interaction logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log resume save interaction:", modelError)
    }

    revalidatePath("/dashboard/resume/[id]")

    return { success: true, message: "Resume saved successfully" }
  } catch (error) {
    console.error("Error saving resume:", error)
    return { success: false, error: "Failed to save resume" }
  }
}

/**
 * Gets the user's preferences.
 * @returns Object containing success status and either the user preferences or error message.
 */
export async function getUserPreferences() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated", data: null }
    }

    console.log("Getting preferences for user:", user.id)

    // Check if prisma is defined
    if (!prisma || typeof prisma.user?.findUnique !== "function") {
      console.error("Prisma client or user model is undefined")
      return { success: false, error: "Database client error", data: null }
    }

    // Get user preferences from database
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        tailoring_mode: true,
        is_premium: true,
      },
    })

    if (!userData) {
      console.log("User not found in database, creating new user record")
      // Create user if not found
      const newUser = await prisma.user.create({
        data: {
          id: user.id,
          email: user.email || "",
        },
        select: {
          tailoring_mode: true,
          is_premium: true,
        },
      })
      return { success: true, data: newUser }
    }

    return { success: true, data: userData }
  } catch (error) {
    console.error("Error fetching user preferences:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch user preferences",
      data: null,
      details: error instanceof Error ? error.stack : undefined,
    }
  }
}

/**
 * Gets the resume history for the current user.
 * @returns Object containing success status and either the resume history or error message.
 */
export async function getResumeHistory() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get all resumes for this user
    const resumes = await prisma.resume.findMany({
      where: {
        user_id: user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: resumes }
  } catch (error) {
    console.error("Error fetching resume history:", error)
    return { success: false, error: "Failed to fetch resume history", data: null }
  }
}

/**
 * Gets all saved resumes for the current user.
 * @returns Object containing success status and either the saved resumes or error message.
 */
export async function getSavedResumes() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get all saved resumes for this user
    const savedResumes = await prisma.resume.findMany({
      where: {
        user_id: user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: savedResumes }
  } catch (error) {
    console.error("Error fetching saved resumes:", error)
    return { success: false, error: "Failed to fetch saved resumes", data: null }
  }
}

/**
 * Gets the user's profile information.
 * @returns Object containing success status and either the user profile or error message.
 */
export async function getUserProfile() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get user profile from database
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        full_name: true,
        email: true,
        phone: true,
        country: true,
        linkedin: true,
        company: true,
        position: true,
        education: true,
        skills: true,
        bio: true,
        tailoring_mode: true,
      },
    })

    if (!userData) {
      return { success: false, error: "User not found", data: null }
    }

    return { success: true, data: userData }
  } catch (error) {
    console.error("Error fetching user profile:", error)
    return { success: false, error: "Failed to fetch user profile", data: null }
  }
}

/**
 * Updates the user's profile information.
 * @param formData The form data containing the updated profile information.
 * @returns Object containing success status and either a success message or an error message.
 */
export async function updateUserProfile(formData: any) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated" }
    }

    // Update user profile in database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        full_name: formData.fullName,
        phone: formData.phone,
        country: formData.country,
        linkedin: formData.linkedIn,
        company: formData.company,
        position: formData.position,
        education: formData.education,
        skills: formData.skills,
        bio: formData.bio,
        tailoring_mode: formData.tailoringMode,
      },
    })

    revalidatePath("/dashboard/profile")

    return { success: true, message: "Profile updated successfully" }
  } catch (error) {
    console.error("Error updating user profile:", error)
    return { success: false, error: "Failed to update profile" }
  }
}

export async function getSavedResumeCollection() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    // Get saved resumes with their associated resume details
    const savedResumes = await prisma.savedResume.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        resume: true,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: savedResumes }
  } catch (error) {
    console.error("Error fetching saved resumes:", error)
    return { success: false, error: "Failed to fetch saved resumes" }
  }
}

export async function deleteSavedResume(id: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    // Delete the saved resume
    await prisma.savedResume.delete({
      where: {
        id,
        user_id: user.id,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error deleting saved resume:", error)
    return { success: false, error: "Failed to delete saved resume" }
  }
}

export async function updateSavedResumeLabel(id: string, label: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    // Update the saved resume label
    await prisma.savedResume.update({
      where: {
        id,
        user_id: user.id,
      },
      data: {
        label,
      },
    })

    return { success: true }
  } catch (error) {
    console.error("Error updating saved resume label:", error)
    return { success: false, error: "Failed to update saved resume label" }
  }
}

export async function getResumeHistoryAction() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    // Get resume history
    const resumes = await prisma.resume.findMany({
      where: {
        user_id: user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: resumes }
  } catch (error) {
    console.error("Error fetching resume history:", error)
    return { success: false, error: "Failed to fetch resume history" }
  }
}

/**
 * Fetches a resume by ID.
 * @param resumeId The ID of the resume to fetch.
 * @returns Object containing success status and either the resume data or an error message.
 */
export async function getResumeById(resumeId: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated" }
    }

    // Get the resume
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      return { success: false, error: "Resume not found" }
    }

    return { success: true, data: resume }
  } catch (error) {
    console.error("Error fetching resume:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch resume",
    }
  }
}
