import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { checkAndResetDailyUsage } from "./usage"

// Define the daily limits for free users
const FREE_TIER_LIMITS = {
  basic_tailoring: 5,
  personalized_tailoring: 3,
  cover_letter: 1,
}

export async function subscriptionMiddleware(
  request: NextRequest,
  handler: (req: NextRequest) => Promise<NextResponse>,
  feature: "basic_tailoring" | "personalized_tailoring" | "cover_letter",
) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 })
    }

    // Check and reset daily usage if needed
    await checkAndResetDailyUsage(user.id)

    // Get user subscription data
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        subscription_tier: true,
        is_premium: true,
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
        daily_cover_letters_used: true,
      },
    })

    if (!userData) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Check if user is premium
    const isPremium = userData.is_premium || userData.subscription_tier === "premium"

    // Premium users have unlimited access
    if (isPremium) {
      return handler(request)
    }

    // For free users, check the appropriate usage limit
    let currentUsage = 0
    let dailyLimit = 0

    switch (feature) {
      case "basic_tailoring":
        currentUsage = userData.daily_basic_tailorings_used
        dailyLimit = FREE_TIER_LIMITS.basic_tailoring
        break
      case "personalized_tailoring":
        currentUsage = userData.daily_personalized_tailorings_used
        dailyLimit = FREE_TIER_LIMITS.personalized_tailoring
        break
      case "cover_letter":
        currentUsage = userData.daily_cover_letters_used
        dailyLimit = FREE_TIER_LIMITS.cover_letter
        break
    }

    // Check if user has reached daily limit
    if (currentUsage >= dailyLimit) {
      return NextResponse.json(
        {
          error: "Daily limit reached",
          subscription: {
            current: "free",
            feature,
            limit: dailyLimit,
            used: currentUsage,
          },
        },
        { status: 403 },
      )
    }

    // If all checks pass, proceed with the handler
    return handler(request)
  } catch (error) {
    console.error("Subscription middleware error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
