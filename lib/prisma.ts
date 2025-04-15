import { PrismaClient } from "@prisma/client"


// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  })

// Export primaryPrisma as an alias for prisma
export const primaryPrisma = prisma

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Add a simple test function to check if prisma is working
export async function testPrismaConnection() {
  try {
    // Just run a simple query to test the connection
    const result = await prisma.$queryRaw`SELECT 1 as test`
    console.log("Prisma connection test result:", result)
    return true
  } catch (error) {
    console.error("Prisma connection test failed:", error)
    return false
  }
}