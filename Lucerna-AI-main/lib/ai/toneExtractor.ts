/**
 * Extracts the tone from text based on keyword analysis
 * This helps personalize AI-generated content to match the user's writing style
 * @param text The text to analyze (resume, cover letter, etc.)
 * @returns The inferred tone as a string
 */
export function extractToneFromText(text: string): string {
  const toneMatch = text.toLowerCase()

  if (toneMatch.includes("passionate") || toneMatch.includes("driven")) return "motivational"
  if (toneMatch.includes("collaborative") || toneMatch.includes("team")) return "empathetic"
  if (toneMatch.includes("data-driven") || toneMatch.includes("results")) return "analytical"
  if (toneMatch.includes("creative") || toneMatch.includes("storytelling")) return "creative"
  return "professional" // Default tone
}

/**
 * Extracts multiple tone aspects from text for more nuanced personalization
 * @param text The text to analyze
 * @returns Object with tone aspects and confidence scores
 */
export function extractDetailedTone(text: string): {
  primaryTone: string
  aspects: Record<string, number>
} {
  const lowerText = text.toLowerCase()

  // Define tone aspects and their associated keywords
  const toneAspects: Record<string, string[]> = {
    motivational: ["passionate", "driven", "inspired", "enthusiastic", "committed", "dedicated"],
    empathetic: ["collaborative", "team", "support", "understand", "help", "care"],
    analytical: ["data-driven", "results", "analysis", "metrics", "measured", "evaluated"],
    creative: ["creative", "innovative", "design", "storytelling", "unique", "original"],
    formal: ["professional", "experienced", "qualified", "expertise", "proficient"],
    confident: ["expert", "mastered", "led", "achieved", "succeeded", "accomplished"],
  }

  // Calculate scores for each aspect
  const scores: Record<string, number> = {}
  let maxScore = 0
  let primaryTone = "professional"

  Object.entries(toneAspects).forEach(([tone, keywords]) => {
    const score = keywords.reduce((count, keyword) => {
      const regex = new RegExp(keyword, "gi")
      const matches = (lowerText.match(regex) || []).length
      return count + matches
    }, 0)

    scores[tone] = score

    if (score > maxScore) {
      maxScore = score
      primaryTone = tone
    }
  })

  // If no strong signals, default to professional
  if (maxScore === 0) {
    primaryTone = "professional"
  }

  return {
    primaryTone,
    aspects: scores,
  }
}
