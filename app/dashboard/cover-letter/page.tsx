"use client"

import { useState, useEffect, useRef } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { InspirationalQuote } from "@/components/inspirational-quote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { getSavedResumes, getUserPreferences } from "../actions"
import { generateCoverLetterAction, getSavedCoverLetters, deleteCoverLetter } from "./actions"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Loader2, FileText, Download, Copy, Check, RefreshCw, Clock, Trash2, FileEdit } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CoverLetterPage() {
  const [resumes, setResumes] = useState<any[]>([])
  const [coverLetters, setCoverLetters] = useState<any[]>([])
  const [selectedResumeId, setSelectedResumeId] = useState<string>("")
  const [jobDescription, setJobDescription] = useState<string>("")
  const [tailoringMode, setTailoringMode] = useState<string | null>(null)
  const [generatedLetter, setGeneratedLetter] = useState<string>("")
  const [activeTab, setActiveTab] = useState<string>("generate")
  const [isGenerating, setIsGenerating] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [copied, setCopied] = useState<boolean>(false)
  const [currentVersion, setCurrentVersion] = useState<number>(1)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false)
  const [letterToDelete, setLetterToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)
  const { toast } = useToast()

  const isMountedRef = useRef(false)
  const letterGeneratedRef = useRef(false)

  // Add this useEffect implementation
  useEffect(() => {
    // Skip if already mounted and data fetched
    if (isMountedRef.current) return

    async function fetchData() {
      try {
        setIsLoading(true)

        // Fetch resumes and user preferences in parallel
        const [resumesResult, preferencesResult, coverLettersResult] = await Promise.all([
          getSavedResumes(),
          getUserPreferences(),
          getSavedCoverLetters(),
        ])

        if (resumesResult.success && resumesResult.data) {
          // Filter to only include resumes with modified content
          const validResumes = resumesResult.data.filter((resume) => resume.modified_resume)
          setResumes(validResumes)

          // Auto-select the first resume if available
          if (validResumes.length > 0 && !selectedResumeId) {
            setSelectedResumeId(validResumes[0].id)
          }
        }

        if (preferencesResult.success && preferencesResult.data) {
          setTailoringMode(preferencesResult.data.tailoring_mode)
        }

        if (coverLettersResult.success && coverLettersResult.data) {
          setCoverLetters(coverLettersResult.data)
        }

        // Mark as mounted to prevent further fetches
        isMountedRef.current = true
      } catch (error) {
        console.error("Error loading data:", error)
        toast({
          title: "Error",
          description: "Failed to load your data. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [selectedResumeId, toast]) // Added dependencies

  // Get the tailoring mode display name
  const getTailoringModeDisplay = (mode: string | null) => {
    switch (mode) {
      case "basic":
      case "quick":
        return "Basic"
      case "personalized":
      case "story":
        return "Personalized"
      case "aggressive":
        return "Aggressive"
      default:
        return "Standard"
    }
  }

  // Add better logging and error handling to handleGenerateCoverLetter
  const handleGenerateCoverLetter = async () => {
    if (!selectedResumeId || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please select a resume and provide a job description.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    letterGeneratedRef.current = false

    try {
      console.log("🎯 Generating cover letter with:", {
        resumeId: selectedResumeId,
        jobDescription: jobDescription.substring(0, 100) + "...",
        tailoringMode: tailoringMode || "personalized",
      })

      const result = await generateCoverLetterAction(selectedResumeId, jobDescription, tailoringMode || "personalized")

      console.log("🚀 Generated Response:", result)

      if (!result.success) {
        // Check if this is a subscription limit error
        if (
          result.error === "Daily limit reached" ||
          (result.subscription && result.subscription.feature === "cover_letter")
        ) {
          // Handle subscription limit gracefully
          toast({
            title: "Daily Limit Reached",
            description:
              "You've reached your daily limit for cover letter generation. Upgrade to Premium for unlimited access.",
            variant: "destructive",
          })

          // Show upgrade prompt
          setActiveTab("generate")
          return
        }

        // Handle other errors
        throw new Error(result.error || "Failed to generate cover letter")
      }

      if (!result.data) {
        throw new Error("No data returned from cover letter generation")
      }

      console.log("🧠 Cover letter data:", result.data)

      // Make sure we have the generated letter before updating state
      if (!result.data.generated_letter) {
        console.warn("⚠️ No cover letter text in response")
        throw new Error("No cover letter text was generated")
      }

      // Update state in a safe way
      try {
        // First set the letter content
        setGeneratedLetter(result.data.generated_letter)
        console.log("📝 Set generated letter, length:", result.data.generated_letter.length)

        // Then set the version
        setCurrentVersion(result.data.version || 1)

        // Mark as generated
        letterGeneratedRef.current = true
        console.log("🚩 Set letterGeneratedRef to true")

        // Add the new cover letter to the list
        setCoverLetters((prev) => {
          // Check if this letter already exists in the list
          const exists = prev.some((letter) => letter.id === result.data.id)
          if (exists) {
            return prev
          }
          return [result.data, ...prev]
        })

        // Show score and feedback if available
        if (result.data.score) {
          toast({
            title: `Cover Letter Generated (Score: ${result.data.score}/100)`,
            description: result.data.golden_passed
              ? "Your cover letter passed all quality checks!"
              : "Your cover letter was generated but could use some improvements.",
            variant: result.data.golden_passed ? "default" : "destructive",
          })
        } else {
          toast({
            title: "Cover Letter Generated",
            description: "Your cover letter has been successfully generated.",
          })
        }

        // Force a delay before switching tabs to ensure state is updated
        console.log("🧭 Scheduling tab switch to ViewGenerated")
        setTimeout(() => {
          console.log("🧭 Switching tab to ViewGenerated now")
          setActiveTab("ViewGenerated")
        }, 300)
      } catch (stateError) {
        console.error("Error updating state:", stateError)
        toast({
          title: "UI Error",
          description:
            "Your cover letter was generated but there was an error displaying it. Please check the history tab.",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      console.error("❌ Error generating cover letter:", error)
      toast({
        title: "Generation Failed",
        description: error.message || "An error occurred while generating your cover letter.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  // Similarly improve the handleRefineCoverLetter function
  const handleRefineCoverLetter = async () => {
    if (!selectedResumeId || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please select a resume and provide a job description.",
        variant: "destructive",
      })
      return
    }

    setIsGenerating(true)
    try {
      console.log("Refining cover letter with:", {
        resumeId: selectedResumeId,
        jobDescription: jobDescription.substring(0, 100) + "...",
        tailoringMode: tailoringMode || "personalized",
      })

      const result = await generateCoverLetterAction(
        selectedResumeId,
        jobDescription,
        tailoringMode || "personalized",
        true, // isRefinement
      )

      console.log("🚀 Refined Response:", result)

      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to refine cover letter")
      }

      console.log("Refined cover letter data:", result.data)

      // Make sure we have the generated letter before updating state
      if (!result.data.generated_letter) {
        console.warn("⚠️ No cover letter text in response")
        throw new Error("No cover letter text was generated")
      }

      // Update state in a safe way
      try {
        setGeneratedLetter(result.data.generated_letter)
        setCurrentVersion(result.data.version || 1)

        // Add the new cover letter to the list
        setCoverLetters((prev) => {
          // Check if this letter already exists in the list
          const exists = prev.some((letter) => letter.id === result.data.id)
          if (exists) {
            return prev
          }
          return [result.data, ...prev]
        })

        // Show score and feedback if available
        if (result.data.score) {
          toast({
            title: `Cover Letter Refined (Score: ${result.data.score}/100)`,
            description: result.data.golden_passed
              ? "Your cover letter passed all quality checks!"
              : "Your cover letter was refined but could use some improvements.",
            variant: result.data.golden_passed ? "default" : "destructive",
          })
        } else {
          toast({
            title: "Cover Letter Refined",
            description: `Your cover letter has been refined to version ${result.data.version || 1}.`,
          })
        }
      } catch (stateError) {
        console.error("Error updating state:", stateError)
        toast({
          title: "UI Error",
          description:
            "Your cover letter was refined but there was an error displaying it. Please check the history tab.",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      console.error("❌ Error refining cover letter:", error)
      toast({
        title: "Refinement Failed",
        description: error.message || "An error occurred while refining your cover letter.",
        variant: "destructive",
      })
    } finally {
      setIsGenerating(false)
    }
  }

  // Handle delete cover letter
  const handleDeleteClick = (letterId: string) => {
    setLetterToDelete(letterId)
    setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!letterToDelete) return

    setIsDeleting(true)
    try {
      console.log("🗑️ Deleting cover letter:", letterToDelete)

      const result = await deleteCoverLetter(letterToDelete)

      if (result.success) {
        console.log("✅ Cover letter deleted successfully")

        // Update the local state to remove the deleted letter
        setCoverLetters((prev) => prev.filter((letter) => letter.id !== letterToDelete))

        toast({
          title: "Cover Letter Deleted",
          description: "The cover letter has been successfully deleted.",
        })
      } else {
        throw new Error(result.error || "Failed to delete cover letter")
      }
    } catch (error: any) {
      console.error("❌ Error deleting cover letter:", error)
      toast({
        title: "Deletion Failed",
        description: error.message || "An error occurred while deleting the cover letter.",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setDeleteDialogOpen(false)
      setLetterToDelete(null)
    }
  }

  // Handle copy to clipboard
  const handleCopy = () => {
    if (!generatedLetter) return

    navigator.clipboard.writeText(generatedLetter)
    setCopied(true)

    toast({
      title: "Copied to Clipboard",
      description: "Cover letter copied to clipboard.",
    })

    setTimeout(() => setCopied(false), 2000)
  }

  // Handle download as text
  const handleDownload = () => {
    if (!generatedLetter) return

    const blob = new Blob([generatedLetter], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `cover-letter-v${currentVersion}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Download Complete",
      description: "Your cover letter has been downloaded.",
    })
  }

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true })
    } catch (error) {
      return "Unknown date"
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8 bg-lucerna-gradient">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">Cover Letter Generator</h1>

        <InspirationalQuote />

        {/* Tailoring Mode Badge */}
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium mb-1 font-serif">
                Current Tailoring Mode:{" "}
                <span className="font-semibold text-primary">{getTailoringModeDisplay(tailoringMode)}</span>
              </h2>
              <p className="text-sm text-gray-600">This affects how your cover letter will be optimized.</p>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="generate">Generate New</TabsTrigger>
            <TabsTrigger value="ViewGenerated" disabled={!letterGeneratedRef.current}>
              View Generated
            </TabsTrigger>
            <TabsTrigger value="history">Cover Letter History</TabsTrigger>
          </TabsList>

          <TabsContent value="generate" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Panel - Resume Selection */}
              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Select Resume</CardTitle>
                  <CardDescription>Choose a tailored resume to base your cover letter on</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : resumes.length > 0 ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="resume-select">Resume</Label>
                        <Select value={selectedResumeId} onValueChange={setSelectedResumeId} name="resume-select">
                          <SelectTrigger id="resume-select" className="lucerna-input">
                            <SelectValue placeholder="Select a resume" />
                          </SelectTrigger>
                          <SelectContent>
                            {resumes.map((resume) => (
                              <SelectItem key={resume.id} value={resume.id}>
                                {getTailoringModeDisplay(resume.tailoring_mode)} Resume (v{resume.version})
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {selectedResumeId && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-md border max-h-[300px] overflow-y-auto">
                          <p className="text-sm font-medium mb-2">Selected Resume Preview:</p>
                          <p className="text-sm text-gray-600 whitespace-pre-wrap">
                            {resumes.find((r) => r.id === selectedResumeId)?.modified_resume?.substring(0, 300)}...
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-800 mb-2 font-serif">No Tailored Resumes</h3>
                      <p className="text-gray-600 mb-4">You need to create a tailored resume first.</p>
                      <Button asChild className="lucerna-button btn-hover">
                        <Link href="/dashboard">Create Resume</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Right Panel - Job Description */}
              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Job Description</CardTitle>
                  <CardDescription>Enter the job description for your cover letter</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="job-description">Job Description</Label>
                      <Textarea
                        id="job-description"
                        name="job-description"
                        placeholder="Paste the job description here..."
                        className="min-h-[200px] resize-none lucerna-input"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <Label className="text-sm text-gray-500">Tailoring Mode</Label>
                        <div className="flex items-center mt-1">
                          <Badge className="bg-indigo-100 text-indigo-800">
                            {getTailoringModeDisplay(tailoringMode)}
                          </Badge>
                          <Button variant="link" size="sm" asChild className="h-auto p-0 ml-2">
                            <Link href="/dashboard/tailor">Change</Link>
                          </Button>
                        </div>
                      </div>

                      <Button
                        onClick={handleGenerateCoverLetter}
                        disabled={isGenerating || !selectedResumeId || !jobDescription}
                        className="lucerna-button btn-hover"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Generating...
                          </>
                        ) : (
                          <>
                            <FileEdit className="h-4 w-4 mr-2" />
                            Generate Cover Letter
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Generated Cover Letter */}
            {isGenerating && (
              <Card className="mt-6 shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Generating Cover Letter...</CardTitle>
                  <CardDescription>Please wait while we create your cover letter</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center py-12">
                  <div className="text-center">
                    <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
                    <p className="text-gray-600">This may take a few moments</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="ViewGenerated" className="mt-6">
            {letterGeneratedRef.current && generatedLetter ? (
              <Card className="shadow-soft border-ash/50">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="font-serif">Generated Cover Letter</CardTitle>
                    <CardDescription>Version {currentVersion}</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCopy} className="btn-hover">
                      {copied ? <Check className="h-4 w-4 mr-1" /> : <Copy className="h-4 w-4 mr-1" />}
                      {copied ? "Copied" : "Copy"}
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleDownload} className="btn-hover">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleRefineCoverLetter}
                      disabled={isGenerating}
                      className="lucerna-button btn-hover"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Refining...
                        </>
                      ) : (
                        <>
                          <RefreshCw className="h-4 w-4 mr-2" />
                          Refine Again
                        </>
                      )}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-white p-6 rounded-md border whitespace-pre-wrap shadow-soft">
                    {generatedLetter}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border shadow-soft">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">No Cover Letter Generated</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  You haven't generated a cover letter yet. Go to the Generate New tab to create one.
                </p>
                <Button onClick={() => setActiveTab("generate")} className="lucerna-button btn-hover">
                  Generate New Cover Letter
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : coverLetters.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 font-serif">Your Cover Letter History</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {coverLetters.map((letter) => (
                    <Card key={letter.id} className="hover:shadow-card transition-shadow shadow-soft">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-start justify-between">
                          <div className="flex items-center">
                            <FileText className="h-5 w-5 text-primary mr-2" />
                            <span className="font-serif">
                              {getTailoringModeDisplay(letter.tailoring_mode)} Cover Letter
                            </span>
                          </div>
                          <Badge variant="outline" className="bg-white">
                            v{letter.version}
                          </Badge>
                        </CardTitle>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{formatDate(letter.created_at)}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="h-32 overflow-hidden">
                          <p className="text-sm text-gray-600 line-clamp-5">{letter.generated_letter}</p>
                        </div>
                      </CardContent>
                      <CardContent className="pt-0 pb-4 flex justify-between">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              try {
                                console.log("🔄 Loading letter from history:", letter.id)
                                setGeneratedLetter(letter.generated_letter)
                                setCurrentVersion(letter.version)
                                letterGeneratedRef.current = true
                                console.log("🚩 Set letterGeneratedRef to true")

                                // Also set the resume and job description
                                setSelectedResumeId(letter.original_resume_id)
                                setJobDescription(letter.job_description)

                                // Switch to view tab with delay
                                console.log("🧭 Switching tab to ViewGenerated")
                                setTimeout(() => {
                                  setActiveTab("ViewGenerated")
                                }, 300)

                                toast({
                                  title: "Cover Letter Loaded",
                                  description: "You can now view and edit this cover letter.",
                                })
                              } catch (error) {
                                console.error("Error loading letter:", error)
                                toast({
                                  title: "Error",
                                  description: "Failed to load cover letter. Please try again.",
                                  variant: "destructive",
                                })
                              }
                            }}
                            className="btn-hover"
                          >
                            View & Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(letter.generated_letter)
                              toast({
                                title: "Copied to Clipboard",
                                description: "Cover letter copied to clipboard.",
                              })
                            }}
                            className="btn-hover"
                          >
                            <Copy className="h-4 w-4 mr-1" />
                            Copy
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive/90 hover:bg-red-50"
                          onClick={() => handleDeleteClick(letter.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border shadow-soft">
                <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">No Cover Letters Yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  You haven't created any cover letters yet. Generate your first cover letter to get started.
                </p>
                <Button onClick={() => setActiveTab("generate")} className="lucerna-button btn-hover">
                  Generate Your First Cover Letter
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <Footer />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Cover Letter</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this cover letter? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleConfirmDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-destructive/90 focus:ring-destructive"
            >
              {isDeleting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
