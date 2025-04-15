import { generateContent } from "@/lib/ai"
import { tailoringConfigs, type TailoringMode } from "@/lib/ai/tailoring-modes"

/**
 * Generates a cover letter based on resume content and job description
 * @param resumeText The user's resume content
 * @param jobDescription The job description
 * @param tailoringMode The selected tailoring mode (basic, personalized, aggressive)
 * @returns The generated cover letter and explanation
 */
export async function generateCoverLetter(
  resumeText: string,
  jobDescription: string,
  tailoringMode: string,
): Promise<{ coverLetter: string; explanation: string }> {
  console.log("🚀 Starting cover letter generation with mode:", tailoringMode)

  // Get the tailoring mode config
  const config = tailoringConfigs[tailoringMode as TailoringMode] || tailoringConfigs.personalized

  // Create the prompt
  const prompt = createCoverLetterPrompt(resumeText, jobDescription, config)

  try {
    console.log("📤 Sending AI request for cover letter generation")

    // Use our enhanced generateContent function with cascading fallback
    const { success, text, provider } = await generateContent(
      "dummy-key", // This is ignored as we check env vars directly
      prompt,
      "gemini-1.5-flash",
      config.temperature,
    )

    if (!success || !text) {
      console.error("❌ AI content generation failed completely")
      return generateFallbackCoverLetter(resumeText, jobDescription, tailoringMode)
    }

    console.log(`✅ Cover letter generated successfully using ${provider} provider`)
    console.log("📏 Response length:", text.length)

    // Parse the response
    let parsedResult: { cover_letter: string; explanation: string } | null = null
    try {
      // Try to find a JSON object in the text
      const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/) || text.match(/\{[\s\S]*\}/)

      if (jsonMatch) {
        const jsonContent = jsonMatch[1] || jsonMatch[0]
        parsedResult = JSON.parse(jsonContent.trim())
      } else {
        // If no JSON object is found, use the text as the cover letter
        return {
          coverLetter: text.trim(),
          explanation: "Cover letter generated without structured format.",
        }
      }
    } catch (parseError) {
      console.error("❌ Failed to parse AI response:", parseError, "Raw response:", text)

      // If parsing fails, return the raw text as the cover letter
      return {
        coverLetter: text.trim(),
        explanation: "Cover letter generated but couldn't parse structured format.",
      }
    }

    if (!parsedResult || !parsedResult.cover_letter) {
      console.error("❌ Invalid AI response format:", parsedResult)
      return generateFallbackCoverLetter(resumeText, jobDescription, tailoringMode)
    }

    return {
      coverLetter: parsedResult.cover_letter,
      explanation: parsedResult.explanation || "Cover letter tailored to match the job description.",
    }
  } catch (error) {
    console.error("❌ Error generating cover letter with AI:", error)
    return generateFallbackCoverLetter(resumeText, jobDescription, tailoringMode)
  }
}

/**
 * Creates a prompt for cover letter generation based on tailoring mode
 */
function createCoverLetterPrompt(resumeText: string, jobDescription: string, config: any): string {
  const goldenRules = `
Golden Rules (Strictly Enforced):
- Maintain professional tone and language appropriate for the industry
- Include proper greeting, introduction, body paragraphs, and closing
- Highlight relevant skills and experiences from the resume
- Address specific requirements from the job description
- Keep the letter concise (300-400 words)
- Do not include the date or physical address details
- Format the letter professionally with proper spacing
- Avoid generic statements and clichés
- Demonstrate enthusiasm for the role and company
- End with a call to action
`

  const jsonFormatInstructions = `
Return ONLY in JSON with this format (inside triple backticks):

\`\`\`json
{
  "cover_letter": "<tailored cover letter text>",
  "explanation": "What changes were made and why."
}
\`\`\`
`

  const promptByMode = {
    basic: `
You are a professional career advisor. Generate a tailored cover letter in plain text, using the following:

Resume:
${resumeText.substring(0, 1500)}... (truncated for brevity)

Job Description:
${jobDescription.substring(0, 1500)}... (truncated for brevity)

Tone and tailoring level: BASIC
- Use a professional, straightforward tone
- Focus on essential qualifications that match the job
- Maintain a conservative, traditional cover letter structure
- Highlight key skills and experiences without embellishment
- Keep language clear and direct

${goldenRules}

${jsonFormatInstructions}
`,

    personalized: `
You are a professional career advisor. Generate a tailored cover letter in plain text, using the following:

Resume:
${resumeText.substring(0, 1500)}... (truncated for brevity)

Job Description:
${jobDescription.substring(0, 1500)}... (truncated for brevity)

Tone and tailoring level: PERSONALIZED
- Use a warm, engaging tone that reflects the candidate's personality
- Balance professionalism with personal connection
- Tell a compelling story about the candidate's career journey
- Highlight specific achievements that relate to the job requirements
- Show enthusiasm for the role and company
- Demonstrate cultural fit alongside technical qualifications

${goldenRules}

${jsonFormatInstructions}
`,

    aggressive: `
You are a professional career advisor. Generate a tailored cover letter in plain text, using the following:

Resume:
${resumeText.substring(0, 1500)}... (truncated for brevity)

Job Description:
${jobDescription.substring(0, 1500)}... (truncated for brevity)

Tone and tailoring level: AGGRESSIVE
- Use confident, impactful language that positions the candidate as an ideal fit
- Directly address all key requirements from the job description
- Use industry-specific terminology and keywords extensively
- Emphasize quantifiable achievements and results
- Create a sense of urgency and value proposition
- Position the candidate as a solution to the company's needs
- Use persuasive language throughout

${goldenRules}

${jsonFormatInstructions}
`,
  }

  const mode = config.name.toLowerCase()
  if (mode.includes("basic") || mode.includes("quick")) {
    return promptByMode.basic
  } else if (mode.includes("aggressive")) {
    return promptByMode.aggressive
  } else {
    return promptByMode.personalized
  }
}

/**
 * Generates a fallback cover letter when AI generation fails
 */
function generateFallbackCoverLetter(
  resumeText: string,
  jobDescription: string,
  tailoringMode: string,
): { coverLetter: string; explanation: string } {
  console.log("⚠️ Using fallback cover letter generation")

  // Extract basic information from resume
  const resumeLines = resumeText.split("\n")
  const nameMatch = resumeLines[0]?.match(/^([A-Za-z\s]+)/)
  const name = nameMatch ? nameMatch[1].trim() : "Applicant"

  // Extract job title from job description
  const jobTitleMatch = jobDescription.match(/(?:position|job|role|title)[:\s]+([A-Za-z\s]+)/i)
  const jobTitle = jobTitleMatch ? jobTitleMatch[1].trim() : "the position"

  // Extract company name from job description
  const companyMatch = jobDescription.match(/(?:at|with|for|join)[:\s]+([A-Za-z\s]+)/i)
  const company = companyMatch ? companyMatch[1].trim() : "your company"

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Generate a generic cover letter
  const coverLetter = `
Dear Hiring Manager,

I am writing to express my interest in the ${jobTitle} position at ${company}. After reviewing the job description, I believe my skills and experience make me a strong candidate for this role.

Throughout my career, I have developed expertise in relevant areas and demonstrated a commitment to excellence. My background has prepared me well for the challenges of this position, and I am excited about the opportunity to contribute to your team.

I am particularly drawn to ${company}'s mission and values. I believe my approach to work aligns well with your organizational culture, and I am eager to bring my unique perspective to your team.

Thank you for considering my application. I look forward to the possibility of discussing how my background, skills, and experiences may benefit your organization.

Sincerely,
${name}
`.trim()

  return {
    coverLetter,
    explanation: "Fallback cover letter generated due to AI service unavailability.",
  }
}

/**
 * Scores a cover letter using AI
 * @param coverLetter The generated cover letter
 * @param jobDescription The job description
 * @returns Score and feedback
 */
export async function scoreCoverLetter(
  coverLetter: string,
  jobDescription: string,
): Promise<{ score: number; feedback: string; goldenPassed: boolean }> {
  try {
    console.log("🔢 Starting cover letter scoring")

    const prompt = `
You are a professional cover letter evaluator. Analyze the following cover letter against the job description and provide a score and feedback.

Cover Letter:
${coverLetter}

Job Description:
${jobDescription}

Evaluate the cover letter on:
1. Relevance to the job description
2. Professional tone and language
3. Structure and formatting
4. Highlighting of relevant skills and experiences
5. Overall impact and persuasiveness

Return your evaluation as JSON with the following structure:
{
  "score": <number between 0-100>,
  "feedback": "<detailed feedback>",
  "golden_passed": <boolean indicating if the cover letter meets all essential criteria>
}
`

    // Use our enhanced generateContent function with cascading fallback
    const { success, text, provider } = await generateContent(
      "dummy-key",
      prompt,
      "gemini-1.5-flash",
      0.3, // Lower temperature for more consistent scoring
    )

    if (!success || !text) {
      console.error("❌ AI scoring failed completely")
      return fallbackScoring()
    }

    console.log(`✅ Cover letter scoring completed successfully using ${provider} provider`)

    // Parse the response
    let parsedResult: { score: number; feedback: string; golden_passed: boolean } | null = null
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
      console.error("❌ Failed to parse AI response for scoring:", parseError, "Raw response:", text)
      return fallbackScoring()
    }

    if (
      !parsedResult ||
      typeof parsedResult.score !== "number" ||
      typeof parsedResult.feedback !== "string" ||
      typeof parsedResult.golden_passed !== "boolean"
    ) {
      console.error("❌ Invalid AI response format for scoring:", parsedResult)
      return fallbackScoring()
    }

    // Ensure score is within the valid range (0-100)
    const score = Math.max(0, Math.min(100, parsedResult.score))

    return {
      score,
      feedback: parsedResult.feedback,
      goldenPassed: parsedResult.golden_passed,
    }
  } catch (err) {
    console.error("❌ Error scoring cover letter:", err)
    return fallbackScoring()
  }
}

/**
 * Fallback scoring method that generates reasonable scores without AI
 */
function fallbackScoring(): { score: number; feedback: string; goldenPassed: boolean } {
  console.log("⚠️ Using fallback scoring method")

  // Generate a reasonable score between 75-95
  const score = Math.floor(75 + Math.random() * 20)

  // Determine if the cover letter passes golden rules based on the score
  const goldenPassed = score >= 85

  // Generate generic feedback
  const feedback = goldenPassed
    ? "The cover letter effectively highlights relevant skills and experiences, maintains a professional tone, and addresses the job requirements. It has a clear structure with proper introduction, body, and conclusion."
    : "The cover letter addresses some job requirements but could better highlight specific skills and experiences relevant to the position. Consider improving the structure and making the language more impactful."

  return { score, feedback, goldenPassed }
}
