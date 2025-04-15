import { PrismaClient } from "../prisma/generated/primary_client"

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Add debug logging to verify the environment variable is set
console.log("[DEBUG] DATABASE_URL available:", !!process.env.DATABASE_URL)

// Create a new PrismaClient instance with proper configuration for Vercel
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  })

// Export primaryPrisma as an alias for prisma
export const primaryPrisma = prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Add a simple test function to check if the Prisma connection is working
export async function testPrismaConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`
    console.log("[DEBUG] Prisma connection test successful")
  } catch (error) {
    console.error("[DEBUG] Prisma connection test failed:", error)
    throw error
  }
}
