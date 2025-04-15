"use client"

import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Clock } from "lucide-react"
import { getResumeHistoryAction } from "../actions"
import { Resume, TailoringMode } from "@/types/analytics"
import { withErrorBoundary } from "@/components/ErrorBoundary"

function HistoryContent() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchResumes() {
      try {
        setLoading(true)
        const result = await getResumeHistoryAction()

        if (result.success && result.data) {
          setResumes(result.data)
        } else {
          setError(result.error || "Failed to fetch resume history")
          setResumes([])
        }
      } catch (error) {
        console.error("Error fetching resumes:", error)
        setError("An unexpected error occurred")
        setResumes([])
      } finally {
        setLoading(false)
      }
    }

    fetchResumes()
  }, [])

  // Group resumes by date
  const resumesByDate = resumes.reduce<Record<string, Resume[]>>((acc, resume) => {
    const date = new Date(resume.created_at).toLocaleDateString()
    if (!acc[date]) {
      acc[date] = []
    }
    acc[date].push(resume)
    return acc
  }, {})

  // Sort dates in descending order
  const sortedDates = Object.keys(resumesByDate).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime()
  })

  // Function to get the tailoring mode display name
  const getTailoringModeDisplay = (mode: string | null): string => {
    if (!mode) return "Basic"
    const normalizedMode = mode.toLowerCase() as TailoringMode
    switch (normalizedMode) {
      case "basic":
      case "quick":
        return "Basic"
      case "personalized":
      case "story":
        return "Personalized"
      case "aggressive":
        return "Aggressive"
      default:
        return mode.charAt(0).toUpperCase() + mode.slice(1)
    }
  }

  if (loading) {
    return (
      <div className="px-6 py-10 max-w-5xl mx-auto">
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-center">
            <p className="text-gray-500">Loading your resumes...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="px-6 py-10 max-w-5xl mx-auto">
        <div className="text-red-500 text-center">
          <p>{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Resume History</h2>

      {sortedDates.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No resume history found.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {sortedDates.map((date) => (
            <div key={date}>
              <h3 className="text-lg font-medium text-gray-700 mb-4">{date}</h3>
              <div className="grid gap-4">
                {resumesByDate[date].map((resume) => (
                  <Card key={resume.id}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileText className="h-5 w-5 text-gray-500" />
                          <span className="font-medium">
                            {getTailoringModeDisplay(resume.tailoring_mode)} Resume
                          </span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span>{formatDistanceToNow(new Date(resume.created_at), { addSuffix: true })}</span>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center space-x-2">
                        {resume.version !== null && (
                          <Badge variant="secondary">
                            Version {resume.version}
                          </Badge>
                        )}
                        {resume.ats_score !== null && (
                          <Badge variant="outline">
                            ATS Score: {resume.ats_score}%
                          </Badge>
                        )}
                        {resume.jd_score !== null && (
                          <Badge variant="outline">
                            JD Match: {resume.jd_score}%
                          </Badge>
                        )}
                      </div>
                      <div className="mt-4">
                        <Link
                          href={`/dashboard/resume/${resume.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          View Details
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default withErrorBoundary(HistoryContent)
