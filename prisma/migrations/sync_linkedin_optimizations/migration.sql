-- First, check if the linkedin_optimizations table exists
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT FROM information_schema.tables 
    WHERE table_schema = 'public' 
    AND table_name = 'linkedin_optimizations'
  ) THEN
    -- Create the table if it doesn't exist
    CREATE TABLE "linkedin_optimizations" (
      "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      "user_id" UUID NOT NULL,
      "resume_id" UUID,
      "original_text" TEXT NOT NULL,
      "goal" TEXT NOT NULL,
      "industry" TEXT NOT NULL,
      "tone" TEXT NOT NULL,
      "generated_text" TEXT NOT NULL,
      "job_description" TEXT NOT NULL,
      "tailoring_mode" TEXT NOT NULL,
      "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "linkedin_optimizations_user_id_fkey" 
        FOREIGN KEY ("user_id") 
        REFERENCES "users"("id") 
        ON DELETE CASCADE,
      CONSTRAINT "linkedin_optimizations_resume_id_fkey" 
        FOREIGN KEY ("resume_id") 
        REFERENCES "resumes"("id") 
        ON DELETE SET NULL
    );
  ELSE
    -- Table exists, so add missing columns
    -- Add missing columns to linkedin_optimizations table if they don't exist
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'linkedin_optimizations' AND column_name = 'original_text') THEN
        ALTER TABLE "linkedin_optimizations" ADD COLUMN "original_text" TEXT NOT NULL DEFAULT '';
      END IF;
      
      IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'linkedin_optimizations' AND column_name = 'goal') THEN
        ALTER TABLE "linkedin_optimizations" ADD COLUMN "goal" TEXT NOT NULL DEFAULT '';
      END IF;
      
      IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'linkedin_optimizations' AND column_name = 'industry') THEN
        ALTER TABLE "linkedin_optimizations" ADD COLUMN "industry" TEXT NOT NULL DEFAULT '';
      END IF;
      
      IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'linkedin_optimizations' AND column_name = 'tone') THEN
        ALTER TABLE "linkedin_optimizations" ADD COLUMN "tone" TEXT NOT NULL DEFAULT '';
      END IF;
      
      IF NOT EXISTS (SELECT FROM information_schema.columns WHERE table_name = 'linkedin_optimizations' AND column_name = 'generated_text') THEN
        ALTER TABLE "linkedin_optimizations" ADD COLUMN "generated_text" TEXT NOT NULL DEFAULT '';
      END IF;
    END $$;

    -- Copy data from generated_profile to generated_text if generated_profile exists
    DO $$
    BEGIN
      IF EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'linkedin_optimizations' 
        AND column_name = 'generated_profile'
      ) THEN
        UPDATE "linkedin_optimizations" 
        SET "generated_text" = "generated_profile";
      END IF;
    END $$;

    -- Drop generated_profile column if it exists
    DO $$
    BEGIN
      IF EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'linkedin_optimizations' 
        AND column_name = 'generated_profile'
      ) THEN
        ALTER TABLE "linkedin_optimizations" DROP COLUMN "generated_profile";
      END IF;
    END $$;

    -- Drop version column if it exists
    DO $$
    BEGIN
      IF EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'linkedin_optimizations' 
        AND column_name = 'version'
      ) THEN
        ALTER TABLE "linkedin_optimizations" DROP COLUMN "version";
      END IF;
    END $$;

    -- Remove default values from columns after migration
    ALTER TABLE "linkedin_optimizations" 
      ALTER COLUMN "original_text" DROP DEFAULT,
      ALTER COLUMN "goal" DROP DEFAULT,
      ALTER COLUMN "industry" DROP DEFAULT,
      ALTER COLUMN "tone" DROP DEFAULT,
      ALTER COLUMN "generated_text" DROP DEFAULT;
  END IF;
END $$;
