import { createClient } from "@/lib/supabase/server"
import { PrismaClient } from "@prisma/client"
import { incrementUsage } from "@/lib/usage"
import { extractToneFromText } from "@/lib/ai/toneExtractor"
import { compileTailoringPrompt } from "@/lib/ai/promptCompiler"
import { generateContent } from "@/lib/ai"
import { checkGoldenRules } from "@/lib/ai/goldenRules"
import { calculateScoresWithGPT } from "@/lib/ai/gptScoring"
import { cleanResumeOutput } from "@/lib/cleanResumeOutput"
import { revalidatePath } from "next/cache"

const prisma = new PrismaClient()

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
      console.error("Authentication error:", userError)
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
      console.error(`Resume not found: ${resumeId}`)
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

    console.log("Starting AI tailoring process...")

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

      try {
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

        // Check if we have the necessary API keys
        const googleApiKey = process.env.GOOGLE_AI_API_KEY
        const mistralApiKey = process.env.MISTRAL_API_KEY
        const openrouterApiKey = process.env.OPENROUTER_API_KEY

        if (!googleApiKey && !mistralApiKey && !openrouterApiKey) {
          console.error("No AI API keys found. Cannot proceed with tailoring.")
          return { success: false, error: "Missing AI API keys. Please check your environment variables." }
        }

        console.log("API keys available:", {
          googleApiKey: !!googleApiKey,
          mistralApiKey: !!mistralApiKey,
          openrouterApiKey: !!openrouterApiKey,
        })

        // Generate content with detailed error handling
        let aiResult
        try {
          aiResult = await generateContent(
            "dummy-key", // This is ignored as we check env vars directly
            tailoringPrompt,
            "gemini-1.5-flash",
            0.5,
          )
          console.log("AI response received:", {
            success: aiResult.success,
            textLength: aiResult.text ? aiResult.text.length : 0,
            provider: aiResult.provider,
          })
        } catch (aiError) {
          console.error(`AI generation error on attempt ${attempt}:`, aiError)
          throw new Error(`AI generation failed: ${aiError.message || "Unknown AI error"}`)
        }

        const { success, text: tailoredResume } = aiResult

        if (!success || !tailoredResume || tailoredResume.length < 300) {
          console.error(
            `Failed to generate tailored resume on attempt ${attempt}. Response:`,
            tailoredResume ? tailoredResume.substring(0, 100) + "..." : "No response",
          )
          continue // Try next attempt
        }

        console.log(`Resume tailored successfully on attempt ${attempt}, length: ${tailoredResume.length}`)

        // Check golden rules
        console.log(`Checking golden rules for attempt ${attempt}...`)
        let goldenRulesResult
        try {
          goldenRulesResult = await checkGoldenRules(tailoredResume, jobDescription)
          console.log("Golden rules check result:", goldenRulesResult)
        } catch (goldenRulesError) {
          console.error(`Golden rules check error on attempt ${attempt}:`, goldenRulesError)
          // Use a default result if the check fails
          goldenRulesResult = {
            passed: false,
            feedback: ["Failed to check golden rules"],
            suggestions: ["Try again with different wording"],
          }
        }

        // Store feedback for next attempt
        previousFeedback = goldenRulesResult.feedback.join("\n")
        previousSuggestions = goldenRulesResult.suggestions.join("\n")
        console.log(`Feedback captured for next attempt: ${previousFeedback.substring(0, 100)}...`)

        // Score the tailored resume
        console.log(`Scoring tailored resume for attempt ${attempt}...`)
        let scoringResult
        try {
          scoringResult = await calculateScoresWithGPT(resumeText, tailoredResume, jobDescription)
          console.log("Scoring result:", scoringResult)
        } catch (scoringError) {
          console.error(`Scoring error on attempt ${attempt}:`, scoringError)
          // Use default scores if scoring fails
          scoringResult = {
            ats_score: 75,
            jd_score: 75,
            ats: 75,
            jd: 75,
          }
        }

        const { ats_score, jd_score } = scoringResult

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
      } catch (attemptError) {
        console.error(`Error during tailoring attempt ${attempt}:`, attemptError)
        // Continue to next attempt
      }
    }

    // Get the current version if this is a refinement
    let currentVersion = 1
    if (isRefinement) {
      currentVersion = resume.version + 1
    }

    // If we have a best attempt, update the resume
    if (!bestAttempt) {
      console.error("Failed to generate a valid tailored resume after multiple attempts")
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
    try {
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

      console.log("Resume updated successfully:", {
        id: updatedResume.id,
        version: updatedResume.version,
        ats_score: updatedResume.ats_score,
        jd_score: updatedResume.jd_score,
      })

      // Create a tailoring analytics entry
      try {
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
        console.log("Tailoring analytics entry created successfully")
      } catch (analyticsError) {
        console.error("Failed to create tailoring analytics entry:", analyticsError)
        // Continue even if analytics fails
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
    } catch (dbError) {
      console.error("Database error updating resume:", dbError)
      return { success: false, error: `Database error: ${dbError.message || "Failed to update resume"}` }
    }
  } catch (error) {
    console.error("Error running tailoring analysis:", error)
    return { success: false, error: `Tailoring failed: ${error.message || "Unknown error"}` }
  }
}
