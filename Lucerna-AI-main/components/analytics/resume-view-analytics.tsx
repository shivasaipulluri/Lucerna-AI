"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Copy, Check } from "lucide-react"
import { logInteractionDirect, logResumeEventDirect } from "@/lib/model-logger"

interface ResumeViewAnalyticsProps {
  resumeId: string
  userId: string
  version: number
  onCopy: () => void
  onDownload: () => void
}

export function ResumeViewAnalytics({ resumeId, userId, version, onCopy, onDownload }: ResumeViewAnalyticsProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    // Call the original copy function
    onCopy()

    // Set copied state
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)

    // Log the interaction
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging copy interaction for user: ${userId}, resumeId: ${resumeId}`)

      await logInteractionDirect(userId, {
        action: "click",
        element: "copy-resume-button",
      })

      // Log the copy event
      await logResumeEventDirect(userId, {
        eventType: "copied",
        resumeId,
        version,
      })

      console.log(`[MODEL LOG] SUCCESS: Copy interaction logged successfully`)
    } catch (error) {
      console.error("[MODEL LOG] FAILURE: Error logging copy interaction:", error)
    }
  }

  const handleDownload = async () => {
    // Call the original download function
    onDownload()

    // Log the interaction
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging download interaction for user: ${userId}, resumeId: ${resumeId}`)

      await logInteractionDirect(userId, {
        action: "click",
        element: "download-resume-button",
      })

      // Log the download event
      await logResumeEventDirect(userId, {
        eventType: "downloaded",
        resumeId,
        version,
      })

      console.log(`[MODEL LOG] SUCCESS: Download interaction logged successfully`)
    } catch (error) {
      console.error("[MODEL LOG] FAILURE: Error logging download interaction:", error)
    }
  }

  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" onClick={handleCopy}>
        {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
        {copied ? "Copied" : "Copy"}
      </Button>

      <Button variant="outline" size="sm" onClick={handleDownload}>
        <Download className="h-4 w-4 mr-1" /> Download
      </Button>
    </div>
  )
}
