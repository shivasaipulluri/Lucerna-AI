"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { runTailoringAnalysis } from "@/app/dashboard/actions"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"
import { RefreshCw } from "lucide-react"

export function RefineResumeButton({ resumeId }: { resumeId: string }) {
  const [isRefining, setIsRefining] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

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
        resumeData.resume_text,
        resumeData.job_description,
        resumeId,
        true, // This is a refinement
      )

      if (result.success) {
        toast({
          title: "Refinement complete",
          description: `Your resume has been refined to version ${result.data?.version || "latest"}.`,
        })

        // Refresh the page to show the updated resume
        router.refresh()
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
    <Button onClick={handleRefine} disabled={isRefining} className="bg-indigo-600 hover:bg-indigo-700 text-white">
      {isRefining ? (
        <>
          <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
          Refining...
        </>
      ) : (
        <>
          <RefreshCw className="h-4 w-4 mr-2" />
          Refine Again
        </>
      )}
    </Button>
  )
}
