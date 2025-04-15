import { PDFDocument } from 'pdf-lib'
import { pdf } from 'pdf-parse'
import { TextractClient, AnalyzeDocumentCommand } from '@aws-sdk/client-textract'
import { createClient } from '@supabase/supabase-js'

// Initialize AWS Textract client
const textractClient = new TextractClient({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
  }
})

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
)

export async function parsePDF(buffer: Buffer): Promise<string> {
  try {
    // Try PDF-lib first
    const pdfDoc = await PDFDocument.load(buffer)
    const pages = pdfDoc.getPages()
    let text = ''
    for (const page of pages) {
      text += await page.getText()
    }
    if (text.trim().length > 0) return text

    // Fallback to pdf-parse
    const data = await pdf(buffer)
    if (data.text.trim().length > 0) return data.text

    // Fallback to AWS Textract
    const command = new AnalyzeDocumentCommand({
      Document: { Bytes: buffer },
      FeatureTypes: ['TABLES', 'FORMS']
    })
    const response = await textractClient.send(command)
    if (response.Blocks) {
      const text = response.Blocks
        .filter(block => block.BlockType === 'LINE')
        .map(block => block.Text)
        .join('\n')
      if (text.trim().length > 0) return text
    }

    throw new Error('All PDF parsing methods failed')
  } catch (error) {
    console.error('PDF parsing error:', error)
    throw new Error('Failed to parse PDF. Please ensure the file is not corrupted and try again.')
  }
}

export async function validateAndStorePDF(buffer: Buffer, userId: string): Promise<{ success: boolean; error?: string; text?: string }> {
  try {
    // Validate file size (max 10MB)
    if (buffer.length > 10 * 1024 * 1024) {
      return { success: false, error: 'File size exceeds 10MB limit' }
    }

    // Parse PDF
    const text = await parsePDF(buffer)

    // Store in Supabase
    const { error: storageError } = await supabase
      .from('resume_uploads')
      .insert({
        user_id: userId,
        content: text,
        file_size: buffer.length,
        uploaded_at: new Date().toISOString()
      })

    if (storageError) throw storageError

    return { success: true, text }
  } catch (error) {
    console.error('PDF validation/storage error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to process PDF'
    }
  }
} 