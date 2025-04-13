import { Suspense } from "react"
import { getResumeById } from "@/app/dashboard/actions"
import { notFound } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import TailoredPreview from "../components/tailored-preview"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default async function ResumePreviewPage({
  params,
}: {
  params: { id: string }
}) {
  // Get the resume ID from the URL params
  const resolvedParams = await Promise.resolve(params)
  const resumeId = resolvedParams.id

  // Fetch the resume data
  const result = await getResumeById(resumeId)

  // If the resume doesn't exist or there was an error, show the not found page
  if (!result.success || !result.data) {
    return notFound()
  }

  const resume = result.data

  // If the resume hasn't been tailored yet, redirect to the resume page
  if (!resume.modified_resume) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 container py-8 max-w-5xl mx-auto">
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Resume Not Tailored Yet</h1>
            <p className="mb-6 text-gray-600">This resume hasn't been tailored yet. Please tailor it first.</p>
            <Button asChild>
              <Link href={`/dashboard/resume/${resumeId}`}>Go to Resume</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8 max-w-5xl mx-auto">
        <div className="mb-6">
          <Button variant="outline" asChild>
            <Link href={`/dashboard/resume/${resumeId}`} className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Resume
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl font-bold mb-6">Resume Preview</h1>

        <Suspense fallback={<div>Loading preview...</div>}>
          <TailoredPreview
            modifiedResume={resume.modified_resume}
            originalResume={resume.resume_text}
            atsScore={resume.ats_score}
            jdScore={resume.jd_score}
            version={resume.version}
            tailoringMode={resume.tailoring_mode || "personalized"}
          />
        </Suspense>
      </main>
    </div>
  )
}
