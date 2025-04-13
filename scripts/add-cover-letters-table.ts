import { PrismaClient } from "@prisma/client"

async function main() {
  console.log("Adding cover_letters table...")

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

    if (tableExists[0].exists) {
      console.log("Table cover_letters already exists!")
      return
    }

    // Execute raw SQL to create the table
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "cover_letters" (
        "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "user_id" UUID NOT NULL,
        "original_resume_id" UUID NOT NULL,
        "job_description" TEXT NOT NULL,
        "generated_letter" TEXT NOT NULL,
        "tailoring_mode" TEXT NOT NULL,
        "version" INTEGER NOT NULL DEFAULT 1,
        "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        
        CONSTRAINT "cover_letters_user_id_fkey" 
          FOREIGN KEY ("user_id") 
          REFERENCES "users"("id") 
          ON DELETE CASCADE,
          
        CONSTRAINT "cover_letters_original_resume_id_fkey" 
          FOREIGN KEY ("original_resume_id") 
          REFERENCES "resumes"("id") 
          ON DELETE CASCADE
      );
      
      CREATE INDEX IF NOT EXISTS "cover_letters_user_id_idx" ON "cover_letters"("user_id");
      CREATE INDEX IF NOT EXISTS "cover_letters_original_resume_id_idx" ON "cover_letters"("original_resume_id");
    `

    console.log("Table created successfully!")
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
