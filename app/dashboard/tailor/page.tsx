"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { updateTailoringMode } from "../actions-with-analytics"
import { getUserPreferences } from "../actions"
import { CheckCircle, Zap, User, Target } from "lucide-react"
import { TailoringMode } from "@/lib/types"

export default function TailorPage() {
  const [selectedMode, setSelectedMode] = useState<TailoringMode | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()
  const { toast } = useToast()

  // Fetch the user's current tailoring mode on page load
  useEffect(() => {
    async function fetchUserPreferences() {
      try {
        setIsLoading(true)
        const result = await getUserPreferences()

        if (result.success && result.data?.tailoring_mode) {
          const currentMode = result.data.tailoring_mode
          // Map the old mode names to the new ones if needed
          if (currentMode === "quick") {
            setSelectedMode("basic")
          } else if (currentMode === "story") {
            setSelectedMode("personalized")
          } else {
            // If it's already using the new naming
            setSelectedMode(currentMode as TailoringMode)
          }
        } else {
          // Default to personalized if no mode is set
          setSelectedMode("personalized")
        }
      } catch (error) {
        console.error("Error fetching user preferences:", error)
        toast({
          title: "Error",
          description: "Failed to load your preferences. Please try again.",
          variant: "destructive",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserPreferences()
  }, [toast])

  const handleContinue = async () => {
    if (!selectedMode) return

    setIsSubmitting(true)
    try {
      const result = await updateTailoringMode(selectedMode)

      if (result.success) {
        toast({
          title: "Preference saved",
          description: "Your tailoring mode has been updated.",
        })
        router.push("/dashboard")
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to update tailoring mode.",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error updating tailoring mode:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred while saving your preferences.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const modeOptions = [
    {
      id: "basic" as TailoringMode,
      title: "Basic",
      description: "Light optimization focusing on keywords without significant rewrites.",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-blue-50 border-blue-200",
      selectedColor: "border-primary bg-blue-50 ring-2 ring-primary ring-offset-2",
      iconColor: "text-primary",
    },
    {
      id: "personalized" as TailoringMode,
      title: "Personalized",
      description: "Balanced approach that maintains your voice while aligning with job requirements.",
      icon: <User className="h-6 w-6" />,
      color: "bg-purple-50 border-purple-200",
      selectedColor: "border-primary bg-purple-50 ring-2 ring-primary ring-offset-2",
      iconColor: "text-primary",
    },
    {
      id: "aggressive" as TailoringMode,
      title: "Aggressive",
      description: "Maximum optimization to closely match job requirements and ATS systems.",
      icon: <Target className="h-6 w-6" />,
      color: "bg-red-50 border-red-200",
      selectedColor: "border-primary bg-red-50 ring-2 ring-primary ring-offset-2",
      iconColor: "text-primary",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-3 font-serif">How would you like your resume tailored?</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose how aggressively you want your resume to be optimized for job applications. This setting can be
              changed at any time.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-pulse text-center">
                <p>Loading your preferences...</p>
              </div>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {modeOptions.map((mode) => (
                <div key={mode.id} className="relative">
                  <Card
                    className={`p-6 h-full cursor-pointer transition-all hover:shadow-card ${
                      selectedMode === mode.id ? mode.selectedColor : `hover:border-gray-300 ${mode.color}`
                    }`}
                    onClick={() => setSelectedMode(mode.id as TailoringMode)}
                  >
                    <div className="flex flex-col h-full">
                      <div className={`rounded-full p-2 w-fit ${mode.color} ${mode.iconColor} mb-4`}>{mode.icon}</div>
                      <h3 className="text-xl font-semibold mb-2 font-serif">{mode.title}</h3>
                      <p className="text-muted-foreground flex-grow">{mode.description}</p>

                      {selectedMode === mode.id && (
                        <div className="absolute top-4 right-4 text-primary">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col items-center mt-8 space-y-4">
            <p className="text-center text-sm text-muted-foreground max-w-xl">
              Your resume will never contain false information. We optimize your existing experience to match job
              requirements while maintaining accuracy and integrity.
            </p>

            <Button
              size="lg"
              onClick={handleContinue}
              disabled={!selectedMode || isSubmitting || isLoading}
              className="w-full max-w-md py-6 text-lg btn-hover"
            >
              {isSubmitting ? "Saving..." : "Continue to Dashboard"}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
