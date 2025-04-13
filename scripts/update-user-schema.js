import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Updating User schema with new profile fields...")

  const prisma = new PrismaClient()

  try {
    // Add missing columns to users table if they don't exist
    await prisma.$executeRaw`
      ALTER TABLE "users" 
      ADD COLUMN IF NOT EXISTS "company" TEXT,
      ADD COLUMN IF NOT EXISTS "position" TEXT,
      ADD COLUMN IF NOT EXISTS "education" TEXT,
      ADD COLUMN IF NOT EXISTS "skills" TEXT,
      ADD COLUMN IF NOT EXISTS "bio" TEXT;
    `

    console.log("User schema updated successfully!")
  } catch (error) {
    console.error("Error updating User schema:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
