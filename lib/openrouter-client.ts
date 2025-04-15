import { Resume } from './types'

interface OpenRouterConfig {
  apiKey: string
  baseUrl?: string
}

export class OpenRouterClient {
  private apiKey: string
  private baseUrl: string

  constructor(config: OpenRouterConfig) {
    this.apiKey = config.apiKey
    this.baseUrl = config.baseUrl || 'https://openrouter.ai/api/v1'
  }

  async tailorResume(
    resume: Resume,
    jobDescription: string,
    mode: 'basic' | 'aggressive' | 'personalized'
  ): Promise<{ success: boolean; data?: Resume; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
          'X-Title': 'Resume Tailoring App'
        },
        body: JSON.stringify({
          model: 'mistralai/mixtral-8x7b-instruct',
          messages: [
            {
              role: 'system',
              content: `You are an expert resume writer. Tailor the resume for the job description using ${mode} mode. 
              Focus on matching keywords, skills, and experience. Maintain professional tone and formatting.`
            },
            {
              role: 'user',
              content: `Resume:\n${resume.resume_text}\n\nJob Description:\n${jobDescription}`
            }
          ],
          temperature: 0.7,
          max_tokens: 4000
        })
      })

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.statusText}`)
      }

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        return {
          success: true,
          data: {
            ...resume,
            modified_resume: data.choices[0].message.content,
            version: (resume.version || 0) + 1
          }
        }
      }

      throw new Error('No content received from OpenRouter')
    } catch (error) {
      console.error('OpenRouter tailoring error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to tailor resume with OpenRouter'
      }
    }
  }

  async generateCoverLetter(
    resume: Resume,
    jobDescription: string,
    companyName: string
  ): Promise<{ success: boolean; content?: string; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
          'X-Title': 'Resume Tailoring App'
        },
        body: JSON.stringify({
          model: 'mistralai/mixtral-8x7b-instruct',
          messages: [
            {
              role: 'system',
              content: 'You are an expert cover letter writer. Create a compelling cover letter that highlights relevant experience and skills.'
            },
            {
              role: 'user',
              content: `Resume:\n${resume.resume_text}\n\nJob Description:\n${jobDescription}\n\nCompany: ${companyName}`
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      })

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.statusText}`)
      }

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        return {
          success: true,
          content: data.choices[0].message.content
        }
      }

      throw new Error('No content received from OpenRouter')
    } catch (error) {
      console.error('OpenRouter cover letter error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate cover letter with OpenRouter'
      }
    }
  }

  async scoreResume(
    resume: Resume,
    jobDescription: string
  ): Promise<{ success: boolean; atsScore?: number; jdScore?: number; error?: string }> {
    try {
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
          'X-Title': 'Resume Tailoring App'
        },
        body: JSON.stringify({
          model: 'mistralai/mixtral-8x7b-instruct',
          messages: [
            {
              role: 'system',
              content: 'You are an expert resume reviewer. Score the resume for ATS compatibility and job description match.'
            },
            {
              role: 'user',
              content: `Resume:\n${resume.resume_text}\n\nJob Description:\n${jobDescription}`
            }
          ],
          temperature: 0.3,
          max_tokens: 1000
        })
      })

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.statusText}`)
      }

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        const scores = this.extractScores(data.choices[0].message.content)
        return {
          success: true,
          ...scores
        }
      }

      throw new Error('No content received from OpenRouter')
    } catch (error) {
      console.error('OpenRouter scoring error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to score resume with OpenRouter'
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