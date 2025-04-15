import { PrismaClient } from "../prisma/generated/model_client"

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as {
  modelPrisma: PrismaClient | undefined
}

// Add debug logging to verify the environment variable is set
console.log("[DEBUG] MODEL_DATABASE_URL available:", !!process.env.MODEL_DATABASE_URL)

// Create a new PrismaClient instance for the model database
export const modelPrisma =
  globalForPrisma.modelPrisma ||
  new PrismaClient({
    log: ["query", "error", "warn"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.modelPrisma = modelPrisma

// Add a simple test function to check if modelPrisma is working
export async function testModelPrismaConnection() {
  try {
    // Just run a simple query to test the connection
    const result = await modelPrisma.$queryRaw`SELECT 1 as test`
    console.log("Model Prisma connection test result:", result)
    return true
  } catch (error) {
    console.error("Model Prisma connection test failed:", error)
    return false
  }
}
