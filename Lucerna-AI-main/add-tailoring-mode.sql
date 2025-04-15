-- Add tailoring_mode column to resumes table
ALTER TABLE "resumes" ADD COLUMN IF NOT EXISTS "tailoring_mode" TEXT;
