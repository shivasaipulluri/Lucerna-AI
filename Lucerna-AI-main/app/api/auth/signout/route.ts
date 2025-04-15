// app/api/auth/signout/route.ts
import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import { logAuthEvent } from "@/lib/model-logger"

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Get the user before signing out
    const { data: userData } = await supabase.auth.getUser()
    const userId = userData.user?.id

    // Sign out the user
    const { error } = await supabase.auth.signOut()

    if (error) {
      console.error("Signout error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Log the logout event if we have a user ID
    if (userId) {
      try {
        await logAuthEvent(userId, "logout", {
          timestamp: new Date().toISOString(),
        })
        console.log(`[MODEL LOG] Logout event logged for user: ${userId}`)
      } catch (modelError) {
        console.error(`[MODEL DB ERROR] Failed to log logout event:`, modelError)
      }
    }

    return NextResponse.json({
      message: "Signed out successfully",
    })
  } catch (error) {
    console.error("Signout route error:", error)
    return NextResponse.json({ error: "An error occurred during sign out" }, { status: 500 })
  }
}
