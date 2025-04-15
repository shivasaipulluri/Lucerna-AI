import { prisma } from "@/lib/prisma"

/**
 * Checks and resets daily usage limits if needed
 * @param userId The user ID to check
 */
export async function checkAndResetDailyUsage(userId: string) {
  try {
    // First, check if the user exists
    const userExists = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    })

    if (!userExists) {
      throw new Error("User not found")
    }

    // Try to get the user's daily usage data
    try {
      // Get user data
      const userData = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          daily_reset_date: true,
          daily_basic_tailorings_used: true,
          daily_personalized_tailorings_used: true,
          daily_cover_letters_used: true,
        },
      })

      const now = new Date()

      // Check if we need to reset daily counters
      // Reset if:
      // 1. No reset date exists, or
      // 2. The reset date is from a previous day
      if (!userData?.daily_reset_date || !isSameDay(userData.daily_reset_date, now)) {
        // Reset all daily counters
        await prisma.user.update({
          where: { id: userId },
          data: {
            daily_basic_tailorings_used: 0,
            daily_personalized_tailorings_used: 0,
            daily_cover_letters_used: 0,
            daily_reset_date: now,
          },
        })

        return {
          basic_tailorings_used: 0,
          personalized_tailorings_used: 0,
          cover_letters_used: 0,
          reset_performed: true,
        }
      }

      // No reset needed, return current usage
      return {
        basic_tailorings_used: userData.daily_basic_tailorings_used,
        personalized_tailorings_used: userData.daily_personalized_tailorings_used,
        cover_letters_used: userData.daily_cover_letters_used,
        reset_performed: false,
      }
    } catch (error) {
      // If there's an error, it might be because the fields don't exist yet
      console.error("Error checking daily usage, attempting to add fields:", error)

      // Try to add the fields if they don't exist
      try {
        await prisma.$executeRaw`
          ALTER TABLE "users" 
          ADD COLUMN IF NOT EXISTS "daily_basic_tailorings_used" INTEGER NOT NULL DEFAULT 0,
          ADD COLUMN IF NOT EXISTS "daily_personalized_tailorings_used" INTEGER NOT NULL DEFAULT 0,
          ADD COLUMN IF NOT EXISTS "daily_cover_letters_used" INTEGER NOT NULL DEFAULT 0,
          ADD COLUMN IF NOT EXISTS "daily_reset_date" TIMESTAMP WITH TIME ZONE;
          
          -- Add subscription_tier and subscription_end_date fields
          ALTER TABLE "users"
          ADD COLUMN IF NOT EXISTS "subscription_tier" TEXT,
          ADD COLUMN IF NOT EXISTS "subscription_end_date" TIMESTAMP WITH TIME ZONE;
        `

        console.log("Added missing daily usage fields to users table")

        // Set initial values
        await prisma.user.update({
          where: { id: userId },
          data: {
            daily_basic_tailorings_used: 0,
            daily_personalized_tailorings_used: 0,
            daily_cover_letters_used: 0,
            daily_reset_date: new Date(),
          },
        })

        return {
          basic_tailorings_used: 0,
          personalized_tailorings_used: 0,
          cover_letters_used: 0,
          reset_performed: true,
        }
      } catch (addFieldsError) {
        console.error("Failed to add missing fields:", addFieldsError)
        throw addFieldsError
      }
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
  feature: "basic_tailoring" | "personalized_tailoring" | "cover_letter",
) {
  try {
    // First check and reset if needed
    await checkAndResetDailyUsage(userId)

    // Get user data to check premium status
    const userData = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        is_premium: true,
        subscription_tier: true,
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
        daily_cover_letters_used: true,
      },
    })

    if (!userData) {
      throw new Error("User not found")
    }

    // Skip incrementing for premium users
    if (userData.is_premium || userData.subscription_tier === "premium") {
      return {
        success: true,
        isPremium: true,
        usage: {
          basic_tailorings_used: userData.daily_basic_tailorings_used,
          personalized_tailorings_used: userData.daily_personalized_tailorings_used,
          cover_letters_used: userData.daily_cover_letters_used,
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
    }

    // Update the usage counter
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        daily_basic_tailorings_used: true,
        daily_personalized_tailorings_used: true,
        daily_cover_letters_used: true,
      },
    })

    return {
      success: true,
      isPremium: false,
      usage: {
        basic_tailorings_used: updatedUser.daily_basic_tailorings_used,
        personalized_tailorings_used: updatedUser.daily_personalized_tailorings_used,
        cover_letters_used: updatedUser.daily_cover_letters_used,
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
