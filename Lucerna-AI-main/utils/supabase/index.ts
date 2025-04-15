import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { SupabaseClient } from "@supabase/supabase-js"

export const getSupabaseClient = async (): Promise<SupabaseClient> => {
  const cookieStore = await cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      async get(name: string) {
        const cookie = cookieStore.get(name)
        return cookie ? cookie.value : undefined
      },
      set(name: string, value: string, options: any) {
        try {
          cookieStore.set({ name, value, ...options })
        } catch (e) {
          console.error("Error setting cookie:", name, e)
        }
      },
      remove(name: string, options: any) {
        try {
          cookieStore.delete({ name, ...options })
        } catch (e) {
          console.error("Error removing cookie:", name, e)
        }
      },
    },
  })
}
