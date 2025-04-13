"use server"

import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { calculateScoresWithGPT } from "@/lib/ai/gptScoring"
import { checkGoldenRules } from "@/lib/ai/goldenRules"
import { generateContent } from "@/lib/ai"
import { compileTailoringPrompt } from "@/lib/ai/promptCompiler"
import { extractToneFromText } from "@/lib/ai/toneExtractor"
import { cleanResumeOutput } from "@/lib/cleanResumeOutput"
import { incrementUsage } from "@/lib/usage"

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
      return { success: false, error: "Not authenticated" }
    }

    // Create a new resume
    const resume = await prisma.resume.create({
      data: {
        user_id: user.id,
        resume_text: resumeText,
        job_description: jobDescription,
      },
    })

    revalidatePath("/dashboard")

    return { success: true, message: "Resume submitted successfully", data: { id: resume.id } }
  } catch (error) {
    console.error("Error submitting resume:", error)
    return { success: false, error: "Failed to submit resume" }
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
      return { success: false, error: "Not authenticated", data: null }
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
      return { success: false, error: "User not found", data: null }
    }

    return { success: true, data: userData }
  } catch (error) {
    console.error("Error fetching user preferences:", error)
    return { success: false, error: "Failed to fetch user preferences", data: null }
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

/**
 * Gets the saved resume collection for the current user.
 * @returns Object containing success status and either the saved resume collection or error message.
 */
export async function getSavedResumeCollection() {
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
    const savedResumes = await prisma.savedResume.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        resume: true, // Include the associated resume data
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: savedResumes }
  } catch (error) {
    console.error("Error fetching saved resume collection:", error)
    return { success: false, error: "Failed to fetch saved resume collection", data: null }
  }
}

/**
 * Deletes a saved resume from the user's collection.
 * @param savedResumeId The ID of the saved resume to delete.
 * @returns Object containing success status and either a success message or an error message.
 */
export async function deleteSavedResume(savedResumeId: string) {
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

    // Delete the saved resume
    await prisma.savedResume.delete({
      where: {
        id: savedResumeId,
        user_id: user.id,
      },
    })

    revalidatePath("/dashboard/saved")

    return { success: true, message: "Saved resume deleted successfully" }
  } catch (error) {
    console.error("Error deleting saved resume:", error)
    return { success: false, error: "Failed to delete saved resume" }
  }
}

/**
 * Updates the label of a saved resume in the user's collection.
 * @param savedResumeId The ID of the saved resume to update.
 * @param label The new label for the saved resume.
 * @returns Object containing success status and either a success message or an error message.
 */
export async function updateSavedResumeLabel(savedResumeId: string, label: string) {
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

    // Update the saved resume label
    await prisma.savedResume.update({
      where: {
        id: savedResumeId,
        user_id: user.id,
      },
      data: {
        label: label,
      },
    })

    revalidatePath("/dashboard/saved")

    return { success: true, message: "Saved resume label updated successfully" }
  } catch (error) {
    console.error("Error updating saved resume label:", error)
    return { success: false, error: "Failed to update saved resume label" }
  }
}

/**
 * Updates the tailoring mode for the current user.
 * @param tailoringMode The new tailoring mode.
 * @returns Object containing success status and either a success message or an error message.
 */
export async function updateTailoringMode(tailoringMode: string) {
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

    // Update tailoring mode in database
    await prisma.user.update({
      where: { id: user.id },
      data: {
        tailoring_mode: tailoringMode,
      },
    })

    revalidatePath("/dashboard/tailor")

    return { success: true, message: "Tailoring mode updated successfully" }
  } catch (error) {
    console.error("Error updating tailoring mode:", error)
    return { success: false, error: "Failed to update tailoring mode" }
  }
}

/**
 * Gets a resume by its ID.
 * @param resumeId The ID of the resume to retrieve.
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
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get the resume
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      return { success: false, error: "Resume not found", data: null }
    }

    return { success: true, data: resume }
  } catch (error) {
    console.error("Error fetching resume:", error)
    return { success: false, error: "Failed to fetch resume", data: null }
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

      if (!usageResult.success) {
        return { success: false, error: usageResult.error || "Failed to track usage" }
      }

      // Check if user has reached their limit
      let currentUsage = 0
      let dailyLimit = 0

      if (feature === "basic_tailoring") {
        currentUsage = usageResult.usage.basic_tailorings_used
        dailyLimit = 5 // FREE_TIER_LIMITS.basic_tailoring
      } else {
        currentUsage = usageResult.usage.personalized_tailorings_used
        dailyLimit = 3 // FREE_TIER_LIMITS.personalized_tailoring
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
        tailoringPrompt += `\n\nFeedback from previous attempt:\n${previousFeedback}\n\nSuggestions for improvement:\n${previousSuggestions}\n\nPlease address these points in this iteration.`
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

    // Create a tailoring analytics entry
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

    // Save the resume
    await prisma.savedResume.create({
      data: {
        user_id: user.id,
        resume_id: resumeId,
      },
    })

    revalidatePath("/dashboard/resume/[id]")

    return { success: true, message: "Resume saved successfully" }
  } catch (error) {
    console.error("Error saving resume:", error)
    return { success: false, error: "Failed to save resume" }
  }
}
