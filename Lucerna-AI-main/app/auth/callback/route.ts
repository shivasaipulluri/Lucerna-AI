// app/auth/callback/route.ts
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { ensureUserExists } from "@/lib/ensure-user"
import { ensureModelUserExists, logAuthEvent } from "@/lib/model-logger"

export async function GET(request: Request) {
  try {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get("code")
    const next = requestUrl.searchParams.get("next") || "/dashboard"

    // If there's no code, this isn't an OAuth callback
    if (!code) {
      return NextResponse.redirect(new URL(`/auth?error=missing_code&next=${next}`, requestUrl.origin))
    }

    const supabase = await createClient()

    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Auth callback error:", error)
      return NextResponse.redirect(new URL(`/auth?error=${error.message}&next=${next}`, requestUrl.origin))
    }

    // Ensure the user exists in our database
    if (data?.user) {
      try {
        await ensureUserExists(data.user.id, data.user.email || "")

        // Ensure user exists in model database
        try {
          await ensureModelUserExists(data.user.id, data.user.email || "")
          console.log(`[MODEL DB] User synced on auth callback: ${data.user.id}`)

          // Log login event
          await logAuthEvent(data.user.id, "login", {
            method: "oauth",
            email: data.user.email,
            timestamp: new Date().toISOString(),
          })

          console.log(`[MODEL LOG] Login event logged for user: ${data.user.id}`)
        } catch (modelError) {
          console.error(`[MODEL DB ERROR] Failed to sync user or log login on auth callback:`, modelError)
        }
      } catch (dbError) {
        console.error("Error ensuring user in database:", dbError)
        // Continue anyway, as the user is authenticated
      }
    }

    // Create a response with the redirect
    const response = NextResponse.redirect(new URL(next, requestUrl.origin))

    // Set cache control headers to prevent caching
    response.headers.set("Cache-Control", "no-store, max-age=0")

    // Log the successful authentication and redirect
    console.log(`Authentication successful for user: ${data?.user?.id}. Redirecting to: ${next}`)

    return response
  } catch (error) {
    console.error("Auth callback error:", error)
    const requestUrl = new URL(request.url)
    return NextResponse.redirect(new URL("/auth?error=callback_error", requestUrl.origin))
  }
}
