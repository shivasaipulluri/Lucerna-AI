"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Printer, Copy, Check } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface TailoredPreviewProps {
  modifiedResume: string
  originalResume: string
  atsScore?: number | null
  jdScore?: number | null
  version?: number
  tailoringMode?: string
}

export default function TailoredPreview({
  modifiedResume,
  originalResume,
  atsScore,
  jdScore,
  version = 1,
  tailoringMode = "personalized",
}: TailoredPreviewProps) {
  const [activeTab, setActiveTab] = useState<string>("preview")
  const [copied, setCopied] = useState<boolean>(false)
  const [parsedSections, setParsedSections] = useState<{ [key: string]: string }>({})
  const [originalSections, setOriginalSections] = useState<{ [key: string]: string }>({})
  const { toast } = useToast()

  // Parse resume into sections
  useEffect(() => {
    if (modifiedResume) {
      const sections = parseResumeIntoSections(modifiedResume)
      setParsedSections(sections)
    }

    if (originalResume) {
      const sections = parseResumeIntoSections(originalResume)
      setOriginalSections(sections)
    }
  }, [modifiedResume, originalResume])

  // Function to parse resume text into sections
  const parseResumeIntoSections = (text: string) => {
    // Common section headers in resumes
    const sectionHeaders = [
      "SUMMARY",
      "PROFESSIONAL SUMMARY",
      "OBJECTIVE",
      "EXPERIENCE",
      "WORK EXPERIENCE",
      "EMPLOYMENT HISTORY",
      "PROFESSIONAL EXPERIENCE",
      "EDUCATION",
      "ACADEMIC BACKGROUND",
      "SKILLS",
      "TECHNICAL SKILLS",
      "CORE COMPETENCIES",
      "CERTIFICATIONS",
      "CERTIFICATES",
      "LICENSES",
      "PROJECTS",
      "PROJECT EXPERIENCE",
      "AWARDS",
      "HONORS",
      "ACHIEVEMENTS",
      "PUBLICATIONS",
      "RESEARCH",
      "LANGUAGES",
      "LANGUAGE PROFICIENCY",
      "VOLUNTEER",
      "VOLUNTEER EXPERIENCE",
      "COMMUNITY SERVICE",
      "INTERESTS",
      "HOBBIES",
    ]

    // Initialize sections object with a "HEADER" section for contact info
    const sections: { [key: string]: string } = {
      HEADER: "",
    }

    // Split the text by lines
    const lines = text.split("\n")

    // Start with HEADER as the current section
    let currentSection = "HEADER"

    // Process each line
    lines.forEach((line) => {
      // Check if this line is a section header
      const upperLine = line.toUpperCase().trim()
      const isHeader = sectionHeaders.some(
        (header) => upperLine === header || upperLine.startsWith(header + ":") || upperLine.startsWith(header + " "),
      )

      if (isHeader) {
        // Extract the actual header text from the line
        currentSection = line.trim()
        sections[currentSection] = ""
      } else {
        // Add this line to the current section
        if (sections[currentSection] !== undefined) {
          sections[currentSection] += line + "\n"
        }
      }
    })

    return sections
  }

  // Function to copy resume to clipboard
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(modifiedResume)
      setCopied(true)
      toast({
        title: "Copied to clipboard",
        description: "Resume copied successfully",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy resume to clipboard",
        variant: "destructive",
      })
    }
  }

  // Function to download resume as text file
  const downloadAsText = () => {
    const blob = new Blob([modifiedResume], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `tailored-resume-v${version}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Download complete",
      description: "Resume downloaded as text file",
    })
  }

  // Function to print resume
  const printResume = () => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) {
      toast({
        title: "Print failed",
        description: "Could not open print window. Please check your popup settings.",
        variant: "destructive",
      })
      return
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Tailored Resume</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.5;
              margin: 1in;
              color: #333;
            }
            h1, h2, h3 {
              margin-top: 0.5em;
              margin-bottom: 0.5em;
              color: #2c3e50;
            }
            .section {
              margin-bottom: 1em;
              page-break-inside: avoid;
            }
            .section-title {
              font-weight: bold;
              border-bottom: 1px solid #ddd;
              margin-bottom: 0.5em;
              font-size: 1.2em;
            }
            .section-content {
              white-space: pre-wrap;
            }
            @media print {
              body {
                margin: 0.5in;
              }
            }
          </style>
        </head>
        <body>
          <div id="resume-content">
            ${Object.entries(parsedSections)
              .map(
                ([title, content]) => `
              <div class="section">
                ${title === "HEADER" ? "" : `<div class="section-title">${title}</div>`}
                <div class="section-content">${content.replace(/\n/g, "<br>")}</div>
              </div>
            `,
              )
              .join("")}
          </div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(function() { window.close(); }, 500);
            };
          </script>
        </body>
      </html>
    `)

    printWindow.document.close()
  }

  // Helper function to get tailoring mode display name
  const getTailoringModeDisplay = (mode: string) => {
    switch (mode.toLowerCase()) {
      case "basic":
      case "quick":
        return "Basic"
      case "personalized":
      case "story":
        return "Personalized"
      case "aggressive":
        return "Aggressive"
      default:
        return mode.charAt(0).toUpperCase() + mode.slice(1)
    }
  }

  // Helper function to highlight differences between sections
  const highlightDifferences = (sectionTitle: string) => {
    const modifiedContent = parsedSections[sectionTitle] || ""
    const originalContent = originalSections[sectionTitle] || ""

    if (!originalContent || !modifiedContent) return modifiedContent

    // This is a simple implementation that just wraps modified content in a span
    // A more sophisticated diff algorithm would be better for production
    const modifiedLines = modifiedContent.split("\n")
    const originalLines = originalContent.split("\n")

    return modifiedLines
      .map((line, index) => {
        // Check if this line exists in the original and is different
        const isModified = !originalLines.includes(line) && line.trim() !== ""

        if (isModified) {
          return `<span class="bg-green-100 text-green-800">${line}</span>`
        }
        return line
      })
      .join("\n")
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div>
            <CardTitle className="text-xl">Tailored Resume Preview</CardTitle>
            <div className="flex items-center mt-1 space-x-2">
              <Badge variant="outline">{getTailoringModeDisplay(tailoringMode)} Mode</Badge>
              {version && <Badge variant="outline">Version {version}</Badge>}
              {atsScore && (
                <Badge variant="outline" className="bg-blue-50 text-blue-700">
                  ATS: {atsScore}%
                </Badge>
              )}
              {jdScore && (
                <Badge variant="outline" className="bg-purple-50 text-purple-700">
                  JD: {jdScore}%
                </Badge>
              )}
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
              {copied ? "Copied" : "Copy"}
            </Button>
            <Button variant="outline" size="sm" onClick={downloadAsText}>
              <Download className="h-4 w-4 mr-1" />
              Download
            </Button>
            <Button variant="outline" size="sm" onClick={printResume}>
              <Printer className="h-4 w-4 mr-1" />
              Print
            </Button>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="preview" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="preview">Formatted Preview</TabsTrigger>
              <TabsTrigger value="changes">Show Changes</TabsTrigger>
              <TabsTrigger value="plain">Plain Text</TabsTrigger>
            </TabsList>

            <TabsContent value="preview" className="mt-0">
              <div className="bg-white border rounded-md p-6 shadow-sm">
                {Object.entries(parsedSections).map(([title, content]) => (
                  <div key={title} className="mb-6 last:mb-0">
                    {title !== "HEADER" && (
                      <h2 className="text-lg font-bold text-gray-800 border-b pb-1 mb-2">{title}</h2>
                    )}
                    <div className="whitespace-pre-wrap text-gray-700">{content}</div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="changes" className="mt-0">
              <div className="bg-white border rounded-md p-6 shadow-sm">
                {Object.entries(parsedSections).map(([title, content]) => (
                  <div key={title} className="mb-6 last:mb-0">
                    {title !== "HEADER" && (
                      <h2 className="text-lg font-bold text-gray-800 border-b pb-1 mb-2">{title}</h2>
                    )}
                    <div
                      className="whitespace-pre-wrap text-gray-700"
                      dangerouslySetInnerHTML={{ __html: highlightDifferences(title) }}
                    />
                  </div>
                ))}
                <div className="mt-4 text-sm text-gray-500 bg-gray-50 p-2 rounded">
                  <p>
                    <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded mr-2">
                      Highlighted
                    </span>
                    text indicates content that has been modified or added during tailoring.
                  </p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="plain" className="mt-0">
              <div className="bg-gray-50 border rounded-md p-4 font-mono text-sm whitespace-pre-wrap overflow-auto max-h-[600px]">
                {modifiedResume}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="text-sm text-gray-500 text-center">
        <p>
          This preview is optimized for both screen viewing and printing. Use the Print button for a clean, formatted
          hardcopy.
        </p>
      </div>
    </div>
  )
}
