"use client"

import type React from "react"

import { useEffect, useState, useTransition } from "react"
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

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Try to dynamically load the html2pdf library
      import("html2pdf.js")
        .then(() => {
          setPdfGeneratorLoaded(true)
        })
        .catch((err) => {
          console.error("Failed to load PDF generator:", err)
          setPdfGeneratorLoaded(false)
        })
    }
  }, [])

  return pdfGeneratorLoaded
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

// Define tailoringConfigs
const tailoringConfigs = {
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

export function ResumeDetailClient({ resumeId }: { resumeId: string }) {
  // Log the resumeId for debugging
  console.log("Client component resumeId:", resumeId)

  const [resume, setResume] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()
  const [showComparison, setShowComparison] = useState(false)
  const [previousVersion, setPreviousVersion] = useState<string | null>(null)
  const { toast } = useToast()

  // Fetch resume data
  useEffect(() => {
    let isMounted = true

    async function fetchResume() {
      if (!resumeId) {
        setError("Invalid resume ID")
        setLoading(false)
        return
      }

      // Only fetch if we're in a loading state to prevent repeated calls
      if (!loading) return

      try {
        console.log("Fetching resume with ID:", resumeId)
        const result = await getResumeById(resumeId)
        console.log("Resume fetch result:", result)

        if (!isMounted) return

        if (!result.success || !result.data) {
          setError(result.error || "Failed to load resume")
          setLoading(false)
          return
        }

        // Compare with current state to avoid unnecessary updates
        setResume((prevResume) => {
          // If it's the same resume with the same version, don't update
          if (prevResume && prevResume.id === result.data.id && prevResume.version === result.data.version) {
            return prevResume
          }
          return result.data
        })

        // Store the current version's modified resume for comparison if refinement happens
        if (result.data.modified_resume) {
          setPreviousVersion(result.data.modified_resume)
        }
      } catch (err: any) {
        if (!isMounted) return
        console.error("Error in fetchResume:", err)
        setError(err.message || "An error occurred")
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchResume()

    return () => {
      isMounted = false
    }
  }, [resumeId, loading])

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
          resume.modified_resume || resume.resume_text, // Use modified resume if available
          resume.job_description,
          resumeId,
          true, // This is a refinement
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
          setShowComparison(true) // Automatically show comparison after refinement

          // Log the version number
          console.log(`Resume refined to version ${updatedResult.data.version}`)

          toast({
            title: "Resume refined successfully",
            description: `Resume updated to version ${updatedResult.data.version}. ATS: ${updatedResult.data.ats_score}%, JD: ${updatedResult.data.jd_score}%.`,
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

  if (error || !resume) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Resume Not Found</h2>
        <p className="text-muted-foreground mb-6">
          {error || "The resume you're looking for doesn't exist or you don't have permission to view it."}
        </p>
        <Button asChild>
          <Link href="/dashboard">Return to Dashboard</Link>
        </Button>
      </div>
    )
  }

  const needsImprovement = resume.ats_score < 95 || resume.jd_score < 95

  // Get the tailoring mode config
  const tailoringMode = resume.tailoring_mode || "basic"
  const modeConfig = tailoringConfigs[tailoringMode] || tailoringConfigs.basic

  // Add this function inside the component, before the return statement
  const isPerfectScore = resume.ats_score >= 95 && resume.jd_score >= 95

  // Add these download functions before the return statement
  const downloadAsText = () => {
    if (!resume?.modified_resume) return

    const blob = new Blob([resume.modified_resume], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `tailored-resume-v${resume.version}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const downloadAsPdf = () => {
    if (!resume?.modified_resume) return

    // Check if we're in the browser
    if (typeof window === "undefined") return

    try {
      // Dynamically import html2pdf only when the function is called
      import("html2pdf.js")
        .then((html2pdfModule) => {
          const html2pdf = html2pdfModule.default || html2pdfModule

          // Create a temporary div to hold the resume content
          const element = document.createElement("div")
          element.innerHTML = `
          <div style="font-family: Arial, sans-serif; padding: 20px; line-height: 1.5;">
            <h1 style="text-align: center; margin-bottom: 20px;">Tailored Resume</h1>
            <div style="white-space: pre-wrap;">${resume.modified_resume}</div>
          </div>
        `

          // Configure html2pdf options
          const opt = {
            margin: [15, 15],
            filename: `tailored-resume-v${resume.version}.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
          }

          // Generate PDF
          html2pdf().set(opt).from(element).save()
        })
        .catch((err) => {
          console.error("Failed to load PDF generator:", err)
          toast({
            title: "PDF Generation Failed",
            description: "The PDF generator library couldn't be loaded. Please try the text download option instead.",
            variant: "destructive",
          })
        })
    } catch (err) {
      console.error("Error generating PDF:", err)
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating the PDF. Please try the text download option instead.",
        variant: "destructive",
      })
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
                        {resume.ats_score >= 95 ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                      <div className="mt-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${resume.ats_score >= 95 ? "bg-green-500" : "bg-amber-500"}`}
                            style={{ width: `${resume.ats_score}%` }}
                          ></div>
                        </div>
                        <p
                          className={`text-lg font-bold mt-1 ${resume.ats_score >= 95 ? "text-green-600" : "text-amber-600"}`}
                        >
                          {resume.ats_score}%
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
                        {resume.jd_score >= 95 ? (
                          <CheckCircle className="h-4 w-4 text-green-500" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                      <div className="mt-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${resume.jd_score >= 95 ? "bg-green-500" : "bg-amber-500"}`}
                            style={{ width: `${resume.jd_score}%` }}
                          ></div>
                        </div>
                        <p
                          className={`text-lg font-bold mt-1 ${resume.jd_score >= 95 ? "text-green-600" : "text-amber-600"}`}
                        >
                          {resume.jd_score}%
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Tailoring Mode</span>
                      <p className="text-lg font-bold mt-1">{modeConfig.name}</p>
                      <p className="text-xs text-gray-500 truncate">{modeConfig.description}</p>
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
