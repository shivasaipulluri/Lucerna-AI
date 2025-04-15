"use server"

import { submitResume } from "./actions"
import { createClient } from "@/lib/supabase/server"
import { logResumeEventDirect } from "@/lib/model-logger"

/**
 * Wrapper for the submitResume function that adds analytics logging
 */
export async function submitResumeWithAnalytics(resumeText: string, jobDescription: string) {
  try {
    // Get the user ID
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      console.log("[MODEL LOG] FAILURE: No user found for analytics logging in submitResumeWithAnalytics")
      // If no user, just run the original function without analytics
      return await submitResume(resumeText, jobDescription)
    }

    console.log(`[MODEL LOG] ATTEMPT: Submitting resume with analytics for user: ${user.id}`)

    // Call the original function
    const result = await submitResume(resumeText, jobDescription)

    // If the submission was successful, log the event
    if (result.success && result.data) {
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging resume upload for user: ${user.id}, resumeId: ${result.data.id}`)
        await logResumeEventDirect(user.id, {
          eventType: "upload",
          resumeId: result.data.id,
          resumeText: resumeText,
          jobDescription: jobDescription,
        })
        console.log("[MODEL LOG] SUCCESS: Resume upload logged successfully via actions-submit-with-analytics")
      } catch (modelError) {
        console.error("[MODEL DB ERROR] Failed to log resume upload in actions-submit-with-analytics:", modelError)
      }
    } else {
      console.log("[MODEL LOG] FAILURE: Resume submission failed, no analytics logged")
    }

    // Return the original result
    return result
  } catch (error) {
    // If there's an error with analytics, still return the original function result
    console.error("Analytics error in submitResumeWithAnalytics:", error)
    console.log(
      `[MODEL LOG] FAILURE: Analytics error in submitResumeWithAnalytics: ${error instanceof Error ? error.message : String(error)}`,
    )
    return await submitResume(resumeText, jobDescription)
  }
}
