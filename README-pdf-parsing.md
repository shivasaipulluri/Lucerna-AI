# PDF Parsing in Resume Tailor

This document explains how the PDF parsing functionality works in the Resume Tailor application.

## Overview

The application uses PDF.js to extract text from PDF files. This allows users to upload their resume PDFs directly instead of manually copying and pasting the text.

## Components

1. **PDF Parser Utility** (`lib/parsing/pdfParser.ts`)
   - Uses PDF.js to extract text from PDF files
   - Handles validation of PDF files (type, size)

2. **API Route** (`app/api/parse-resume-pdf/route.ts`)
   - Receives PDF files via POST requests
   - Validates the files
   - Extracts text using the PDF parser utility
   - Returns the extracted text

3. **File Upload Component** (`components/file-upload.tsx`)
   - Simple button-based file upload
   - Handles file selection and validation
   - Sends the file to the API route for processing

4. **Drag and Drop Upload Component** (`components/drag-drop-file-upload.tsx`)
   - Enhanced file upload with drag and drop functionality
   - Visual feedback for drag and drop actions
   - File validation and error handling

5. **PDF Preview Component** (`components/pdf-preview.tsx`)
   - Displays the extracted text
   - Allows copying the text to clipboard
   - Optionally allows editing the text

## Usage

### Basic Usage

\`\`\`jsx
import { FileUpload } from '@/components/file-upload';

function MyComponent() {
  const handleFileProcessed = (text) => {
    console.log('Extracted text:', text);
    // Do something with the text
  };

  return <FileUpload onFileProcessed={handleFileProcessed} />;
}

</existing_code>
