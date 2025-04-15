import { primaryPrisma as prisma } from "@/lib/prisma"

// Updated FREE_TIER_LIMITS to 100 for all features
const FREE_TIER_LIMITS = {
  basic_tailoring: 100,
  personalized_tailoring: 100,
  cover_letter: 100,
  linkedin_optimization: 100, // Added LinkedIn optimization limit
  interview_coaching: 100, // Added interview coaching limit
}

/**
 * Checks and resets daily usage limits if needed
 * @param userId The user ID to check
 */
export async function checkAndResetDailyUsage(userId: string) {
  try {
    // Get user data
    const userData = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        daily_reset_date: true,
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
        daily_cover_letters_used: true,
        daily_linkedin_optimizations_used: true, // Added LinkedIn optimizations
        daily_interview_sessions_used: true, // Added interview sessions
      },
    })

    if (!userData) {
      throw new Error("User not found")
    }

    const now = new Date()

    // Check if we need to reset daily counters
    // Reset if:
    // 1. No reset date exists, or
    // 2. The reset date is from a previous day
    if (!userData.daily_reset_date || !isSameDay(userData.daily_reset_date, now)) {
      // Reset all daily counters
      await prisma.user.update({
        where: { id: userId },
        data: {
          daily_basic_tailorings_used: 0,
          daily_personalized_tailorings_used: 0,
          daily_cover_letters_used: 0,
          daily_linkedin_optimizations_used: 0, // Reset LinkedIn optimizations
          daily_interview_sessions_used: 0, // Reset interview sessions
          daily_reset_date: now,
        },
      })

      return {
        basic_tailorings_used: 0,
        personalized_tailorings_used: 0,
        cover_letters_used: 0,
        linkedin_optimizations_used: 0, // Return LinkedIn optimizations
        interview_sessions_used: 0, // Return interview sessions
        reset_performed: true,
      }
    }

    // No reset needed, return current usage
    return {
      basic_tailorings_used: userData.daily_basic_tailorings_used,
      personalized_tailorings_used: userData.daily_personalized_tailorings_used,
      cover_letters_used: userData.daily_cover_letters_used,
      linkedin_optimizations_used: userData.daily_linkedin_optimizations_used, // Return LinkedIn optimizations
      interview_sessions_used: userData.daily_interview_sessions_used, // Return interview sessions
      reset_performed: false,
    }
  } catch (error) {
    console.error("Error checking/resetting daily usage:", error)
    throw error
  }
}

/**
 * Increments usage for a specific feature
 * @param userId The user ID
 * @param feature The feature being used
 * @returns Success status and updated usage count
 */
export async function incrementUsage(
  userId: string,
  feature:
    | "basic_tailoring"
    | "personalized_tailoring"
    | "cover_letter"
    | "linkedin_optimization"
    | "interview_coaching",
) {
  try {
    // First check and reset if needed
    await checkAndResetDailyUsage(userId)

    // Get user data to check premium status
    const userData = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        is_premium: true,
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
        daily_cover_letters_used: true,
        daily_linkedin_optimizations_used: true, // Added LinkedIn optimizations
        daily_interview_sessions_used: true, // Added interview sessions
      },
    })

    if (!userData) {
      throw new Error("User not found")
    }

    // Skip incrementing for premium users
    if (userData.is_premium) {
      return {
        success: true,
        isPremium: true,
        usage: {
          basic_tailorings_used: userData.daily_basic_tailorings_used,
          personalized_tailorings_used: userData.daily_personalized_tailorings_used,
          cover_letters_used: userData.daily_cover_letters_used,
          linkedin_optimizations_used: userData.daily_linkedin_optimizations_used,
          interview_sessions_used: userData.daily_interview_sessions_used,
        },
      }
    }

    // For free users, increment the appropriate counter
    const updateData: any = {}

    switch (feature) {
      case "basic_tailoring":
        updateData.daily_basic_tailorings_used = { increment: 1 }
        break
      case "personalized_tailoring":
        updateData.daily_personalized_tailorings_used = { increment: 1 }
        break
      case "cover_letter":
        updateData.daily_cover_letters_used = { increment: 1 }
        break
      case "linkedin_optimization":
        updateData.daily_linkedin_optimizations_used = { increment: 1 }
        break
      case "interview_coaching":
        updateData.daily_interview_sessions_used = { increment: 1 }
        break
    }

    // Update the usage counter
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
        daily_cover_letters_used: true,
        daily_linkedin_optimizations_used: true,
        daily_interview_sessions_used: true,
      },
    })

    return {
      success: true,
      isPremium: false,
      usage: {
        basic_tailorings_used: updatedUser.daily_basic_tailorings_used,
        personalized_tailorings_used: updatedUser.daily_personalized_tailorings_used,
        cover_letters_used: updatedUser.daily_cover_letters_used,
        linkedin_optimizations_used: updatedUser.daily_linkedin_optimizations_used,
        interview_sessions_used: updatedUser.daily_interview_sessions_used,
      },
    }
  } catch (error) {
    console.error("Error incrementing usage:", error)
    return { success: false, error: "Failed to track usage" }
  }
}

/**
 * Helper function to check if two dates are on the same day
 */
function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  )
}
