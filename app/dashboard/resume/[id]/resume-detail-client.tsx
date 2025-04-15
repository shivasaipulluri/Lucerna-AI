"use client"

import type React from "react"

import { useEffect, useState, useTransition, useCallback } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getResumeById, runTailoringAnalysis } from "../../actions"
import { AlertCircle, CheckCircle, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Download, FileText, FileIcon as FilePdf, FileIcon as FileWord } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Create a safer implementation for PDF generation
const usePdfGenerator = () => {
  const [pdfGeneratorLoaded, setPdfGeneratorLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        import("html2pdf.js")
          .then(() => {
            setPdfGeneratorLoaded(true)
            setError(null)
          })
          .catch((err) => {
            console.error("Failed to load PDF generator:", err)
            setError("Failed to load PDF generator. Please try again later.")
            setPdfGeneratorLoaded(false)
          })
      } catch (err) {
        console.error("Error initializing PDF generator:", err)
        setError("Error initializing PDF generator. Please try again later.")
        setPdfGeneratorLoaded(false)
      }
    }
  }, [])

  return { pdfGeneratorLoaded, error }
}

// Add this after the imports
const ScoreTooltip = ({ children, content }: { children: React.ReactNode; content: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent>
        <p className="max-w-xs text-sm">{content}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

function formatDate(dateString: string | Date) {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date)
}

// Define tailoringConfigs with proper type
const tailoringConfigs: Record<string, { name: string; description: string }> = {
  basic: {
    name: "Basic",
    description: "Focuses on essential keywords and formatting.",
  },
  advanced: {
    name: "Advanced",
    description: "Incorporates industry-specific terminology and optimizes for ATS.",
  },
  premium: {
    name: "Premium",
    description: "Provides a comprehensive overhaul with personalized recommendations.",
  },
}

interface Resume {
  id: string
  user_id: string
  resume_text: string
  job_description: string
  modified_resume: string | null
  version: number
  ats_score: number | null
  jd_score: number | null
  tailoring_mode: string | null
  created_at: Date
}

export function ResumeDetailClient({ resumeId }: { resumeId: string }) {
  const [resume, setResume] = useState<Resume | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [showComparison, setShowComparison] = useState(false)
  const [previousVersion, setPreviousVersion] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const { toast } = useToast()
  const [retryCount, setRetryCount] = useState(0)
  const maxRetries = 3

  const { pdfGeneratorLoaded, error: pdfError } = usePdfGenerator()

  const fetchResume = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(`/api/resumes/${resumeId}`)
      
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      if (!data) {
        throw new Error("No resume data received")
      }
      
      setResume(data)
    } catch (error) {
      console.error("Error fetching resume:", error)
      
      if (error instanceof Error) {
        if (error.message.includes('network')) {
          if (retryCount < maxRetries) {
            setRetryCount(prev => prev + 1)
            setTimeout(fetchResume, 1000 * retryCount)
            return
          }
          setError("Network error. Please check your connection and try again.")
        } else if (error.message.includes('not found')) {
          setError("Resume not found. It may have been deleted.")
        } else if (error.message.includes('authenticated')) {
          setError("Please log in to view this resume.")
        } else {
          setError("An unexpected error occurred. Please try again later.")
        }
      } else {
        setError("An unknown error occurred")
      }
    } finally {
      setLoading(false)
    }
  }, [resumeId, retryCount])

  useEffect(() => {
    fetchResume()
  }, [fetchResume])

  // Handle refine again
  const handleRefine = () => {
    if (!resume || !resumeId) return

    startTransition(async () => {
      try {
        // Store current version for comparison
        if (resume.modified_resume) {
          setPreviousVersion(resume.modified_resume)
        }

        // Show initial feedback toast
        toast({
          title: "Refinement triggered",
          description: "Hang tight while we further optimize your resume!",
        })

        const result = await runTailoringAnalysis(
          resume.modified_resume || resume.resume_text,
          resume.job_description,
          resumeId,
          true,
        )

        if (!result.success) {
          toast({
            title: "Refinement failed",
            description: result.error || "Failed to refine resume",
            variant: "destructive",
          })
          return
        }

        // Fetch the updated resume
        const updatedResult = await getResumeById(resumeId)
        if (updatedResult.success && updatedResult.data) {
          setResume(updatedResult.data)
          setShowComparison(true)

          const atsScore = updatedResult.data.ats_score ?? 0
          const jdScore = updatedResult.data.jd_score ?? 0

          toast({
            title: "Resume refined successfully",
            description: `Resume updated to version ${updatedResult.data.version}. ATS: ${atsScore}%, JD: ${jdScore}%.`,
          })
        }
      } catch (err: any) {
        toast({
          title: "Error",
          description: err.message || "An error occurred during refinement",
          variant: "destructive",
        })
      }
    })
  }

  if (loading) {
    return <div>Loading resume details...</div>
  }

  if (error) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Resume Not Found</h2>
        <p className="text-muted-foreground mb-6">
          {error}
        </p>
        {retryCount < maxRetries && (
          <Button
            onClick={fetchResume}
            className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 flex items-center gap-2"
          >
            <span>Retry</span>
          </Button>
        )}
        <Button asChild>
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    )
  }

  if (!resume) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">No Resume Data</h2>
        <p className="text-muted-foreground mb-6">
          The resume data could not be loaded. Please try again later.
        </p>
        <Button asChild>
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    )
  }

  const atsScore = resume.ats_score ?? 0
  const jdScore = resume.jd_score ?? 0
  const needsImprovement = atsScore < 95 || jdScore < 95
  const tailoringMode = resume.tailoring_mode || "basic"
  const modeConfig = tailoringConfigs[tailoringMode] || tailoringConfigs.basic
  const isPerfectScore = atsScore >= 95 && jdScore >= 95

  // Get the tailoring mode config
  const tailoringModeConfig = tailoringConfigs[tailoringMode] || tailoringConfigs.basic

  // Add these download functions before the return statement
  const downloadAsText = useCallback(() => {
    if (!resume?.modified_resume) {
      toast({
        title: "Error",
        description: "No modified resume available to download",
        variant: "destructive",
      })
      return
    }

    try {
      setIsDownloading(true)
      const blob = new Blob([resume.modified_resume], { type: "text/plain" })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `tailored-resume-v${resume.version}.txt`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (err) {
      console.error("Error downloading text file:", err)
      toast({
        title: "Download Failed",
        description: "Failed to download resume as text file",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }, [resume, toast])

  const downloadAsPdf = async () => {
    if (!pdfGeneratorLoaded) {
      toast({
        title: "PDF Generator Not Ready",
        description: "Please wait while we prepare the PDF generator.",
        variant: "destructive",
      })
      return
    }

    try {
      setIsDownloading(true)
      const element = document.getElementById("resume-content")
      if (!element) {
        throw new Error("Resume content not found")
      }

      const opt = {
        margin: 1,
        filename: `resume-${resumeId}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      }

      const html2pdf = (await import("html2pdf.js")).default
      await html2pdf().from(element).set(opt).save()
      
      toast({
        title: "Download Complete",
        description: "Your resume has been downloaded as PDF.",
      })
    } catch (err) {
      console.error("Error generating PDF:", err)
      toast({
        title: "Download Failed",
        description: "Failed to generate PDF. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsDownloading(false)
    }
  }

  const downloadAsDocx = () => {
    // This is a placeholder for future implementation
    toast({
      title: "Coming Soon",
      description: "DOCX download will be available in a future update.",
    })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle>Resume Analysis Details</CardTitle>
              <CardDescription>Created on {formatDate(resume.created_at)}</CardDescription>
            </div>
            {resume.version > 1 && (
              <div className="flex items-center space-x-2">
                <Switch id="comparison-mode" checked={showComparison} onCheckedChange={setShowComparison} />
                <Label htmlFor="comparison-mode">Compare Versions</Label>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {resume.ats_score !== null && resume.jd_score !== null ? (
              <>
                {/* Score Dashboard Panel */}
                <div
                  className={`bg-gray-50 rounded-lg border p-4 ${
                    isPerfectScore ? "animate-pulse-subtle border-green-200 bg-green-50" : ""
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm font-medium">ATS Score</span>
                          <ScoreTooltip content="ATS (Applicant Tracking System) compatibility score measures how well your resume will perform in automated resume screening systems used by employers.">
                            <Info className="h-3 w-3 ml-1 text-gray-400 cursor-help" />
                          </ScoreTooltip>
                        </div>
                        {atsScore >= 95 ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                      <div className="mt-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${atsScore >= 95 ? "bg-green-500" : "bg-amber-500"}`}
                            style={{ width: `${atsScore}%` }}
                          ></div>
                        </div>
                        <p
                          className={`text-lg font-bold mt-1 ${atsScore >= 95 ? "text-green-600" : "text-amber-600"}`}
                        >
                          {atsScore}%
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm font-medium">JD Match</span>
                          <ScoreTooltip content="Job Description Match score indicates how well your resume aligns with the specific requirements and keywords in the job description.">
                            <Info className="h-3 w-3 ml-1 text-gray-400 cursor-help" />
                          </ScoreTooltip>
                        </div>
                        {jdScore >= 95 ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                      <div className="mt-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${jdScore >= 95 ? "bg-green-500" : "bg-amber-500"}`}
                            style={{ width: `${jdScore}%` }}
                          ></div>
                        </div>
                        <p
                          className={`text-lg font-bold mt-1 ${jdScore >= 95 ? "text-green-600" : "text-amber-600"}`}
                        >
                          {jdScore}%
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Tailoring Mode</span>
                      <p className="text-lg font-bold mt-1">{tailoringModeConfig.name}</p>
                      <p className="text-xs text-gray-500 truncate">{tailoringModeConfig.description}</p>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Version</span>
                      <div className="flex items-center mt-1">
                        <p className="text-lg font-bold">{resume.version}</p>
                        {resume.version > 1 && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {resume.version > 1 ? `${resume.version} iterations` : "1 iteration"}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t text-xs text-gray-500 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-1" />
                        <span>Score ≥ 95%</span>
                      </div>
                      <div className="flex items-center">
                        <AlertCircle className="h-3 w-3 text-amber-500 mr-1" />
                        <span>Needs improvement</span>
                      </div>
                    </div>
                    {needsImprovement ? (
                      <Button
                        onClick={handleRefine}
                        disabled={isPending}
                        size="sm"
                        className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-4 py-2 flex items-center gap-2"
                      >
                        {isPending ? (
                          <>
                            <span className="animate-pulse">⟳</span>
                            <span>Refining...</span>
                          </>
                        ) : (
                          <>
                            <span>⟳</span>
                            <span>Refine Again</span>
                          </>
                        )}
                      </Button>
                    ) : (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="font-medium">Optimized</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Remove the old scores section since we now have the dashboard */}
              </>
            ) : (
              <div className="flex justify-center">
                <Button
                  onClick={() => {
                    if (!resumeId) return

                    startTransition(async () => {
                      const result = await runTailoringAnalysis(resume.resume_text, resume.job_description, resumeId)
                      if (result.success) {
                        const updatedResult = await getResumeById(resumeId)
                        if (updatedResult.success && updatedResult.data) {
                          setResume(updatedResult.data)
                          toast({
                            title: "Success",
                            description: "Resume analysis complete",
                          })
                        }
                      } else {
                        toast({
                          title: "Error",
                          description: result.error || "Failed to analyze resume",
                          variant: "destructive",
                        })
                      }
                    })
                  }}
                  disabled={isPending}
                >
                  {isPending ? "Generating..." : "Generate Tailored Resume"}
                </Button>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Original Resume</h3>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap text-sm h-[300px] overflow-y-auto">
                  {resume.resume_text}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Job Description</h3>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap text-sm h-[300px] overflow-y-auto">
                  {resume.job_description}
                </div>
              </div>
            </div>

            {resume.modified_resume && (
              <div>
                {showComparison && previousVersion ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <span>Previous Version</span>
                        <span className="ml-2 text-xs bg-gray-200 px-2 py-1 rounded-full">v{resume.version - 1}</span>
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap text-sm h-[400px] overflow-y-auto">
                        {previousVersion}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 flex items-center">
                        <span>Current Version</span>
                        <span className="ml-2 text-xs bg-blue-100 px-2 py-1 rounded-full">v{resume.version}</span>
                      </h3>
                      <div className="bg-blue-50 p-4 rounded-md whitespace-pre-wrap text-sm h-[400px] overflow-y-auto">
                        {resume.modified_resume}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-lg font-medium mb-2 flex items-center">
                      <span>Tailored Resume</span>
                      {resume.version > 1 && (
                        <span className="ml-2 text-xs bg-blue-100 px-2 py-1 rounded-full">v{resume.version}</span>
                      )}
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-md whitespace-pre-wrap text-sm">
                      {resume.modified_resume}
                    </div>
                  </div>
                )}
              </div>
            )}
            {resume.modified_resume && needsImprovement && (
              <div className="flex justify-center mt-6">
                <Button
                  onClick={handleRefine}
                  disabled={isPending}
                  size="lg"
                  className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 flex items-center gap-2"
                >
                  {isPending ? (
                    <>
                      <span className="animate-spin mr-2">⟳</span>
                      <span>Refining Resume...</span>
                    </>
                  ) : (
                    <>
                      <span className="mr-2">⟳</span>
                      <span>Refine Resume Again</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {resume?.modified_resume && (
        <Card className="overflow-hidden">
          <CardHeader className="bg-gray-50 border-b">
            <CardTitle className="flex items-center">
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </CardTitle>
            <CardDescription>Choose a format to download your tailored resume</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button
                onClick={downloadAsText}
                className="flex items-center justify-center transition-all hover:scale-105"
                variant="outline"
              >
                <FileText className="h-5 w-5 mr-2" />
                <span>Plain Text (.txt)</span>
              </Button>

              <Button
                onClick={downloadAsPdf}
                className="flex items-center justify-center transition-all hover:scale-105"
                variant="outline"
              >
                <FilePdf className="h-5 w-5 mr-2" />
                <span>PDF Document</span>
              </Button>

              <Button
                onClick={downloadAsDocx}
                className="flex items-center justify-center transition-all hover:scale-105"
                variant="outline"
              >
                <FileWord className="h-5 w-5 mr-2" />
                <span>Word Document (.docx)</span>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Downloads include only your tailored resume content, not the original or job description.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button variant="outline" asChild>
          <Link href="/dashboard/history">Back to History</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">New Analysis</Link>
        </Button>
      </div>
    </div>
  )
}
