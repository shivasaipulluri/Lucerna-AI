// Define the tailoring mode types
export type TailoringMode = "quick" | "story" | "aggressive"

// Interface for tailoring mode configuration
export interface TailoringModeConfig {
  name: string
  description: string
  promptInstructions: string
  aiTemperature: number
}

// Map of tailoring modes to their configurations
export const TAILORING_MODES: Record<TailoringMode, TailoringModeConfig> = {
  quick: {
    name: "Quick Fix",
    description: "Basic optimization of keywords without rewriting your story.",
    promptInstructions:
      "Focus on optimizing keywords and phrases without significantly rewriting the content. " +
      "Make minimal changes to maintain the original structure and voice. " +
      "Identify and add missing keywords from the job description. " +
      "Adjust formatting for better ATS readability. " +
      "Do not invent new experiences or significantly alter the timeline.",
    aiTemperature: 0.3, // Lower temperature for more conservative changes
  },
  story: {
    name: "Story Rewrite",
    description: "Personalized edits that retain your identity while aligning to the job.",
    promptInstructions:
      "Personalize the resume by rewriting sections to better align with the job while maintaining the candidate's identity, experience, and voice. " +
      "Enhance the narrative to highlight relevant experiences. " +
      "Reframe achievements to match industry terminology. " +
      "Reorganize content to prioritize relevant skills and experiences. " +
      "Maintain factual accuracy while improving presentation.",
    aiTemperature: 0.5, // Balanced temperature for creative yet controlled rewrites
  },
  aggressive: {
    name: "Aggressive Match",
    description: "Strongly tailored resume focused purely on matching the job description.",
    promptInstructions:
      "Strongly tailor the resume to match the job description as closely as possible. " +
      "Prioritize keyword matching and restructure content to highlight relevant experience. " +
      "Completely reframe experiences to match job requirements. " +
      "Use industry-specific terminology extensively. " +
      "Reorganize sections to maximize relevance. " +
      "Emphasize quantifiable achievements that align with the role. " +
      "Do not fabricate experiences, but maximize alignment with existing content.",
    aiTemperature: 0.7, // Higher temperature for more creative rewrites
  },
}

// Default tailoring mode if none is specified
export const DEFAULT_TAILORING_MODE: TailoringMode = "story"

// Function to get tailoring mode config
export function getTailoringModeConfig(mode: string): TailoringModeConfig {
  return TAILORING_MODES[mode as TailoringMode] || TAILORING_MODES[DEFAULT_TAILORING_MODE]
}
