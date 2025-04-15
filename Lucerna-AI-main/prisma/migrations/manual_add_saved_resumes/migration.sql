-- CreateTable
CREATE TABLE IF NOT EXISTS "saved_resumes" (
  "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
  "user_id" TEXT NOT NULL,
  "resume_id" TEXT NOT NULL,
  "label" TEXT,
  "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT "saved_resumes_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "saved_resumes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE,
  CONSTRAINT "saved_resumes_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE
);

-- CreateIndex
CREATE INDEX "saved_resumes_user_id_idx" ON "saved_resumes"("user_id");
CREATE INDEX "saved_resumes_resume_id_idx" ON "saved_resumes"("resume_id");
