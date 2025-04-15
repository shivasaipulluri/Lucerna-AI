import { NavBar } from "@/components/nav-bar"
import { ResumeDetailView } from "./components/resume-detail-view"
import { Suspense } from "react"

export default async function ResumeDetailPage({
  params,
}: {
  params: { id: string }
}) {
  // In Next.js, params needs to be properly awaited
  const resolvedParams = await Promise.resolve(params)
  const resumeId = resolvedParams.id

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <Suspense fallback={<div className="px-6 py-10 max-w-5xl mx-auto text-center">Loading resume details...</div>}>
          <ResumeDetailView resumeId={resumeId} />
        </Suspense>
      </main>
    </div>
  )
}
