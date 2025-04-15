"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, RefreshCw, Clock } from "lucide-react"
import ScoreProgressBar from "./ScoreProgressBar"
import { formatDistanceToNow } from "date-fns"

// Icons for tailoring modes
const TailoringModeIcon = ({ mode }: { mode: string }) => {
  switch (mode) {
    case "aggressive":
      return (
        <span title="Aggressive" className="text-lg">
          🎯
        </span>
      )
    case "personalized":
    case "story":
      return (
        <span title="Personalized" className="text-lg">
          ✨
        </span>
      )
    case "basic":
    case "quick":
      return (
        <span title="Basic" className="text-lg">
          🧩
        </span>
      )
    default:
      return (
        <span title="Standard" className="text-lg">
          📄
        </span>
      )
  }
}

// Get tailoring mode display name
const getTailoringModeDisplay = (mode: string) => {
  switch (mode) {
    case "aggressive":
      return "Aggressive"
    case "personalized":
    case "story":
      return "Personalized"
    case "basic":
    case "quick":
      return "Basic"
    default:
      return mode.charAt(0).toUpperCase() + mode.slice(1)
  }
}

export default function ResumeTimelineCard({
  resume,
  defaultTailoringMode,
}: {
  resume: any
  defaultTailoringMode: string
}) {
  // Format the date as relative time
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return formatDistanceToNow(date, { addSuffix: true })
    } catch (error) {
      return "Unknown date"
    }
  }

  // Get the first few words of the job description for preview
  const getJobPreview = (text: string) => {
    const words = text.split(/\s+/).slice(0, 15).join(" ")
    return words + (words.length < text.length ? "..." : "")
  }

  // Determine if this resume has good scores
  const hasGoodScores = resume.ats_score >= 95 && resume.jd_score >= 95

  return (
    <Card
      className={`overflow-hidden transition-all shadow-soft hover:shadow-card ${hasGoodScores ? "border-green-200" : ""}`}
    >
      <div className="relative">
        {/* Version badge */}
        <div className="absolute -left-10 top-4 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
          v{resume.version}
        </div>

        <CardContent className="p-0">
          <div className="p-4 border-b bg-gradient-to-r from-background to-white">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <TailoringModeIcon mode={resume.tailoring_mode || defaultTailoringMode} />
                <div>
                  <h3 className="font-medium text-gray-900 font-serif">
                    {getTailoringModeDisplay(resume.tailoring_mode || defaultTailoringMode)} Tailoring
                  </h3>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>{formatDate(resume.created_at)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1">
                {resume.ats_score !== null && resume.jd_score !== null && (
                  <div className="flex gap-2">
                    <ScoreProgressBar score={resume.ats_score} label="ATS" />
                    <ScoreProgressBar score={resume.jd_score} label="JD" />
                  </div>
                )}
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-3 line-clamp-2">{getJobPreview(resume.job_description)}</p>
          </div>

          <div className="p-4 flex flex-wrap gap-2 justify-end">
            <Button variant="outline" size="sm" asChild className="btn-hover">
              <Link href={`/dashboard/resume/${resume.id}`} className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>View Details</span>
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
              className={`btn-hover ${hasGoodScores ? "text-success border-green-200 hover:bg-green-50" : ""}`}
            >
              <Link href={`/dashboard/resume/${resume.id}`} className="flex items-center gap-1">
                <RefreshCw className="h-4 w-4" />
                <span>{hasGoodScores ? "Perfect Score!" : "Refine Again"}</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
