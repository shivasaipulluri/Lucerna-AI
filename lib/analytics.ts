import { logResumeEventDirect, logInteractionDirect } from "@/lib/actions"

export async function logAnalyticsEvent(
  eventName: string,
  eventData: Record<string, any>
): Promise<void> {
  try {
    // Log the event to both resume events and interactions
    await Promise.all([
      logResumeEventDirect(eventData.userId, {
        eventType: eventName,
        resumeId: eventData.resumeId,
        version: eventData.version,
        timestamp: eventData.timestamp
      }),
      logInteractionDirect(eventData.userId, {
        action: eventName,
        element: "resume",
        metadata: eventData
      })
    ])
  } catch (error) {
    console.error(`Error logging analytics event ${eventName}:`, error)
    // Don't throw the error to prevent breaking the main flow
  }
} 