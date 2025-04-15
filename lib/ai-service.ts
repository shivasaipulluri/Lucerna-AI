import { OpenRouterClient } from './openrouter-client'
import { GeminiClient } from './gemini-client'
import { Resume } from './types'

// Initialize AI clients
const openRouter = new OpenRouterClient({
  apiKey: process.env.OPENROUTER_API_KEY || ''
})

const gemini = new GeminiClient({
  apiKey: process.env.GEMINI_API_KEY || ''
})

interface TailoringResult {
  success: boolean
  data?: Resume
  error?: string
  provider?: string
}

export async function tailorResume(
  resume: Resume,
  jobDescription: string,
  mode: 'basic' | 'aggressive' | 'personalized' = 'basic'
): Promise<TailoringResult> {
  try {
    // Try OpenRouter first
    const openRouterResult = await openRouter.tailorResume(resume, jobDescription, mode)
    if (openRouterResult.success) {
      return { ...openRouterResult, provider: 'openrouter' }
    }

    // Fallback to Gemini
    const geminiResult = await gemini.tailorResume(resume, jobDescription, mode)
    if (geminiResult.success) {
      return { ...geminiResult, provider: 'gemini' }
    }

    throw new Error('All AI providers failed to tailor resume')
  } catch (error) {
    console.error('Resume tailoring error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to tailor resume'
    }
  }
}

export async function generateCoverLetter(
  resume: Resume,
  jobDescription: string,
  companyName: string
): Promise<{ success: boolean; content?: string; error?: string }> {
  try {
    // Try OpenRouter first
    const openRouterResult = await openRouter.generateCoverLetter(resume, jobDescription, companyName)
    if (openRouterResult.success) {
      return openRouterResult
    }

    // Fallback to Gemini
    const geminiResult = await gemini.generateCoverLetter(resume, jobDescription, companyName)
    if (geminiResult.success) {
      return geminiResult
    }

    throw new Error('All AI providers failed to generate cover letter')
  } catch (error) {
    console.error('Cover letter generation error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate cover letter'
    }
  }
}

export async function scoreResume(
  resume: Resume,
  jobDescription: string
): Promise<{ success: boolean; atsScore?: number; jdScore?: number; error?: string }> {
  try {
    // Try OpenRouter first
    const openRouterResult = await openRouter.scoreResume(resume, jobDescription)
    if (openRouterResult.success) {
      return openRouterResult
    }

    // Fallback to Gemini
    const geminiResult = await gemini.scoreResume(resume, jobDescription)
    if (geminiResult.success) {
      return geminiResult
    }

    throw new Error('All AI providers failed to score resume')
  } catch (error) {
    console.error('Resume scoring error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to score resume'
    }
  }
} 