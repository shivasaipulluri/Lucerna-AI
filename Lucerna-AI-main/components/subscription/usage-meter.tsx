"use client"

import { useSubscription, type FeatureType } from "@/context/subscription-context"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Infinity } from "@/components/icons/infinity"

interface UsageMeterProps {
  feature: FeatureType
  showUpgradeButton?: boolean
  className?: string
}

export function UsageMeter({ feature, showUpgradeButton = true, className }: UsageMeterProps) {
  const { isPremium, isLoading, getFeatureUsage } = useSubscription()

  if (isLoading) {
    return <div className="h-8 bg-gray-100 animate-pulse rounded-md"></div>
  }

  // Format the feature name for display
  const formatFeatureName = (feature: FeatureType) => {
    switch (feature) {
      case "basic_tailoring":
        return "Basic Tailoring"
      case "personalized_tailoring":
        return "Personalized Tailoring"
      case "cover_letter":
        return "Cover Letters"
      default:
        return feature.replace(/_/g, " ")
    }
  }

  // Update the UsageMeter component to have more consistent styling

  // Replace the return statement for non-premium users with this improved version
  if (isPremium) {
    return (
      <div className={className}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">{formatFeatureName(feature)}</span>
          <div className="flex items-center">
            <Infinity className="h-4 w-4 text-primary mr-1" />
            <span className="text-sm text-primary font-medium">Unlimited</span>
          </div>
        </div>
        <Progress value={100} className="h-2 bg-primary/20" />
      </div>
    )
  }

  // For free users, show usage meter with improved styling
  const { used, limit, available } = getFeatureUsage(feature)
  const percentUsed = Math.min(100, (used / limit) * 100)

  // Determine color based on usage
  const getProgressColor = () => {
    if (percentUsed >= 100) return "bg-red-500"
    if (percentUsed >= 75) return "bg-amber-500"
    return "bg-primary"
  }

  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{formatFeatureName(feature)}</span>
        <span className="text-sm text-gray-600 font-medium">
          {used}/{limit} used
        </span>
      </div>
      <Progress value={percentUsed} className={`h-2 ${getProgressColor()}`} />
      {showUpgradeButton && percentUsed >= 75 && (
        <div className="mt-2 text-right">
          <Button variant="link" size="sm" className="h-auto p-0 text-xs text-primary" asChild>
            <Link href="/dashboard/subscription">Upgrade for unlimited</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
