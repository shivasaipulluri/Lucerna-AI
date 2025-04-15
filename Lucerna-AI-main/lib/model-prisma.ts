import { PrismaClient as ModelPrismaClient } from "@/model-client"

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
const globalForPrisma = global as unknown as {
  modelPrisma: ModelPrismaClient | undefined
}

// Add debug logging to verify the environment variable is set
console.log("[DEBUG] MODEL_DATABASE_URL available:", !!process.env.MODEL_DATABASE_URL)

// Let's add more debug logging to see what's happening with the model database
console.log(
  "[DEBUG] Creating modelPrisma with datasourceUrl:",
  process.env.MODEL_DATABASE_URL ? `${process.env.MODEL_DATABASE_URL.substring(0, 20)}...` : "undefined",
)

// Update the PrismaClient creation to use ModelPrismaClient
export const modelPrisma =
  globalForPrisma.modelPrisma ||
  new ModelPrismaClient({
    log: ["query", "error", "warn"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.modelPrisma = modelPrisma

// Add a simple test function to check if modelPrisma is working
export async function testModelPrismaConnection() {
  try {
    // Just run a simple query to test the connection
    const result = await modelPrisma.$queryRaw`SELECT 1 as test`
    console.log("Model Prisma connection test result:", result)

    // Check if tailoringAnalytics model exists
    console.log("Available models in modelPrisma:", Object.keys(modelPrisma))

    // Specifically check for the TailoringAnalytics model
    if (modelPrisma.tailoringAnalytics) {
      console.log("✅ TailoringAnalytics model is available in modelPrisma")
    } else {
      console.log("❌ TailoringAnalytics model is NOT available in modelPrisma")
    }

    return true
  } catch (error) {
    console.error("Model Prisma connection test failed:", error)
    return false
  }
}
