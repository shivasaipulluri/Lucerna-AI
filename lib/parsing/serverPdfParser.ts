import { PDFDocument } from 'pdf-lib'

/**
 * Server-side PDF text extraction from buffer
 * @param buffer PDF file as buffer
 * @returns The extracted text
 */
export async function extractTextFromPDFBuffer(buffer: Buffer): Promise<string> {
  try {
    // Load the PDF document
    const pdfDoc = await PDFDocument.load(buffer)
    
    // Get the number of pages
    const numPages = pdfDoc.getPageCount()

    // For now, return basic information about the PDF
    return `PDF document loaded successfully.
Number of pages: ${numPages}

Note: Full text extraction is not available in this version.
Please copy and paste your resume text manually.`

  } catch (error) {
    console.error("Error extracting text from PDF buffer:", error)
    throw new Error("Failed to extract text from PDF")
  }
}