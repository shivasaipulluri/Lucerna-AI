import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"

export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse.next()

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return request.cookies.get(name)?.value
          },
          set(name, value, options) {
            response.cookies.set(name, value, options)
          },
          remove(name, options) {
            response.cookies.delete(name, options)
          },
        },
      },
    )

    const { data } = await supabase.auth.getSession()
    const session = data.session
    const path = request.nextUrl.pathname

    // Allow public paths and API routes
    if (path.startsWith("/auth/callback") || path.startsWith("/_next") || path.startsWith("/api/") || path === "/") {
      return response
    }

    // Redirect unauthenticated users to auth page
    if (!session && path.startsWith("/dashboard")) {
      const redirectUrl = new URL("/auth", request.url)
      redirectUrl.searchParams.set("redirect", path)
      return NextResponse.redirect(redirectUrl)
    }

    // Redirect authenticated users away from auth page
    if (session && path === "/auth") {
      return NextResponse.redirect(new URL("/dashboard", request.url))
    }

    return response
  } catch (error) {
    console.error("Middleware error:", error)
    // Return the original response if there's an error to prevent blocking the request
    return NextResponse.next()
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
