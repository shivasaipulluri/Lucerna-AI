import pdfParse from "pdf-parse/lib/pdf-parse.js"

/**
 * Server-side PDF text extraction from buffer
 * @param buffer PDF file as buffer
 * @returns The extracted text
 */
export async function extractTextFromPDFBuffer(buffer: Buffer): Promise<string> {
  try {
    // Parse the PDF without loading test files
    const data = await pdf(buffer, {
      // Skip loading test files
      max: 0,
    })

    // Return the text content
    return data.text || "No text content found in PDF"
  } catch (error) {
    console.error("Error extracting text from PDF buffer:", error)
    throw new Error("Failed to extract text from PDF")
  }
}
