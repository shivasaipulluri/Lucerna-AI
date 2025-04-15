"use client"

import React from "react"

import { useState, useEffect } from "react"
import { NavBar } from "@/components/nav-bar"
import { InspirationalQuote } from "@/components/inspirational-quote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  Loader2,
  Save,
  Mail,
  User,
  Phone,
  Globe,
  Linkedin,
  Building,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  Shield,
  Key,
  Trash2,
} from "lucide-react"
import { getUserProfile, updateUserProfile } from "../actions"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"

// Update the Button component to include a tooltip
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Import the debounce utility at the top of the file
import { debounce } from "@/lib/debounce"

// Import the UpgradePrompt component at the top with other imports
import { UpgradePrompt } from "@/components/upgrade-prompt"

export default function ProfilePage() {
  // Add a debounced change handler after the useState declarations
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    country: "",
    linkedIn: "",
    company: "",
    position: "",
    education: "",
    skills: "",
    bio: "",
    tailoringMode: "",
    email: "",
  })

  // Create a debounced version of the change handler
  const debouncedHandleChange = React.useCallback(
    debounce((name: string, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }))
      setFormChanged(true)
    }, 300),
    [],
  )

  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [formChanged, setFormChanged] = useState(false)
  const { toast } = useToast()
  const [userData, setUserData] = useState<any>(null)

  useEffect(() => {
    let isMounted = true

    async function loadUserProfile() {
      try {
        // Only fetch if we're in a loading state AND we haven't loaded data yet
        if (!isLoading || formData.email !== "") return

        const result = await getUserProfile()
        if (!isMounted) return

        if (result.success && result.data) {
          // Compare with current state to avoid unnecessary updates
          setFormData((prevData) => {
            // Only update if data is different to avoid re-renders
            if (
              prevData.fullName === result.data.fullName &&
              prevData.email === result.data.email &&
              prevData.tailoringMode === result.data.tailoringMode
            ) {
              return prevData
            }

            return {
              fullName: result.data.fullName || "",
              phone: result.data.phone || "",
              country: result.data.country || "",
              linkedIn: result.data.linkedIn || "",
              company: result.data.company || "",
              position: result.data.position || "",
              education: result.data.education || "",
              skills: result.data.skills || "",
              bio: result.data.bio || "",
              tailoringMode: result.data.tailoring_mode || "",
              email: result.data.email || "",
            }
          })
          setUserData(result.data)
        } else {
          const msg = result.error || "Failed to load profile"
          setError(msg)
          toast({ title: "Error", description: msg, variant: "destructive" })
        }
      } catch (error: any) {
        if (!isMounted) return
        const msg = error.message || "An unexpected error occurred"
        setError(msg)
        toast({ title: "Error", description: msg, variant: "destructive" })
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadUserProfile()
    return () => {
      isMounted = false
    }
  }, [toast, isLoading, formData.email]) // Added formData.email to dependency array

  // Update the handleChange function to use the debounced version
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    // Update the UI immediately for responsiveness
    e.target.value = value
    // Use the debounced function for state updates
    debouncedHandleChange(name, value)
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, tailoringMode: value }))
    setFormChanged(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)
    setError(null)

    try {
      // Validate tailoring mode
      if (!formData.tailoringMode) {
        throw new Error("Please select a tailoring mode")
      }

      // Get original profile to check if anything changed
      const originalProfile = await getUserProfile()
      if (originalProfile.success && originalProfile.data) {
        // Check if tailoring mode actually changed
        if (originalProfile.data.tailoringMode === formData.tailoringMode) {
          toast({
            title: "No Changes Detected",
            description: "Your tailoring mode is already set to this value.",
          })
          setIsSubmitting(false)
          return
        }
      }

      const result = await updateUserProfile(formData)
      if (result.success) {
        toast({
          title: "Profile Updated",
          description: "Your profile has been successfully updated.",
          variant: "default",
        })
        setFormChanged(false)
      } else {
        const msg = result.error || "Failed to update profile"
        setError(msg)
        toast({ title: "Error", description: msg, variant: "destructive" })
      }
    } catch (error: any) {
      const msg = error.message || "An unexpected error occurred"
      setError(msg)
      toast({ title: "Error", description: msg, variant: "destructive" })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">Your Profile</h1>
        <InspirationalQuote />

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-gray-600">Loading your profile...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>
                    Update your profile information to help us personalize your experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {error && (
                    <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      {error}
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your full name"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            className="pl-10"
                            disabled
                            title="Email cannot be changed"
                          />
                          <p className="text-xs text-gray-500 mt-1">Email address cannot be changed</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your country"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                        <div className="relative">
                          <Linkedin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="linkedIn"
                            name="linkedIn"
                            value={formData.linkedIn}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your LinkedIn URL"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Current Company</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your current company"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="position">Current Position</Label>
                        <div className="relative">
                          <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your current position"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="education">Education</Label>
                        <div className="relative">
                          <GraduationCap className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="education"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            className="pl-10"
                            placeholder="Your highest education"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="skills">Key Skills</Label>
                      <Textarea
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="List your key skills, separated by commas"
                        className="min-h-[80px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Professional Bio</Label>
                      <Textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Write a short professional bio"
                        className="min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tailoringMode">Default Tailoring Mode</Label>
                      <Select value={formData.tailoringMode} onValueChange={handleSelectChange}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a tailoring mode" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic - Light keyword optimization</SelectItem>
                          <SelectItem value="personalized">Personalized - Balanced approach</SelectItem>
                          <SelectItem value="aggressive">Aggressive - Maximum optimization</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-gray-500">This will be your default tailoring mode for new resumes</p>
                    </div>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            type="submit"
                            disabled={isSubmitting || !formChanged}
                            className="bg-primary hover:bg-amber-500 hover:text-white"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <Save className="h-4 w-4 mr-2" />
                                Save Changes
                              </>
                            )}
                          </Button>
                        </TooltipTrigger>
                        {!formChanged && (
                          <TooltipContent>
                            <p>No changes to save</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Show upgrade prompt only for non-premium users */}
              {!isLoading && userData && !userData.is_premium && <UpgradePrompt />}
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences and security</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Shield className="h-4 w-4 mr-2 text-primary" />
                      Account Type
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600">{userData?.is_premium ? "Premium Plan" : "Free Plan"}</p>
                      {userData?.is_premium ? (
                        <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">
                          Premium
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="bg-gray-100">
                          Free
                        </Badge>
                      )}
                    </div>
                    {!userData?.is_premium && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-3 w-full hover:bg-amber-500 hover:text-white"
                        onClick={() => (window.location.href = "/dashboard/subscription")}
                      >
                        Upgrade to Premium
                      </Button>
                    )}
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Key className="h-4 w-4 mr-2 text-primary" />
                      Password
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">Change your password to keep your account secure</p>
                    <Button variant="outline" size="sm" className="w-full hover:bg-amber-500 hover:text-white">
                      Change Password
                    </Button>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-medium text-gray-800 mb-2 flex items-center">
                      <Trash2 className="h-4 w-4 mr-2 text-red-500" />
                      Delete Account
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">Permanently delete your account and all your data</p>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                        >
                          Delete My Account
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                          <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove all your
                            data from our servers.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                          <AlertDialogAction className="bg-red-600 hover:bg-red-700">Delete Account</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    We take your privacy seriously. Your data is securely stored and never shared with third parties
                    without your consent.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    View Privacy Policy
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
