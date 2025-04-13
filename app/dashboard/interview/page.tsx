"use client"

import { useState, useEffect } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { InspirationalQuote } from "@/components/inspirational-quote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Mic, Play, Pause, SkipForward, Loader2, MessageSquare, Sparkles, Lightbulb, Save } from "lucide-react"
import { useSubscription } from "@/context/subscription-context"
// Import from the correct path
import { saveInterviewSettings, getInterviewSettings } from "@/app/dashboard/interview/actions"

export default function InterviewCoachPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("prepare")
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState("medium")
  const [selectedMode, setSelectedMode] = useState("technical")
  const [settingsLoaded, setSettingsLoaded] = useState(false)
  const { toast } = useToast()
  const { isPremium } = useSubscription()

  // Load saved settings when component mounts
  useEffect(() => {
    async function loadSettings() {
      try {
        const result = await getInterviewSettings()
        if (result.success && result.data) {
          setJobTitle(result.data.job_title || "")
          setJobDescription(result.data.job_description || "")
          setSelectedDifficulty(result.data.difficulty || "medium")
          setSelectedMode(result.data.mode || "technical")
        }
      } catch (error: unknown) {
        // Add type annotation here
        console.error("Error loading interview settings:", error)
      } finally {
        setSettingsLoaded(true)
      }
    }

    loadSettings()
  }, [])

  const handleSaveSettings = async () => {
    if (!jobTitle || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please provide a job title and description to save your settings.",
        variant: "destructive",
      })
      return
    }

    setIsSaving(true)

    try {
      const result = await saveInterviewSettings({
        jobTitle,
        jobDescription,
        difficulty: selectedDifficulty,
        mode: selectedMode,
      })

      if (result.success) {
        toast({
          title: "Settings Saved",
          description: "Your interview settings have been saved successfully.",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to save settings",
          variant: "destructive",
        })
      }
    } catch (error: unknown) {
      // Add type annotation here
      console.error("Error saving settings:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  const handleStartSession = () => {
    if (!jobTitle || !jobDescription) {
      toast({
        title: "Missing Information",
        description: "Please provide a job title and description to start your interview preparation.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    // Save settings before starting session
    saveInterviewSettings({
      jobTitle,
      jobDescription,
      difficulty: selectedDifficulty,
      mode: selectedMode,
    }).catch((error: unknown) => {
      // Add type annotation here
      console.error("Error saving settings before session:", error)
    })

    // Simulate loading
    setTimeout(() => {
      setIsLoading(false)
      setActiveTab("practice")
      toast({
        title: "Interview Session Ready",
        description: "Your AI interview coach is ready to help you practice!",
      })
    }, 2000)
  }

  // All users can access the interview coach now

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">AI Interview Coach</h1>

        <InspirationalQuote />

        <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium mb-1 font-serif">
                Interview Coach{" "}
                <Badge variant="outline" className="ml-2 bg-amber-100 text-amber-800">
                  Beta
                </Badge>
              </h2>
              <p className="text-sm text-gray-600">Practice answering interview questions with AI feedback.</p>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="prepare">Prepare</TabsTrigger>
            <TabsTrigger value="practice" disabled={!jobTitle || !jobDescription}>
              Practice
            </TabsTrigger>
            <TabsTrigger value="review" disabled={true}>
              Review
            </TabsTrigger>
          </TabsList>

          <TabsContent value="prepare" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Job Details</CardTitle>
                  <CardDescription>Enter the job details to customize your interview practice</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="job-title" className="block text-sm font-medium mb-1">
                        Job Title
                      </label>
                      <Input
                        id="job-title"
                        placeholder="e.g., Senior Software Engineer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        className="border-ash focus:border-accent focus:ring-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="job-description" className="block text-sm font-medium mb-1">
                        Job Description
                      </label>
                      <Textarea
                        id="job-description"
                        placeholder="Paste the job description here..."
                        className="min-h-[200px] border-ash focus:border-accent focus:ring-accent"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Interview Settings</CardTitle>
                  <CardDescription>Customize your interview practice session</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="difficulty" className="block text-sm font-medium mb-1">
                        Difficulty Level
                      </label>
                      <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                        <SelectTrigger id="difficulty" className="border-ash focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="Select difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="easy">Easy - Entry Level</SelectItem>
                          <SelectItem value="medium">Medium - Mid-Level</SelectItem>
                          <SelectItem value="hard">Hard - Senior Level</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label htmlFor="mode" className="block text-sm font-medium mb-1">
                        Interview Focus
                      </label>
                      <Select value={selectedMode} onValueChange={setSelectedMode}>
                        <SelectTrigger id="mode" className="border-ash focus:border-accent focus:ring-accent">
                          <SelectValue placeholder="Select interview type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technical">Technical Skills</SelectItem>
                          <SelectItem value="behavioral">Behavioral Questions</SelectItem>
                          <SelectItem value="mixed">Mixed (Technical & Behavioral)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={handleSaveSettings}
                        disabled={isSaving || !jobTitle || !jobDescription}
                        className="btn-hover"
                      >
                        {isSaving ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="h-4 w-4 mr-2" />
                            Save Settings
                          </>
                        )}
                      </Button>

                      <Button
                        onClick={handleStartSession}
                        disabled={isLoading || !jobTitle || !jobDescription}
                        className="btn-hover"
                        variant="default"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Preparing...
                          </>
                        ) : (
                          <>
                            <Mic className="h-4 w-4 mr-2" />
                            Start Practice
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practice" className="mt-6">
            <Card className="shadow-soft border-ash/50">
              <CardHeader>
                <CardTitle className="font-serif">Interview Practice Session</CardTitle>
                <CardDescription>
                  {selectedMode === "technical"
                    ? "Technical interview for"
                    : selectedMode === "behavioral"
                      ? "Behavioral interview for"
                      : "Mixed interview for"}{" "}
                  {jobTitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="bg-blue-100 text-blue-800">
                        Question 1 of 5
                      </Badge>
                      <Badge variant="outline" className="bg-amber-100 text-amber-800">
                        {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Difficulty
                      </Badge>
                    </div>
                    <p className="text-lg font-medium">
                      {selectedMode === "technical"
                        ? "Can you explain how you would design a scalable system for handling high-volume data processing?"
                        : "Tell me about a time when you had to overcome a significant challenge in a project."}
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-12 h-12 rounded-full p-0 flex items-center justify-center btn-hover"
                    >
                      <Play className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-12 h-12 rounded-full p-0 flex items-center justify-center"
                      disabled
                    >
                      <Pause className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-12 h-12 rounded-full p-0 flex items-center justify-center btn-hover"
                    >
                      <SkipForward className="h-5 w-5" />
                    </Button>
                  </div>

                  <div>
                    <label htmlFor="answer" className="block text-sm font-medium mb-1">
                      Your Answer
                    </label>
                    <Textarea
                      id="answer"
                      placeholder="Type your answer here..."
                      className="min-h-[150px] border-ash focus:border-accent focus:ring-accent"
                    />
                  </div>

                  <Button className="w-full btn-hover" variant="default">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Submit Answer for Feedback
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <Sparkles className="h-5 w-5 mr-2 text-amber-500" />
                    AI Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 italic">Submit your answer to receive AI feedback on your response.</p>
                </CardContent>
              </Card>

              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-amber-500" />
                    Interview Tips
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Use the STAR method (Situation, Task, Action, Result) for behavioral questions.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        For technical questions, explain your thought process as you work through the problem.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>Speak clearly and at a moderate pace to ensure your answers are understood.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="review" className="mt-6">
            <Card className="shadow-soft border-ash/50">
              <CardHeader>
                <CardTitle className="font-serif">Session Review</CardTitle>
                <CardDescription>Review your interview performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-500 py-8">
                  Complete your interview practice session to see your performance review.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  )
}
