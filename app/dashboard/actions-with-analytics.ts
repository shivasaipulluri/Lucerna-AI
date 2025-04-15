"use server"

import { getSupabaseClient } from "@/utils/supabase"
import { saveResume, runTailoringAnalysis } from "./actions"
import { prisma } from "@/lib/prisma"
import {
  logSavedResumeDirect,
  logResumeEventDirect,
  logInteractionDirect,
  logTailoringAnalyticsDirect,
  logResumeDirect,
} from "@/lib/model-logger"

// Define the daily limits for free tier users - Updated to 100 for all features
const FREE_TIER_LIMITS = {
  basic_tailoring: 100,
  personalized_tailoring: 100,
  cover_letter: 100,
  refinements: 100, // Add explicit refinement limit
  linkedin: 100, // Add LinkedIn optimization limit
  interview: 100, // Add interview coaching limit
}

/**
 * Wrapper for the saveResume function that adds analytics logging
 */
export async function saveResumeWithAnalytics(resumeId: string) {
  // Add debug log at entry point
  console.log(`[MODEL LOG] ENTRY: saveResumeWithAnalytics(${resumeId})`)

  try {
    const supabase = await getSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      console.log("[MODEL LOG] FAILURE: No user found for analytics logging in saveResumeWithAnalytics")
      return await saveResume(resumeId)
    }

    console.log(`[MODEL LOG] ATTEMPT: Saving resume with analytics for user: ${user.id}, resumeId: ${resumeId}`)

    // Get the resume details
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      console.log(`[MODEL LOG] FAILURE: Resume not found for user: ${user.id}, resumeId: ${resumeId}`)
      return { success: false, error: "Resume not found" }
    }

    // Call the original function
    const result = await saveResume(resumeId)

    if (result.success) {
      // 1. Log the saved resume to the model database
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging saved resume to model DB for user: ${user.id}, resumeId: ${resumeId}`)

        // Pass resumeId directly as a string
        const savedResumeResult = await logSavedResumeDirect(user.id, resumeId)

        if (savedResumeResult) {
          console.log(`[MODEL LOG] SUCCESS: Saved resume logged to model DB successfully`)
        } else {
          console.error(`[MODEL DB ERROR] Failed to log saved resume to model DB despite no exception`)
        }
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Exception when logging saved resume to model DB:`, modelError)
      }

      // 2. Log the resume event
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging resume save event for user: ${user.id}, resumeId: ${resumeId}`)

        await logResumeEventDirect(user.id, {
          eventType: "save",
          resumeId: resumeId,
          version: resume.version || 1,
        })

        console.log(`[MODEL LOG] SUCCESS: Resume save event logged successfully`)
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Failed to log resume save event:`, modelError)
      }

      // 3. Log the interaction
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging resume save interaction for user: ${user.id}`)

        await logInteractionDirect(user.id, {
          action: "save",
          element: "resume",
          metadata: {
            resumeId: resumeId,
            version: resume.version || 1,
            timestamp: new Date().toISOString(),
          },
        })

        console.log(`[MODEL LOG] SUCCESS: Resume save interaction logged successfully`)
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Failed to log resume save interaction:`, modelError)
      }
    } else {
      console.log(`[MODEL LOG] FAILURE: Resume save failed, no analytics logged`)
    }

    return result
  } catch (error) {
    console.error("Analytics error in saveResumeWithAnalytics:", error)
    console.log(
      `[MODEL LOG] FAILURE: Analytics error in saveResumeWithAnalytics: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
    return await saveResume(resumeId)
  }
}

/**
 * Wrapper for the runTailoringAnalysis function that adds analytics logging
 * @param resumeText The resume text
 * @param jobDescription The job description
 * @param resumeId The ID of the resume to update
 * @param isRefinement Whether this is a refinement of an existing resume
 * @returns The result from the original runTailoringAnalysis function
 */
export async function runTailoringAnalysisWithAnalytics(
  resumeText: string,
  jobDescription: string,
  resumeId: string,
  isRefinement = false,
) {
  // Add debug log at entry point
  console.log(`[MODEL LOG] ENTRY: runTailoringAnalysisWithAnalytics(${resumeId}, isRefinement: ${isRefinement})`)

  try {
    const supabase = await getSupabaseClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      console.log("[MODEL LOG] FAILURE: No user found for analytics logging in runTailoringAnalysisWithAnalytics")
      return await runTailoringAnalysis(resumeText, jobDescription, resumeId, isRefinement)
    }

    console.log(
      `[MODEL LOG] ATTEMPT: Running tailoring analysis with analytics for user: ${user.id}, resumeId: ${resumeId}`,
    )

    // Get the resume details before tailoring
    const resumeBefore = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resumeBefore) {
      console.log(`[MODEL LOG] FAILURE: Resume not found for user: ${user.id}, resumeId: ${resumeId}`)
      return { success: false, error: "Resume not found" }
    }

    // Get the user's tailoring mode
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        tailoring_mode: true,
        is_premium: true,
        subscription_tier: true,
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
      },
    })

    const tailoringMode = userData?.tailoring_mode || "personalized"
    const isPremium = userData?.is_premium || userData?.subscription_tier === "premium"

    // Check usage limits for non-premium users
    if (!isPremium) {
      // Determine which feature to check
      const feature =
        tailoringMode === "basic" || tailoringMode === "quick" ? "basic_tailoring" : "personalized_tailoring"

      // Get current usage
      const currentUsage =
        feature === "basic_tailoring"
          ? userData?.daily_basic_tailorings_used || 0
          : userData?.daily_personalized_tailorings_used || 0

      // Check if user has reached their limit
      if (
        currentUsage >= FREE_TIER_LIMITS[feature === "basic_tailoring" ? "basic_tailoring" : "personalized_tailoring"]
      ) {
        return {
          success: false,
          error: "Daily limit reached",
          subscription: {
            current: "free",
            feature,
            limit: FREE_TIER_LIMITS[feature === "basic_tailoring" ? "basic_tailoring" : "personalized_tailoring"],
            used: currentUsage,
          },
        }
      }
    }

    // Call the original function
    const result = await runTailoringAnalysis(resumeText, jobDescription, resumeId, isRefinement)

    if (result.success && result.data) {
      // Get the updated resume details after tailoring
      const resumeAfter = await prisma.resume.findFirst({
        where: {
          id: resumeId,
          user_id: user.id,
        },
      })

      if (!resumeAfter) {
        console.log(`[MODEL LOG] WARNING: Could not find updated resume after tailoring: ${resumeId}`)
      }

      // 1. Log the tailoring analytics to the model database
      try {
        console.log(
          `[MODEL LOG] ATTEMPT: Logging tailoring analytics to model DB for user: ${user.id}, resumeId: ${resumeId}`,
        )

        const analyticsResult = await logTailoringAnalyticsDirect(user.id, {
          resumeId: resumeId,
          originalText: resumeText,
          jobDescription: jobDescription,
          tailoredText: resumeAfter?.modified_resume || result.data.modified_resume,
          atsScore: result.ats || resumeAfter?.ats_score,
          jdScore: result.jd || resumeAfter?.jd_score,
          tailoringMode: resumeAfter?.tailoring_mode || "personalized",
          isRefinement: isRefinement,
          iterations: result.attempts || 1,
          goldenPassed: result.goldenPassed || false,
        })

        if (analyticsResult) {
          console.log(`[MODEL LOG] SUCCESS: Tailoring analytics logged to model DB successfully`)
        } else {
          console.error(`[MODEL DB ERROR] Failed to log tailoring analytics to model DB despite no exception`)
        }
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Exception when logging tailoring analytics to model DB:`, modelError)
      }

      // 2. Log the resume event
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging resume tailoring event for user: ${user.id}, resumeId: ${resumeId}`)

        await logResumeEventDirect(user.id, {
          eventType: isRefinement ? "refined" : "tailored",
          resumeId: resumeId,
          resumeText: resumeText,
          jobDescription: jobDescription,
          tailoredText: resumeAfter?.modified_resume || result.data.modified_resume,
          atsScore: result.ats || resumeAfter?.ats_score,
          jdScore: result.jd || resumeAfter?.jd_score,
          tailoringMode: resumeAfter?.tailoring_mode || "personalized",
          version: resumeAfter?.version || 1,
        })

        console.log(`[MODEL LOG] SUCCESS: Resume tailoring event logged successfully`)
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Failed to log resume tailoring event:`, modelError)
      }

      // 3. Update the resume in the model database
      try {
        console.log(`[MODEL LOG] ATTEMPT: Updating resume in model DB for user: ${user.id}, resumeId: ${resumeId}`)

        await logResumeDirect(user.id, {
          id: resumeId,
          resume_text: resumeText,
          job_description: jobDescription,
          modified_resume: resumeAfter?.modified_resume || result.data.modified_resume,
          ats_score: result.ats || resumeAfter?.ats_score,
          jd_score: result.jd || resumeAfter?.jd_score,
          tailoring_mode: resumeAfter?.tailoring_mode || "personalized",
          version: resumeAfter?.version || 1,
        })

        console.log(`[MODEL LOG] SUCCESS: Resume updated in model DB successfully`)
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Failed to update resume in model DB:`, modelError)
      }

      // 4. Log the interaction
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging tailoring interaction for user: ${user.id}`)

        await logInteractionDirect(user.id, {
          action: isRefinement ? "refine" : "tailor",
          element: "resume",
          metadata: {
            resumeId: resumeId,
            version: resumeAfter?.version || 1,
            atsScore: result.ats || resumeAfter?.ats_score,
            jdScore: result.jd || resumeAfter?.jd_score,
            tailoringMode: resumeAfter?.tailoring_mode || "personalized",
            iterations: result.attempts || 1,
            goldenPassed: result.goldenPassed || false,
            timestamp: new Date().toISOString(),
          },
        })

        console.log(`[MODEL LOG] SUCCESS: Tailoring interaction logged successfully`)
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Failed to log tailoring interaction:`, modelError)
      }
    } else {
      console.log(`[MODEL LOG] FAILURE: Tailoring analysis failed, no analytics logged`)
    }

    return result
  } catch (error) {
    console.error("Analytics error in runTailoringAnalysisWithAnalytics:", error)
    console.log(
      `[MODEL LOG] FAILURE: Analytics error in runTailoringAnalysisWithAnalytics: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
    return await runTailoringAnalysis(resumeText, jobDescription, resumeId, isRefinement)
  }
}

/**
 * Logs tab switching analytics
 * @param userId The user's ID
 * @param fromTab The tab being switched from
 * @param toTab The tab being switched to
 * @param metadata Additional metadata about the tab switch
 * @returns Success status
 */
export async function logTabSwitchAnalytics(
  userId: string,
  fromTab: string,
  toTab: string,
  metadata: Record<string, any> = {},
): Promise<boolean> {
  // Add debug log at entry point
  console.log(`[MODEL LOG] ENTRY: logTabSwitchAnalytics(${userId}, ${fromTab} -> ${toTab})`)

  try {
    if (!userId) {
      console.log("[MODEL LOG] FAILURE: No user ID provided for logTabSwitchAnalytics")
      return false
    }

    console.log(`[MODEL LOG] ATTEMPT: Logging tab switch for user: ${userId}, from: ${fromTab}, to: ${toTab}`)

    // Log the interaction
    try {
      const interactionResult = await logInteractionDirect(userId, {
        action: "switch",
        element: "tab",
        metadata: {
          fromTab,
          toTab,
          ...metadata,
          timestamp: new Date().toISOString(),
        },
      })

      if (interactionResult) {
        console.log(`[MODEL LOG] SUCCESS: Tab switch logged successfully: ${fromTab} -> ${toTab}`)
        return true
      } else {
        console.error(`[MODEL DB ERROR] Failed to log tab switch despite no exception`)
        return false
      }
    } catch (modelError) {
      console.error(`[MODEL DB ERROR] Failed to log tab switch:`, modelError)
      return false
    }
  } catch (error) {
    console.error("Error in logTabSwitchAnalytics:", error)
    console.log(
      `[MODEL LOG] FAILURE: Error in logTabSwitchAnalytics: ${error instanceof Error ? error.message : String(error)}`,
    )
    return false
  }
}

/**
 * Logs copy to clipboard analytics
 * @param userId The user's ID
 * @param resumeId The ID of the resume being copied
 * @param version The version of the resume being copied
 * @param metadata Additional metadata about the copy action
 * @returns Success status
 */
export async function logCopyToClipboardAnalytics(
  userId: string,
  resumeId: string,
  version = 1,
  metadata: Record<string, any> = {},
): Promise<boolean> {
  // Add debug log at entry point
  console.log(`[MODEL LOG] ENTRY: logCopyToClipboardAnalytics(${userId}, ${resumeId}, v${version})`)

  try {
    if (!userId) {
      console.log("[MODEL LOG] FAILURE: No user ID provided for logCopyToClipboardAnalytics")
      return false
    }

    if (!resumeId) {
      console.log("[MODEL LOG] FAILURE: No resume ID provided for logCopyToClipboardAnalytics")
      return false
    }

    console.log(`[MODEL LOG] ATTEMPT: Logging copy to clipboard for user: ${userId}, resumeId: ${resumeId}`)

    // 1. Log the resume event
    let eventSuccess = false
    try {
      const eventResult = await logResumeEventDirect(userId, {
        eventType: "copied",
        resumeId: resumeId,
        version: version,
      })

      if (eventResult) {
        console.log(`[MODEL LOG] SUCCESS: Resume copy event logged successfully`)
        eventSuccess = true
      } else {
        console.error(`[MODEL DB ERROR] Failed to log resume copy event despite no exception`)
      }
    } catch (modelError) {
      console.error(`[MODEL DB ERROR] Failed to log resume copy event:`, modelError)
    }

    // 2. Log the interaction
    try {
      const interactionResult = await logInteractionDirect(userId, {
        action: "copy",
        element: "resume",
        metadata: {
          resumeId,
          version,
          ...metadata,
          timestamp: new Date().toISOString(),
        },
      })

      if (interactionResult) {
        console.log(`[MODEL LOG] SUCCESS: Copy interaction logged successfully`)
        return true
      } else {
        console.error(`[MODEL DB ERROR] Failed to log copy interaction despite no exception`)
        return eventSuccess // Return true if at least the event was logged
      }
    } catch (modelError) {
      console.error(`[MODEL DB ERROR] Failed to log copy interaction:`, modelError)
      return eventSuccess // Return true if at least the event was logged
    }
  } catch (error) {
    console.error("Error in logCopyToClipboardAnalytics:", error)
    console.log(
      `[MODEL LOG] FAILURE: Error in logCopyToClipboardAnalytics: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
    return false
  }
}

/**
 * Logs download resume analytics
 * @param userId The user's ID
 * @param resumeId The ID of the resume being downloaded
 * @param version The version of the resume being downloaded
 * @param format The format of the download (e.g., 'txt', 'pdf', 'docx')
 * @param metadata Additional metadata about the download
 * @returns Success status
 */
export async function logDownloadResumeAnalytics(
  userId: string,
  resumeId: string,
  version = 1,
  format = "txt",
  metadata: Record<string, any> = {},
): Promise<boolean> {
  // Add debug log at entry point
  console.log(`[MODEL LOG] ENTRY: logDownloadResu  {
  // Add debug log at entry point
  console.log(\`[MODEL LOG] ENTRY: logDownloadResumeAnalytics(${userId}, ${resumeId}, v${version}, ${format})`)

  try {
    if (!userId) {
      console.log("[MODEL LOG] FAILURE: No user ID provided for logDownloadResumeAnalytics")
      return false
    }

    if (!resumeId) {
      console.log("[MODEL LOG] FAILURE: No resume ID provided for logCopyToClipboardAnalytics")
      return false
    }

    console.log(`[MODEL LOG] ATTEMPT: Logging resume download for user: ${userId}, resumeId: ${resumeId}`)

    // 1. Log the resume event
    let eventSuccess = false
    try {
      const eventResult = await logResumeEventDirect(userId, {
        eventType: "downloaded",
        resumeId: resumeId,
        version: version,
      })

      if (eventResult) {
        console.log(`[MODEL LOG] SUCCESS: Resume download event logged successfully`)
        eventSuccess = true
      } else {
        console.error(`[MODEL DB ERROR] Failed to log resume download event despite no exception`)
      }
    } catch (modelError) {
      console.error(`[MODEL DB ERROR] Failed to log resume download event:`, modelError)
    }

    // 2. Log the interaction
    try {
      const interactionResult = await logInteractionDirect(userId, {
        action: "download",
        element: "resume",
        metadata: {
          resumeId,
          version,
          format,
          ...metadata,
          timestamp: new Date().toISOString(),
        },
      })

      if (interactionResult) {
        console.log(`[MODEL LOG] SUCCESS: Download interaction logged successfully`)
        return true
      } else {
        console.error(`[MODEL DB ERROR] Failed to log download interaction despite no exception`)
        return eventSuccess // Return true if at least the event was logged
      }
    } catch (modelError) {
      console.error(`[MODEL DB ERROR] Failed to log download interaction:`, modelError)
      return eventSuccess // Return true if at least the event was logged
    }
  } catch (error) {
    console.error("Error in logDownloadResumeAnalytics:", error)
    console.log(
      `[MODEL LOG] FAILURE: Error in logDownloadResumeAnalytics: ${
        error instanceof Error ? error.message : String(error)
      }`,
    )
    return false
  }
}
