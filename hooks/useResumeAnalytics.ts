import { useCallback } from "react"
import { useUser } from "@/hooks/useUser"
import { 
  saveResumeWithAnalytics, 
  runTailoringAnalysisWithAnalytics,
  logCopyToClipboardAnalytics,
  logDownloadResumeAnalytics,
  logPrintResumeAnalytics,
  logTabSwitchAnalytics
} from "@/app/dashboard/actions-with-analytics"
import { Resume } from "@/lib/types"
import { AnalyticsResult, TailoringMode } from "@/types/analytics"
import { useToast } from "@/components/ui/use-toast"

export function useResumeAnalytics() {
  const { user } = useUser()
  const { toast } = useToast()

  const saveResume = useCallback(
    async (resumeData: Resume): Promise<AnalyticsResult<Resume>> => {
      if (!user?.id) {
        toast({
          title: "Authentication Error",
          description: "Please sign in to save your resume",
          variant: "destructive"
        })
        return {
          success: false,
          error: "User not authenticated"
        }
      }

      try {
        const result = await saveResumeWithAnalytics(user.id, resumeData)
        if (result.success) {
          toast({
            title: "Success",
            description: "Resume saved successfully"
          })
        } else {
          toast({
            title: "Error",
            description: result.error || "Failed to save resume",
            variant: "destructive"
          })
        }
        return result
      } catch (error) {
        console.error("Error saving resume:", error)
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive"
        })
        return {
          success: false,
          error: "An unexpected error occurred"
        }
      }
    },
    [user?.id, toast]
  )

  const runTailoringAnalysis = useCallback(
    async (
      resumeId: string,
      resumeText: string,
      jobDescription: string,
      tailoringMode?: TailoringMode,
      isRefinement?: boolean
    ): Promise<AnalyticsResult<any>> => {
      if (!user?.id) {
        toast({
          title: "Authentication Error",
          description: "Please sign in to run tailoring analysis",
          variant: "destructive"
        })
        return {
          success: false,
          error: "User not authenticated"
        }
      }

      try {
        const result = await runTailoringAnalysisWithAnalytics(
          resumeId,
          resumeText,
          jobDescription,
          tailoringMode,
          isRefinement
        )
        return result
      } catch (error) {
        console.error("Error running tailoring analysis:", error)
        toast({
          title: "Error",
          description: "An unexpected error occurred",
          variant: "destructive"
        })
        return {
          success: false,
          error: "An unexpected error occurred"
        }
      }
    },
    [user?.id, toast]
  )

  const logCopyToClipboard = useCallback(
    async (resumeId: string, version?: number): Promise<AnalyticsResult<void>> => {
      if (!user?.id) {
        return {
          success: false,
          error: "User not authenticated"
        }
      }

      try {
        await logCopyToClipboardAnalytics(user.id, resumeId, version)
        return { success: true }
      } catch (error) {
        console.error("Error logging copy to clipboard:", error)
        return {
          success: false,
          error: "An unexpected error occurred"
        }
      }
    },
    [user?.id]
  )

  const logDownloadResume = useCallback(
    async (resumeId: string, version?: number): Promise<AnalyticsResult<void>> => {
      if (!user?.id) {
        return {
          success: false,
          error: "User not authenticated"
        }
      }

      try {
        await logDownloadResumeAnalytics(user.id, resumeId, version)
        return { success: true }
      } catch (error) {
        console.error("Error logging download resume:", error)
        return {
          success: false,
          error: "An unexpected error occurred"
        }
      }
    },
    [user?.id]
  )

  const logPrintResume = useCallback(
    async (resumeId: string, version?: number): Promise<AnalyticsResult<void>> => {
      if (!user?.id) {
        return {
          success: false,
          error: "User not authenticated"
        }
      }

      try {
        await logPrintResumeAnalytics(user.id, resumeId, version)
        return { success: true }
      } catch (error) {
        console.error("Error logging print resume:", error)
        return {
          success: false,
          error: "An unexpected error occurred"
        }
      }
    },
    [user?.id]
  )

  const logTabSwitch = useCallback(
    async (fromTab: string, toTab: string): Promise<AnalyticsResult<void>> => {
      if (!user?.id) {
        return {
          success: false,
          error: "User not authenticated"
        }
      }

      try {
        await logTabSwitchAnalytics(user.id, fromTab, toTab)
        return { success: true }
      } catch (error) {
        console.error("Error logging tab switch:", error)
        return {
          success: false,
          error: "An unexpected error occurred"
        }
      }
    },
    [user?.id]
  )

  return {
    saveResume,
    runTailoringAnalysis,
    logCopyToClipboard,
    logDownloadResume,
    logPrintResume,
    logTabSwitch
  }
} 