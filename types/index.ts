export type TailoringAnalyticsData = {
  id: string
  user_id: string
  resume_id: string
  original_text: string
  tailored_text: string
  job_description: string
  ats_score: number
  jd_score: number
  tailoring_mode: string
  is_refinement: boolean
  iterations: number
  golden_passed: boolean
  created_at: Date
}
