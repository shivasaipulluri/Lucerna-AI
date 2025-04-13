"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Sparkles, Brain, CheckCircle, RefreshCw, Info, BookmarkPlus, Eye, Copy, Check, Download } from "lucide-react"

import { runTailoringAnalysisWithAnalytics } from "@/app/dashboard/actions-with-analytics"
import { saveResume } from "@/app/dashboard/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"

export function ResumeLabClient({ resume, resumeId }: { resume: any; resumeId: string }) {
  const [activeTab, setActiveTab] = useState("tailored")
  const [copied, setCopied] = useState(false)
  const [isRefining, setIsRefining] = useState(false)
  const [manualTailoringRequested, setManualTailoringRequested] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const runInitialTailoring = async () => {
    if (isRefining || !resumeId || resume?.modified_resume) return

    console.log(`Starting initial tailoring for resumeId: ${resumeId}`)
    setIsRefining(true)

    toast({ title: "Tailoring in progress", description: "Lucerna AI is tailoring your resume..." })

    try {
      const result = await runTailoringAnalysisWithAnalytics(resume.resume_text, resume.job_description, resumeId)
      if (result.success) {
        toast({ title: "Tailoring complete", description: "Your resume has been tailored successfully!" })
        router.refresh()
      } else {
        throw new Error(result.error || "Failed to tailor resume")
      }
    } catch (err: any) {
      toast({ title: "Tailoring failed", description: err.message, variant: "destructive" })
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
        toast({ title: "Refinement complete", description: `Refined to version ${result.data?.version}` })
        router.refresh()
      } else {
        throw new Error(result.error)
      }
    } catch (error: any) {
      toast({ title: "Refinement failed", description: error.message, variant: "destructive" })
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
        toast({
          title: "Error",
          description: result.error || "Failed to save resume",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
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
  }

  const formatDate = (date: string) => formatDistanceToNow(new Date(date), { addSuffix: true })

  const getTailoringModeDisplay = (mode: string) =>
    mode === "aggressive" ? "Aggressive" : mode === "personalized" || mode === "story" ? "Personalized" : "Basic"

  const goldenRules = {
    passed: resume?.ats_score >= 95 && resume?.jd_score >= 95,
    feedback: ["Consider adding more impact-driven results", "Use clearer language for leadership roles"],
    suggestions: ["Include more measurable outcomes", "Match keywords from the job description"],
  }

  return (
    <>
      <div className="bg-white rounded-lg p-6 border shadow-soft mb-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2 font-serif">
          {`Here's how Lucerna AI shaped your resume to shine brighter.`}
        </h1>
        <div className="text-sm text-gray-600 flex gap-4 flex-wrap">
          <Badge className="bg-background text-primary">{`Version ${resume?.version || 1} · ${getTailoringModeDisplay(resume?.tailoring_mode || "personalized")} Tailoring`}</Badge>
          <div className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1 text-primary" />
            <span>{resume?.created_at ? `Tailored ${formatDate(resume.created_at)}` : "Not tailored yet"}</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="tailored" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="tailored">Tailored Resume</TabsTrigger>
          <TabsTrigger value="original">Original Resume</TabsTrigger>
          <TabsTrigger value="job">Job Description</TabsTrigger>
        </TabsList>

        <TabsContent value="tailored">
          <Card className="shadow-soft">
            <CardHeader className="flex justify-between items-center">
              <CardTitle className="font-serif">Your Tailored Resume</CardTitle>
              {resume?.modified_resume && (
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => copyToClipboard(resume.modified_resume)}>
                    {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                    {copied ? "Copied" : "Copy"}
                  </Button>
                  <Button variant="outline" size="sm" onClick={downloadAsText}>
                    <Download className="h-4 w-4 mr-1" /> Download
                  </Button>
                </div>
              )}
            </CardHeader>
            <CardContent>
              {resume?.modified_resume ? (
                <div className="whitespace-pre-wrap bg-background border rounded p-4 font-mono max-h-[500px] overflow-y-auto text-sm">
                  {resume.modified_resume}
                </div>
              ) : isRefining ? (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
                  <p className="text-gray-700">Lucerna AI is tailoring your resume...</p>
                  <p className="text-sm text-gray-500 mt-2">This usually takes 15-30 seconds.</p>
                </div>
              ) : (
                <div className="text-center space-y-4 py-6">
                  <p>Your resume hasn't been tailored yet.</p>
                  <Button onClick={() => setManualTailoringRequested(true)} disabled={isRefining} className="btn-hover">
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

        <TabsContent value="job">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif">Job Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-wrap bg-background border rounded p-4 font-mono max-h-[500px] overflow-y-auto text-sm">
                {resume?.job_description}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

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
            score={resume.ats_score}
            description="How well your resume performs in Applicant Tracking Systems"
            icon={<CheckCircle className="h-5 w-5 text-success" />}
          />
          <ScoreCard
            title="Job Description Match"
            score={resume.jd_score}
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
                <Button
                  size="lg"
                  onClick={handleRefine}
                  disabled={isRefining}
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg relative group mr-4 btn-hover"
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
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Improve this version further with Lucerna AI's magic touch.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          {/* Add Preview Button */}
          <Button
            size="lg"
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg mr-4 btn-hover"
          >
            <Link href={`/dashboard/resume/${resumeId}/preview`}>
              <Eye className="h-5 w-5 mr-2" /> Preview
            </Link>
          </Button>

          {/* Add Save Resume Button */}
          <Button
            size="lg"
            onClick={handleSaveResume}
            className="bg-success hover:bg-success/90 text-white px-8 py-6 text-lg btn-hover"
          >
            <BookmarkPlus className="h-5 w-5 mr-2" /> Save Resume
          </Button>

          <p className="text-sm text-gray-500 mt-3 max-w-md text-center mx-auto">
            Lucerna remembers what you've improved — each version builds stronger.
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-12 pt-6 border-t">
        <Button variant="outline" asChild className="btn-hover">
          <Link href="/dashboard/history">← Back to History</Link>
        </Button>
        <Button asChild className="btn-hover">
          <Link href="/dashboard">Create New Resume</Link>
        </Button>
      </div>
    </>
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
