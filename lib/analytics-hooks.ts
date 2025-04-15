import { logTraining } from "./logger"
import { logResumeEventDirect, logInteractionDirect } from "@/lib/model-logger" // Import direct logging functions
import { InteractionMetadata } from "@/app/admin/analytics/actions"

/**
 * Interface for resume tailoring event data
 */
interface ResumeTailoringEventData {
  userId: string
  resumeId: string
  eventType?: string
  isRefinement?: boolean
  resumeText?: string
  jobDescription?: string
  tailoredText?: string
  atsScore?: number
  jdScore?: number
  tailoringMode?: string
  version?: number
}

/**
 * Interface for interaction event data
 */
interface InteractionEventData {
  userId: string
  action: 'click' | 'hover' | 'focus' | 'blur' | 'submit' | 'download'
  element: string
  metadata?: InteractionMetadata
}

/**
 * Logs a resume tailoring event
 */
export async function logResumeTailoringEvent(data: ResumeTailoringEventData) {
  const eventType = data.eventType || (data.isRefinement ? "refined" : "tailored")

  // First, try to log directly to the model database
  try {
    await logResumeEventDirect(data.userId, {
      eventType,
      resumeId: data.resumeId,
      resumeText: data.resumeText,
      jobDescription: data.jobDescription,
      tailoredText: data.tailoredText,
      atsScore: data.atsScore,
      jdScore: data.jdScore,
      tailoringMode: data.tailoringMode,
      version: data.version,
    })
    console.log(`[MODEL DB] Resume ${eventType} event logged successfully via hooks`)
  } catch (modelError) {
    console.error(`[MODEL DB ERROR] Failed to log resume ${eventType} event via hooks:`, modelError)

    // Fall back to the original method
    await logTraining("resume_event", {
      userId: data.userId,
      resumeId: data.resumeId,
      eventType,
      resumeText: data.resumeText,
      jobDescription: data.jobDescription,
      tailoredText: data.tailoredText,
      atsScore: data.atsScore,
      jdScore: data.jdScore,
      tailoringMode: data.tailoringMode,
      version: data.version,
    })
  }
}

/**
 * Logs a resume upload event
 */
export async function logResumeUploadEvent(data: {
  userId: string
  resumeText: string
  jobDescription: string
}) {
  // First, try to log directly to the model database
  try {
    await logResumeEventDirect(data.userId, {
      eventType: "upload",
      resumeText: data.resumeText,
      jobDescription: data.jobDescription,
    })
    console.log(`[MODEL DB] Resume upload event logged successfully via hooks`)
  } catch (modelError) {
    console.error(`[MODEL DB ERROR] Failed to log resume upload event via hooks:`, modelError)

    // Fall back to the original method
    await logTraining("resume_event", {
      userId: data.userId,
      eventType: "upload",
      resumeText: data.resumeText,
      jobDescription: data.jobDescription,
    })
  }
}

/**
 * Logs a resume copy event
 */
export async function logResumeCopyEvent(data: {
  userId: string
  resumeId: string
  version?: number
}) {
  // First, try to log directly to the model database
  try {
    await logResumeEventDirect(data.userId, {
      eventType: "copied",
      resumeId: data.resumeId,
      version: data.version,
    })
    console.log(`[MODEL DB] Resume copy event logged successfully via hooks`)
  } catch (modelError) {
    console.error(`[MODEL DB ERROR] Failed to log resume copy event via hooks:`, modelError)

    // Fall back to the original method
    await logTraining("resume_event", {
      userId: data.userId,
      resumeId: data.resumeId,
      eventType: "copied",
      version: data.version,
    })
  }
}

/**
 * Logs a resume download event
 */
export async function logResumeDownloadEvent(data: {
  userId: string
  resumeId: string
  version?: number
}) {
  // First, try to log directly to the model database
  try {
    await logResumeEventDirect(data.userId, {
      eventType: "downloaded",
      resumeId: data.resumeId,
      version: data.version,
    })
    console.log(`[MODEL DB] Resume download event logged successfully via hooks`)
  } catch (modelError) {
    console.error(`[MODEL DB ERROR] Failed to log resume download event via hooks:`, modelError)

    // Fall back to the original method
    await logTraining("resume_event", {
      userId: data.userId,
      resumeId: data.resumeId,
      eventType: "downloaded",
      version: data.version,
    })
  }
}

/**
 * Logs a user interaction event
 */
export async function logInteractionEvent(data: InteractionEventData) {
  // First, try to log directly to the model database
  try {
    await logInteractionDirect(data.userId, {
      action: data.action,
      element: data.element,
      metadata: data.metadata,
    })
    console.log(`[MODEL DB] Interaction event logged successfully via hooks`)
  } catch (modelError) {
    console.error(`[MODEL DB ERROR] Failed to log interaction event via hooks:`, modelError)

    // Fall back to the original method
    await logTraining("interaction", {
      userId: data.userId,
      action: data.action,
      element: data.element,
      ...(data.metadata || {}),
    })
  }
}
