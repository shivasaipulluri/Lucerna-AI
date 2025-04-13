"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Upload, Plus, Clock, Settings } from "lucide-react"
import { getResumeHistory } from "./actions"
import { formatDistanceToNow } from "date-fns"

interface DashboardContentProps {
  onSwitchToUpload?: () => void
}

export function DashboardContent({ onSwitchToUpload }: DashboardContentProps) {
  const [resumes, setResumes] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let isMounted = true

    async function fetchResumes() {
      try {
        // Only fetch if we're in a loading state to prevent repeated calls
        if (!loading) return

        setLoading(true)
        const result = await getResumeHistory()

        if (!isMounted) return

        if (result.success && result.data) {
          // Compare with current state to avoid unnecessary updates
          setResumes((prevResumes) => {
            // If the data is the same (same length and IDs), don't update
            if (
              prevResumes.length === result.data.length &&
              prevResumes.every((resume) => result.data.some((newResume: { id: any }) => newResume.id === resume.id))
            ) {
              return prevResumes
            }
            return result.data
          })
        } else {
          setResumes([])
        }
      } catch (error) {
        if (!isMounted) return
        console.error("Error fetching resumes:", error)
        setResumes([])
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchResumes()

    return () => {
      isMounted = false
    }
  }, [loading])

  // Function to format the date in a human-readable way
  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return formatDistanceToNow(date, { addSuffix: true })
    } catch (error) {
      return "Unknown date"
    }
  }

  // Function to get the tailoring mode display name
  const getTailoringModeDisplay = (mode: string) => {
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

  // Handle new resume button click
  const handleNewResume = () => {
    if (onSwitchToUpload) {
      // Use the provided callback to switch to the upload tab
      onSwitchToUpload()
    } else {
      // Fallback to the old behavior
      window.location.href = "/dashboard?tab=upload"
    }
  }

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back to <span className="text-primary font-serif">Lucerna AI</span>
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Continue your career journey, or upload a new resume to illuminate your professional story.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Your Resume History</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/dashboard/tailor">
              <Settings className="h-4 w-4 mr-2" />
              Tailoring Settings
            </Link>
          </Button>
          <Button size="sm" onClick={handleNewResume}>
            <Plus className="h-4 w-4 mr-2" />
            New Resume
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-center">
            <p className="text-gray-500">Loading your resumes...</p>
          </div>
        </div>
      ) : resumes.length === 0 ? (
        <Card className="bg-gray-50 border-dashed">
          <CardContent className="text-gray-500 text-center py-16">
            <FileText className="w-10 h-10 mx-auto mb-4 text-gray-400" />
            <p className="font-medium">No resumes tailored yet.</p>
            <p className="text-sm mt-1 text-gray-400">When you tailor a resume with Lucerna AI, it will appear here.</p>
            <Button className="mt-6" onClick={handleNewResume}>
              <Upload className="h-4 w-4 mr-2" />
              Upload Your First Resume
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumes.map((resume) => (
            <Link href={`/dashboard/resume/${resume.id}`} key={resume.id} className="block">
              <Card className="h-full hover:shadow-md transition-shadow border overflow-hidden">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 border-b">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-gray-800">
                      {resume.tailoring_mode ? getTailoringModeDisplay(resume.tailoring_mode) : "Standard"} Tailoring
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
                    {resume.ats_score !== null && (
                      <Badge variant={resume.ats_score >= 95 ? "success" : "outline"} className="font-normal">
                        ATS: {resume.ats_score}%
                      </Badge>
                    )}
                    {resume.jd_score !== null && (
                      <Badge variant={resume.jd_score >= 95 ? "success" : "outline"} className="font-normal">
                        JD: {resume.jd_score}%
                      </Badge>
                    )}
                  </div>
                  <div className="mt-3 pt-3 border-t flex items-center text-xs text-gray-400">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatDate(resume.created_at)}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
