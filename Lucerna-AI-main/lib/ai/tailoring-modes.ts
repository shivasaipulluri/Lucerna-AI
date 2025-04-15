export type TailoringMode = "basic" | "personalized" | "aggressive"

interface TailoringConfig {
  name: string
  description: string
  temperature: number
  instructions: string
}

export const tailoringConfigs: Record<TailoringMode, TailoringConfig> = {
  basic: {
    name: "Basic",
    description: "Light keyword optimization without changing tone or structure.",
    temperature: 0.4,
    instructions: `
You are a resume optimization assistant. 
Apply light keyword improvements only where necessary.
Do not change sentence structure or rewrite paragraphs.
Do not invent any new content.
Strictly preserve the original formatting and tone.
Only update wording if it helps align with the job description's required skills.
Never touch sections that already align well with the job description.
`,
  },

  personalized: {
    name: "Personalized",
    description: "Thoughtful rewrite that preserves user identity and enhances voice.",
    temperature: 0.65,
    instructions: `
You are a deeply thoughtful resume tailor.
Rewrite the resume section by section, preserving the user's original voice and story.
Do NOT remove personal achievements or identity.
If a section feels off-topic (e.g. edtech experience for a finance role), rewrite it to show creative transferability.
Suggest realistic academic projects if the user lacks domain-specific experience.
Do not invent content, fake metrics, or remove any section unless requested.
Always format the response in structured plain text, matching the user's original section layout.
`,
  },

  aggressive: {
    name: "Aggressive",
    description: "Maximum alignment to the job description, tailored to pass top-tier ATS filters.",
    temperature: 0.75,
    instructions: `
You are a precision AI resume optimizer for high-competition job roles.
Rewrite the resume to match the job description with aggressive keyword and phrasing optimization.
Prioritize role-specific terminology, direct impact statements, and recruiter-aligned wording.
You may rephrase or elevate descriptions as long as the original story is preserved.
NEVER create fake accomplishments or inflate impact.
Ensure strict formatting consistency.
Avoid generic phrasing — every line must demonstrate sharp alignment with job duties.
`,
  },
}
