"use server"

import { primaryPrisma as prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { logInteractionDirect } from "@/lib/model-logger"
import { revalidatePath } from "next/cache"

/**
 * Gets the resume history for the current user.
 * @returns Object containing success status and either the resume history or error message.
 */
export async function getResumeHistoryAction() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get all resumes for this user
    const resumes = await prisma.resume.findMany({
      where: {
        user_id: user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    // Log the interaction of viewing resume history
    try {
      await logInteractionDirect(user.id, {
        action: "view",
        element: "resume-history",
        metadata: {
          count: resumes.length,
          timestamp: new Date().toISOString(),
        },
      })
    } catch (error) {
      console.error("[MODEL DB ERROR] Failed to log resume history view:", error)
    }

    revalidatePath("/dashboard/history")

    return { success: true, data: resumes }
  } catch (error) {
    console.error("Error fetching resume history:", error)
    return { success: false, error: "Failed to fetch resume history", data: null }
  }
}
