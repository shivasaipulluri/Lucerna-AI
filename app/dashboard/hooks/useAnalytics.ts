import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase/client"
import {
  logTabSwitchAnalytics,
  logCopyToClipboardAnalytics,
  logDownloadResumeAnalytics,
} from "@/app/dashboard/actions-with-analytics"

interface AnalyticsMetadata {
  [key: string]: any
}

interface AnalyticsError {
  message: string
  code?: string
}

export function useAnalytics() {
  const [userId, setUserId] = useState<string | null>(null)
  const [error, setError] = useState<AnalyticsError | null>(null)

  useEffect(() => {
    async function getUserId() {
      try {
        const { data, error: authError } = await supabase.auth.getUser()
        if (authError) {
          console.error("Error getting user:", authError)
          setError({ message: "Failed to get user information", code: authError.message })
          return
        }
        if (data.user) {
          setUserId(data.user.id)
        }
      } catch (err) {
        console.error("Unexpected error in getUserId:", err)
        setError({ 
          message: "An unexpected error occurred", 
          code: err instanceof Error ? err.message : "unknown" 
        })
      }
    }
    getUserId()
  }, [])

  const logTabSwitch = async (fromTab: string, toTab: string, metadata: AnalyticsMetadata = {}) => {
    if (!userId) {
      console.warn("Cannot log tab switch: No user ID available")
      return false
    }
    try {
      return await logTabSwitchAnalytics(userId, fromTab, toTab, metadata)
    } catch (err) {
      console.error("Error logging tab switch:", err)
      setError({ 
        message: "Failed to log tab switch", 
        code: err instanceof Error ? err.message : "unknown" 
      })
      return false
    }
  }

  const logCopyToClipboard = async (resumeId: string, version: number = 1, metadata: AnalyticsMetadata = {}) => {
    if (!userId) {
      console.warn("Cannot log copy to clipboard: No user ID available")
      return false
    }
    try {
      return await logCopyToClipboardAnalytics(userId, resumeId, version, metadata)
    } catch (err) {
      console.error("Error logging copy to clipboard:", err)
      setError({ 
        message: "Failed to log copy to clipboard", 
        code: err instanceof Error ? err.message : "unknown" 
      })
      return false
    }
  }

  const logDownload = async (resumeId: string, version: number = 1, format: string = "txt", metadata: AnalyticsMetadata = {}) => {
    if (!userId) {
      console.warn("Cannot log download: No user ID available")
      return false
    }
    try {
      return await logDownloadResumeAnalytics(userId, resumeId, version, format, metadata)
    } catch (err) {
      console.error("Error logging download:", err)
      setError({ 
        message: "Failed to log download", 
        code: err instanceof Error ? err.message : "unknown" 
      })
      return false
    }
  }

  return {
    userId,
    error,
    logTabSwitch,
    logCopyToClipboard,
    logDownload,
  }
} 