"use server"

import { modelPrisma } from "@/lib/model-prisma"
import { createClient } from "@/lib/supabase/server"

// Define the types for the event and interaction objects
interface ResumeEvent {
  id: string
  event_type: string
  timestamp: Date
  resume_id?: string
}

export interface InteractionMetadata {
  resumeId?: string
  version?: number
  format?: 'pdf' | 'docx' | 'txt'
  error?: string
  metadata?: Record<string, unknown>
}

interface Interaction {
  id: string
  action: string
  element: string
  timestamp: Date
  metadata?: InteractionMetadata
}

interface AnalyticsData {
  counts: {
    users: number
    resumeEvents: number
    interactions: number
  }
  recentResumeEvents: ResumeEvent[]
  recentInteractions: Interaction[]
  eventTypeDistribution: Array<{
    event_type: string
    count: number
  }>
}

export async function getAnalyticsData() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated", data: null }
    }

    // Test database connection first
    try {
      await modelPrisma.$queryRaw`SELECT 1`
    } catch (dbError) {
      console.error("Database connection error:", dbError)
      return { 
        success: false, 
        error: "Database connection failed", 
        data: null,
        details: dbError instanceof Error ? dbError.stack : undefined
      }
    }
    
    // Get counts from the model database
    const [userCount, resumeEventCount, interactionCount] = await Promise.all([
      modelPrisma.user.count(),
      modelPrisma.resumeEvent.count(),
      modelPrisma.interaction.count()
    ])

    // Get recent resume events
    const recentResumeEvents = await modelPrisma.resumeEvent.findMany({
      take: 10,
      orderBy: {
        timestamp: "desc",
      },
    }) as ResumeEvent[]

    // Get recent interactions
    const recentInteractions = await modelPrisma.interaction.findMany({
      take: 10,
      orderBy: {
        timestamp: "desc",
      },
    }) as Interaction[]

    // Get event type distribution
    const eventTypeDistribution = await modelPrisma.$queryRaw<{ event_type: string; count: number }[]>` 
      SELECT "event_type", COUNT(*) as count
      FROM "resume_events"
      GROUP BY "event_type"
      ORDER BY count DESC
    `

    return {
      success: true,
      data: {
        counts: {
          users: userCount,
          resumeEvents: resumeEventCount,
          interactions: interactionCount,
        },
        recentResumeEvents,
        recentInteractions,
        eventTypeDistribution,
      } as AnalyticsData
    }
  } catch (error) {
    console.error("Error fetching analytics data:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch analytics data",
      data: null,
      details: error instanceof Error ? error.stack : undefined,
    }
  }
} 