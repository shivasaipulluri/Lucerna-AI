"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Sparkles, Brain, CheckCircle, RefreshCw, Info, BookmarkPlus, Eye, Copy, Check, Download } from "lucide-react"

import { 
  runTailoringAnalysisWithAnalytics,
  logTabSwitchAnalytics,
  logCopyToClipboardAnalytics,
  logDownloadResumeAnalytics
} from "@/app/dashboard/actions-with-analytics"
import { saveResume } from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { Resume } from "@/lib/types"
import { supabase } from "@/lib/supabase/client"
import { useAnalytics } from "@/app/dashboard/hooks/useAnalytics"
import { withErrorBoundary } from "@/app/dashboard/components/error-boundary"
import { RefineResumeButton } from "./refine-resume-button"
import TailoredPreview from "./tailored-preview"
import { TailoringMode } from "@/lib/types"

/**
 * Props for the ResumeLabClient component
 * @interface ResumeLabClientProps
 * @property {Resume} resume - The resume object containing all resume data
 * @property {string} resumeId - The unique identifier for the resume
 */
interface ResumeLabClientProps {
  resume: Resume
  resumeId: string
}

/**
 * ResumeLabClient component provides a UI for viewing and modifying resumes
 * It includes features for tailoring, refining, and managing resume content
 * @component
 * @param {ResumeLabClientProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
export function ResumeLabClient({ resume, resumeId }: ResumeLabClientProps) {
  const [activeTab, setActiveTab] = useState("tailored")
  const [copied, setCopied] = useState(false)
  const [isRefining, setIsRefining] = useState(false)
  const [manualTailoringRequested, setManualTailoringRequested] = useState(false)
  const { userId, logTabSwitch, logCopyToClipboard, logDownload, error: analyticsError } = useAnalytics()
  const { toast } = useToast()
  const router = useRouter()

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

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      if (userId) {
        await logCopyToClipboard(resumeId, resume.version || 1)
      }
      toast({
        title: "Success",
        description: "Resume copied to clipboard",
      })
    } catch (error) {
      console.error("Error copying to clipboard:", error)
      toast({
        title: "Error",
        description: "Failed to copy resume to clipboard",
        variant: "destructive",
      })
    }
  }

  const downloadAsText = async () => {
    try {
      const blob = new Blob([resume.modified_resume || ""], { type: "text/plain" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `resume-${resumeId}-v${resume.version || 1}.txt`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      if (userId) {
        await logDownload(resumeId, resume.version || 1, "text")
      }
      toast({
        title: "Success",
        description: "Resume downloaded successfully",
      })
    } catch (error) {
      console.error("Error downloading resume:", error)
      toast({
        title: "Error",
        description: "Failed to download resume",
        variant: "destructive",
      })
    }
  }

  const runInitialTailoring = async () => {
    if (isRefining || !resumeId || resume?.modified_resume) return

    console.log(`Starting initial tailoring for resumeId: ${resumeId}`)
    setIsRefining(true)

    toast({ title: "Tailoring in progress", description: "Lucerna AI is tailoring your resume..." })

    try {
      const result = await runTailoringAnalysisWithAnalytics(
        resume.resume_text,
        resume.job_description,
        resumeId
      )
      
      if (result.success) {
        toast({
          title: "Success",
          description: "Resume tailored successfully",
        })
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to tailor resume")
      }
    } catch (error: any) {
      console.error("Error in runInitialTailoring:", error)
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsRefining(false)
      setManualTailoringRequested(false)
    }
  }

  useEffect(() => {
    if (resume && !resume.modified_resume && manualTailoringRequested && !isRefining) {
      console.log("Tailoring needed — running analysis...")
      runInitialTailoring()
    } else if (resume?.modified_resume) {
      console.log("Tailoring already completed — skipping analysis.")
    }
  }, [resume, manualTailoringRequested, isRefining])

  const handleRefine = async () => {
    if (!resumeId || isRefining) return

    setIsRefining(true)

    toast({ title: "Refinement started", description: "Lucerna AI is optimizing your resume..." })

    try {
      const result = await runTailoringAnalysisWithAnalytics(
        resume.modified_resume || resume.resume_text,
        resume.job_description,
        resumeId,
        true,
      )
      if (result.success) {
        toast({
          title: "Resume refined successfully",
          description: `Refined to version ${(resume.version || 0) + 1}`,
          variant: "default",
        })
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
    if (!resume || !resumeId) return

    try {
      const result = await saveResume(resumeId)

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

  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(resume.modified_resume || resume.resume_text)
      await logCopyToClipboard(resumeId, resume.version || 1)
      toast({
        title: "Success",
        description: "Copied to clipboard",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleDownload = async (format: "pdf" | "docx") => {
    try {
      const content = resume.modified_resume || resume.resume_text
      const blob = new Blob([content], { type: format === "pdf" ? "application/pdf" : "application/vnd.openxmlformats-officedocument.wordprocessingml.document" })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `resume-${resumeId}-v${resume.version || 1}.${format}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
      
      await logDownload(resumeId, resume.version || 1, format)
      toast({
        title: "Success",
        description: `Downloaded as ${format.toUpperCase()}`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume",
        variant: "destructive",
      })
    }
  }

  const formatDate = (date: string) => formatDistanceToNow(new Date(date), { addSuffix: true })

  const getTailoringModeDisplay = (mode: string) =>
    mode === "aggressive" ? "Aggressive" : mode === "personalized" || mode === "story" ? "Personalized" : "Basic"

  const goldenRules = {
    passed: (resume?.ats_score ?? 0) >= 95 && (resume?.jd_score ?? 0) >= 95,
    feedback: ["Consider adding more impact-driven results", "Use clearer language for leadership roles"],
    suggestions: ["Include more measurable outcomes", "Match keywords from the job description"],
  }

  const formatScore = (score: number | null | undefined): number => {
    return score ?? 0
  }

  const shouldShowScores = (resume: Resume): boolean => {
    return Boolean(resume?.modified_resume)
  }

  const isValidTailoringMode = (mode: string | null | undefined): mode is TailoringMode => {
    return mode === "basic" || mode === "personalized" || mode === "aggressive" || mode === "story" || mode === "quick";
  };

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

  return (
    <div className="space-y-4">
      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="tailored">Tailored Resume</TabsTrigger>
          <TabsTrigger value="original">Original Resume</TabsTrigger>
        </TabsList>

        <TabsContent value="tailored">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif">Your Tailored Resume</CardTitle>
            </CardHeader>
            <CardContent>
              {resume?.modified_resume ? (
                <TailoredPreview
                  modifiedResume={resume.modified_resume || ""}
                  originalResume={resume.resume_text}
                  atsScore={resume.ats_score || 0}
                  jdScore={resume.jd_score || 0}
                  version={resume.version || 1}
                  tailoringMode={isValidTailoringMode(resume.tailoring_mode) ? resume.tailoring_mode : "personalized"}
                  resumeId={resumeId}
                />
              ) : isRefining ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
                  <p className="text-gray-700">Lucerna AI is tailoring your resume...</p>
                  <p className="text-sm text-gray-500 mt-2">This usually takes 15-30 seconds.</p>
                </div>
              ) : (
                <div className="text-center space-y-4 py-6">
                  <p>Your resume hasn't been tailored yet.</p>
                  <Button 
                    onClick={() => setManualTailoringRequested(true)} 
                    disabled={isRefining}
                    className="btn-hover"
                  >
                    {isRefining ? "Tailoring..." : "Start Tailoring Now"}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="original">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif">Your Original Resume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap bg-background border rounded p-4 font-mono max-h-[500px] overflow-y-auto text-sm">
                {resume?.resume_text}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {resume?.modified_resume && (
        <RefineResumeButton resumeId={resumeId} />
      )}
    </div>
  )
}

/**
 * Props for the ScoreCard component
 * @interface ScoreCardProps
 * @property {string} title - The title of the score card
 * @property {number | null | undefined} score - The score value
 * @property {string} description - Description of what the score represents
 * @property {React.ReactNode} icon - Icon to display with the score
 */
interface ScoreCardProps {
  title: string
  score?: number | null
  description: string
  icon: React.ReactNode
}

/**
 * ScoreCard component displays a score with a title and description
 * @component
 * @param {ScoreCardProps} props - Component props
 * @returns {JSX.Element} The rendered component
 */
function ScoreCard({ title, score, description, icon }: ScoreCardProps) {
  const displayScore = score ?? 0
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{displayScore}%</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}

/**
 * Clock icon component
 * @component
 * @param {React.SVGProps<SVGSVGElement>} props - SVG props
 * @returns {JSX.Element} The rendered SVG icon
 */
function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

// Export with error boundary
export default withErrorBoundary(ResumeLabClient)
