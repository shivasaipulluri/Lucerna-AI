"use client"

import type React from "react"
import { useState } from "react"
import { useSubscription, type FeatureType } from "@/context/subscription-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Lock } from "lucide-react"
import Link from "next/link"

interface FeatureGuardProps {
  feature: FeatureType
  children: React.ReactNode
  fallback?: React.ReactNode
}

export function FeatureGuard({ feature, children, fallback }: FeatureGuardProps) {
  const { isPremium, isLoading, getFeatureUsage } = useSubscription()
  const [showUpgrade, setShowUpgrade] = useState(false)

  // If loading, show a loading indicator
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  // If premium, allow access to the feature
  if (isPremium) {
    return <>{children}</>
  }

  // For free users, check usage limits
  const { used, limit, available } = getFeatureUsage(feature)

  // If usage limit reached, show upgrade prompt or fallback
  if (used >= limit) {
    if (showUpgrade) {
      return (
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-800">
              <Lock className="h-5 w-5 mr-2" />
              Daily Limit Reached
            </CardTitle>
            <CardDescription className="text-amber-700">
              You've reached your daily limit for this feature.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-amber-700 mb-4">Upgrade to Premium for unlimited access to all features.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setShowUpgrade(false)}>
              Maybe Later
            </Button>
            <Button asChild className="bg-amber-600 hover:bg-amber-700 text-white">
              <Link href="/dashboard/subscription">Upgrade to Premium</Link>
            </Button>
          </CardFooter>
        </Card>
      )
    }

    // Show fallback if provided, otherwise show a simple message
    return fallback ? (
      <>{fallback}</>
    ) : (
      <Card className="border-amber-200 bg-amber-50">
        <CardContent className="pt-6">
          <div className="text-center">
            <Lock className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-amber-800 mb-2">Daily Limit Reached</h3>
            <p className="text-sm text-amber-700 mb-4">
              You've used all {limit} of your daily {feature.replace("_", " ")} credits.
            </p>
            <Button onClick={() => setShowUpgrade(true)}>Learn More</Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  // If usage limit not reached, allow access to the feature
  return <>{children}</>
}
