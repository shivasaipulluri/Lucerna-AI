/**
 * Scrubs personally identifiable information (PII) from text
 * @param text The text to scrub
 * @returns Text with PII replaced by placeholders
 */
export function scrubPII(text: string): string {
  if (!text) return text

  return (
    text
      // Remove email addresses
      .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, "[EMAIL]")
      // Remove phone numbers (various formats)
      .replace(/(\+\d{1,3}[\s-]?)?($$\d{3}$$|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}/g, "[PHONE]")
      // Remove URLs
      .replace(/(https?:\/\/[^\s]+)/g, "[URL]")
      // Remove social security numbers
      .replace(/\b\d{3}[-.]?\d{2}[-.]?\d{4}\b/g, "[SSN]")
      // Remove street addresses (simplified pattern)
      .replace(
        /\d+\s+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Court|Ct|Lane|Ln|Way|Place|Pl)\b/gi,
        "[ADDRESS]",
      )
      // Remove names (this is a simplified approach - real name detection would be more complex)
      .replace(/(?:Mr\.|Mrs\.|Ms\.|Dr\.)\s+[A-Z][a-z]+/g, "[NAME]")
  )
}
