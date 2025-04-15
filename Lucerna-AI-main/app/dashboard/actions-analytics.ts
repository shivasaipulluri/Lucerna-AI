import { logResumeTailoringEvent } from "@/lib/analytics-hooks"
import { runTailoringAnalysis as originalRunTailoringAnalysis } from "./actions"

/**
 * Wrapper for the runTailoringAnalysis function that adds analytics logging
 */
export async function runTailoringAnalysisWithAnalytics(
  resumeText: string,
  jobDescription: string,
  resumeId: string,
  isRefinement = false,
) {
  // Call the original function
  const result = await originalRunTailoringAnalysis(resumeText, jobDescription, resumeId, isRefinement)

  // If the tailoring was successful, log the event
  if (result.success && result.data) {
    try {
      await logResumeTailoringEvent({
        userId: result.data.user_id,
        resumeId,
        isRefinement,
        resumeText,
        jobDescription,
        tailoredText: result.data.modified_resume || "",
        atsScore: result.data.ats_score || 0,
        jdScore: result.data.jd_score || 0,
        tailoringMode: result.data.tailoring_mode || "default",
        version: result.data.version || 1,
      })
    } catch (error) {
      // Silently fail to avoid disrupting the main application
      console.error("[Analytics logging error]", error)
    }
  }

  // Return the original result
  return result
}
