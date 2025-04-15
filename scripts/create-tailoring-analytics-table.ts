import { PrismaClient } from "../generated/primary_client";

async function main() {
  console.log("Creating tailoring_analytics table...")

  const prisma = new PrismaClient();

  try {
    // Check if table exists
    const tableExists = await prisma.$queryRaw`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'tailoring_analytics'
      );
    `

    if (tableExists[0].exists) {
      console.log("Table tailoring_analytics already exists!")
      return
    }

    // Execute raw SQL to create the table
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "tailoring_analytics" (
        "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        "user_id" UUID NOT NULL,
        "resume_id" UUID NOT NULL,
        "tailoring_mode" TEXT NOT NULL,
        "iterations" INTEGER NOT NULL,
        "ats_score" INTEGER NOT NULL,
        "jd_score" INTEGER NOT NULL,
        "golden_passed" BOOLEAN NOT NULL,
        "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        
        CONSTRAINT "tailoring_analytics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
        CONSTRAINT "tailoring_analytics_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE
      );
      
      CREATE INDEX IF NOT EXISTS "tailoring_analytics_user_id_idx" ON "tailoring_analytics"("user_id");
      CREATE INDEX IF NOT EXISTS "tailoring_analytics_resume_id_idx" ON "tailoring_analytics"("resume_id");
    `

    console.log("Tailoring analytics table created successfully!")
  } catch (error) {
    console.error("Error creating table:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
  .catch((e) => {
    console.error("Script error:", e);
    process.exit(1);
  });
