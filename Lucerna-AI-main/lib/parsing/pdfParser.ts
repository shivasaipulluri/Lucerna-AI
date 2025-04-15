import * as pdfjs from "pdfjs-dist"

// Initialize PDF.js based on the environment
const initPdfJs = () => {
  // Only initialize in browser environment
  if (typeof window !== "undefined") {
    // Instead of using a CDN, we'll use the worker from the package
    const pdfjsWorker = new Worker(new URL("pdfjs-dist/build/pdf.worker.mjs", import.meta.url))
    pdfjs.GlobalWorkerOptions.workerPort = pdfjsWorker
  }
}

/**
 * Extracts text from a PDF file using PDF.js (client-side)
 * @param file The PDF file to extract text from
 * @returns The extracted text as a string
 */
export async function extractTextFromPDF(file: File): Promise<{ success: boolean; text: string; error?: string }> {
  try {
    // Initialize PDF.js
    initPdfJs()

    // Convert the file to an ArrayBuffer
    const arrayBuffer = await file.arrayBuffer()

    // Load the PDF document
    const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise

    // Get the total number of pages
    const numPages = pdf.numPages

    // Extract text from each page
    let fullText = ""

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()

      // Extract text items and join them
      const pageText = textContent.items.map((item: any) => item.str).join(" ")

      fullText += pageText + "\n\n"
    }

    // Clean up the text
    const cleanedText = fullText
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .replace(/\n\s*\n/g, "\n\n") // Replace multiple newlines with double newlines
      .trim()

    return { success: true, text: cleanedText }
  } catch (error) {
    console.error("Error extracting text from PDF:", error)
    return {
      success: false,
      text: "",
      error: error instanceof Error ? error.message : "Failed to extract text from PDF",
    }
  }
}

/**
 * Extracts text from a PDF file using PDF.js (client-side)
 * @param buffer The PDF file to extract text from
 * @returns The extracted text as a string
 */
export async function extractPlainTextFromPDF(buffer: Buffer): Promise<string> {
  try {
    // Initialize PDF.js
    initPdfJs()

    // Load the PDF document
    const pdf = await pdfjs.getDocument({ data: buffer }).promise

    // Get the total number of pages
    const numPages = pdf.numPages

    // Extract text from each page
    let fullText = ""

    for (let i = 1; i <= numPages; i++) {
      const page = await pdf.getPage(i)
      const textContent = await page.getTextContent()

      // Extract text items and join them
      const pageText = textContent.items.map((item: any) => item.str).join(" ")

      fullText += pageText + "\n\n"
    }

    // Clean up the text
    const cleanedText = fullText
      .replace(/\s+/g, " ") // Replace multiple spaces with a single space
      .replace(/\n\s*\n/g, "\n\n") // Replace multiple newlines with double newlines
      .trim()

    return cleanedText
  } catch (error) {
    console.error("Error extracting text from PDF:", error)
    throw new Error("Failed to extract text from PDF")
  }
}

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
 * Fallback function for when PDF.js fails
 * @param file The PDF file
 * @returns A simple text extraction result
 */
export function fallbackTextExtraction(file: File): { success: boolean; text: string } {
  return {
    success: true,
    text: `Unable to extract text from ${file.name} (${Math.round(file.size / 1024)} KB).
    
Please copy and paste your resume text manually.

File details:
- Name: ${file.name}
- Size: ${Math.round(file.size / 1024)} KB
- Type: ${file.type}`,
  }
}
