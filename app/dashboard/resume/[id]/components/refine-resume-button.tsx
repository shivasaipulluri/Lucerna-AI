"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useResumeAnalytics } from "@/hooks/useResumeAnalytics"
import { useToast } from "@/components/ui/use-toast"
import { RefreshCw, Sparkles } from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface RefineResumeButtonProps {
  resumeId: string
}

export function RefineResumeButton({ resumeId }: RefineResumeButtonProps) {
  const [isRefining, setIsRefining] = useState(false)
  const { toast } = useToast()
  const { runTailoringAnalysis } = useResumeAnalytics()

  const handleRefine = async () => {
    if (!resumeId || isRefining) return

    setIsRefining(true)
    toast({
      title: "Refinement started",
      description: "We're optimizing your resume further. This may take a moment.",
    })

    try {
      // First, get the current resume details
      const response = await fetch(`/api/resumes/${resumeId}`)
      if (!response.ok) {
        throw new Error("Failed to fetch resume details")
      }

      const resumeData = await response.json()

      // Run the tailoring analysis with the current resume as the base
      const result = await runTailoringAnalysis(
        resumeId,
        resumeData.resume_text,
        resumeData.job_description,
        resumeData.tailoring_mode || "basic",
        true // This is a refinement
      )

      if (result.success) {
        toast({
          title: "Refinement complete",
          description: `Your resume has been refined to version ${result.data?.version || "latest"}.`,
        })
      } else {
        throw new Error(result.error || "Failed to refine resume")
      }
    } catch (error: any) {
      console.error("Error refining resume:", error)
      toast({
        title: "Refinement failed",
        description: error.message || "An error occurred while refining your resume.",
        variant: "destructive",
      })
    } finally {
      setIsRefining(false)
    }
  }

  return (
    <div className="text-center my-8">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="lg"
              onClick={handleRefine}
              disabled={isRefining}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg relative group btn-hover"
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

      <p className="text-sm text-gray-500 mt-3 max-w-md text-center mx-auto">
        Lucerna remembers what you've improved — each version builds stronger.
      </p>
    </div>
  )
}
