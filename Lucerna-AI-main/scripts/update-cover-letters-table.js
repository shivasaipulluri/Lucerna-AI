const { PrismaClient } = require("@prisma/client")

async function main() {
  console.log("Updating cover_letters table with new columns...")

  const prisma = new PrismaClient()

  try {
    // Check if table exists
    const tableExists = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'cover_letters'
      );
    `

    if (!tableExists[0].exists) {
      console.log("cover_letters table doesn't exist yet, will be created when needed")
      return
    }

    // Add new columns if they don't exist
    await prisma.$executeRaw`
      ALTER TABLE "cover_letters" 
      ADD COLUMN IF NOT EXISTS "explanation" TEXT,
      ADD COLUMN IF NOT EXISTS "score" INTEGER,
      ADD COLUMN IF NOT EXISTS "feedback" TEXT,
      ADD COLUMN IF NOT EXISTS "golden_passed" BOOLEAN;
    `

    console.log("cover_letters table updated successfully!")
  } catch (error) {
    console.error("Error updating cover_letters table:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
