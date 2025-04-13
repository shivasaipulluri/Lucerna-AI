"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Plus } from "lucide-react"

export default function HistoryHeader() {
  // Handle new resume button click
  const handleNewResume = () => {
    // Force a hard navigation to ensure we get a fresh page
    window.location.href = "/dashboard"
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link
          href="/dashboard"
          className="text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Dashboard</span>
        </Link>

        <Button onClick={handleNewResume} className="btn-hover">
          <Plus className="h-4 w-4 mr-2" />
          <span>New Resume</span>
        </Button>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-gray-900 font-serif">Your Resume Journey</h1>
        <p className="mt-2 text-gray-600">Track your progress and see how your resume has evolved over time.</p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-glow border border-blue-100 rounded-lg p-4 md:p-6 text-center shadow-soft">
        <p className="text-gray-700 italic font-serif">
          "Every revision is a reflection of growth. Let your story evolve, one version at a time."
        </p>
        <p className="text-gray-500 text-sm mt-1">— Lucerna AI</p>
      </div>
    </div>
  )
}
