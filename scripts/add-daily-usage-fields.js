import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Adding daily usage tracking fields to users table...")

  const prisma = new PrismaClient()

  try {
    // Execute raw SQL to add the columns separately
    await prisma.$executeRaw`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "daily_basic_tailorings_used" INTEGER NOT NULL DEFAULT 0`
    console.log("Added daily_basic_tailorings_used")
    await prisma.$executeRaw`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "daily_personalized_tailorings_used" INTEGER NOT NULL DEFAULT 0`
    console.log("Added daily_personalized_tailorings_used")
    await prisma.$executeRaw`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "daily_cover_letters_used" INTEGER NOT NULL DEFAULT 0`
    console.log("Added daily_cover_letters_used")
    await prisma.$executeRaw`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "daily_reset_date" TIMESTAMP WITH TIME ZONE`
    console.log("Added daily_reset_date")

    // Add subscription_tier and subscription_end_date fields separately
    await prisma.$executeRaw`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "subscription_tier" TEXT`
    console.log("Added subscription_tier")
    await prisma.$executeRaw`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "subscription_end_date" TIMESTAMP WITH TIME ZONE`
    console.log("Added subscription_end_date")

    console.log("Daily usage tracking fields added successfully!")
  } catch (error) {
    console.error("Error adding daily usage tracking fields:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
