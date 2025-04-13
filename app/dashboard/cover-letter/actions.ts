"use server"

import { createClient } from "@/lib/supabase/server"
import { prisma } from "@/lib/prisma"
import { incrementUsage } from "@/lib/usage"
import { logResumeEventDirect } from "@/lib/model-logger"
import { revalidatePath } from "next/cache"

/**
 * Generates a cover letter based on a resume and job description
 * @param resumeId The ID of the resume to base the cover letter on
 * @param jobDescription The job description
 * @param tailoringMode The tailoring mode to use
 * @param isRefinement Whether this is a refinement of an existing cover letter
 * @returns The generated cover letter data
 */
export async function generateCoverLetterAction(
  resumeId: string,
  jobDescription: string,
  tailoringMode: string,
  isRefinement = false,
) {
  try {
    console.log(`Starting cover letter generation for resume ${resumeId}, refinement: ${isRefinement}`)

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

    // Get user data to check premium status
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        is_premium: true,
        subscription_tier: true,
      },
    })

    const isPremium = userData?.is_premium || userData?.subscription_tier === "premium"

    // Track usage for non-premium users
    if (!isPremium) {
      // Increment usage
      const usageResult = await incrementUsage(user.id, "cover_letter")

      if (!usageResult.success || !usageResult.usage) {
        return { success: false, error: usageResult.error || "Failed to track usage" }
      }

      // Check if user has reached their limit
      const currentUsage = usageResult.usage.cover_letters_used
      const dailyLimit = 100 // Updated from 1 to 100

      if (currentUsage > dailyLimit) {
        return {
          success: false,
          error: "Daily limit reached",
          subscription: {
            current: "free",
            feature: "cover_letter",
            limit: dailyLimit,
            used: currentUsage,
          },
        }
      }
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

    // Get the resume content
    const resumeContent = resume.modified_resume || resume.resume_text

    if (!resumeContent || resumeContent.trim().length === 0) {
      console.error("Resume content is empty")
      return { success: false, error: "Resume content is empty" }
    }

    // Get the current version if this is a refinement
    let currentVersion = 1
    if (isRefinement) {
      // Find the latest version for this resume and job description
      const latestCoverLetter = await prisma.coverLetter.findFirst({
        where: {
          user_id: user.id,
          original_resume_id: resumeId,
          job_description: jobDescription,
        },
        orderBy: {
          version: "desc",
        },
      })

      if (latestCoverLetter) {
        currentVersion = latestCoverLetter.version + 1
      }
    }

    console.log("Generating cover letter with AI...")

    // Placeholder for actual cover letter generation
    // In a real implementation, this would call an AI service
    const generatedLetter = `Dear Hiring Manager,

I am writing to express my interest in the [Position] role at [Company]. With my background in [Field], I believe I would be a valuable addition to your team.

[Content based on resume and job description]

Thank you for considering my application. I look forward to the opportunity to discuss how my skills and experience align with your needs.

Sincerely,
[Name]`

    const explanation = "This cover letter highlights your relevant experience and skills for the position."
    const score = 85
    const feedback = "Consider adding more specific achievements related to the job requirements."
    const goldenPassed = score >= 80

    console.log("Cover letter generated, length:", generatedLetter.length)

    // Save the cover letter to the database
    console.log("Saving cover letter to database...")

    const coverLetter = await prisma.coverLetter.create({
      data: {
        user_id: user.id,
        original_resume_id: resumeId,
        job_description: jobDescription,
        generated_letter: generatedLetter,
        tailoring_mode: tailoringMode,
        version: currentVersion,
        explanation: explanation,
        score: score,
        feedback: feedback,
        golden_passed: goldenPassed,
      },
    })

    // Log the cover letter generation event
    let logSuccess = false
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging cover letter generation for user: ${user.id}, resumeId: ${resumeId}`)
      await logResumeEventDirect(user.id, {
        eventType: "cover_letter_generated",
        resumeId: resumeId,
        jobDescription: jobDescription,
        tailoringMode: tailoringMode,
        version: currentVersion,
        score: score,
        goldenPassed: goldenPassed,
      })
      logSuccess = true
      console.log("[MODEL LOG] SUCCESS: Cover letter generation logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log cover letter generation:", modelError)
    }

    if (!logSuccess) {
      console.error("[MODEL LOG] FAILURE: Cover letter generation logging was not successful")
    }

    console.log("Cover letter saved successfully:", coverLetter.id)

    revalidatePath("/dashboard/cover-letter")

    return {
      success: true,
      data: coverLetter,
    }
  } catch (error) {
    console.error("Error generating cover letter:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate cover letter",
    }
  }
}

/**
 * Refines an existing cover letter
 * @param coverLetterId The ID of the cover letter to refine
 * @returns The refined cover letter data
 */
export async function refineCoverLetterAction(coverLetterId: string) {
  try {
    console.log(`Starting cover letter refinement for ${coverLetterId}`)

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

    // Get user data to check premium status
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        is_premium: true,
        subscription_tier: true,
      },
    })

    const isPremium = userData?.is_premium || userData?.subscription_tier === "premium"

    // Track usage for non-premium users
    if (!isPremium) {
      // Increment usage for refinements - using the same counter as cover letters
      const usageResult = await incrementUsage(user.id, "cover_letter")

      if (!usageResult.success || !usageResult.usage) {
        return { success: false, error: usageResult.error || "Failed to track usage" }
      }

      // Check if user has reached their limit
      const currentUsage = usageResult.usage.cover_letters_used
      const dailyLimit = 100 // Set to 100 for refinements too

      if (currentUsage > dailyLimit) {
        return {
          success: false,
          error: "Daily refinement limit reached",
          subscription: {
            current: "free",
            feature: "cover_letter_refinement",
            limit: dailyLimit,
            used: currentUsage,
          },
        }
      }
    }

    // Get the original cover letter
    const originalCoverLetter = await prisma.coverLetter.findFirst({
      where: {
        id: coverLetterId,
        user_id: user.id,
      },
    })

    if (!originalCoverLetter) {
      console.error(`Cover letter not found: ${coverLetterId}`)
      return { success: false, error: "Cover letter not found" }
    }

    // Create a new version
    const newVersion = originalCoverLetter.version + 1

    // Placeholder for actual refinement logic
    // In a real implementation, this would call an AI service
    const refinedLetter =
      originalCoverLetter.generated_letter + "\n\n[Refined with additional details and improvements]"
    const explanation = "This refined cover letter includes more specific achievements and better keyword matching."
    const score = originalCoverLetter.score !== null ? Math.min(originalCoverLetter.score + 5, 100) : 85; // Default to 85 if score is null
    const feedback = "The refinement has improved keyword matching and specificity."
    const goldenPassed = score >= 85

    // Save the refined cover letter
    const refinedCoverLetter = await prisma.coverLetter.create({
      data: {
        user_id: user.id,
        original_resume_id: originalCoverLetter.original_resume_id,
        job_description: originalCoverLetter.job_description,
        generated_letter: refinedLetter,
        tailoring_mode: originalCoverLetter.tailoring_mode,
        version: newVersion,
        explanation: explanation,
        score: score,
        feedback: feedback,
        golden_passed: goldenPassed,
      },
    })

    // Log the refinement event
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging cover letter refinement for user: ${user.id}, id: ${coverLetterId}`)
      await logResumeEventDirect(user.id, {
        eventType: "cover_letter_refined",
        coverLetterId: coverLetterId,
        newCoverLetterId: refinedCoverLetter.id,
        version: newVersion,
        score: score,
        goldenPassed: goldenPassed,
      })
      console.log("[MODEL LOG] SUCCESS: Cover letter refinement logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log cover letter refinement:", modelError)
    }

    revalidatePath("/dashboard/cover-letter")

    return {
      success: true,
      data: refinedCoverLetter,
    }
  } catch (error) {
    console.error("Error refining cover letter:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to refine cover letter",
    }
  }
}

/**
 * Deletes a cover letter
 * @param coverLetterId The ID of the cover letter to delete
 * @returns Success status and message
 */
export async function deleteCoverLetterAction(coverLetterId: string) {
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

    // Get the cover letter to verify ownership
    const coverLetter = await prisma.coverLetter.findFirst({
      where: {
        id: coverLetterId,
        user_id: user.id,
      },
    })

    if (!coverLetter) {
      return { success: false, error: "Cover letter not found or you don't have permission to delete it" }
    }

    // Delete the cover letter
    await prisma.coverLetter.delete({
      where: {
        id: coverLetterId,
      },
    })

    // Log the deletion event
    let logSuccess = false
    try {
      console.log(
        `[MODEL LOG] ATTEMPT: Logging cover letter deletion for user: ${user.id}, coverLetterId: ${coverLetterId}`,
      )
      await logResumeEventDirect(user.id, {
        eventType: "cover_letter_deleted",
        coverLetterId: coverLetterId,
      })
      logSuccess = true
      console.log("[MODEL LOG] SUCCESS: Cover letter deletion logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log cover letter deletion:", modelError)
    }

    if (!logSuccess) {
      console.error("[MODEL LOG] FAILURE: Cover letter deletion logging was not successful")
    }

    revalidatePath("/dashboard/cover-letter")

    return { success: true, message: "Cover letter deleted successfully" }
  } catch (error) {
    console.error("Error deleting cover letter:", error)
    return { success: false, error: "Failed to delete cover letter" }
  }
}

/**
 * Gets all saved cover letters for the current user
 * @returns Object containing success status and either the saved cover letters or error message
 */
export async function getSavedCoverLetters() {
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

    // Get all cover letters for this user
    const coverLetters = await prisma.coverLetter.findMany({
      where: {
        user_id: user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: coverLetters }
  } catch (error) {
    console.error("Error fetching saved cover letters:", error)
    return { success: false, error: "Failed to fetch saved cover letters", data: null }
  }
}

/**
 * Deletes a cover letter (alias for deleteCoverLetterAction)
 * @param coverLetterId The ID of the cover letter to delete
 * @returns Success status and message
 */
export async function deleteCoverLetter(coverLetterId: string) {
  return deleteCoverLetterAction(coverLetterId)
}
