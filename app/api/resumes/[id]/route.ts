import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    // In Next.js 14+, params needs to be properly awaited
    const resolvedParams = await Promise.resolve(params)
    const resumeId = resolvedParams.id

    if (!resumeId) {
      return NextResponse.json({ error: "Resume ID is required" }, { status: 400 })
    }

    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // Get the resume
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 })
    }

    return NextResponse.json(resume)
  } catch (error) {
    console.error("Error fetching resume:", error)
    
    // Handle specific error cases
    if (error instanceof Error) {
      if (error.message.includes('prisma')) {
        return NextResponse.json({ error: "Database error occurred" }, { status: 500 })
      }
      if (error.message.includes('network')) {
        return NextResponse.json({ error: "Network error occurred" }, { status: 503 })
      }
    }
    
    return NextResponse.json({ error: "Failed to fetch resume" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (!user || userError) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const resumeId = params.id
    if (!resumeId) {
      return NextResponse.json({ error: "Resume ID is required" }, { status: 400 })
    }

    const body = await request.json()
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Validate required fields
    const { modified_resume, version, ats_score, jd_score } = body
    if (!modified_resume || !version || ats_score === undefined || jd_score === undefined) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Update the resume
    const updatedResume = await prisma.resume.update({
      where: {
        id: resumeId,
        user_id: user.id,
      },
      data: {
        modified_resume,
        version,
        ats_score,
        jd_score,
        updated_at: new Date(),
      },
    })

    return NextResponse.json(updatedResume)
  } catch (error) {
    console.error("Error updating resume:", error)
    
    if (error instanceof Error) {
      if (error.message.includes('prisma')) {
        return NextResponse.json({ error: "Database error occurred" }, { status: 500 })
      }
      if (error.message.includes('network')) {
        return NextResponse.json({ error: "Network error occurred" }, { status: 503 })
      }
    }
    
    return NextResponse.json({ error: "Failed to update resume" }, { status: 500 })
  }
}
