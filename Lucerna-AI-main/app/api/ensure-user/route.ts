import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"

export async function POST(req: Request) {
  try {
    const { id, email } = await req.json()

    if (!id || !email) {
      return NextResponse.json({ error: "User ID and email are required" }, { status: 400 })
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { id },
    })

    // If user doesn't exist, create them
    if (!existingUser) {
      console.log(`Creating new user in database via API: ${id} (${email})`)
      await prisma.user.create({
        data: {
          id,
          email,
          is_premium: false,
          tailoring_mode: "personalized", // Default tailoring mode
        },
      })
      console.log(`User created successfully: ${id}`)
      return NextResponse.json({ success: true, created: true })
    } else {
      console.log(`User already exists in database: ${id}`)
      return NextResponse.json({ success: true, created: false })
    }
  } catch (error) {
    console.error("Error in ensure-user API:", error)
    return NextResponse.json({ error: "Failed to ensure user exists" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const supabase = await createClient() // Now awaiting createClient
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (!user || userError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Rest of the function remains the same
    // ...
  } catch (error) {
    console.error("Error ensuring user exists:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
