import { modelPrisma } from "./model-prisma"

/**
 * Ensures a user exists in both databases and creates the mapping if needed
 */
export async function ensureUserMapping(supabaseUserId: string) {
  try {
    // Check if user exists in model database
    const modelUser = await modelPrisma.user.findUnique({
      where: { id: supabaseUserId },
    })

    if (!modelUser) {
      // Generate a random anonUserId if needed
      const anonUserId = `anon_${Math.random().toString(36).substring(2, 15)}`

      // Create user in model database with both IDs
      await modelPrisma.user.create({
        data: {
          id: supabaseUserId,
          anonUserId: anonUserId,
        },
      })

      console.log(`Created new user mapping: ${supabaseUserId} -> ${anonUserId}`)
    }

    return true
  } catch (error) {
    console.error("Error ensuring user mapping:", error)
    return false
  }
}

/**
 * Gets the anonUserId for a given Supabase user ID
 */
export async function getAnonUserId(supabaseUserId: string) {
  try {
    const user = await modelPrisma.user.findUnique({
      where: { id: supabaseUserId },
      select: { anonUserId: true },
    })

    return user?.anonUserId
  } catch (error) {
    console.error("Error getting anonUserId:", error)
    return null
  }
}
