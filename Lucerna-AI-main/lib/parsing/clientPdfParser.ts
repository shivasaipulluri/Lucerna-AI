/**
 * Client-side PDF parsing utilities
 * This module provides simplified PDF handling that works in the browser
 */

/**
 * Validates a file to ensure it's a PDF
 * @param file The file to validate
 * @returns True if the file is a valid PDF, false otherwise
 */
export function validatePDFFile(file: File): boolean {
  // Check file type
  if (file.type !== "application/pdf") {
    return false
  }

  // Check file size (max 10MB)
  const maxSize = 10 * 1024 * 1024 // 10MB in bytes
  if (file.size > maxSize) {
    return false
  }

  return true
}

/**
 * Client-side PDF text extraction
 * This is a simplified approach that doesn't rely on PDF.js
 * @param file The PDF file
 * @returns A result object with the extracted text or error
 */
export async function extractTextFromPDFClient(
  file: File,
): Promise<{ success: boolean; text: string; error?: string }> {
  try {
    // Create a FormData object to send the file to the server
    const formData = new FormData()
    formData.append("resume", file)

    // Send the file to our API route for processing
    const response = await fetch("/api/parse-resume-pdf", {
      method: "POST",
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to process PDF")
    }

    const data = await response.json()

    if (data.text) {
      return {
        success: true,
        text: data.text,
      }
    } else {
      // If server processing failed, use fallback
      return fallbackTextExtraction(file)
    }
  } catch (error) {
    console.error("Error processing PDF:", error)
    // Use fallback if server processing fails
    return fallbackTextExtraction(file)
  }
}

/**
 * Fallback function for when server-side parsing fails
 * @param file The PDF file
 * @returns A simple text extraction result
 */
export function fallbackTextExtraction(file: File): { success: boolean; text: string } {
  return {
    success: true,
    text: `Unable to fully extract text from ${file.name} (${Math.round(file.size / 1024)} KB).
    
Please copy and paste your resume text below.

File details:
- Name: ${file.name}
- Size: ${Math.round(file.size / 1024)} KB
- Type: ${file.type}`,
  }
}
