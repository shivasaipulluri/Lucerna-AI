"use server"

import { createClient } from "@/lib/supabase/server"
import { saveResume, runTailoringAnalysis } from "./actions"
import { prisma } from "@/lib/prisma"
import {
  logSavedResumeDirect,
  logResumeEventDirect,
  logInteractionDirect,
  logTailoringAnalyticsDirect,
  logResumeDirect,
  hasExceededDailyLimit,
  incrementDailyUsage
} from "@/lib/model-logger"
import { Resume } from "@/lib/types"
import { 
  ResumeEventData,
  TailoringAnalyticsData,
  AnalyticsResult,
  TailoringMode
} from "@/types/analytics"
import { logAnalyticsEvent } from "@/lib/analytics"

interface AnalyticsError {
  message: string
  code?: string
}

export async function logTabSwitchAnalytics(
  userId: string,
  fromTab: string,
  toTab: string,
  metadata: Record<string, any> = {}
): Promise<boolean> {
  try {
    await logAnalyticsEvent("tab_switch", {
      userId,
      fromTab,
      toTab,
      ...metadata
    })
    return true
  } catch (error) {
    console.error("Error logging tab switch:", error)
    throw new Error("Failed to log tab switch", { cause: error })
  }
}

export async function logCopyToClipboardAnalytics(
  userId: string,
  resumeId: string,
  version: number = 1,
  metadata: Record<string, any> = {}
): Promise<boolean> {
  try {
    await logAnalyticsEvent("copy_to_clipboard", {
      userId,
      resumeId,
      version,
      ...metadata
    })
    return true
  } catch (error) {
    console.error("Error logging copy to clipboard:", error)
    throw new Error("Failed to log copy to clipboard", { cause: error })
  }
}

export async function logDownloadResumeAnalytics(
  userId: string,
  resumeId: string,
  version: number = 1,
  format: string = "txt",
  metadata: Record<string, any> = {}
): Promise<boolean> {
  try {
    await logAnalyticsEvent("download_resume", {
      userId,
      resumeId,
      version,
      format,
      ...metadata
    })
    return true
  } catch (error) {
    console.error("Error logging download resume:", error)
    throw new Error("Failed to log download resume", { cause: error })
  }
}

export async function logPrintResumeAnalytics(
  userId: string,
  resumeId: string,
  version: number = 1,
  metadata: Record<string, any> = {}
): Promise<boolean> {
  try {
    await logAnalyticsEvent("print_resume", {
      userId,
      resumeId,
      version,
      ...metadata
    })
    return true
  } catch (error) {
    console.error("Error logging print resume:", error)
    throw new Error("Failed to log print resume", { cause: error })
  }
}

export async function runTailoringAnalysisWithAnalytics(
  resumeText: string,
  jobDescription: string,
  resumeId: string,
  isRefinement: boolean = false
): Promise<AnalyticsResult<{ version: number }>> {
  try {
    const result = await runTailoringAnalysis(resumeText, jobDescription, resumeId, isRefinement)
    if (result.success) {
      await logTailoringAnalyticsDirect(resumeId, {
        resumeId,
        originalText: resumeText,
        tailoredText: result.data?.modified_resume || "",
        jobDescription,
        atsScore: result.data?.ats_score || 0,
        jdScore: result.data?.jd_score || 0,
        tailoringMode: result.data?.tailoring_mode || "personalized",
        isRefinement,
        iterations: 1,
        goldenPassed: false
      })
    }
    return result
  } catch (error) {
    console.error("Error in runTailoringAnalysisWithAnalytics:", error)
    throw new Error("Failed to run tailoring analysis", { cause: error })
  }
}

export async function saveResumeWithAnalytics(resumeId: string): Promise<AnalyticsResult<{ success: boolean }>> {
  try {
    const result = await saveResume(resumeId)
    if (result.success) {
      await logSavedResumeDirect(resumeId, {
        timestamp: new Date(),
        metadata: {
          resumeId,
        },
      })
    }
    return result
  } catch (error) {
    console.error("Error in saveResumeWithAnalytics:", error)
    throw new Error("Failed to save resume", { cause: error })
  }
}

export async function updateTailoringMode(mode: TailoringMode): Promise<AnalyticsResult<{ success: boolean }>> {
  try {
    const supabase = await createClient()
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      throw new Error("Not authenticated")
    }

    const result = await prisma.user.update({
      where: { id: user.id },
      data: { tailoring_mode: mode },
    })
    
    await logAnalyticsEvent("update_tailoring_mode", {
      mode,
      timestamp: new Date(),
    })
    return { success: true, data: { success: true } }
  } catch (error) {
    console.error("Error in updateTailoringMode:", error)
    throw new Error("Failed to update tailoring mode", { cause: error })
  }
}

//