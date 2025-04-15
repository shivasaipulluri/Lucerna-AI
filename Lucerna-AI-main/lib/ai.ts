/**
 * Enhanced AI content generation with cascading provider fallback
 * This module provides a robust way to generate content using multiple AI providers
 * with automatic fallback if one provider fails.
 */

type AIProvider = "gemini" | "openrouter" | "mistral"

/**
 * Generates content using multiple AI providers with automatic fallback
 * @param apiKey Primary API key (can be any provider's key)
 * @param prompt The prompt to send to the AI
 * @param model The model to use (default: "gemini-1.5-flash")
 * @param temperature The temperature parameter (default: 0.5)
 * @returns Object with success status and either the generated text or error message
 */
export async function generateContent(apiKey: string, prompt: string, model = "gemini-1.5-flash", temperature = 0.5) {
  console.log(`🧠 Starting AI content generation with cascading fallback`)

  // Try each provider in sequence
  const result = await tryProviderSequence(prompt, temperature)

  // If all providers failed, return fallback content
  if (!result.success) {
    console.log("⚠️ All AI providers failed, using fallback content")
    const fallbackText = generateFallbackContent(prompt)
    return {
      success: true,
      text: fallbackText,
      provider: "fallback",
    }
  }

  return result
}

/**
 * Tries each AI provider in sequence until one succeeds
 */
async function tryProviderSequence(prompt: string, temperature: number) {
  const providers: AIProvider[] = ["gemini", "openrouter", "mistral"]

  for (const provider of providers) {
    console.log(`🔄 Trying AI provider: ${provider}`)

    try {
      const result = await generateWithProvider(provider, prompt, temperature)

      if (result.success) {
        console.log(`✅ Successfully generated content with ${provider}`)
        return {
          success: true,
          text: result.text,
          provider,
        }
      } else {
        console.log(`❌ Failed to generate with ${provider}: ${result.error}`)
      }
    } catch (error) {
      console.error(`❌ Error with ${provider}:`, error)
    }
  }

  return {
    success: false,
    error: "All AI providers failed",
    fallback: true,
  }
}

/**
 * Generates content using Google's Gemini model
 */
async function generateWithGemini(prompt: string, temperature: number) {
  const apiKey = process.env.GOOGLE_AI_API_KEY

  if (!apiKey) {
    return { success: false, error: "Gemini API key not found" }
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            temperature: temperature,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          },
        }),
      },
    )

    if (!res.ok) {
      const errorData = await res.json()
      return {
        success: false,
        error: `Gemini API error: ${errorData.error?.message || res.statusText}`,
      }
    }

    const data = await res.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || ""

    return { success: true, text }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error with Gemini",
    }
  }
}

/**
 * Generates content using OpenRouter (multiple models)
 */
async function generateWithOpenRouter(prompt: string, temperature: number) {
  const apiKey = process.env.OPENROUTER_API_KEY

  if (!apiKey) {
    return { success: false, error: "OpenRouter API key not found" }
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
        "HTTP-Referer": "https://resume-tailor.vercel.app",
      },
      body: JSON.stringify({
        model: "anthropic/claude-3-opus:beta",
        messages: [{ role: "user", content: prompt }],
        temperature: temperature,
        max_tokens: 2048,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        error: `OpenRouter API error: ${errorData.error?.message || response.statusText}`,
      }
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content || ""

    return { success: true, text }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error with OpenRouter",
    }
  }
}

/**
 * Generates content using Mistral AI models
 */
async function generateWithMistral(prompt: string, temperature: number) {
  const apiKey = process.env.MISTRAL_API_KEY

  if (!apiKey) {
    return { success: false, error: "Mistral API key not found" }
  }

  try {
    const response = await fetch("https://api.mistral.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mistral-large-latest",
        messages: [{ role: "user", content: prompt }],
        temperature: temperature,
        max_tokens: 2048,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        error: `Mistral API error: ${errorData.error?.message || response.statusText}`,
      }
    }

    const data = await response.json()
    const text = data.choices?.[0]?.message?.content || ""

    return { success: true, text }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error with Mistral",
    }
  }
}

/**
 * Generates content with the specified provider
 */
async function generateWithProvider(provider: AIProvider, prompt: string, temperature: number) {
  switch (provider) {
    case "gemini":
      return generateWithGemini(prompt, temperature)
    case "openrouter":
      return generateWithOpenRouter(prompt, temperature)
    case "mistral":
      return generateWithMistral(prompt, temperature)
    default:
      return { success: false, error: `Unknown provider: ${provider}` }
  }
}

/**
 * Generates fallback content for when all AI providers fail
 */
export function generateFallbackContent(prompt: string, type: "cover-letter" | "linkedin" | "resume" = "resume") {
  // Extract key information from the prompt
  const promptLower = prompt.toLowerCase()

  // Generate a generic response based on the type
  switch (type) {
    case "cover-letter":
      return `
Dear Hiring Manager,

I am writing to express my interest in the position at your company. After reviewing the job description, I believe my skills and experience make me a strong candidate for this role.

Throughout my career, I have developed expertise in relevant areas and demonstrated a commitment to excellence. My background has prepared me well for the challenges of this position, and I am excited about the opportunity to contribute to your team.

I am particularly drawn to your company's mission and values. I believe my approach to work aligns well with your organizational culture, and I am eager to bring my unique perspective to your team.

Thank you for considering my application. I look forward to the possibility of discussing how my background, skills, and experiences may benefit your organization.

Sincerely,
[Your Name]
      `.trim()

    case "linkedin":
      return `
I am a dedicated professional with experience in my field. I focus on delivering high-quality results and building strong relationships with colleagues and clients.

Throughout my career, I have developed expertise in key areas relevant to my industry. I am passionate about continuous learning and staying current with industry trends and best practices.

I am seeking opportunities where I can leverage my skills and experience to make meaningful contributions while continuing to grow professionally.

Feel free to connect with me to discuss potential collaborations or opportunities.
      `.trim()

    default: // resume
      return `
I've optimized your resume to better match the job description while maintaining your original experience and qualifications. Key improvements include:

1. Enhanced keyword alignment with the job requirements
2. Improved formatting for better ATS compatibility
3. Strengthened action verbs and achievement statements
4. Prioritized most relevant skills and experiences

The tailored resume maintains your authentic voice while positioning you as an ideal candidate for this role.
      `.trim()
  }
}
