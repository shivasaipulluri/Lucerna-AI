export interface Resume {
  id: string
  user_id: string
  resume_text: string
  job_description: string
  modified_resume: string | null
  ats_score: number | null
  jd_score: number | null
  version: number | null
  tailoring_mode: string | null
  created_at: string | Date
}

export interface ResumeEventData {
  eventType: string
  resumeId: string
  resumeText?: string
  jobDescription?: string
  tailoredText?: string
  atsScore?: number
  jdScore?: number
  tailoringMode?: string
  version?: number
}

export interface InteractionData {
  action: string
  element: string
  metadata?: Record<string, any>
}

export interface TailoringAnalyticsData {
  resumeId: string
  originalText: string
  tailoredText: string
  jobDescription: string
  atsScore: number
  jdScore: number
  tailoringMode: string
  isRefinement: boolean
  iterations: number
  goldenPassed: boolean
}

export interface AnalyticsResult<T> {
  success: boolean
  data?: T
  error?: string
}

export interface UserAnalytics {
  dailyBasicTailoringsUsed: number
  dailyPersonalizedTailoringsUsed: number
  dailyCoverLettersUsed: number
  dailyResetDate: Date | null
}

export type TailoringMode = "basic" | "personalized" | "aggressive" | "story" | "quick"

export const FREE_TIER_LIMITS = {
  BASIC_TAILORINGS_PER_DAY: 3,
  PERSONALIZED_TAILORINGS_PER_DAY: 1,
  COVER_LETTERS_PER_DAY: 1,
} 