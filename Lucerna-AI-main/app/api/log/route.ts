import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { logInteractionSafe, logResumeEventSafe } from "@/lib/model/helpers"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { type, data } = body

    // Get the authenticated user
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ success: false, error: "User not authenticated" }, { status: 401 })
    }

    // Use the user ID from the authenticated user if not provided
    const userId = data.userId || user.id

    // Log the event using our safe helpers
    if (type === "resume_event") {
      await logResumeEventSafe(
        { id: userId, email: user.email },
        {
          eventType: data.eventType || "unknown",
          resumeId: data.resumeId,
          resumeText: data.resumeText,
          jobDescription: data.jobDescription,
          tailoredText: data.tailoredText,
          atsScore: data.atsScore,
          jdScore: data.jdScore,
          tailoringMode: data.tailoringMode,
          version: data.version,
        },
      )
    } else if (type === "interaction") {
      await logInteractionSafe(
        { id: userId, email: user.email },
        {
          action: data.action || "unknown",
          element: data.element || "unknown",
          metadata: data.metadata || {},
        },
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error logging event:", error)
    return NextResponse.json({ success: false, error: "Failed to log event" }, { status: 500 })
  }
}
