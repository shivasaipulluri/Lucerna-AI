import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { debugPrismaConnections } from "@/utils/debug-prisma"

export async function GET() {
  try {
    // Test Supabase connection
    const supabase = await createClient()
    const { data: authData, error: authError } = await supabase.auth.getSession()

    // Test Prisma connections
    const prismaDebug = await debugPrismaConnections()

    // Get schema information
    const mainDbSchemaInfo = await prisma.$queryRaw`
      SELECT table_name, column_name, data_type 
      FROM information_schema.columns 
      WHERE table_schema = 'public'
      ORDER BY table_name, ordinal_position
    `

    // Check environment variables (redacted for security)
    const envCheck = {
      NEXT_PUBLIC_SUPABASE_URL: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      DATABASE_URL: !!process.env.DATABASE_URL,
      DIRECT_URL: !!process.env.DIRECT_URL,
      MODEL_DATABASE_URL: !!process.env.MODEL_DATABASE_URL,
    }

    return NextResponse.json({
      timestamp: new Date().toISOString(),
      supabase: {
        connected: !authError,
        sessionExists: !!authData.session,
        error: authError ? authError.message : null,
      },
      prisma: prismaDebug,
      mainDbSchema: mainDbSchemaInfo,
      environment: envCheck,
    })
  } catch (error) {
    console.error("Diagnostic API error:", error)
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 },
    )
  }
}
