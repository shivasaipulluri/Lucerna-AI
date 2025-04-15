import { Resume } from './types'

interface MixtralConfig {
  apiKey: string
  baseUrl?: string
}

export class MixtralClient {
  private apiKey: string
  private baseUrl: string

  constructor(config: MixtralConfig) {
    this.apiKey = config.apiKey
    this.baseUrl = config.baseUrl || 'https://api.mixtral.ai/v1'
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
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b',
          messages: [
            {
              role: 'user',
              content: `Tailor this resume for the following job description using ${mode} mode:\n\nResume:\n${resume.resume_text}\n\nJob Description:\n${jobDescription}`
            }
          ],
          temperature: 0.7,
          max_tokens: 4000
        })
      })

      if (!response.ok) {
        throw new Error(`Mixtral API error: ${response.statusText}`)
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

      throw new Error('No content received from Mixtral')
    } catch (error) {
      console.error('Mixtral tailoring error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to tailor resume with Mixtral'
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
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b',
          messages: [
            {
              role: 'user',
              content: `Generate a cover letter for this resume and job description:\n\nResume:\n${resume.resume_text}\n\nJob Description:\n${jobDescription}\n\nCompany: ${companyName}`
            }
          ],
          temperature: 0.7,
          max_tokens: 2000
        })
      })

      if (!response.ok) {
        throw new Error(`Mixtral API error: ${response.statusText}`)
      }

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        return {
          success: true,
          content: data.choices[0].message.content
        }
      }

      throw new Error('No content received from Mixtral')
    } catch (error) {
      console.error('Mixtral cover letter error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to generate cover letter with Mixtral'
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
          'Authorization': `Bearer ${this.apiKey}`
        },
        body: JSON.stringify({
          model: 'mixtral-8x7b',
          messages: [
            {
              role: 'user',
              content: `Score this resume against the job description for ATS compatibility and job description match:\n\nResume:\n${resume.resume_text}\n\nJob Description:\n${jobDescription}`
            }
          ],
          temperature: 0.3,
          max_tokens: 1000
        })
      })

      if (!response.ok) {
        throw new Error(`Mixtral API error: ${response.statusText}`)
      }

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        const scores = this.extractScores(data.choices[0].message.content)
        return {
          success: true,
          ...scores
        }
      }

      throw new Error('No content received from Mixtral')
    } catch (error) {
      console.error('Mixtral scoring error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to score resume with Mixtral'
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