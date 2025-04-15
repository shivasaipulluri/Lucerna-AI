"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { logInteractionDirect } from "@/lib/model-logger"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"
import { InteractionMetadata } from "@/app/admin/analytics/actions"

interface ButtonWithAnalyticsProps extends React.ComponentProps<typeof Button> {
  elementName: string
  action?: 'click' | 'hover' | 'focus' | 'blur' | 'submit' | 'download'
  metadata?: InteractionMetadata
}

export function ButtonWithAnalytics({
  elementName,
  action = "click",
  metadata = {},
  onClick,
  children,
  ...props
}: ButtonWithAnalyticsProps) {
  const [userId, setUserId] = useState<string | null>(null)

  // Get the user ID when the component mounts
  useEffect(() => {
    async function getUserId() {
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        setUserId(data.user.id)
      }
    }

    getUserId()
  }, [])

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e)
    }

    // Log the interaction if we have a user ID
    if (userId) {
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging button interaction for user: ${userId}, element: ${elementName}`)

        await logInteractionDirect(userId, {
          action,
          element: elementName,
          metadata: {
            ...metadata,
            timestamp: new Date().toISOString(),
          },
        })

        console.log(`[MODEL LOG] SUCCESS: Button interaction logged successfully: ${elementName}`)
      } catch (error) {
        console.error(`[MODEL LOG] FAILURE: Error logging interaction for ${elementName}:`, error)
        console.error(`[MODEL DB ERROR] Details:`, error instanceof Error ? error.message : String(error))
      }
    } else {
      console.log(`[MODEL LOG] FAILURE: No user ID available for button analytics: ${elementName}`)
    }
  }

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
