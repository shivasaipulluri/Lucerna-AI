import { prisma } from "@/lib/prisma"
import { modelPrisma } from "@/lib/model-prisma"

export async function debugPrismaConnections() {
  console.log("=== DEBUGGING PRISMA CONNECTIONS ===")

  try {
    // Test main prisma connection
    console.log("Testing main prisma connection...")
    const userCount = await prisma.user.count()
    console.log(`Main DB - User count: ${userCount}`)

    // Log main prisma models
    console.log("Main prisma models:", Object.keys(prisma))

    // Test model prisma connection
    console.log("Testing model prisma connection...")
    const modelUserCount = await modelPrisma.user.count()
    console.log(`Model DB - User count: ${modelUserCount}`)

    // Log model prisma models
    console.log("Model prisma models:", Object.keys(modelPrisma))

    return {
      mainDbConnected: true,
      modelDbConnected: true,
      mainDbUserCount: userCount,
      modelDbUserCount: modelUserCount,
    }
  } catch (error) {
    console.error("Prisma connection test failed:", error)
    return {
      error: error instanceof Error ? error.message : String(error),
      mainDbConnected: false,
      modelDbConnected: false,
    }
  }
}
