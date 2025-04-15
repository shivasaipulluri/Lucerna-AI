import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Adding tailoring_mode column to resumes table...")

  const prisma = new PrismaClient()

  try {
    // Execute raw SQL to add the column
    await prisma.$executeRaw`ALTER TABLE "resumes" ADD COLUMN IF NOT EXISTS "tailoring_mode" TEXT`

    console.log("Column added successfully!")
  } catch (error) {
    console.error("Error adding column:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
