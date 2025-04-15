"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { createClient } from "@/lib/supabase/server"
import { logResumeEventSafe } from "@/lib/model/helpers"

/**
 * Submits a resume and job description for tailoring analysis.
 * Also logs the event to the model database for analytics.
 */
export async function submitResumeWithAnalytics(resumeText: string, jobDescription: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    console.log("Creating resume for user:", user.id)

    // Create a new resume in the main database
    const resume = await prisma.resume.create({
      data: {
        user_id: user.id,
        resume_text: resumeText,
        job_description: jobDescription,
      },
    })

    // Log the event to the model database for analytics using our safe helper
    await logResumeEventSafe(
      { id: user.id, email: user.email },
      {
        eventType: "resume_submission",
        resumeId: resume.id,
        resumeText: resumeText,
        jobDescription: jobDescription,
      },
    )

    console.log("Resume created successfully:", resume.id)
    revalidatePath("/dashboard")

    return { success: true, message: "Resume submitted successfully", data: { id: resume.id } }
  } catch (error) {
    console.error("Error submitting resume:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit resume",
      details: error instanceof Error ? error.stack : undefined,
    }
  }
}
