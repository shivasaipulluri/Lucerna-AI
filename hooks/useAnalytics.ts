import { useCallback } from "react"
import { 
  ResumeEventData, 
  InteractionData, 
  TailoringAnalyticsData, 
  AnalyticsResult 
} from "@/types/analytics"
import { 
  logResumeEventDirect, 
  logInteractionDirect, 
  logTailoringAnalyticsDirect 
} from "@/lib/model-logger"

export function useAnalytics(userId: string) {
  const logResumeEvent = useCallback(
    async (data: ResumeEventData): Promise<AnalyticsResult<void>> => {
      try {
        const success = await logResumeEventDirect(userId, data)
        return {
          success,
          error: success ? undefined : "Failed to log resume event"
        }
      } catch (error) {
        console.error("Error logging resume event:", error)
        return {
          success: false,
          error: "An unexpected error occurred while logging resume event"
        }
      }
    },
    [userId]
  )

  const logInteraction = useCallback(
    async (data: InteractionData): Promise<AnalyticsResult<void>> => {
      try {
        const success = await logInteractionDirect(userId, data)
        return {
          success,
          error: success ? undefined : "Failed to log interaction"
        }
      } catch (error) {
        console.error("Error logging interaction:", error)
        return {
          success: false,
          error: "An unexpected error occurred while logging interaction"
        }
      }
    },
    [userId]
  )

  const logTailoringAnalytics = useCallback(
    async (data: TailoringAnalyticsData): Promise<AnalyticsResult<void>> => {
      try {
        const success = await logTailoringAnalyticsDirect(userId, data)
        return {
          success,
          error: success ? undefined : "Failed to log tailoring analytics"
        }
      } catch (error) {
        console.error("Error logging tailoring analytics:", error)
        return {
          success: false,
          error: "An unexpected error occurred while logging tailoring analytics"
        }
      }
    },
    [userId]
  )

  return {
    logResumeEvent,
    logInteraction,
    logTailoringAnalytics
  }
} 