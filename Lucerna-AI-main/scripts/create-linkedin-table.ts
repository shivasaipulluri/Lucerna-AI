import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Creating LinkedIn optimizations table...")

  const prisma = new PrismaClient()

  try {
    // Check if table exists
    const tableExists = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'linkedin_optimizations'
      );
    `

    if (tableExists[0].exists) {
      console.log("Table linkedin_optimizations already exists!")
      return
    }

    // Execute raw SQL to create the table
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "linkedin_optimizations" (
        "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "user_id" TEXT NOT NULL,
        "resume_id" TEXT,
        "original_text" TEXT NOT NULL,
        "goal" TEXT NOT NULL,
        "industry" TEXT NOT NULL,
        "tone" TEXT NOT NULL,
        "generated_text" TEXT NOT NULL,
        "job_description" TEXT NOT NULL,
        "tailoring_mode" TEXT NOT NULL,
        "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
      
      CREATE INDEX IF NOT EXISTS "linkedin_optimizations_user_id_idx" ON "linkedin_optimizations"("user_id");
      CREATE INDEX IF NOT EXISTS "linkedin_optimizations_resume_id_idx" ON "linkedin_optimizations"("resume_id");
    `

    console.log("LinkedIn optimizations table created successfully!")
  } catch (error) {
    console.error("Error creating table:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error("Script error:", e)
  process.exit(1)
})
