"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Sparkles, Brain, CheckCircle, RefreshCw, Info, BookmarkPlus, Eye } from "lucide-react"

import {
  runTailoringAnalysisWithAnalytics,
  saveResumeWithAnalytics,
  logTabSwitchAnalytics,
  logCopyToClipboardAnalytics,
  logDownloadResumeAnalytics,
} from "@/app/dashboard/actions-with-analytics"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { ButtonWithAnalytics } from "@/components/analytics/button-with-analytics"
import { supabase } from "@/lib/supabase/client"
import { logInteractionDirect } from "@/lib/model-logger"
import { Resume, TailoringMode } from "@/lib/types"
import { useAnalytics } from "@/app/dashboard/hooks/useAnalytics"
import { withErrorBoundary } from "@/app/dashboard/components/error-boundary"
import { RefineResumeButton } from "./refine-resume-button"
import TailoredPreview from "./tailored-preview"

interface ResumeLabClientWithAnalyticsProps {
  resume: Resume
  resumeId: string
}

export function ResumeLabClientWithAnalytics({ resume, resumeId }: ResumeLabClientWithAnalyticsProps) {
  const [activeTab, setActiveTab] = useState("tailored")
  const [copied, setCopied] = useState(false)
  const [isRefining, setIsRefining] = useState(false)
  const [manualTailoringRequested, setManualTailoringRequested] = useState(false)
  const { userId, logTabSwitch, logCopyToClipboard, logDownload, error: analyticsError } = useAnalytics()
  const { toast } = useToast()
  const router = useRouter()

  // Handle tab switching with analytics
  const handleTabChange = async (value: string) => {
    try {
      await logTabSwitch(activeTab, value)
      setActiveTab(value)
    } catch (error) {
      console.error("Error logging tab switch:", error)
      // Continue with tab switch even if logging fails
      setActiveTab(value)
    }
  }

  const runInitialTailoring = async () => {
    if (isRefining || !resumeId || resume?.modified_resume || !userId) return

    setIsRefining(true)
    toast({ title: "Tailoring in progress", description: "Lucerna AI is tailoring your resume..." })

    try {
      // Log the tailoring interaction
      await logInteractionDirect(userId, {
        action: "click",
        element: "start-tailoring-button",
        metadata: { resumeId, timestamp: new Date().toISOString() },
      })

      const result = await runTailoringAnalysisWithAnalytics(resume.resume_text, resume.job_description, resumeId)
      if (result.success) {
        toast({ title: "Tailoring complete", description: "Your resume has been tailored successfully!" })
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to tailor resume")
      }
    } catch (err: any) {
      console.error("Error in runInitialTailoring:", err)
      toast({ 
        title: "Tailoring failed", 
        description: err.message || "An unexpected error occurred", 
        variant: "destructive" 
      })
    } finally {
      setIsRefining(false)
      setManualTailoringRequested(false)
    }
  }

  useEffect(() => {
    if (resume && !resume.modified_resume && manualTailoringRequested && !isRefining) {
      runInitialTailoring()
    }
  }, [resume, manualTailoringRequested, isRefining])

  const handleRefine = async () => {
    if (!resumeId || isRefining || !userId) return

    setIsRefining(true)
    toast({ title: "Refinement started", description: "Lucerna AI is optimizing your resume..." })

    try {
      await logInteractionDirect(userId, {
        action: "click",
        element: "refine-resume-button",
        metadata: { resumeId, version: resume.version, timestamp: new Date().toISOString() },
      })

      const result = await runTailoringAnalysisWithAnalytics(
        resume.modified_resume || resume.resume_text,
        resume.job_description,
        resumeId,
        true,
      )
      if (result.success) {
        toast({ title: "Refinement complete", description: `Refined to version ${result.data?.version}` })
        router.refresh()
      } else {
        throw new Error(result.error)
      }
    } catch (error: any) {
      console.error("Error in handleRefine:", error)
      toast({ 
        title: "Refinement failed", 
        description: error.message || "An unexpected error occurred", 
        variant: "destructive" 
      })
    } finally {
      setIsRefining(false)
    }
  }

  const handleSaveResume = async () => {
    if (!resume || !resumeId || !userId) return

    try {
      await logInteractionDirect(userId, {
        action: "click",
        element: "save-resume-button",
        metadata: {
          resumeId,
          version: resume.version || 1,
          timestamp: new Date().toISOString(),
        },
      })

      const result = await saveResumeWithAnalytics(resumeId)

      if (result.success) {
        toast({
          title: "Resume Saved",
          description: "This resume has been added to your saved collection.",
        })
      } else {
        throw new Error(result.error || "Failed to save resume")
      }
    } catch (error: any) {
      console.error("Error in handleSaveResume:", error)
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  // Show analytics error if any
  useEffect(() => {
    if (analyticsError) {
      console.error("Analytics error:", analyticsError)
      toast({
        title: "Analytics Error",
        description: analyticsError.message,
        variant: "destructive",
      })
    }
  }, [analyticsError, toast])

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)

      // Log the copy event
      if (userId) {
        await logCopyToClipboardAnalytics(userId, resumeId, resume.version || 1)
      }

      toast({ title: "Copied to clipboard", description: "Text copied successfully" })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({ title: "Copy failed", description: "Could not copy", variant: "destructive" })
    }
  }

  const downloadAsText = () => {
    if (!resume?.modified_resume) return

    const blob = new Blob([resume.modified_resume], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `lucerna-resume-v${resume.version}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // Log the download event
    if (userId) {
      logDownloadResumeAnalytics(userId, resumeId, resume.version || 1)
    }
  }

  const formatDate = (date: string) => formatDistanceToNow(new Date(date), { addSuffix: true })

  const getTailoringModeDisplay = (mode: string) =>
    mode === "aggressive" ? "Aggressive" : mode === "personalized" || mode === "story" ? "Personalized" : "Basic"

  const isValidTailoringMode = (mode: string | null | undefined): mode is TailoringMode => {
    return mode === "basic" || mode === "personalized" || mode === "aggressive" || mode === "story" || mode === "quick";
  };

  const goldenRules = {
    passed: (resume?.ats_score ?? 0) >= 95 && (resume?.jd_score ?? 0) >= 95,
    feedback: ["Consider adding more impact-driven results", "Use clearer language for leadership roles"],
    suggestions: ["Include more measurable outcomes", "Match keywords from the job description"],
  }

  // Log component mount as an interaction
  useEffect(() => {
    if (userId) {
      logInteractionDirect(userId, {
        action: "view",
        element: "resume-detail",
        metadata: {
          resumeId,
          version: resume?.version || 1,
          hasTailored: !!resume?.modified_resume,
          timestamp: new Date().toISOString(),
        },
      }).catch((error) => {
        console.error("[MODEL DB ERROR] Failed to log view interaction:", error)
      })
    }
  }, [userId, resumeId, resume])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Resume Lab</span>
            <div className="flex items-center gap-2">
              {resume.ats_score !== null && resume.ats_score !== undefined && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  ATS: {resume.ats_score}%
                </Badge>
              )}
              {resume.jd_score !== null && resume.jd_score !== undefined && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  JD: {resume.jd_score}%
                </Badge>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={handleTabChange}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tailored">Tailored</TabsTrigger>
              <TabsTrigger value="original">Original</TabsTrigger>
            </TabsList>
            <TabsContent value="tailored">
              <TailoredPreview
                modifiedResume={resume.modified_resume || ""}
                originalResume={resume.resume_text}
                atsScore={resume.ats_score ?? 0}
                jdScore={resume.jd_score ?? 0}
                version={resume.version || 1}
                tailoringMode={isValidTailoringMode(resume.tailoring_mode) ? resume.tailoring_mode : "personalized"}
                resumeId={resumeId}
              />
            </TabsContent>
            <TabsContent value="original">
              <div className="whitespace-pre-wrap">{resume.resume_text}</div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Golden Rules Summary */}
      {resume?.modified_resume && (
        <Card className="mt-6 border-t-4 border-t-amber-400 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center font-serif">
              <Brain className="h-5 w-5 mr-2 text-amber-500" />
              Golden Rules Quality Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            {goldenRules.passed ? (
              <p className="text-success italic font-serif">
                "This version tells a confident, human story that will resonate with recruiters."
              </p>
            ) : (
              <>
                <div className="mb-2 font-medium text-gray-700">Feedback:</div>
                <ul className="mb-4 space-y-1 text-sm text-gray-600">
                  {goldenRules.feedback.map((f, i) => (
                    <li key={i}>❌ {f}</li>
                  ))}
                </ul>
                <div className="mb-2 font-medium text-gray-700">Suggestions:</div>
                <ul className="space-y-1 text-sm text-gray-600">
                  {goldenRules.suggestions.map((s, i) => (
                    <li key={i}>🛠️ {s}</li>
                  ))}
                </ul>
              </>
            )}
          </CardContent>
        </Card>
      )}

      {/* Scoring Section */}
      {resume?.modified_resume && resume?.ats_score !== null && resume?.jd_score !== null && (
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <ScoreCard
            title="ATS Compatibility"
            score={resume.ats_score ?? 0}
            description="How well your resume performs in Applicant Tracking Systems"
            icon={<CheckCircle className="h-5 w-5 text-success" />}
          />
          <ScoreCard
            title="Job Description Match"
            score={resume.jd_score ?? 0}
            description="How closely your resume aligns with the job requirements"
            icon={<Sparkles className="h-5 w-5 text-primary" />}
          />
        </div>
      )}

      {/* Refine Again Button */}
      {resume?.modified_resume && (
        <div className="text-center my-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <ButtonWithAnalytics
                  elementName="refine-resume-button"
                  size="lg"
                  onClick={handleRefine}
                  disabled={isRefining}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg relative group mr-4 btn-hover"
                  metadata={{ resumeId, version: resume.version }}
                >
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                  </span>
                  {isRefining ? (
                    <>
                      <RefreshCw className="h-5 w-5 mr-2 animate-spin" /> Refining...
                    </>
                  ) : (
                    <>
                      <Sparkles className="h-5 w-5 mr-2 text-yellow-300" />✨ Refine Again
                    </>
                  )}
                </ButtonWithAnalytics>
              </TooltipTrigger>
              <TooltipContent>
                <p>Improve this version further with Lucerna AI's magic touch.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Add Preview Button */}
          <ButtonWithAnalytics
            elementName="preview-resume-button"
            size="lg"
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg mr-4 btn-hover"
            metadata={{ resumeId, version: resume.version }}
          >
            <Link href={`/dashboard/resume/${resumeId}/preview`}>
              <Eye className="h-5 w-5 mr-2" /> Preview
            </Link>
          </ButtonWithAnalytics>

          {/* Add Save Resume Button */}
          <ButtonWithAnalytics
            elementName="save-resume-button"
            size="lg"
            onClick={handleSaveResume}
            className="bg-success hover:bg-success/90 text-white px-8 py-6 text-lg btn-hover"
            metadata={{ resumeId, version: resume.version }}
          >
            <BookmarkPlus className="h-5 w-5 mr-2" /> Save Resume
          </ButtonWithAnalytics>

          <p className="text-sm text-gray-500 mt-3 max-w-md text-center mx-auto">
            Lucerna remembers what you've improved — each version builds stronger.
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12 pt-6 border-t">
        <ButtonWithAnalytics elementName="back-to-history-button" variant="outline" asChild className="btn-hover">
          <Link href="/dashboard/history">← Back to History</Link>
        </ButtonWithAnalytics>
        <ButtonWithAnalytics elementName="create-new-resume-button" asChild className="btn-hover">
          <Link href="/dashboard">Create New Resume</Link>
        </ButtonWithAnalytics>
      </div>
    </div>
  )
}

// ScoreCard Component
function ScoreCard({
  title,
  score,
  description,
  icon,
}: {
  title: string
  score: number
  description: string
  icon: React.ReactNode
}) {
  const getColor = (s: number) => {
    if (s >= 95) return { bg: "bg-green-100", text: "text-success" }
    if (s >= 85) return { bg: "bg-yellow-100", text: "text-yellow-700" }
    return { bg: "bg-red-100", text: "text-destructive" }
  }

  const { bg, text } = getColor(score)

  return (
    <Card className="shadow-soft">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex gap-2 items-center">
            {icon}
            <h3 className="text-gray-800 font-medium font-serif">{title}</h3>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>{description}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className={`text-center ${bg} ${text} text-xl font-bold py-6 rounded-lg`}>{score}%</div>
      </CardContent>
    </Card>
  )
}

// Clock icon
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// Copy icon
function Copy(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  )
}

// Check icon
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  )
}

// Download icon
function Download(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
      <polyline points="7 10 12 15 17 10"></polyline>
      <line x1="12" y1="15" x2="12" y2="3"></line>
    </svg>
  )
}
