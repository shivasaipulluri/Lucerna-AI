"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { supabase } from "@/lib/supabase/client"

type SubscriptionTier = "free" | "premium"

interface UsageInfo {
  used: number
  limit: number
}

export type FeatureType =
  | "basic_tailoring"
  | "personalized_tailoring"
  | "cover_letter"
  | "linkedin"
  | "interview"
  | "analytics"
  | "dashboard"
  | "profile"
  | "premium_templates"
  | "tailoring"

interface SubscriptionContextType {
  tier: SubscriptionTier
  isPremium: boolean
  usage: {
    basic_tailoring: UsageInfo
    personalized_tailoring: UsageInfo
    cover_letter: UsageInfo
  }
  hoursUntilReset: number | null
  daysRemaining: number | null
  isLoading: boolean
  checkAccess: (feature: FeatureType, mode?: string) => boolean
  getFeatureUsage: (feature: FeatureType) => UsageInfo
  refreshUsage: () => Promise<void>
}

// Define the free tier limits - Updated to 100 for all features
const FREE_TIER_LIMITS = {
  basic_tailoring: 100,
  personalized_tailoring: 100,
  cover_letter: 100,
  refinements: 100, // Add explicit refinement limit
  linkedin: 100, // Add LinkedIn optimization limit
  interview: 100, // Add interview coaching limit
}

// Create the context with default values
const SubscriptionContext = createContext<SubscriptionContextType>({
  tier: "free",
  isPremium: false,
  usage: {
    basic_tailoring: { used: 0, limit: FREE_TIER_LIMITS.basic_tailoring },
    personalized_tailoring: { used: 0, limit: FREE_TIER_LIMITS.personalized_tailoring },
    cover_letter: { used: 0, limit: FREE_TIER_LIMITS.cover_letter },
  },
  hoursUntilReset: null,
  daysRemaining: null,
  isLoading: true,
  checkAccess: () => true,
  getFeatureUsage: () => ({ used: 0, limit: 0 }),
  refreshUsage: async () => {},
})

export function SubscriptionProvider({ children }: { children: ReactNode }) {
  const [tier, setTier] = useState<SubscriptionTier>("free")
  const [isPremium, setIsPremium] = useState(false)
  const [usage, setUsage] = useState({
    basic_tailoring: { used: 0, limit: FREE_TIER_LIMITS.basic_tailoring },
    personalized_tailoring: { used: 0, limit: FREE_TIER_LIMITS.personalized_tailoring },
    cover_letter: { used: 0, limit: FREE_TIER_LIMITS.cover_letter },
  })
  const [hoursUntilReset, setHoursUntilReset] = useState<number | null>(null)
  const [daysRemaining, setDaysRemaining] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Features available to each tier - Updated to include all features for free tier
  const featureAccess = {
    free: [
      "basic_tailoring",
      "personalized_tailoring",
      "aggressive_tailoring",
      "cover_letter",
      "linkedin",
      "interview",
      "dashboard",
      "profile",
    ],
    premium: [
      "basic_tailoring",
      "personalized_tailoring",
      "aggressive_tailoring",
      "cover_letter",
      "linkedin",
      "interview",
      "analytics",
      "dashboard",
      "profile",
      "premium_templates",
    ],
  }

  const fetchSubscriptionData = async () => {
    try {
      setIsLoading(true)

      // Check if user is authenticated
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setIsLoading(false)
        return
      }

      try {
        const response = await fetch("/api/user/subscription")

        if (!response.ok) {
          console.error("Failed to fetch subscription data:", await response.text())
          setIsLoading(false)
          return
        }

        const data = await response.json()

        if (data.success) {
          setTier(data.tier)
          setIsPremium(data.isPremium)

          // Update usage data
          setUsage({
            basic_tailoring: {
              used: data.usage.basic_tailorings_used || 0,
              limit: data.isPremium ? Number.POSITIVE_INFINITY : FREE_TIER_LIMITS.basic_tailoring,
            },
            personalized_tailoring: {
              used: data.usage.personalized_tailorings_used || 0,
              limit: data.isPremium ? Number.POSITIVE_INFINITY : FREE_TIER_LIMITS.personalized_tailoring,
            },
            cover_letter: {
              used: data.usage.cover_letters_used || 0,
              limit: data.isPremium ? Number.POSITIVE_INFINITY : FREE_TIER_LIMITS.cover_letter,
            },
          })

          setHoursUntilReset(data.hoursUntilReset)
          setDaysRemaining(data.daysRemaining)
        } else {
          console.error("Failed to fetch subscription data:", data.error)
        }
      } catch (error) {
        console.error("Error fetching subscription data:", error)
      }
    } catch (error) {
      console.error("Error in fetchSubscriptionData:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch subscription data on mount
  useEffect(() => {
    fetchSubscriptionData()
  }, [])

  const checkAccess = (feature: FeatureType, mode?: string) => {
    // First check if the feature is available for the tier
    const hasFeatureAccess = isPremium ? featureAccess.premium.includes(feature) : featureAccess.free.includes(feature)

    if (!hasFeatureAccess) return false

    // If premium, all modes are available
    if (isPremium) return true

    // For free users, check usage limits based on feature and mode
    if (feature === "tailoring") {
      if (mode === "aggressive") {
        // Free users now have access to aggressive mode
        return true
      }

      if (mode === "personalized") {
        return usage.personalized_tailoring.used < usage.personalized_tailoring.limit
      }

      // Default to basic tailoring
      return usage.basic_tailoring.used < usage.basic_tailoring.limit
    }

    if (feature === "cover_letter") {
      return usage.cover_letter.used < usage.cover_letter.limit
    }

    // For other features, just check if they're in the free tier list
    return featureAccess.free.includes(feature)
  }

  const getFeatureUsage = (feature: FeatureType) => {
    switch (feature) {
      case "basic_tailoring":
        return { ...usage.basic_tailoring, available: usage.basic_tailoring.limit - usage.basic_tailoring.used }
      case "personalized_tailoring":
        return {
          ...usage.personalized_tailoring,
          available: usage.personalized_tailoring.limit - usage.personalized_tailoring.used,
        }
      case "cover_letter":
        return { ...usage.cover_letter, available: usage.cover_letter.limit - usage.cover_letter.used }
      default:
        return { used: 0, limit: 100 } // Default limit of 100 for all features
    }
  }

  const refreshUsage = async () => {
    await fetchSubscriptionData()
  }

  return (
    <SubscriptionContext.Provider
      value={{
        tier,
        isPremium,
        usage,
        hoursUntilReset,
        daysRemaining,
        isLoading,
        checkAccess,
        getFeatureUsage,
        refreshUsage,
      }}
    >
      {children}
    </SubscriptionContext.Provider>
  )
}

export function useSubscription() {
  const context = useContext(SubscriptionContext)
  if (context === undefined) {
    throw new Error("useSubscription must be used within a SubscriptionProvider")
  }
  return context
}
