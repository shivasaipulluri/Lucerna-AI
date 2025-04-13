"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, FileUp, AlertCircle, FileText, X, Upload } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { validatePDFFile, extractTextFromPDFClient } from "@/lib/parsing/clientPdfParser"

interface DragDropFileUploadProps {
  onFileProcessed: (text: string) => void
  className?: string
}

export function DragDropFileUpload({ onFileProcessed, className }: DragDropFileUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { toast } = useToast()

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    processFile(file)
  }

  const processFile = async (file: File) => {
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
      console.error("Error processing PDF:", error)
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

  // Drag and drop handlers
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = e.dataTransfer.files
    if (files.length > 0) {
      processFile(files[0])
    }
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-gray-300 hover:border-primary/50"
        }`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="application/pdf" className="hidden" />

        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <Upload className="h-6 w-6 text-primary" />
          </div>

          {isUploading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="h-8 w-8 animate-spin text-primary mb-2" />
              <p className="text-sm font-medium">Processing PDF...</p>
            </div>
          ) : (
            <>
              <div className="space-y-1">
                <p className="text-sm font-medium">Drag and drop your resume PDF here</p>
                <p className="text-xs text-gray-500">or</p>
              </div>

              <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()} disabled={isUploading}>
                <FileUp className="h-4 w-4 mr-2" />
                Browse files
              </Button>
            </>
          )}
        </div>
      </div>

      {selectedFile && !isUploading && (
        <div className="flex items-center justify-between text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="truncate max-w-[200px]">{selectedFile.name}</span>
            <span className="text-xs text-gray-500">({Math.round(selectedFile.size / 1024)} KB)</span>
          </div>
          <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={clearFile}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      )}

      {error && (
        <div className="text-sm text-red-500 flex items-center gap-1 p-2 bg-red-50 rounded">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <p className="text-xs text-gray-500 text-center">Supported format: PDF only. Maximum file size: 10MB.</p>
    </div>
  )
}
