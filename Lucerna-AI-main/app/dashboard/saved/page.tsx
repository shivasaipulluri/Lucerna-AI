"use client"

import { useState, useEffect } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { InspirationalQuote } from "@/components/inspirational-quote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { getSavedResumeCollection, deleteSavedResume, updateSavedResumeLabel } from "../actions"
import { formatDistanceToNow } from "date-fns"
import Link from "next/link"
import { Loader2, FileText, Download, Copy, Check, Pencil, Trash2, Plus, Save, X } from "lucide-react"
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

interface SavedResumeWithDetails {
  id: string
  resume_id: string
  label: string | null
  created_at: string
  resume: {
    resume_text: string
    modified_resume: string | null
    job_description: string
    ats_score: number | null
    jd_score: number | null
    version: number
    tailoring_mode: string | null
    created_at: string
  }
}

export default function SavedResumesPage() {
  const [savedResumes, setSavedResumes] = useState<SavedResumeWithDetails[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)
  const [resumeToDelete, setResumeToDelete] = useState<string | null>(null)
  const [isDeleting, setIsDeleting] = useState(false)
  const [editingLabelId, setEditingLabelId] = useState<string | null>(null)
  const [newLabel, setNewLabel] = useState("")
  const { toast } = useToast()

  useEffect(() => {
    // Create a flag to track if the component is mounted
    let isMounted = true

    async function loadSavedResumes() {
      // Only proceed if we're in a loading state to prevent repeated calls
      if (!isLoading) return

      try {
        setError(null)

        const result = await getSavedResumeCollection()

        // Check if component is still mounted before updating state
        if (!isMounted) return

        if (result.success && result.data) {
          setSavedResumes(result.data)
        } else {
          setError(result.error || "Failed to load saved resumes")
          toast({
            title: "Error",
            description: result.error || "Failed to load saved resumes",
            variant: "destructive",
          })
        }
      } catch (error: any) {
        // Check if component is still mounted before updating state
        if (!isMounted) return

        setError(error.message || "An unexpected error occurred")
        toast({
          title: "Error",
          description: error.message || "An unexpected error occurred",
          variant: "destructive",
        })
      } finally {
        // Check if component is still mounted before updating state
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadSavedResumes()

    // Cleanup function to prevent state updates after unmount
    return () => {
      isMounted = false
    }
  }, [isLoading, toast])

  const handleDeleteClick = (id: string) => {
    setResumeToDelete(id)
    setDeleteDialogOpen(true)
  }

  const handleConfirmDelete = async () => {
    if (!resumeToDelete) return

    setIsDeleting(true)
    try {
      const result = await deleteSavedResume(resumeToDelete)

      if (result.success) {
        setSavedResumes((prev) => prev.filter((resume) => resume.id !== resumeToDelete))
        toast({
          title: "Resume Removed",
          description: "The resume has been removed from your saved collection.",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to remove resume",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsDeleting(false)
      setDeleteDialogOpen(false)
      setResumeToDelete(null)
    }
  }

  const handleCopy = (content: string, id: string) => {
    navigator.clipboard.writeText(content)
    setCopiedId(id)

    toast({
      title: "Copied to Clipboard",
      description: "Resume content has been copied to your clipboard.",
    })

    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleEditLabel = (id: string, currentLabel: string | null) => {
    setEditingLabelId(id)
    setNewLabel(currentLabel || "")
  }

  const handleSaveLabel = async (id: string) => {
    try {
      const result = await updateSavedResumeLabel(id, newLabel)

      if (result.success) {
        setSavedResumes((prev) => prev.map((resume) => (resume.id === id ? { ...resume, label: newLabel } : resume)))
        toast({
          title: "Label Updated",
          description: "The resume label has been updated.",
        })
      } else {
        toast({
          title: "Error",
          description: result.error || "Failed to update label",
          variant: "destructive",
        })
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setEditingLabelId(null)
      setNewLabel("")
    }
  }

  const handleCancelEdit = () => {
    setEditingLabelId(null)
    setNewLabel("")
  }

  const downloadAsText = (resume: SavedResumeWithDetails) => {
    const content = resume.resume.modified_resume || resume.resume.resume_text
    const fileName = `lucerna-resume-${resume.label || "saved"}-v${resume.resume.version}.txt`

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = fileName
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Download Complete",
      description: "Your resume has been downloaded as a text file.",
    })
  }

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
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">Saved Resumes</h1>

        <InspirationalQuote />

        {error && (
          <div className="mb-6 p-4 bg-red-50 text-destructive rounded-md border border-red-200 flex items-center">
            <p>{error}</p>
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-gray-600">Loading your saved resumes...</span>
          </div>
        ) : savedResumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedResumes.map((savedResume) => (
              <Card key={savedResume.id} className="hover:shadow-card transition-shadow shadow-soft">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg font-serif">
                      {editingLabelId === savedResume.id ? (
                        <div className="flex items-center gap-2">
                          <Input
                            value={newLabel}
                            onChange={(e) => setNewLabel(e.target.value)}
                            placeholder="Enter label"
                            className="h-8 text-sm"
                            autoFocus
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleSaveLabel(savedResume.id)}
                            className="h-8 w-8 p-0"
                          >
                            <Save className="h-4 w-4 text-success" />
                          </Button>
                          <Button variant="ghost" size="sm" onClick={handleCancelEdit} className="h-8 w-8 p-0">
                            <X className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span>{savedResume.label || `Resume v${savedResume.resume.version}`}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditLabel(savedResume.id, savedResume.label)}
                            className="h-6 w-6 p-0"
                          >
                            <Pencil className="h-3 w-3 text-gray-400" />
                          </Button>
                        </div>
                      )}
                    </CardTitle>
                    <Badge variant="outline">{getTailoringModeDisplay(savedResume.resume.tailoring_mode)}</Badge>
                  </div>
                  <CardDescription>Saved {formatDate(savedResume.created_at)}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="h-32 overflow-hidden">
                    <p className="text-sm text-gray-600 line-clamp-5">
                      {savedResume.resume.modified_resume || savedResume.resume.resume_text}
                    </p>
                  </div>

                  {savedResume.resume.ats_score !== null && savedResume.resume.jd_score !== null && (
                    <div className="flex gap-2 mt-3">
                      <div className="text-xs bg-background px-2 py-1 rounded-full">
                        ATS: {savedResume.resume.ats_score}%
                      </div>
                      <div className="text-xs bg-background px-2 py-1 rounded-full">
                        JD: {savedResume.resume.jd_score}%
                      </div>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between pt-2 border-t">
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        handleCopy(savedResume.resume.modified_resume || savedResume.resume.resume_text, savedResume.id)
                      }
                      className="btn-hover"
                    >
                      {copiedId === savedResume.id ? (
                        <Check className="h-4 w-4 mr-1" />
                      ) : (
                        <Copy className="h-4 w-4 mr-1" />
                      )}
                      {copiedId === savedResume.id ? "Copied" : "Copy"}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => downloadAsText(savedResume)}
                      className="btn-hover"
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-destructive hover:text-destructive/90 hover:bg-red-50"
                    onClick={() => handleDeleteClick(savedResume.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}

            {/* Add New Resume Card */}
            <Card className="border-dashed hover:border-primary transition-colors cursor-pointer flex flex-col items-center justify-center h-full min-h-[250px] shadow-soft">
              <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Plus className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-medium text-gray-800 mb-2 font-serif">Create New Resume</h3>
                <p className="text-sm text-gray-500 mb-4">Start tailoring a new resume</p>
                <Button variant="outline" asChild className="mt-2 btn-hover">
                  <Link href="/dashboard">Create New</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border shadow-soft">
            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">No Saved Resumes</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              You haven't saved any resumes yet. Create a resume and save it to your collection.
            </p>
            <Button asChild className="btn-hover">
              <Link href="/dashboard">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Resume
              </Link>
            </Button>
          </div>
        )}
      </main>
      <Footer />

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the resume from your saved collection. The original resume will still be available in
              your history.
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
                  Removing...
                </>
              ) : (
                "Remove"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
