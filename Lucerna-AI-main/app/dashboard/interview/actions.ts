"use server"

import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { logInteractionDirect } from "@/lib/model-logger"

// Define the InterviewSettings type to match our schema
type InterviewSettings = {
  id: string
  user_id: string
  job_title: string
  job_description: string
  difficulty: string
  mode: string
  created_at: Date
  updated_at: Date
}

/**
 * Saves the interview settings for a user
 * @param settings The interview settings to save
 * @returns Object containing success status and either a success message or an error message
 */
export async function saveInterviewSettings(settings: {
  jobTitle: string
  jobDescription: string
  difficulty: string
  mode: string
}) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated" }
    }

    // Check if the user already has interview settings
    // Use type assertion to tell TypeScript that interviewSettings exists
    const existingSettings = await (prisma as any).interviewSettings.findFirst({
      where: {
        user_id: user.id,
      },
    })

    if (existingSettings) {
      // Update existing settings
      await (prisma as any).interviewSettings.update({
        where: {
          id: existingSettings.id,
        },
        data: {
          job_title: settings.jobTitle,
          job_description: settings.jobDescription,
          difficulty: settings.difficulty,
          mode: settings.mode,
          updated_at: new Date(),
        },
      })
    } else {
      // Create new settings
      await (prisma as any).interviewSettings.create({
        data: {
          user_id: user.id,
          job_title: settings.jobTitle,
          job_description: settings.jobDescription,
          difficulty: settings.difficulty,
          mode: settings.mode,
        },
      })
    }

    // Log the interaction
    try {
      await logInteractionDirect(user.id, {
        action: "save",
        element: "interview-settings",
        metadata: {
          jobTitle: settings.jobTitle,
          difficulty: settings.difficulty,
          mode: settings.mode,
          timestamp: new Date().toISOString(),
        },
      })
    } catch (error) {
      console.error("[MODEL DB ERROR] Failed to log interview settings save:", error)
    }

    revalidatePath("/dashboard/interview")

    return { success: true, message: "Interview settings saved successfully" }
  } catch (error) {
    console.error("Error saving interview settings:", error)
    return { success: false, error: "Failed to save interview settings" }
  }
}

/**
 * Gets the interview settings for a user
 * @returns Object containing success status and either the interview settings or an error message
 */
export async function getInterviewSettings() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get the interview settings
    // Use type assertion to tell TypeScript that interviewSettings exists
    const settings = (await (prisma as any).interviewSettings.findFirst({
      where: {
        user_id: user.id,
      },
    })) as InterviewSettings | null

    // Log the interaction
    try {
      await logInteractionDirect(user.id, {
        action: "view",
        element: "interview-settings",
        metadata: {
          hasSettings: !!settings,
          timestamp: new Date().toISOString(),
        },
      })
    } catch (error) {
      console.error("[MODEL DB ERROR] Failed to log interview settings view:", error)
    }

    return { success: true, data: settings }
  } catch (error) {
    console.error("Error getting interview settings:", error)
    return { success: false, error: "Failed to get interview settings", data: null }
  }
}
