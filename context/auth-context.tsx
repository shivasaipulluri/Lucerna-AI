"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSupabaseSession, useSupabaseUser } from "@/lib/supabase/hooks"
import type { Session, User } from "@supabase/supabase-js"

type AuthContextType = {
  session: Session | null
  user: User | null
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: null,
  isLoading: true,
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const { session, loading: sessionLoading } = useSupabaseSession()
  const { user, loading: userLoading } = useSupabaseUser()

  const isLoading = sessionLoading || userLoading

  return <AuthContext.Provider value={{ session, user, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
