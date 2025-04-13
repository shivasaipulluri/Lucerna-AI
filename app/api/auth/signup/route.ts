// app/api/auth/signup/route.ts
import { createClient } from "@/lib/supabase/server"
import { type NextRequest, NextResponse } from "next/server"
import { ensureUserExists } from "@/lib/ensure-user"
import { ensureModelUserExists } from "@/lib/model-logger" // Import the direct function

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const supabase = await createClient()

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
      },
    })

    if (error) {
      console.error("Signup error:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    if (data.user) {
      try {
        // Ensure user exists in main database
        await ensureUserExists(data.user.id, data.user.email || "")

        // Ensure user exists in model database
        try {
          await ensureModelUserExists(data.user.id, data.user.email || "")
          console.log(`[MODEL DB] User synced on signup: ${data.user.id}`)
        } catch (modelError) {
          console.error(`[MODEL DB ERROR] Failed to sync user on signup:`, modelError)
        }
      } catch (dbError) {
        console.error("Error ensuring user in database:", dbError)
      }
    }

    return NextResponse.json({
      message: "Check your email for the confirmation link",
      user: data.user,
    })
  } catch (error) {
    console.error("Signup route error:", error)
    return NextResponse.json({ error: "An error occurred during sign up" }, { status: 500 })
  }
}
