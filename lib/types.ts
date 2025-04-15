export interface ResumeEvent {
  id: string
  event_type: string
  timestamp: Date
  resume_id?: string
}

export interface Interaction {
  id: string
  action: string
  element: string
  timestamp: Date
  metadata?: any
}

export interface Resume {
  id: string
  user_id: string
  resume_text: string
  job_description: string
  modified_resume?: string
  version: number
  created_at: string
  ats_score?: number | null
  jd_score?: number | null
  tailoring_mode?: string | null
}

export type TailoringMode = "basic" | "personalized" | "aggressive" | "story" | "quick" 