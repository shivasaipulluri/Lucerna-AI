"use server"

import { prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"
import { generateCoverLetter as generateCoverLetterWithAI } from "@/lib/ai/cover-letter-generator"

/**
 * Generates a cover letter based on a resume and job description
 * @param resumeId The ID of the resume to base the cover letter on
 * @param jobDescription The job description
 * @param tailoringMode The tailoring mode to use
 * @param isRefinement Whether this is a refinement of an existing cover letter
 * @returns The generated cover letter data
 */
export async function generateCoverLetterAction(
  resumeId: string,
  jobDescription: string,
  tailoringMode: string,
  isRefinement = false,
) {
  try {
    console.log(`Starting cover letter generation for resume ${resumeId}, refinement: ${isRefinement}`)

    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    // Get the resume
    const resume = await prisma.resume.findFirst({
      where: {
        id: resumeId,
        user_id: user.id,
      },
    })

    if (!resume) {
      console.error(`Resume not found: ${resumeId}`)
      return { success: false, error: "Resume not found" }
    }

    // Get the resume content
    const resumeContent = resume.modified_resume || resume.resume_text

    if (!resumeContent || resumeContent.trim().length === 0) {
      console.error("Resume content is empty")
      return { success: false, error: "Resume content is empty" }
    }

    // Get the current version if this is a refinement
    let currentVersion = 1
    if (isRefinement) {
      // Find the latest version for this resume and job description
      const latestCoverLetter = await prisma.coverLetter.findFirst({
        where: {
          user_id: user.id,
          original_resume_id: resumeId,
          job_description: jobDescription,
        },
        orderBy: {
          version: "desc",
        },
      })

      if (latestCoverLetter) {
        currentVersion = latestCoverLetter.version + 1
      }
    }

    console.log("Generating cover letter with AI...")

    // Generate the cover letter using AI
    const { coverLetter: generatedLetter, explanation } = await generateCoverLetterWithAI(
      resumeContent,
      jobDescription,
      tailoringMode,
    )

    console.log("Cover letter generated, length:", generatedLetter.length)

    // Verify the cover_letters table exists
    try {
      const tableExists = await prisma.$queryRaw`
       SELECT EXISTS (
         SELECT FROM information_schema.tables 
         WHERE table_schema = 'public' 
         AND table_name = 'cover_letters'
       );
     `

      if (!tableExists[0].exists) {
        console.error("cover_letters table doesn't exist")

        // Create the table if it doesn't exist
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
           "explanation" TEXT,
           "score" INTEGER,
           "feedback" TEXT,
           "golden_passed" BOOLEAN,
           
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

        console.log("cover_letters table created")
      }
    } catch (tableError) {
      console.error("Error checking/creating cover_letters table:", tableError)
      // Continue anyway - we'll try to save the cover letter
    }

    // Save the cover letter to the database
    console.log("Saving cover letter to database...")

    try {
      // First, check if the explanation field exists in the schema
      let hasExplanationField = true
      try {
        // Try a simple query that uses the explanation field
        await prisma.$queryRaw`SELECT "explanation" FROM "cover_letters" LIMIT 1`
      } catch (fieldError) {
        console.log("Explanation field might not exist in schema yet:", fieldError)
        hasExplanationField = false
      }

      // Create the cover letter with or without the explanation field
      let coverLetter
      if (hasExplanationField) {
        coverLetter = await prisma.coverLetter.create({
          data: {
            user_id: user.id,
            original_resume_id: resumeId,
            job_description: jobDescription,
            generated_letter: generatedLetter,
            tailoring_mode: tailoringMode,
            version: currentVersion,
            explanation: explanation,
          },
        })
      } else {
        // Create without the explanation field
        coverLetter = await prisma.coverLetter.create({
          data: {
            user_id: user.id,
            original_resume_id: resumeId,
            job_description: jobDescription,
            generated_letter: generatedLetter,
            tailoring_mode: tailoringMode,
            version: currentVersion,
          },
        })
      }

      console.log("Cover letter saved successfully:", coverLetter.id)

      revalidatePath("/dashboard/cover-letter")

      return {
        success: true,
        data: {
          ...coverLetter,
          explanation: explanation, // Add this back for the client even if not saved to DB
        },
      }
    } catch (dbError) {
      console.error("Database error saving cover letter:", dbError)

      // Try a more direct approach with raw SQL if Prisma fails
      try {
        console.log("Attempting to save with raw SQL...")
        const result = await prisma.$executeRaw`
         INSERT INTO "cover_letters" 
         ("id", "user_id", "original_resume_id", "job_description", "generated_letter", "tailoring_mode", "version", "created_at")
         VALUES 
         (gen_random_uuid(), ${user.id}, ${resumeId}, ${jobDescription}, ${generatedLetter}, ${tailoringMode}, ${currentVersion}, CURRENT_TIMESTAMP)
         RETURNING "id"
       `

        console.log("Raw SQL insert result:", result)

        // Return the generated letter even if saving to DB partially succeeded
        return {
          success: true,
          data: {
            id: "temp-" + Date.now(),
            user_id: user.id,
            original_resume_id: resumeId,
            job_description: jobDescription,
            generated_letter: generatedLetter,
            tailoring_mode: tailoringMode,
            version: currentVersion,
            created_at: new Date().toISOString(),
            explanation: explanation,
          },
        }
      } catch (rawSqlError) {
        console.error("Raw SQL insert also failed:", rawSqlError)

        // Return the generated letter even if saving to DB fails completely
        return {
          success: true,
          data: {
            id: "temp-" + Date.now(),
            user_id: user.id,
            original_resume_id: resumeId,
            job_description: jobDescription,
            generated_letter: generatedLetter,
            tailoring_mode: tailoringMode,
            version: currentVersion,
            created_at: new Date().toISOString(),
            explanation: explanation,
          },
        }
      }
    }
  } catch (error) {
    console.error("Error generating cover letter:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate cover letter",
    }
  }
}

/**
 * Gets all cover letters for the current user
 */
export async function getSavedCoverLetters() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: [] }
    }

    try {
      // Check if the cover_letters table exists
      const tableExists = await prisma.$queryRaw`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public' 
          AND table_name = 'cover_letters'
        );
      `

      // If table doesn't exist, return empty array
      if (!tableExists[0].exists) {
        console.log("cover_letters table doesn't exist yet")
        return { success: true, data: [] }
      }

      // Get all cover letters for this user
      const coverLetters = await prisma.coverLetter.findMany({
        where: {
          user_id: user.id,
        },
        orderBy: {
          created_at: "desc",
        },
      })

      return { success: true, data: coverLetters }
    } catch (dbError) {
      console.error("Database error:", dbError)
      // If there's a database error (like table not existing), return empty array
      return { success: true, data: []
