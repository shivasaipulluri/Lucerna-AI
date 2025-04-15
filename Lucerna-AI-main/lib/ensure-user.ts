import { prisma } from "@/lib/prisma"

/**
 * Ensures a user exists in the database, handling potential email conflicts
 * @param userId The user's ID from Supabase
 * @param email The user's email
 * @returns True if the user was created or updated, false if operation failed
 */
export async function ensureUserExists(userId: string, email: string): Promise<boolean> {
  try {
    // First check if user with this ID already exists
    const existingUserById = await prisma.user.findUnique({
      where: { id: userId },
    })

    if (existingUserById) {
      console.log(`User already exists with ID: ${userId}`)
      return true
    }

    // Check if user with this email already exists
    const existingUserByEmail = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUserByEmail) {
      console.log(
        `User with email ${email} exists but with different ID. Current: ${existingUserByEmail.id}, New: ${userId}`,
      )

      // Option 1: Update the existing user's ID to match Supabase
      // This is risky as it could break foreign key relationships

      // Option 2: Create a new user with a slightly modified email to avoid the conflict
      const modifiedEmail = `${email}#${userId.substring(0, 8)}`
      console.log(`Creating user with modified email: ${modifiedEmail}`)

      await prisma.user.create({
        data: {
          id: userId,
          email: modifiedEmail,
          is_premium: false,
          tailoring_mode: "personalized", // Default to personalized mode
        },
      })

      return true
    }

    // No conflicts, create new user
    console.log(`Creating new user in database: ${userId} (${email})`)
    await prisma.user.create({
      data: {
        id: userId,
        email: email,
        is_premium: false,
        tailoring_mode: "personalized", // Default to personalized mode
      },
    })

    console.log(`User created successfully: ${userId}`)
    return true
  } catch (error) {
    console.error(`Error ensuring user exists (${userId}):`, error)
    return false
  }
}
