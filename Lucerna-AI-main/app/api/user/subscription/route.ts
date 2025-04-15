import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import { checkAndResetDailyUsage } from "@/lib/subscription/usage"

// Define the daily limits for free users
const FREE_TIER_LIMITS = {
  basic_tailoring: 5,
  personalized_tailoring: 3,
  cover_letter: 1,
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

    try {
      // Check and reset daily usage if needed
      await checkAndResetDailyUsage(user.id)

      // Get user subscription data
      const userData = await prisma.user.findUnique({
        where: { id: user.id },
        select: {
          subscription_tier: true,
          subscription_end_date: true,
          daily_basic_tailorings_used: true,
          daily_personalized_tailorings_used: true,
          daily_cover_letters_used: true,
          daily_reset_date: true,
          is_premium: true,
        },
      })

      if (!userData) {
        return NextResponse.json({ error: "User not found" }, { status: 404 })
      }

      // Calculate days remaining in subscription
      let daysRemaining = null
      if (userData.subscription_end_date) {
        const endDate = new Date(userData.subscription_end_date)
        const now = new Date()
        const diffTime = endDate.getTime() - now.getTime()
        daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      }

      // Determine if user is premium
      const isPremium =
        userData.is_premium || (userData.subscription_tier === "premium" && daysRemaining !== null && daysRemaining > 0)

      // Calculate time until reset (for free users)
      let hoursUntilReset = null
      if (!isPremium && userData.daily_reset_date) {
        const resetDate = new Date(userData.daily_reset_date)
        resetDate.setDate(resetDate.getDate() + 1) // Next day reset
        resetDate.setHours(0, 0, 0, 0) // Start of next day

        const now = new Date()
        const diffMs = resetDate.getTime() - now.getTime()
        hoursUntilReset = Math.ceil(diffMs / (1000 * 60 * 60))
      }

      return NextResponse.json({
        success: true,
        tier: isPremium ? "premium" : "free",
        isPremium,
        usage: {
          basic_tailorings_used: userData.daily_basic_tailorings_used || 0,
          personalized_tailorings_used: userData.daily_personalized_tailorings_used || 0,
          cover_letters_used: userData.daily_cover_letters_used || 0,
        },
        hoursUntilReset,
        daysRemaining,
        resetDate: userData.daily_reset_date,
      })
    } catch (dbError) {
      console.error("Database error:", dbError)

      // Return default values if there's a database error
      return NextResponse.json({
        success: true,
        tier: "free",
        isPremium: false,
        usage: {
          basic_tailorings_used: 0,
          personalized_tailorings_used: 0,
          cover_letters_used: 0,
        },
        hoursUntilReset: null,
        daysRemaining: null,
        resetDate: null,
      })
    }
  } catch (error) {
    console.error("Error fetching user subscription:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
