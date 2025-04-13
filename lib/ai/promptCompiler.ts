// lib/ai/promptCompiler.ts

interface PromptCompilerOptions {
  resumeText: string
  jobDescription: string
  tailoringMode: "Basic" | "Personalized" | "Aggressive"
  userTone?: string // Optional user tone from analysis
}

export function compileTailoringPrompt({
  resumeText,
  jobDescription,
  tailoringMode,
  userTone = "professional",
}: PromptCompilerOptions): string {
  let strategy = ""
  let behavior = ""
  let expectation = ""

  switch (tailoringMode) {
    case "Basic":
      strategy = `Insert relevant keywords from the job description while preserving original structure and tone. Keep changes minimal, with a focus on ATS compatibility.`
      behavior = `Only adjust lines or sections that clearly match responsibilities or skills in the JD.`
      expectation = `Final result should score high on ATS while staying close to the original resume.`

      break

    case "Personalized":
      strategy = `Deeply rewrite the resume to align with the job description while maintaining the user's original voice. Add impactful action verbs, clean structure, and emotional resonance.`
      behavior = `Retain user's projects and achievements but improve storytelling, phrasing, and order of sections.`
      expectation = `Final resume should feel crafted by a professional human writer with empathy and authenticity.`

      break

    case "Aggressive":
      strategy = `Transform the resume entirely into a high-impact, results-driven version targeting the job description with full alignment to KPIs, tools, and outcomes.`
      behavior = `Reorder, rewrite, or replace any section that does not serve the new role. Prioritize relevance and clarity.`
      expectation = `Final resume should be the best possible version to win the role, regardless of original formatting.`

      break
  }

  return `
You are a professional resume tailoring expert. A user has uploaded a resume and a job description. Your task is to rewrite the resume based on the mode: "${tailoringMode}".

🧠 Instructions:
- User tone: ${userTone}
- Tailoring Strategy: ${strategy}
- Modification Behavior: ${behavior}
- Output Expectation: ${expectation}

📌 Golden Rules to obey (non-negotiable):
1. Address at least 3+ key responsibilities from the JD.
2. Never use robotic or filler language (e.g., "Responsible for", "Worked on").
3. Use achievement-driven, quantified, specific phrasing.
4. Maintain structure: Summary, Experience, Education, Projects, Skills.
5. Every section must be human-readable and emotionally compelling.
6. Don't invent fake experience. Align existing strengths with role demands.
7. Maintain the user's "${userTone}" tone throughout the resume.

✍️ Resume to Tailor:
"""${resumeText}"""

📄 Job Description:
"""${jobDescription}"""

🔁 Your task is to return the fully rewritten resume, formatted cleanly as a complete document.
`
}
