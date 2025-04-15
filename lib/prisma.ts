import { PrismaClient } from "../prisma/generated/primary_client"

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Add debug logging to verify the environment variable is set
console.log("[DEBUG] DATABASE_URL available:", !!process.env.DATABASE_URL)

// Create a new PrismaClient instance
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  })

// Export primaryPrisma as an alias for prisma
export const primaryPrisma = prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Add a simple test function to check if prisma is working
export async function testPrismaConnection() {
  try {
    // Just run a simple query to test the connection
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log("Prisma connection test successful:", result)
    return true
  } catch (error) {
    console.error("Prisma connection test failed:", error)
    return false
  }
}
