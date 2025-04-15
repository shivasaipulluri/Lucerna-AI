import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"

interface User {
  id: string
  email?: string
  is_premium?: boolean
  subscription_tier?: string
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function getUser() {
      try {
        const supabase = createClient()
        const { data: { user: authUser }, error: authError } = await supabase.auth.getUser()

        if (authError) {
          throw authError
        }

        if (authUser) {
          const { data: userData, error: userError } = await supabase
            .from("users")
            .select("is_premium, subscription_tier")
            .eq("id", authUser.id)
            .single()

          if (userError) {
            throw userError
          }

          setUser({
            id: authUser.id,
            email: authUser.email,
            is_premium: userData?.is_premium,
            subscription_tier: userData?.subscription_tier
          })
        } else {
          setUser(null)
        }
      } catch (error) {
        console.error("Error getting user:", error)
        setError(error instanceof Error ? error.message : "Failed to get user")
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    getUser()
  }, [])

  return {
    user,
    loading,
    error,
    isAuthenticated: !!user
  }
} 