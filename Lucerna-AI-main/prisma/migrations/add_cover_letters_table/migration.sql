-- CreateTable
CREATE TABLE "cover_letters" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "original_resume_id" TEXT NOT NULL,
    "job_description" TEXT NOT NULL,
    "generated_letter" TEXT NOT NULL,
    "tailoring_mode" TEXT NOT NULL,
    "version" INTEGER NOT NULL DEFAULT 1,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "cover_letters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cover_letters" ADD CONSTRAINT "cover_letters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cover_letters" ADD CONSTRAINT "cover_letters_original_resume_id_fkey" FOREIGN KEY ("original_resume_id") REFERENCES "resumes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
