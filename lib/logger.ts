/**
 * Client-side helper to log events to the model training database
 * @param type The type of event
 * @param data The event data
 */
export async function logTraining(type: string, data: Record<string, any>) {
  try {
    // Don't block the UI thread
    await fetch("/api/log", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type, data }),
      // Use keepalive to ensure the request completes even if the page is unloaded
      keepalive: true,
    })
  } catch (e) {
    // Silently fail to avoid disrupting the main application
    console.error("[Analytics log error]", e)
  }
}
