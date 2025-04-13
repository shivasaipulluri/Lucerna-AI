-- Add missing columns to linkedin_optimizations table
ALTER TABLE "linkedin_optimizations" 
ADD COLUMN IF NOT EXISTS "original_text" TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS "goal" TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS "industry" TEXT DEFAULT '',
ADD COLUMN IF NOT EXISTS "tone" TEXT DEFAULT '';

-- Rename generated_profile to generated_text if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT FROM information_schema.columns 
    WHERE table_name = 'linkedin_optimizations' 
    AND column_name = 'generated_profile'
  ) THEN
    -- First add generated_text column if it doesn't exist
    ALTER TABLE "linkedin_optimizations" 
    ADD COLUMN IF NOT EXISTS "generated_text" TEXT DEFAULT '';
    
    -- Copy data from generated_profile to generated_text
    UPDATE "linkedin_optimizations" 
    SET "generated_text" = "generated_profile";
    
    -- Drop the generated_profile column
    ALTER TABLE "linkedin_optimizations" 
    DROP COLUMN "generated_profile";
  END IF;
END $$;

-- Remove default values from columns after migration
ALTER TABLE "linkedin_optimizations" 
ALTER COLUMN "original_text" DROP DEFAULT,
ALTER COLUMN "goal" DROP DEFAULT,
ALTER COLUMN "industry" DROP DEFAULT,
ALTER COLUMN "tone" DROP DEFAULT,
ALTER COLUMN "generated_text" DROP DEFAULT;
