-- CreateTable
CREATE TABLE IF NOT EXISTS "tailoring_analytics" (
  "id" TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "resume_id" TEXT NOT NULL,
  "tailoring_mode" TEXT NOT NULL,
  "iterations" INTEGER NOT NULL,
  "ats_score" INTEGER NOT NULL,
  "jd_score" INTEGER NOT NULL,
  "golden_passed" BOOLEAN NOT NULL,
  "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT "tailoring_analytics_pkey" PRIMARY KEY ("id"),
  CONSTRAINT "tailoring_analytics_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT "tailoring_analytics_resume_id_fkey" FOREIGN KEY ("resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "tailoring_analytics_user_id_idx" ON "tailoring_analytics"("user_id");
CREATE INDEX "tailoring_analytics_resume_id_idx" ON "tailoring_analytics"("resume_id");
