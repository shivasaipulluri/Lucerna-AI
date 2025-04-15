import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function middleware(request: NextRequest) {
  const supabase = await createClient()

  // Get the user from the session
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Check if the user is an admin (you would need to implement this check)
  const isAdmin = user && (await isUserAdmin(user.id))

  // If the user is not an admin, redirect to the home page
  if (!isAdmin) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

// This function would check if the user is an admin
async function isUserAdmin(userId: string): Promise<boolean> {
  // Implement your admin check logic here
  // For example, you could check if the user has an admin role in your database
  return false // Replace with your actual implementation
}

export const config = {
  matcher: ["/admin/:path*"],
}
