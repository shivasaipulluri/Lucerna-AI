import { GoogleGenerativeAI } from '@google/generative-ai'
import { Resume } from './types'

interface GeminiConfig {
  apiKey: string
}

export class GeminiClient {
  private genAI: GoogleGenerativeAI

  constructor(config: GeminiConfig) {
    this.genAI = new GoogleGenerativeAI(config.apiKey)
  }

  async tailorResume(
    resume: Resume,
    jobDescription: string,
    mode: 'basic' | 'aggressive' | 'personalized'
  ): Promise<{ success: boolean; data?: Resume; error?: string }> {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `You are an expert resume writer. Tailor this resume for the following job description using ${mode} mode.
      Focus on matching keywords, skills, and experience. Maintain professional tone and formatting.
      
      Resume:
      ${resume.resume_text}
      
      Job Description:
      ${jobDescription}`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      if (text) {
        return {
          success: true,
          data: {
            ...resume,
            modified_resume: text,
            version: (resume.version || 0) + 1
          }
        }
      }

      throw new Error('No content received from Gemini')
    } catch (error) {
      console.error('Gemini tailoring error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to tailor resume with Gemini'
      }
    }
  }

  async generateCoverLetter(
    resume: Resume,
    jobDescription: string,
    companyName: string
  ): Promise<{ success: boolean; content?: string; error?: string }> {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `You are an expert cover letter writer. Create a compelling cover letter that highlights relevant experience and skills.
      
      Resume:
      ${resume.resume_text}
      
      Job Description:
      ${jobDescription}
      
      Company:
      ${companyName}`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      if (text) {
        return {
          success: true,
          content: text
        }
      }

      throw new Error('No content received from Gemini')
    } catch (error) {
      console.error('Gemini cover letter error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate cover letter with Gemini'
      }
    }
  }

  async scoreResume(
    resume: Resume,
    jobDescription: string
  ): Promise<{ success: boolean; atsScore?: number; jdScore?: number; error?: string }> {
    try {
      const model = this.genAI.getGenerativeModel({ model: 'gemini-pro' })
      const prompt = `You are an expert resume reviewer. Score this resume for ATS compatibility and job description match.
      Provide scores in the format:
      ATS Score: XX%
      Job Description Match: XX%
      
      Resume:
      ${resume.resume_text}
      
      Job Description:
      ${jobDescription}`

      const result = await model.generateContent(prompt)
      const response = await result.response
      const text = response.text()

      if (text) {
        const scores = this.extractScores(text)
        return {
          success: true,
          ...scores
        }
      }

      throw new Error('No content received from Gemini')
    } catch (error) {
      console.error('Gemini scoring error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to score resume with Gemini'
      }
    }
  }

  private extractScores(text: string): { atsScore: number; jdScore: number } {
    const atsMatch = text.match(/ATS Score: (\d+)%/)
    const jdMatch = text.match(/Job Description Match: (\d+)%/)
    
    return {
      atsScore: atsMatch ? parseInt(atsMatch[1]) : 0,
      jdScore: jdMatch ? parseInt(jdMatch[1]) : 0
    }
  }
} 