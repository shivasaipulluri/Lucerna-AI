"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Printer, Copy, Check } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { useAnalytics } from "@/app/dashboard/hooks/useAnalytics"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TailoringMode } from "@/lib/types"
import * as Diff from "diff"
import { ReactNode } from "react"

interface ResumeSection {
  [key: string]: string;
}

interface Resume {
  sections: ResumeSection;
  version?: number;
  tailoring_mode?: TailoringMode;
}

interface TailoredPreviewProps {
  modifiedResume: string
  originalResume: string
  atsScore?: number | null
  jdScore?: number | null
  version: number
  tailoringMode: TailoringMode
  resumeId: string
}

interface AnalyticsError {
  message: string
  code?: string
}

export default function TailoredPreview({
  modifiedResume,
  originalResume,
  atsScore,
  jdScore,
  version = 1,
  tailoringMode = "personalized",
  resumeId,
}: TailoredPreviewProps) {
  const [activeTab, setActiveTab] = useState<string>("preview")
  const [copied, setCopied] = useState<boolean>(false)
  const [parsedSections, setParsedSections] = useState<{ [key: string]: string }>({})
  const [originalSections, setOriginalSections] = useState<{ [key: string]: string }>({})
  const { toast } = useToast()
  const { logCopyToClipboard, logDownload, error: analyticsError } = useAnalytics()

  // Parse resume into sections
  useEffect(() => {
    try {
      if (modifiedResume) {
        const sections = parseResumeIntoSections(modifiedResume)
        setParsedSections(sections)
      }
      if (originalResume) {
        const sections = parseResumeIntoSections(originalResume)
        setOriginalSections(sections)
      }
    } catch (err) {
      console.error("Error parsing resume sections:", err)
      toast({
        title: "Error",
        description: err instanceof Error ? err.message : "Failed to parse resume sections",
        variant: "destructive",
      })
    }
  }, [modifiedResume, originalResume, toast])

  const parseResumeIntoSections = (text: string): { [key: string]: string } => {
    try {
      const sections: { [key: string]: string } = {}
      const lines = text.split("\n")
      let currentSection = "Introduction"
      let currentContent = ""

      for (const line of lines) {
        // Check if line is a section header (all caps, no lowercase letters)
        if (line.trim().toUpperCase() === line.trim() && 
            line.trim().length > 0 && 
            !/[a-z]/.test(line.trim())) {
          if (currentContent) {
            sections[currentSection] = currentContent.trim()
          }
          currentSection = line.trim()
          currentContent = ""
        } else {
          currentContent += line + "\n"
        }
      }

      if (currentContent) {
        sections[currentSection] = currentContent.trim()
      }

      return sections
    } catch (err) {
      console.error("Error in parseResumeIntoSections:", err)
      throw new Error("Failed to parse resume sections")
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(modifiedResume)
      setCopied(true)
      await logCopyToClipboard(resumeId, version)
      toast({
        title: "Success",
        description: "Resume copied to clipboard",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Error copying to clipboard:", err)
      toast({
        title: "Error",
        description: "Failed to copy resume to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleDownload = (format: "pdf" | "docx" | "txt") => async () => {
    try {
      const blob = new Blob([modifiedResume], { 
        type: format === "pdf" ? "application/pdf" : 
              format === "docx" ? "application/vnd.openxmlformats-officedocument.wordprocessingml.document" : 
              "text/plain" 
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement("a")
      a.href = url
      a.download = `resume-v${version}.${format}`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
      await logDownload(resumeId, version, format)
      toast({
        title: "Success",
        description: `Resume downloaded as ${format.toUpperCase()}`,
      })
    } catch (err) {
      console.error("Error downloading resume:", err)
      toast({
        title: "Error",
        description: "Failed to download resume",
        variant: "destructive",
      })
    }
  }

  const printResume = () => {
    try {
      const printWindow = window.open("", "_blank")
      if (!printWindow) {
        throw new Error("Failed to open print window")
      }
      printWindow.document.write(`
        <html>
          <head>
            <title>Resume v${version}</title>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; }
              h1 { font-size: 24px; margin-bottom: 20px; }
              h2 { font-size: 18px; margin-top: 20px; margin-bottom: 10px; }
              p { margin-bottom: 10px; }
            </style>
          </head>
          <body>
            <h1>Resume v${version}</h1>
            <div style="white-space: pre-wrap;">${modifiedResume}</div>
          </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    } catch (err) {
      console.error("Error printing resume:", err)
      toast({
        title: "Error",
        description: "Failed to print resume",
        variant: "destructive",
      })
    }
  }

  const getTailoringModeDisplay = (mode: TailoringMode): string => {
    const modeMap: Record<TailoringMode, string> = {
      "basic": "Basic Tailoring",
      "personalized": "Personalized Tailoring",
      "aggressive": "Aggressive Tailoring",
      "story": "Story-Based Tailoring",
      "quick": "Quick Tailoring"
    }
    return modeMap[mode] || "Unknown Mode"
  }

  const highlightDifferences = (
    sectionTitle: string,
    originalResume: Resume | null,
    modifiedResume: Resume | null
  ): string => {
    try {
      if (!originalResume?.sections || !modifiedResume?.sections) {
        return "";
      }

      const originalText = originalResume.sections[sectionTitle] || "";
      const modifiedText = modifiedResume.sections[sectionTitle] || "";

      const differences = Diff.diffWords(originalText, modifiedText);

      return differences.map((part: { value: string; added?: boolean; removed?: boolean }, index: number) => {
        if (part.added) {
          return `<span class="bg-green-100 text-green-800">${part.value}</span>`;
        }
        if (part.removed) {
          return `<span class="bg-red-100 text-red-800 line-through">${part.value}</span>`;
        }
        return part.value;
      }).join("");
    } catch (error) {
      console.error("Error highlighting differences:", error);
      return "";
    }
  }

  // Show analytics error if any
  useEffect(() => {
    if (analyticsError) {
      console.error("Analytics error:", analyticsError)
      toast({
        title: "Analytics Error",
        description: analyticsError.message,
        variant: "destructive",
      })
    }
  }, [analyticsError, toast])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Tailored Resume</span>
          <div className="flex items-center gap-2">
            <Badge variant="outline">
              Version {version}
            </Badge>
            <Badge variant="outline">
              {getTailoringModeDisplay(tailoringMode)}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
          </TabsList>
          <TabsContent value="preview">
            <div className="mt-4">
              <div className="flex justify-end gap-2 mb-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={handleCopy}>
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Copy to clipboard</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={handleDownload("txt")}>
                        <Download className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Download as text</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" onClick={printResume}>
                        <Printer className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Print resume</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="whitespace-pre-wrap">{modifiedResume}</div>
            </div>
          </TabsContent>
          <TabsContent value="comparison">
            <div className="mt-4">
              {Object.keys(parsedSections).map((sectionTitle) => (
                <div key={sectionTitle} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{sectionTitle}</h3>
                  <div
                    className="whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{
                      __html: highlightDifferences(sectionTitle, originalSections[sectionTitle] ? JSON.parse(originalSections[sectionTitle]) as Resume : null, parsedSections[sectionTitle] ? JSON.parse(parsedSections[sectionTitle]) as Resume : null),
                    }}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
