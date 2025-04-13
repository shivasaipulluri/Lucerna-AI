const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  console.log("📦 Updating linkedin_optimizations table columns...")

  await prisma.$executeRawUnsafe(`
    ALTER TABLE "linkedin_optimizations"
    ADD COLUMN IF NOT EXISTS "original_text" TEXT,
    ADD COLUMN IF NOT EXISTS "goal" TEXT,
    ADD COLUMN IF NOT EXISTS "industry" TEXT,
    ADD COLUMN IF NOT EXISTS "tone" TEXT,
    ADD COLUMN IF NOT EXISTS "job_description" TEXT,
    ADD COLUMN IF NOT EXISTS "resume_id" UUID,
    ADD COLUMN IF NOT EXISTS "tailoring_mode" TEXT;

    DO $$ BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'linkedin_optimizations' AND column_name = 'generated_profile'
      ) THEN
        ALTER TABLE "linkedin_optimizations"
        RENAME COLUMN "generated_profile" TO "generated_text";
      END IF;
    END $$;
  `)

  console.log("✅ Table updated successfully!")
}

main()
  .catch((e) => {
    console.error("❌ Error during migration:", e)
  })
  .finally(() => {
    prisma.$disconnect()
  })
