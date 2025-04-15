"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Copy, Check } from "lucide-react"
import { logInteractionEvent, logResumeDownloadEvent, logResumeCopyEvent } from "@/lib/analytics-hooks"
import { InteractionMetadata } from "@/app/admin/analytics/actions"

interface ResumeViewAnalyticsProps {
  resumeId: string
  userId: string
  version: number
  onCopy: () => void
  onDownload: () => void
  metadata?: InteractionMetadata
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
      await logInteractionEvent({
        userId,
        action: "click",
        element: "copy-resume-button",
      })

      // Log the copy event
      await logResumeCopyEvent({
        userId,
        resumeId,
        version,
      })
    } catch (error) {
      console.error("Error logging interaction:", error)
    }
  }

  const handleDownload = async () => {
    // Call the original download function
    onDownload()

    // Log the interaction
    try {
      await logInteractionEvent({
        userId,
        action: "click",
        element: "download-resume-button",
      })

      // Log the download event
      await logResumeDownloadEvent({
        userId,
        resumeId,
        version,
      })
    } catch (error) {
      console.error("Error logging interaction:", error)
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
