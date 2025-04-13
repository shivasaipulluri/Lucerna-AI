import { generateContent } from "@/lib/ai"

/**
 * Calculates ATS and JD alignment scores using AI-based analysis.
 * @param originalResume The original resume text.
 * @param modifiedResume The tailored resume text.
 * @param jobDescription The job description.
 * @returns Object containing ats_score and jd_score, or null if analysis fails.
 */
export async function calculateScoresWithGPT(
  originalResume: string,
  modifiedResume: string,
  jobDescription: string,
): Promise<{ ats_score: number | null; jd_score: number | null; ats: number; jd: number }> {
  try {
    console.log("🔢 Starting AI-based resume scoring")

    // Construct a prompt for the AI to evaluate the resume
    const prompt = `You are a strict professional recruiter and resume scoring agent.
Given the following original resume, tailored resume, and job description:

---
ORIGINAL RESUME:
${originalResume.substring(0, 1000)}... (truncated for brevity)
---
TAILORED RESUME:
${modifiedResume.substring(0, 1000)}... (truncated for brevity)
---
JOB DESCRIPTION:
${jobDescription.substring(0, 1000)}... (truncated for brevity)

Evaluate the tailored resume strictly and return two scores ONLY as a JSON object:
1. ats_score: Based on keyword alignment, formatting, and readability for ATS (scale 0 to 100)
2. jd_score: Based on alignment of the resume with the job role (scale 0 to 100)

Respond only with a valid JSON like:
{ "ats_score": 92, "jd_score": 95 }`

    try {
      // Use our enhanced generateContent function with cascading fallback
      const { success, text, provider } = await generateContent(
        "dummy-key", // This is ignored now as we check env vars directly
        prompt,
        "gemini-1.5-flash",
        0.3, // Lower temperature for more consistent results
      )

      if (!success || !text) {
        console.error("❌ AI scoring failed completely")
        const fallbackScores = fallbackScoring()
        return {
          ...fallbackScores,
          ats: fallbackScores.ats_score || 0,
          jd: fallbackScores.jd_score || 0,
        }
      }

      console.log(`✅ Resume scoring completed successfully using ${provider} provider`)

      // Parse the response
      let parsedResult: { ats_score: number; jd_score: number } | null = null
      try {
        // Try to find a JSON object in the text
        const jsonMatch = text.match(/\{[\s\S]*\}/)
        if (jsonMatch) {
          parsedResult = JSON.parse(jsonMatch[0])
        } else {
          // If no JSON object is found, try to clean up the text and parse it
          const cleanedText = text
            .replace(/```json\s+/g, "")
            .replace(/```/g, "")
            .trim()
          parsedResult = JSON.parse(cleanedText)
        }
      } catch (parseError) {
        console.error("❌ Failed to parse AI response:", parseError, "Raw response:", text)
        const fallbackScores = fallbackScoring()
        return {
          ...fallbackScores,
          ats: fallbackScores.ats_score || 0,
          jd: fallbackScores.jd_score || 0,
        }
      }

      if (!parsedResult || typeof parsedResult.ats_score !== "number" || typeof parsedResult.jd_score !== "number") {
        console.error("❌ Invalid AI response format:", parsedResult)
        const fallbackScores = fallbackScoring()
        return {
          ...fallbackScores,
          ats: fallbackScores.ats_score || 0,
          jd: fallbackScores.jd_score || 0,
        }
      }

      // Ensure scores are within the valid range (0-100)
      const ats_score = Math.max(0, Math.min(100, parsedResult.ats_score))
      const jd_score = Math.max(0, Math.min(100, parsedResult.jd_score))

      return {
        ats_score,
        jd_score,
        ats: ats_score,
        jd: jd_score,
      }
    } catch (aiSdkError) {
      console.error("❌ Error using AI for scoring:", aiSdkError)
      const fallbackScores = fallbackScoring()
      return {
        ...fallbackScores,
        ats: fallbackScores.ats_score || 0,
        jd: fallbackScores.jd_score || 0,
      }
    }
  } catch (err) {
    console.error("❌ Error calculating scores with GPT:", err)
    const fallbackScores = fallbackScoring()
    return {
      ...fallbackScores,
      ats: fallbackScores.ats_score || 0,
      jd: fallbackScores.jd_score || 0,
    }
  }
}

function fallbackScoring() {
  console.warn("⚠️ Using fallback scoring mechanism")
  return { ats_score: 50, jd_score: 50 }
}
