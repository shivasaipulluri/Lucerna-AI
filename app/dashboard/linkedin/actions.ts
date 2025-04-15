"use server"

import { primaryPrisma as prisma } from "@/lib/prisma"
import { createClient } from "@/lib/supabase/server"
import { incrementUsage } from "@/lib/usage"
import { logResumeEventDirect } from "@/lib/model-logger"
import { revalidatePath } from "next/cache"

/**
 * Generates a LinkedIn About section using AI
 */
export async function generateLinkedInAbout(
  aboutText: string | null,
  goal: string,
  industry: string,
  tone: string,
  tailoringMode: string,
) {
  try {
    console.log(`🚀 Generating LinkedIn About section with tone: ${tone}, industry: ${industry}, goal: ${goal}`)

    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      console.error("❌ Authentication error:", userError)
      return { success: false, error: "Not authenticated" }
    }

    // Get user data to check premium status
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        is_premium: true,
        subscription_tier: true,
      },
    })

    const isPremium = userData?.is_premium || userData?.subscription_tier === "premium"

    // Track usage for non-premium users
    if (!isPremium) {
      // Increment usage for LinkedIn optimizations
      const usageResult = await incrementUsage(user.id, "linkedin_optimization")

      if (!usageResult.success) {
        return { success: false, error: usageResult.error || "Failed to track usage" }
      }

      // Check if user has reached their limit
      const currentUsage = usageResult.usage?.linkedin_optimizations_used || 0
      const dailyLimit = 100 // Set to 100 for LinkedIn optimizations

      if (currentUsage > dailyLimit) {
        return {
          success: false,
          error: "Daily LinkedIn optimization limit reached",
          subscription: {
            current: "free",
            feature: "linkedin_optimization",
            limit: dailyLimit,
            used: currentUsage,
          },
        }
      }
    }

    // Placeholder for actual LinkedIn About generation
    // In a real implementation, this would call an AI service
    const generatedText = `I'm a passionate ${industry} professional with a focus on ${goal}. With over X years of experience, I've developed expertise in [specific skills].

Throughout my career, I've [key achievement related to goal]. I'm known for my ability to [relevant strength] and my commitment to [industry value].

I'm currently seeking opportunities to [goal-related aspiration]. Connect with me to discuss how we can collaborate!`

    console.log(`✅ LinkedIn About section generated successfully`)
    console.log("📏 Response length:", generatedText.length)

    // Save the optimization to the database
    try {
      const optimization = await prisma.linkedinOptimization.create({
        data: {
          user_id: user.id,
          resume_id: "some-resume-id",
          original_text: aboutText || "",
          goal: goal,
          industry: industry,
          tone: tone,
          generated_text: generatedText,
          tailoring_mode: tailoringMode,
          created_at: new Date(),
          job_description: `Career Goal: ${goal}, Industry: ${industry}`, // Add this line to provide a job description
        },
      })

      // Log the LinkedIn optimization event
      let logSuccess = false
      try {
        console.log(`[MODEL LOG] ATTEMPT: Logging LinkedIn optimization for user: ${user.id}`)
        await logResumeEventDirect(user.id, {
          eventType: "linkedin_optimized",
          jobDescription: `Career Goal: ${goal}, Industry: ${industry}`,
          tailoringMode: tailoringMode,
        })
        logSuccess = true
        console.log("[MODEL LOG] SUCCESS: LinkedIn optimization logged successfully")
      } catch (modelError) {
        console.error("[MODEL DB ERROR] Failed to log LinkedIn optimization:", modelError)
      }

      if (!logSuccess) {
        console.error("[MODEL LOG] FAILURE: LinkedIn optimization logging was not successful")
      }

      console.log("✅ LinkedIn optimization saved successfully:", optimization.id)

      revalidatePath("/dashboard/linkedin")

      return {
        success: true,
        data: optimization,
      }
    } catch (dbError) {
      console.error("❌ Database error saving LinkedIn optimization:", dbError)

      // Return the generated text even if saving to DB fails
      return {
        success: true,
        data: {
          id: "temp-" + Date.now(),
          user_id: user.id,
          resume_id: "some-resume-id",
          original_text: aboutText || "",
          goal: goal,
          industry: industry,
          tone: tone,
          generated_text: generatedText,
          tailoring_mode: tailoringMode,
          created_at: new Date().toISOString(),
        },
      }
    }
  } catch (error) {
    console.error("❌ Error generating LinkedIn About section:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to generate LinkedIn About section",
    }
  }
}

/**
 * Refines a LinkedIn optimization
 * @param optimizationId The ID of the optimization to refine
 * @returns The refined optimization data
 */
export async function refineLinkedInOptimization(optimizationId: string) {
  try {
    console.log(`Starting LinkedIn optimization refinement for ${optimizationId}`)

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

    // Get user data to check premium status
    const userData = await prisma.user.findUnique({
      where: { id: user.id },
      select: {
        is_premium: true,
        subscription_tier: true,
      },
    })

    const isPremium = userData?.is_premium || userData?.subscription_tier === "premium"

    // Track usage for non-premium users
    if (!isPremium) {
      // Increment usage for LinkedIn refinements - using the same counter as LinkedIn optimizations
      const usageResult = await incrementUsage(user.id, "linkedin_optimization")

      if (!usageResult.success) {
        return { success: false, error: usageResult.error || "Failed to track usage" }
      }

      // Check if user has reached their limit
      const currentUsage = usageResult.usage?.linkedin_optimizations_used || 0
      const dailyLimit = 100 // Set to 100 for LinkedIn refinements too

      if (currentUsage > dailyLimit) {
        return {
          success: false,
          error: "Daily LinkedIn refinement limit reached",
          subscription: {
            current: "free",
            feature: "linkedin_refinement",
            limit: dailyLimit,
            used: currentUsage,
          },
        }
      }
    }

    // Get the original optimization
    const originalOptimization = await prisma.linkedinOptimization.findFirst({
      where: {
        id: optimizationId,
        user_id: user.id,
      },
    })

    if (!originalOptimization) {
      console.error(`LinkedIn optimization not found: ${optimizationId}`)
      return { success: false, error: "LinkedIn optimization not found" }
    }

    // Placeholder for actual refinement logic
    // In a real implementation, this would call an AI service
    const refinedText = originalOptimization.generated_text + "\n\n[Refined with additional details and improvements]"

    // Save the refined optimization
    const refinedOptimization = await prisma.linkedinOptimization.create({
      data: {
        user_id: user.id,
        resume_id: originalOptimization.resume_id,
        original_text: originalOptimization.original_text,
        goal: originalOptimization.goal,
        industry: originalOptimization.industry,
        tone: originalOptimization.tone,
        generated_text: refinedText,
        tailoring_mode: originalOptimization.tailoring_mode,
        job_description: originalOptimization.job_description,
      },
    })

    // Log the refinement event
    try {
      console.log(`[MODEL LOG] ATTEMPT: Logging LinkedIn refinement for user: ${user.id}, id: ${optimizationId}`)
      await logResumeEventDirect(user.id, {
        eventType: "linkedin_refined",
        optimizationId: optimizationId,
        newOptimizationId: refinedOptimization.id,
      })
      console.log("[MODEL LOG] SUCCESS: LinkedIn refinement logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log LinkedIn refinement:", modelError)
    }

    revalidatePath("/dashboard/linkedin")

    return {
      success: true,
      data: refinedOptimization,
    }
  } catch (error) {
    console.error("Error refining LinkedIn optimization:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to refine LinkedIn optimization",
    }
  }
}

/**
 * Deletes a LinkedIn optimization
 * @param optimizationId The ID of the optimization to delete
 * @returns Success status and message
 */
export async function deleteLinkedInOptimization(optimizationId: string) {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated" }
    }

    // Get the optimization to verify ownership
    const optimization = await prisma.linkedinOptimization.findFirst({
      where: {
        id: optimizationId,
        user_id: user.id,
      },
    })

    if (!optimization) {
      return { success: false, error: "Optimization not found or you don't have permission to delete it" }
    }

    // Delete the optimization
    await prisma.linkedinOptimization.delete({
      where: {
        id: optimizationId,
      },
    })

    // Log the deletion event
    let logSuccess = false
    try {
      console.log(
        `[MODEL LOG] ATTEMPT: Logging LinkedIn optimization deletion for user: ${user.id}, optimizationId: ${optimizationId}`,
      )
      await logResumeEventDirect(user.id, {
        eventType: "linkedin_optimization_deleted",
        optimizationId: optimizationId,
      })
      logSuccess = true
      console.log("[MODEL LOG] SUCCESS: LinkedIn optimization deletion logged successfully")
    } catch (modelError) {
      console.error("[MODEL DB ERROR] Failed to log LinkedIn optimization deletion:", modelError)
    }

    if (!logSuccess) {
      console.error("[MODEL LOG] FAILURE: LinkedIn optimization deletion logging was not successful")
    }

    revalidatePath("/dashboard/linkedin")

    return { success: true, message: "LinkedIn optimization deleted successfully" }
  } catch (error) {
    console.error("Error deleting LinkedIn optimization:", error)
    return { success: false, error: "Failed to delete LinkedIn optimization" }
  }
}

/**
 * Gets all LinkedIn optimizations for the current user
 * @returns Object containing success status and either the LinkedIn optimizations or error message
 */
export async function getLinkedInOptimizations() {
  try {
    const supabase = await createClient()

    // Get authenticated user
    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser()

    if (userError || !user) {
      return { success: false, error: "Not authenticated", data: null }
    }

    // Get all LinkedIn optimizations for this user
    const optimizations = await prisma.linkedinOptimization.findMany({
      where: {
        user_id: user.id,
      },
      orderBy: {
        created_at: "desc",
      },
    })

    return { success: true, data: optimizations }
  } catch (error) {
    console.error("Error fetching LinkedIn optimizations:", error)
    return { success: false, error: "Failed to fetch LinkedIn optimizations", data: null }
  }
}
