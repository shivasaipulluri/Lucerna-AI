import { modelPrisma } from "./model-prisma"
import crypto from "crypto"

/**
 * Ensures a user exists in the model database
 * @param userId The user's ID from Supabase
 * @param email The user's email (optional)
 * @returns True if the user was created or already exists, false if operation failed
 */
export async function ensureModelUserExists(userId: string, email?: string): Promise<boolean> {
  console.log(`[MODEL LOG] ENTRY: ensureModelUserExists(${userId}, ${email || "no email"})`)

  try {
    console.log(`[MODEL DB] Checking if user exists: ${userId}`)

    const existingUser = await modelPrisma.user.findUnique({
      where: { id: userId },
      select: { id: true },
    })

    if (!existingUser) {
      console.log(`[MODEL DB] User does not exist, creating: ${userId}`)

      const userData: any = {
        id: userId,
        anon_user_id: `anon_${crypto.randomUUID().substring(0, 8)}`,
      }

      // Only add email if it's defined AND not empty
      if (email && email.trim() !== "") {
        userData.email = email
      }
      console.log(`[MODEL DB] Creating user with data:`, userData)

      await modelPrisma.user.create({
        data: userData,
      })

      console.log(`[MODEL DB] User created successfully: ${userId}`)
    } else {
      console.log(`[MODEL DB] User already exists: ${userId}`)
    }

    return true
  } catch (error) {
    console.error("[MODEL DB ERROR] Error ensuring user exists:", error)
    return false
  }
}

/**
 * Logs a resume event directly to the model database
 * @param userId The user's ID from Supabase
 * @param eventData The event data to log
 */
export async function logResumeEventDirect(userId: string, eventData: any): Promise<boolean> {
  // Immediate entry log
  console.log(`[MODEL LOG] ENTRY: logResumeEventDirect(${userId}, ${eventData?.eventType || "unknown"})`)

  try {
    // Ensure user exists
    const userExists = await ensureModelUserExists(userId)
    if (!userExists) {
      console.error(`[MODEL DB ERROR] Failed to ensure user exists: ${userId}`)
      return false
    }

    // Generate a unique ID
    const eventId = crypto.randomUUID()

    await modelPrisma.resumeEvent.create({
      data: {
        id: eventId,
        user_id: userId,
        event_type: eventData.eventType,
        resume_id: eventData.resumeId,
        resume_text: eventData.resumeText,
        job_description: eventData.jobDescription,
        tailored_text: eventData.tailoredText,
        ats_score: eventData.atsScore,
        jd_score: eventData.jdScore,
        tailoring_mode: eventData.tailoringMode,
        version: eventData.version,
      },
    })

    console.log(`[MODEL LOG] SUCCESS: Resume event saved: ${eventData.eventType}, ID: ${eventId}`)
    return true
  } catch (error) {
    console.error("[MODEL DB ERROR] Error logging resume event:", error)
    return false
  }
}

/**
 * Logs a resume directly to the model database
 * @param userId The user's ID from Supabase
 * @param resumeData The resume data to log
 */
export async function logResumeDirect(userId: string, resumeData: any): Promise<boolean> {
  // Immediate entry log
  console.log(`[MODEL LOG] ENTRY: logResumeDirect(${userId}, ${resumeData?.id || "unknown"})`)

  try {
    // Ensure user exists
    const userExists = await ensureModelUserExists(userId)
    if (!userExists) {
      console.error(`[MODEL DB ERROR] Failed to ensure user exists: ${userId}`)
      return false
    }

    // Check if resume already exists in model DB
    const existingResume = await modelPrisma.resume.findUnique({
      where: { id: resumeData.id },
    })

    if (existingResume) {
      console.log(`[MODEL LOG] Resume already exists in model DB: ${resumeData.id}, updating...`)

      // Update the existing resume
      await modelPrisma.resume.update({
        where: { id: resumeData.id },
        data: {
          resume_text: resumeData.resume_text,
          job_description: resumeData.job_description,
          modified_resume: resumeData.modified_resume,
          ats_score: resumeData.ats_score,
          jd_score: resumeData.jd_score,
          tailoring_mode: resumeData.tailoring_mode,
          version: resumeData.version || 1,
        },
      })

      console.log(`[MODEL LOG] SUCCESS: Resume updated in model DB: ${resumeData.id}`)
      return true
    }

    // Create the resume in model DB
    await modelPrisma.resume.create({
      data: {
        id: resumeData.id,
        user_id: userId,
        resume_text: resumeData.resume_text,
        job_description: resumeData.job_description,
        modified_resume: resumeData.modified_resume,
        ats_score: resumeData.ats_score,
        jd_score: resumeData.jd_score,
        tailoring_mode: resumeData.tailoring_mode,
        version: resumeData.version || 1,
      },
    })

    console.log(`[MODEL LOG] SUCCESS: Resume saved to model DB: ${resumeData.id}`)
    return true
  } catch (error) {
    console.error("[MODEL DB ERROR] Error logging resume:", error)
    return false
  }
}

/**
 * Logs a saved resume directly to the model database
 * @param userId The user's ID from Supabase
 * @param savedResumeData The saved resume data or resumeId
 */
export async function logSavedResumeDirect(userId: string, savedResumeData: any): Promise<boolean> {
  // Immediate entry log with more details
  console.log(
    `[MODEL LOG] ENTRY: logSavedResumeDirect(${userId}, ${
      typeof savedResumeData === "string" ? savedResumeData : savedResumeData?.resumeId || "unknown"
    })`,
  )

  try {
    // Ensure user exists
    const userExists = await ensureModelUserExists(userId)
    if (!userExists) {
      console.error(`[MODEL DB ERROR] Failed to ensure user exists: ${userId}`)
      return false
    }

    // Generate a unique ID
    const savedResumeId = crypto.randomUUID()

    // Handle both string resumeId and object with resumeId property
    const resumeId = typeof savedResumeData === "string" ? savedResumeData : savedResumeData.resumeId

    if (!resumeId) {
      console.error(`[MODEL DB ERROR] No resumeId provided to logSavedResumeDirect`)
      return false
    }

    console.log(
      `[MODEL LOG] Attempting to create saved resume in model DB with ID: ${savedResumeId} for resume: ${resumeId}`,
    )

    // Create the saved resume in model DB with explicit field mapping
    await modelPrisma.savedResume.create({
      data: {
        id: savedResumeId,
        user_id: userId,
        resume_id: resumeId,
        title: typeof savedResumeData === "object" && savedResumeData.title ? savedResumeData.title : null,
        created_at: new Date(),
      },
    })

    console.log(`[MODEL LOG] SUCCESS: Saved resume logged to model DB: ${savedResumeId} for resume ${resumeId}`)
    return true
  } catch (error) {
    console.error("[MODEL DB ERROR] Failed to log saved resume:", error)
    // Add more detailed error information
    if (error instanceof Error) {
      console.error(`[MODEL DB ERROR] Error message: ${error.message}`)
      console.error(`[MODEL DB ERROR] Error stack: ${error.stack}`)
    }
    return false
  }
}

/**
 * Logs an interaction event directly to the model database
 * @param userId The user's ID from Supabase
 * @param interactionData The interaction data to log
 */
export async function logInteractionDirect(userId: string, interactionData: any): Promise<boolean> {
  // Immediate entry log
  console.log(
    `[MODEL LOG] ENTRY: logInteractionDirect(${userId}, ${interactionData?.action || "unknown"}, ${
      interactionData?.element || "unknown"
    })`,
  )

  try {
    // Ensure user exists
    const userExists = await ensureModelUserExists(userId)
    if (!userExists) {
      console.error(`[MODEL DB ERROR] Failed to ensure user exists: ${userId}`)
      return false
    }

    // Generate a unique ID
    const interactionId = crypto.randomUUID()

    await modelPrisma.interaction.create({
      data: {
        id: interactionId,
        user_id: userId,
        action: interactionData.action,
        element: interactionData.element,
        metadata: interactionData.metadata || {},
        timestamp: new Date(),
      },
    })

    console.log(
      `[MODEL LOG] SUCCESS: Interaction saved: ${interactionData.action} on ${interactionData.element}, ID: ${interactionId}`,
    )
    return true
  } catch (error) {
    console.error("[MODEL DB ERROR] Error logging interaction:", error)
    return false
  }
}

/**
 * Logs tailoring analytics directly to the model database
 * @param userId The user's ID from Supabase
 * @param analyticsData The analytics data to log
 */
export async function logTailoringAnalyticsDirect(userId: string, analyticsData: any): Promise<boolean> {
  console.log(`[MODEL LOG] ENTRY: logTailoringAnalyticsDirect(${userId}, ${analyticsData?.resumeId || "unknown"})`)

  try {
    // Ensure user exists in the model database before proceeding
    const userExists = await ensureModelUserExists(userId)
    if (!userExists) {
      console.error(`[MODEL DB ERROR] Failed to ensure user exists: ${userId}`)
      return false
    }

    // Generate a unique ID for this analytics record
    const analyticsId = crypto.randomUUID()

    await modelPrisma.tailoringAnalytics.create({
      data: {
        id: analyticsId,
        user_id: userId,
        resume_id: analyticsData.resumeId,
        original_text: analyticsData.originalText || "",
        tailored_text: analyticsData.tailoredText || "",
        job_description: analyticsData.jobDescription || "",
        ats_score: analyticsData.atsScore || 0,
        jd_score: analyticsData.jdScore || 0,
        tailoring_mode: analyticsData.tailoringMode || "default",
        is_refinement: analyticsData.isRefinement || false,
        iterations: analyticsData.iterations || 1,
        golden_passed: analyticsData.goldenPassed || false,
        created_at: new Date(),
      },
    })

    console.log(`[MODEL LOG] SUCCESS: Tailoring analytics saved with ID: ${analyticsId}`)
    console.log(
      `[MODEL LOG] Details: Resume ID: ${analyticsData.resumeId}, Mode: ${analyticsData.tailoringMode}, Scores: ATS=${analyticsData.atsScore}, JD=${analyticsData.jdScore}`,
    )

    return true
  } catch (error) {
    console.error("[MODEL DB ERROR] Error logging tailoring analytics:", error)

    // Log additional details about the failed operation
    console.error(`[MODEL DB ERROR] Failed for user: ${userId}, resumeId: ${analyticsData?.resumeId}`)
    if (error instanceof Error) {
      console.error(`[MODEL DB ERROR] Error message: ${error.message}`)
      console.error(`[MODEL DB ERROR] Error stack: ${error.stack}`)
    }

    return false
  }
}

/**
 * Logs authentication events (login/logout) as interactions
 * @param userId The user's ID from Supabase
 * @param eventType The type of auth event ('login' or 'logout')
 * @param metadata Additional metadata about the auth event
 */
export async function logAuthEvent(userId: string, eventType: "login" | "logout", metadata?: any): Promise<boolean> {
  console.log(`[MODEL LOG] ENTRY: logAuthEvent(${userId}, ${eventType})`)

  return await logInteractionDirect(userId, {
    action: "auth",
    element: eventType,
    metadata: metadata || {},
  })
}
