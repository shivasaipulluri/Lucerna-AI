import { NextResponse, type NextRequest } from "next/server"
import { modelPrisma } from "@/lib/model-prisma"
import { createClient } from "@/lib/supabase/server"
import { ensureModelUserExists, logResumeEventDirect } from "@/lib/model-logger"

export async function GET(request: NextRequest) {
  try {
    // Test database connection
    console.log("[MODEL DB TEST] Testing database connection...")
    const result = await modelPrisma.$queryRaw`SELECT 1 as test`
    console.log(`[MODEL DB TEST] Connection test result:`, result)

    // Check available tables
    const tables = await modelPrisma.$queryRaw`
      SELECT tablename FROM pg_catalog.pg_tables 
      WHERE schemaname = 'public'
    `
    console.log("[MODEL DB TEST] Available tables:", tables)

    // Get current user with proper request context
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()
    const user = data.user

    if (!user) {
      return NextResponse.json({
        success: false,
        error: "Not authenticated",
        dbConnectionWorking: result !== undefined,
        tables: tables,
      })
    }

    // Test user creation
    console.log(`[MODEL DB TEST] Testing user creation for ${user.id}`)
    const userCreated = await ensureModelUserExists(user.id, user.email || "")
    console.log(`[MODEL DB TEST] User creation result: ${userCreated ? "Success" : "Failed"}`)

    // Test event logging
    console.log(`[MODEL DB TEST] Testing event logging for ${user.id}`)
    const eventLogged = await logResumeEventDirect(user.id, {
      eventType: "test",
      resumeId: "test-resume-id",
    })
    console.log(`[MODEL DB TEST] Event logging result: ${eventLogged ? "Success" : "Failed"}`)

    return NextResponse.json({
      success: true,
      message: "Model database connection successful",
      tables: tables,
      userId: user.id,
      userCreated,
      eventLogged,
    })
  } catch (error) {
    console.error("[MODEL DB TEST ERROR]", error)
    return NextResponse.json({
      success: false,
      error: "Failed to connect to model database",
      details: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    })
  }
}
