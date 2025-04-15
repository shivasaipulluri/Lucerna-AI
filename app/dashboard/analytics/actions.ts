"use server"

import { primaryPrisma as prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"

export async function getTailoringAnalytics() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: null }
    }

    // Check if the tailoring_analytics table exists
    try {
      const tableExists = await prisma.$queryRaw<{ exists: boolean }[]>`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'tailoring_analytics'
        );
      `

      // If table doesn't exist, return empty data
      if (!tableExists[0].exists) {
        console.log("tailoring_analytics table doesn't exist yet")
        return {
          success: true,
          data: {
            analytics: [],
            summary: {
              totalTailorings: 0,
              avgIterations: 0,
              avgAtsScore: 0,
              avgJdScore: 0,
              modeStats: {},
            },
          },
        }
      }

      console.log(`Fetching analytics for user: ${user.id} (${user.email})`)

      // Get analytics data using raw SQL to handle TEXT data types
      const analytics = await prisma.$queryRaw`
        SELECT 
          id, 
          user_id, 
          resume_id, 
          tailoring_mode, 
          iterations, 
          ats_score, 
          jd_score, 
          golden_passed, 
          created_at
        FROM tailoring_analytics
        WHERE user_id = ${user.id}::text
        ORDER BY created_at DESC
      `

      console.log(`Found ${(analytics as any[]).length} analytics entries`)

      // Add this debugging code to check the first few entries:
      if ((analytics as any[]).length > 0) {
        console.log("Sample analytics entry:", (analytics as any[])[0])
      }

      // Convert the raw data to the expected format
      const formattedAnalytics = (analytics as any[]).map((item) => ({
        id: item.id,
        user_id: item.user_id,
        resume_id: item.resume_id,
        tailoring_mode: item.tailoring_mode,
        iterations: item.iterations,
        ats_score: item.ats_score,
        jd_score: item.jd_score,
        golden_passed: item.golden_passed,
        created_at: item.created_at,
      }))

      // Calculate some aggregate statistics
      const totalTailorings = formattedAnalytics.length
      const avgIterations =
        totalTailorings > 0 ? formattedAnalytics.reduce((sum, item) => sum + item.iterations, 0) / totalTailorings : 0
      const avgAtsScore =
        totalTailorings > 0 ? formattedAnalytics.reduce((sum, item) => sum + item.ats_score, 0) / totalTailorings : 0
      const avgJdScore =
        totalTailorings > 0 ? formattedAnalytics.reduce((sum, item) => sum + item.jd_score, 0) / totalTailorings : 0

      // Group by tailoring mode
      const modeStats = formattedAnalytics.reduce(
        (acc, item) => {
          const mode = item.tailoring_mode
          if (!acc[mode]) {
            acc[mode] = {
              count: 0,
              avgIterations: 0,
              avgAtsScore: 0,
              avgJdScore: 0,
              goldenPassRate: 0,
            }
          }

          acc[mode].count++
          acc[mode].avgIterations += item.iterations
          acc[mode].avgAtsScore += item.ats_score
          acc[mode].avgJdScore += item.jd_score
          acc[mode].goldenPassRate += item.golden_passed ? 1 : 0

          return acc
        },
        {} as Record<string, any>,
      )

      // Calculate averages for each mode
      Object.keys(modeStats).forEach((mode) => {
        const stats = modeStats[mode]
        stats.avgIterations = stats.avgIterations / stats.count
        stats.avgAtsScore = stats.avgAtsScore / stats.count
        stats.avgJdScore = stats.avgJdScore / stats.count
        stats.goldenPassRate = (stats.goldenPassRate / stats.count) * 100
      })

      return {
        success: true,
        data: {
          analytics: formattedAnalytics,
          summary: {
            totalTailorings,
            avgIterations,
            avgAtsScore,
            avgJdScore,
            modeStats,
          },
        },
      }
    } catch (dbError) {
      console.error("Database error:", dbError)
      return { success: false, error: "Database error", data: null }
    }
  } catch (error) {
    console.error("Error fetching tailoring analytics:", error)
    return { success: false, error: "Failed to fetch analytics", data: null }
  }
}
