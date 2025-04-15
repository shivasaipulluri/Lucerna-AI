import { modelPrisma } from "@/lib/model-prisma"

/**
 * Ensures a user exists in the model database
 * This prevents errors when logging interactions and avoids duplicate user creation
 *
 * @param user The Supabase user object
 * @returns The model database user
 */
export async function ensureModelUser(user: { id: string; email?: string }) {
  if (!user || !user.id) {
    console.error("Cannot ensure model user: Invalid user object provided")
    return null
  }

  try {
    // First try to find the user by anonUserId (which is the Supabase user.id)
    const existing = await modelPrisma.user.findUnique({
      where: { anonUserId: user.id },
    })

    if (existing) {
      return existing
    }

    // Also check if the user exists by id field
    const existingById = await modelPrisma.user.findUnique({
      where: { id: user.id },
    })

    if (existingById) {
      // User exists but with mismatched anonUserId, update it
      return await modelPrisma.user.update({
        where: { id: user.id },
        data: { anonUserId: user.id },
      })
    }

    // User doesn't exist, create a new one
    console.log(`Creating new user in model database: ${user.id}`)
    return await modelPrisma.user.create({
      data: {
        id: user.id,
        anonUserId: user.id,
        email: user.email || null,
      },
    })
  } catch (error) {
    console.error("Error ensuring model user:", error)
    return null
  }
}

/**
 * Logs an interaction with automatic user syncing
 */
export async function logInteractionSafe(
  user: { id: string; email?: string },
  data: { action: string; element: string; metadata?: Record<string, any> },
) {
  if (!user || !user.id) {
    console.error("Cannot log interaction: No valid user provided")
    return null
  }

  try {
    // Ensure the user exists in the model database
    await ensureModelUser(user)

    // Log the interaction
    return await modelPrisma.interaction.create({
      data: {
        anonUserId: user.id,
        action: data.action,
        element: data.element,
        metadata: data.metadata || {},
      },
    })
  } catch (error) {
    console.error("Error logging interaction:", error)
    return null
  }
}

/**
 * Logs a resume event with automatic user syncing
 */
export async function logResumeEventSafe(
  user: { id: string; email?: string },
  data: {
    eventType: string
    resumeId?: string
    resumeText?: string
    jobDescription?: string
    tailoredText?: string
    atsScore?: number
    jdScore?: number
    tailoringMode?: string
    version?: number
  },
) {
  if (!user || !user.id) {
    console.error("Cannot log resume event: No valid user provided")
    return null
  }

  try {
    // Ensure the user exists in the model database
    await ensureModelUser(user)

    // Log the resume event
    return await modelPrisma.resumeEvent.create({
      data: {
        anonUserId: user.id,
        ...data,
      },
    })
  } catch (error) {
    console.error("Error logging resume event:", error)
    return null
  }
}
