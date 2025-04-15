"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Copy, Check } from "lucide-react"
import { Resume } from "@/lib/types"

export function ResumeView({ resume }: { resume: Resume }) {
  const [activeTab, setActiveTab] = useState("tailored")
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async (text: string) => {
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy text: ", err)
    }
  }

  const downloadAsText = () => {
    if (!resume?.modified_resume) return

    const blob = new Blob([resume.modified_resume], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `tailored-resume-v${resume.version}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="mt-6">
      <Tabs defaultValue="tailored" onValueChange={setActiveTab}>
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="tailored">Tailored Resume</TabsTrigger>
            <TabsTrigger value="original">Original Resume</TabsTrigger>
            <TabsTrigger value="job">Job Description</TabsTrigger>
          </TabsList>

          {activeTab === "tailored" && resume.modified_resume && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => resume.modified_resume && copyToClipboard(resume.modified_resume)}
                disabled={copied}
              >
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadAsText}
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          )}
        </div>

        <TabsContent value="tailored">
          <Card>
            <CardContent className="p-4">
              {resume.modified_resume ? (
                <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md border max-h-[500px] overflow-y-auto">
                  {resume.modified_resume}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p>No tailored resume available yet.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="original">
          <Card>
            <CardContent className="p-4">
              <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md border max-h-[500px] overflow-y-auto">
                {resume.resume_text}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="job">
          <Card>
            <CardContent className="p-4">
              <div className="whitespace-pre-wrap font-mono text-sm bg-gray-50 p-4 rounded-md border max-h-[500px] overflow-y-auto">
                {resume.job_description}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
