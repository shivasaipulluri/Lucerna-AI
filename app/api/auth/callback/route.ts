import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { ensureUserExists } from "@/lib/ensure-user"

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/"

  if (code) {
    const requestUrl = new URL(request.url)
    const supabase = await createClient()

    console.log("Callback - Exchanging code for session")
    // Exchange the code for a session
    const { data, error } = await supabase.auth.exchangeCodeForSession(code)

    if (error) {
      console.error("Auth callback error:", error)
      return NextResponse.redirect(new URL(`/auth?error=${error.message}&next=${next}`, requestUrl.origin))
    }

    console.log("Callback - Session data:", data)

    // Ensure the user exists in our database
    if (data?.user) {
      try {
        await ensureUserExists(data.user.id, data.user.email || "")
      } catch (dbError) {
        console.error("Error ensuring user in database:", dbError)
      }
    }

    console.log("Callback - Redirecting to:", next)
    // Create a response with the redirect
    let response = NextResponse.redirect(new URL(next, requestUrl.origin))

    // Set the session cookies
    if (data?.session) {
      const { access_token, refresh_token, expires_in } = data.session
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax" as const, // Ensure sameSite is one of the allowed values
        maxAge: expires_in,
        path: "/",
      }

      response.cookies.set("sb-access-token", access_token, cookieOptions)
      response.cookies.set("sb-refresh-token", refresh_token, cookieOptions)
    }

    return response
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL("/auth/error", origin))
}
