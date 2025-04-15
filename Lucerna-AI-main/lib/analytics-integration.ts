import { logResumeEventDirect, logTailoringAnalyticsDirect } from "./model-logger"

/**
 * Integrates analytics logging with the resume tailoring process
 * This function should be called after a successful resume tailoring
 */
export async function logResumeTailoringSuccess(
  userId: string,
  resumeId: string,
  resumeText: string,
  jobDescription: string,
  tailoredText: string,
  atsScore: number,
  jdScore: number,
  tailoringMode: string,
  version: number,
  isRefinement: boolean,
) {
  try {
    // Log resume event
    await logResumeEventDirect(userId, {
      eventType: isRefinement ? "refined" : "tailored",
      resumeId,
      resumeText,
      jobDescription,
      tailoredText,
      atsScore,
      jdScore,
      tailoringMode,
      version,
    })

    // Log tailoring analytics
    await logTailoringAnalyticsDirect(userId, {
      resumeId,
      originalText: resumeText,
      jobDescription,
      tailoredText,
      atsScore,
      jdScore,
      tailoringMode,
      isRefinement,
    })
  } catch (error) {
    // Silently fail to avoid disrupting the main application
    console.error("[Analytics logging error]", error)
  }
}

/**
 * Integrates analytics logging with the resume upload process
 * This function should be called after a successful resume upload
 */
export async function logResumeUploadSuccess(userId: string, resumeText: string, jobDescription: string) {
  try {
    await logResumeEventDirect(userId, {
      eventType: "upload",
      resumeText,
      jobDescription,
    })
  } catch (error) {
    // Silently fail to avoid disrupting the main application
    console.error("[Analytics logging error]", error)
  }
}
