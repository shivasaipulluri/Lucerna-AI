"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, FileUp, AlertCircle, FileText, X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { validatePDFFile, extractTextFromPDFClient } from "@/lib/parsing/clientPdfParser"

interface FileUploadProps {
  onFileProcessed: (text: string) => void
  className?: string
}

export function FileUpload({ onFileProcessed, className }: FileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Reset previous state
    setError(null)
    setSelectedFile(file)

    // Validate the file
    if (!validatePDFFile(file)) {
      setError("Please upload a valid PDF file under 10MB")
      setSelectedFile(null)
      return
    }

    // Process the file
    await handleUpload(file)
  }

  const handleUpload = async (file: File) => {
    setIsUploading(true)

    try {
      // Process the PDF using our client-side parser
      const result = await extractTextFromPDFClient(file)

      if (!result.success || !result.text) {
        throw new Error(result.error || "Failed to extract text from PDF")
      }

      // Call the callback with the extracted text
      onFileProcessed(result.text)

      toast({
        title: "PDF Processed",
        description: `Extracted text from ${file.name}. Please review and edit if needed.`,
      })
    } catch (error: any) {
      console.error("Error uploading PDF:", error)
      setError(error.message || "Failed to process PDF")

      toast({
        title: "PDF Processing Failed",
        description: "Please try again or copy and paste your resume text manually.",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const clearFile = () => {
    setSelectedFile(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fileInputRef.current?.click()}
          disabled={isUploading}
          className="flex items-center gap-1"
        >
          {isUploading ? (
            <>
              <Loader2 className="h-4 w-4 mr-1 animate-spin" />
              Processing...
            </>
          ) : (
            <>
              <FileUp className="h-4 w-4 mr-1" />
              Upload Resume PDF
            </>
          )}
        </Button>

        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="application/pdf" className="hidden" />

        {selectedFile && !isUploading && (
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
            <FileText className="h-4 w-4" />
            <span className="truncate max-w-[200px]">{selectedFile.name}</span>
            <Button variant="ghost" size="sm" className="h-5 w-5 p-0" onClick={clearFile}>
              <X className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>

      {error && (
        <div className="text-sm text-red-500 flex items-center gap-1">
          <AlertCircle className="h-4 w-4" />
          {error}
        </div>
      )}

      <p className="text-xs text-gray-500">Upload a PDF resume to automatically extract the text. Max size: 10MB.</p>
    </div>
  )
}
