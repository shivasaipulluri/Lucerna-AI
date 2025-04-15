import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Adding interview_settings table...")

  const prisma = new PrismaClient()

  try {
    // Check if table exists
    const tableExists = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'interview_settings'
      );
    `

    // Add type assertion to fix the TypeScript error
    if ((tableExists as any)[0].exists) {
      console.log("Table interview_settings already exists!")
      return
    }

    // Execute raw SQL to create the table
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "interview_settings" (
        "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "user_id" UUID NOT NULL,
        "job_title" TEXT NOT NULL,
        "job_description" TEXT NOT NULL,
        "difficulty" TEXT NOT NULL,
        "mode" TEXT NOT NULL,
        "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        
        CONSTRAINT "interview_settings_user_id_fkey" 
          FOREIGN KEY ("user_id") 
          REFERENCES "users"("id") 
          ON DELETE CASCADE
      );
      
      CREATE INDEX IF NOT EXISTS "interview_settings_user_id_idx" ON "interview_settings"("user_id");
    `

    console.log("Interview settings table created successfully!")
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
