import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { extractTextFromPDFBuffer } from "@/lib/parsing/serverPdfParser"

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

    // Get the form data from the request
    const formData = await request.formData()
    const file = formData.get("resume") as File | null

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 })
    }

    // Check if file is a PDF
    if (file.type !== "application/pdf") {
      return NextResponse.json({ success: false, error: "File must be a PDF" }, { status: 400 })
    }

    // Check file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    if (file.size > maxSize) {
      return NextResponse.json(
        {
          success: false,
          error: "File size exceeds the 10MB limit",
        },
        { status: 400 },
      )
    }

    // Convert the file to a buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Extract text from the PDF
    const text = await extractTextFromPDFBuffer(buffer)

    return NextResponse.json({
      success: true,
      text,
    })
  } catch (error) {
    console.error("Error parsing resume PDF:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
