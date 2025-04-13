"use client"

import type React from "react"

import { DashboardContent } from "./dashboard-content"
import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { submitResumeWithAnalytics } from "./actions-submit-with-analytics"
import { DragDropFileUpload } from "@/components/drag-drop-file-upload"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, FileText } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { ButtonWithAnalytics } from "@/components/analytics/button-with-analytics"

export function DashboardClientWithAnalytics({ initialTab = "history" }: { initialTab?: string }) {
  const [activeTab, setActiveTab] = useState(initialTab)
  const [resumeText, setResumeText] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const { toast } = useToast()

  // Set the active tab when initialTab changes
  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab)
    }
  }, [initialTab])

  const handleFileProcessed = (text: string) => {
    setResumeText(text)
    // Clear any existing error when file is processed
    if (error === "Please enter your resume text") {
      setError(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Trim the text and check if it's empty
    const trimmedResumeText = resumeText.trim()
    const trimmedJobDescription = jobDescription.trim()

    if (!trimmedResumeText) {
      setError("Please enter your resume text")
      return
    }

    if (!trimmedJobDescription) {
      setError("Please enter the job description")
      return
    }

    setIsSubmitting(true)

    try {
      const result = await submitResumeWithAnalytics(trimmedResumeText, trimmedJobDescription)

      if (result.success && result.data?.id) {
        toast({
          title: "Resume submitted successfully",
          description: "Your resume is being processed for tailoring.",
        })
        router.push(`/dashboard/resume/${result.data.id}`)
      } else {
        setError(result.error || "Failed to submit resume")
        toast({
          title: "Error",
          description: result.error || "Failed to submit resume",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error submitting resume:", error)
      setError("An unexpected error occurred")
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSwitchToUpload = () => {
    setActiveTab("upload")
  }

  // Add handlers for text changes to clear errors
  const handleResumeTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setResumeText(e.target.value)
    if (error === "Please enter your resume text" && e.target.value.trim()) {
      setError(null)
    }
  }

  const handleJobDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value)
    if (error === "Please enter the job description" && e.target.value.trim()) {
      setError(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Tabs defaultValue="history" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8">
          <TabsTrigger value="history">Resume History</TabsTrigger>
          <TabsTrigger value="upload">Upload Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="history">
          <DashboardContent onSwitchToUpload={handleSwitchToUpload} />
        </TabsContent>

        <TabsContent value="upload">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Your Resume</h1>
              <p className="text-gray-600">
                Upload your resume and enter the job description to tailor your resume for the specific job.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Resume
                  </label>
                  <div className="bg-white rounded-lg border p-4">
                    <DragDropFileUpload onFileProcessed={handleFileProcessed} className="mb-4" />
                    <div className="relative">
                      <Textarea
                        id="resume"
                        placeholder="Paste your resume text here..."
                        value={resumeText}
                        onChange={handleResumeTextChange}
                        className="min-h-[300px] font-mono text-sm"
                      />
                      {resumeText && (
                        <div className="absolute top-2 right-2">
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setResumeText("")
                              if (error === "Please enter your resume text") {
                                setError(null)
                              }
                            }}
                            className="h-6 px-2 text-gray-400 hover:text-gray-700"
                          >
                            Clear
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="jobDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Job Description
                  </label>
                  <div className="relative">
                    <Textarea
                      id="jobDescription"
                      placeholder="Paste the job description here..."
                      value={jobDescription}
                      onChange={handleJobDescriptionChange}
                      className="min-h-[200px]"
                    />
                    {jobDescription && (
                      <div className="absolute top-2 right-2">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setJobDescription("")
                            if (error === "Please enter the job description") {
                              setError(null)
                            }
                          }}
                          className="h-6 px-2 text-gray-400 hover:text-gray-700"
                        >
                          Clear
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex justify-end">
                <ButtonWithAnalytics
                  elementName="tailor-resume-button"
                  type="submit"
                  disabled={isSubmitting || !resumeText.trim() || !jobDescription.trim()}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <FileText className="mr-2 h-4 w-4" />
                      Tailor My Resume
                    </>
                  )}
                </ButtonWithAnalytics>
              </div>
            </form>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
