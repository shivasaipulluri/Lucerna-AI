"use client"

import { useEffect, useState } from "react"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Clock } from "lucide-react"
import { getResumeHistoryAction } from "../actions"

// Update the Resume interface to accept Date objects for created_at
interface Resume {
  id: string
  user_id: string
  resume_text: string
  job_description: string
  modified_resume?: string | null
  ats_score?: number | null
  jd_score?: number | null
  version?: number
  tailoring_mode?: string | null
  created_at: string | Date
}

export default function HistoryContent() {
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

  // Group resumes by date (for future date-based grouping if needed)
  const resumesByDate = resumes.reduce<Record<string, Resume[]>>((acc, resume: Resume) => {
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
  const getTailoringModeDisplay = (mode: string): string => {
    switch (mode) {
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

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Resume History</h2>

      {resumes.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg border">
          <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">No Resume History</h3>
          <p className="text-gray-500">
            You haven't tailored any resumes yet. Start by uploading a resume and job description.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {sortedDates.map((date) => (
            <div key={date} className="space-y-4">
              <h3 className="text-lg font-medium text-gray-700">{date}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resumesByDate[date].map((resume: Resume) => (
                  <Link href={`/dashboard/resume/${resume.id}`} key={resume.id} className="block">
                    <Card className="h-full hover:shadow-md transition-shadow border overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="font-medium text-gray-800">
                            {resume.tailoring_mode ? getTailoringModeDisplay(resume.tailoring_mode) : "Standard"}{" "}
                            Tailoring
                          </h3>
                          <Badge variant="outline" className="bg-white">
                            v{resume.version || 1}
                          </Badge>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <p className="text-sm text-gray-700 line-clamp-2 min-h-[40px]">
                          {resume.job_description
                            ? resume.job_description.slice(0, 120) + "..."
                            : "No job description provided"}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                          {resume.ats_score !== null && resume.ats_score !== undefined && (
                            <Badge variant={resume.ats_score >= 95 ? "success" : "outline"} className="font-normal">
                              ATS: {resume.ats_score}%
                            </Badge>
                          )}
                          {resume.jd_score !== null && resume.jd_score !== undefined && (
                            <Badge variant={resume.jd_score >= 95 ? "success" : "outline"} className="font-normal">
                              JD: {resume.jd_score}%
                            </Badge>
                          )}
                        </div>
                        <div className="mt-3 pt-3 border-t flex items-center text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatDistanceToNow(new Date(resume.created_at), { addSuffix: true })}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
