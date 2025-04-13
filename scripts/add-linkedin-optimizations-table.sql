-- Create linkedin_optimizations table
CREATE TABLE IF NOT EXISTS "linkedin_optimizations" (
  "id" UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  "user_id" UUID NOT NULL,
  "resume_id" UUID NOT NULL,
  "job_description" TEXT NOT NULL,
  "generated_profile" TEXT NOT NULL,
  "tailoring_mode" TEXT NOT NULL,
  "version" INTEGER NOT NULL DEFAULT 1,
  "created_at" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT "linkedin_optimizations_user_id_fkey" 
    FOREIGN KEY ("user_id") 
    REFERENCES "users"("id") 
    ON DELETE CASCADE,
    
  CONSTRAINT "linkedin_optimizations_resume_id_fkey" 
    FOREIGN KEY ("resume_id") 
    REFERENCES "resumes"("id") 
    ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS "linkedin_optimizations_user_id_idx" ON "linkedin_optimizations"("user_id");
CREATE INDEX IF NOT EXISTS "linkedin_optimizations_resume_id_idx" ON "linkedin_optimizations"("resume_id");
