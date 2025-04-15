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
    datasources: {
      db: {
        url: process.env.MODEL_DATABASE_URL
      }
    }
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.modelPrisma = modelPrisma

// Add a simple test function to check if the model Prisma connection is working
export async function testModelPrismaConnection() {
  try {
    await modelPrisma.$queryRaw`SELECT 1`
    console.log("[DEBUG] Model Prisma connection test successful")
  } catch (error) {
    console.error("[DEBUG] Model Prisma connection test failed:", error)
    throw error
  }
}
