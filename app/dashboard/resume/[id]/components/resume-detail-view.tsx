import { Suspense } from "react"
import { ResumeLabClient } from "./resume-lab-client"
import { getResumeById } from "@/app/dashboard/actions"
import { notFound } from "next/navigation"

export async function ResumeDetailView({ resumeId }: { resumeId: string }) {
  const result = await getResumeById(resumeId)

  if (!result.success || !result.data) {
    return notFound()
  }

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto space-y-8">
      <Suspense fallback={<ResumeLabSkeleton />}>
        <ResumeLabClient resume={result.data} resumeId={resumeId} />
      </Suspense>
    </div>
  )
}

function ResumeLabSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      <div className="h-24 bg-gray-100 rounded-lg"></div>
      <div className="h-12 bg-gray-100 rounded-lg"></div>
      <div className="h-96 bg-gray-100 rounded-lg"></div>
      <div className="h-48 bg-gray-100 rounded-lg"></div>
      <div className="h-16 bg-gray-100 rounded-lg"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-48 bg-gray-100 rounded-lg"></div>
        ))}
      </div>
    </div>
  )
}
