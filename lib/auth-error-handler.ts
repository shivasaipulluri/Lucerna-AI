import { resetClient } from "@/lib/supabase/client"

/**
 * Handles common authentication errors
 * @param error The error to handle
 * @param toast The toast function from useToast
 * @returns True if the error was handled, false otherwise
 */
export function handleAuthError(error: any, toast: any): boolean {
  // Check for session missing errors
  if (
    error.message?.includes("Auth session missing") ||
    error.message?.includes("JWT expired") ||
    error.message?.includes("Invalid JWT")
  ) {
    console.error("Authentication session error:", error)

    // Reset the Supabase client
    resetClient()

    // Show a toast notification
    toast({
      title: "Authentication Error",
      description: "Your session has expired. Please sign in again.",
      variant: "destructive",
    })

    // Redirect to the auth page
    setTimeout(() => {
      window.location.href = "/auth?redirect=" + encodeURIComponent(window.location.pathname)
    }, 1000)

    return true
  }

  return false
}

/**
 * Wraps a function with authentication error handling
 * @param fn The function to wrap
 * @param toast The toast function from useToast
 * @returns The wrapped function
 */
export function withAuthErrorHandling<T extends (...args: any[]) => Promise<any>>(fn: T, toast: any): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await fn(...args)
    } catch (error) {
      if (handleAuthError(error, toast)) {
        // Return a rejected promise to prevent further execution
        return Promise.reject(new Error("Authentication error handled"))
      }

      // If the error wasn't handled, rethrow it
      throw error
    }
  }) as T
}
