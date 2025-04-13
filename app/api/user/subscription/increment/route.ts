import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { incrementUsage } from "@/lib/subscription/usage"

export async function POST(request: Request) {
  try {
    const supabase = await createClient() // Now awaiting createClient
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (!user || userError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get the feature from the request body
    const body = await request.json()
    const { feature } = body

    if (!feature) {
      return NextResponse.json({ error: "Feature is required" }, { status: 400 })
    }

    // Validate feature
    if (!["basic_tailoring", "personalized_tailoring", "cover_letter"].includes(feature)) {
      return NextResponse.json({ error: "Invalid feature" }, { status: 400 })
    }

    // Increment usage
    const result = await incrementUsage(user.id, feature)

    if (!result.success) {
      return NextResponse.json({ error: result.error || "Failed to increment usage" }, { status: 500 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Error incrementing user subscription usage:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
