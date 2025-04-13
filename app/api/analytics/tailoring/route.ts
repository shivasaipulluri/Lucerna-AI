import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

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

    // Check if the user is an admin (you can implement your own admin check)
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: { is_premium: true },
    })

    // For now, only allow premium users to access analytics
    if (!userData?.is_premium) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 })
    }

    // Get analytics data
    const analytics = await prisma.tailoringAnalytics.findMany({
      where: {
        user_id: user.id, // Only get analytics for the current user
      },
      orderBy: {
        created_at: "desc",
      },
    })

    // Calculate some aggregate statistics
    const totalTailorings = analytics.length
    const avgIterations =
      totalTailorings > 0 ? analytics.reduce((sum, item) => sum + item.iterations, 0) / totalTailorings : 0
    const avgAtsScore =
      totalTailorings > 0 ? analytics.reduce((sum, item) => sum + item.ats_score, 0) / totalTailorings : 0
    const avgJdScore =
      totalTailorings > 0 ? analytics.reduce((sum, item) => sum + item.jd_score, 0) / totalTailorings : 0

    // Group by tailoring mode
    const modeStats = analytics.reduce(
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

    return NextResponse.json({
      success: true,
      data: {
        analytics,
        summary: {
          totalTailorings,
          avgIterations,
          avgAtsScore,
          avgJdScore,
          modeStats,
        },
      },
    })
  } catch (error) {
    console.error("Error fetching tailoring analytics:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
