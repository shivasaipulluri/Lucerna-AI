"use client";


import { useState, useEffect, useRef } from "react";
import { NavBar } from "@/components/nav-bar";
import { InspirationalQuote } from "@/components/inspirational-quote";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { getUserPreferences } from "../actions";
import { generateLinkedInAbout, getLinkedInOptimizations, deleteLinkedInOptimization } from "./actions";
import { Loader2, Download, Copy, Check, RefreshCw, Clock, Trash2, Linkedin } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { Footer } from "@/components/footer";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Industry options
const industries = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Marketing",
  "Sales",
  "Consulting",
  "Manufacturing",
  "Retail",
  "Media",
  "Entertainment",
  "Non-profit",
  "Government",
  "Legal",
  "Real Estate",
  "Construction",
  "Transportation",
  "Hospitality",
  "Agriculture",
  "Energy",
  "Other",
];

// Tone options
const tones = ["Professional", "Friendly", "Persuasive", "Confident", "Enthusiastic", "Analytical", "Creative"];

interface LinkedInOptimization {
  id: string;
  original_text: string | null;
  goal: string;
  industry: string;
  tone: string;
  generated_text: string;
  tailoring_mode: string;
  created_at: string; // Ensure this is a string
}

export default function LinkedInAboutPage() {
  // Form state
  const [aboutText, setAboutText] = useState<string>("");
  const [noAboutSection, setNoAboutSection] = useState<boolean>(false);
  const [goal, setGoal] = useState<string>("");
  const [industry, setIndustry] = useState<string>("Technology");
  const [tone, setTone] = useState<string>("Professional");

  // UI state
  const [activeTab, setActiveTab] = useState<string>("new");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [tailoringMode, setTailoringMode] = useState<string | null>(null);
  const [optimizations, setOptimizations] = useState<LinkedInOptimization[]>([]);
  const [generatedText, setGeneratedText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [optimizationToDelete, setOptimizationToDelete] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  const { toast } = useToast();
  const resultRef = useRef<HTMLDivElement>(null);
  const isMountedRef = useRef(false);
  const hasGeneratedRef = useRef(false);

  // Load user preferences and optimization history
  useEffect(() => {
    if (isMountedRef.current) return;

    async function loadData() {
      try {
        setIsLoading(true);

        // Fetch user preferences and optimizations in parallel
        const [preferencesResult, optimizationsResult] = await Promise.all([
          getUserPreferences(),
          getLinkedInOptimizations(),
        ]);

        if (preferencesResult.success && preferencesResult.data) {
          setTailoringMode(preferencesResult.data.tailoring_mode);
        }

        if (optimizationsResult.success && optimizationsResult.data) {
          // Convert created_at from Date to string
          const optimizationsWithStringDates = optimizationsResult.data.map((opt: any) => ({
            ...opt,
            created_at: new Date(opt.created_at).toISOString(), // Convert to string
          }));
          setOptimizations(optimizationsWithStringDates);
        }

        isMountedRef.current = true;
      } catch (error) {
        console.error("Error loading data:", error);
        toast({
          title: "Error",
          description: "Failed to load your data. Please try again.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    }

    loadData();
  }, [toast]);

  // Handle checkbox change
  const handleNoAboutChange = (checked: boolean) => {
    setNoAboutSection(checked);
    if (checked) {
      setAboutText("");
    }
  };

  // Generate LinkedIn About section
  const handleGenerate = async () => {
    if (!goal || !industry || !tone) {
      toast({
        title: "Missing Information",
        description: "Please provide your career goal and select an industry and tone.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    hasGeneratedRef.current = false;

    try {
      console.log("Generating LinkedIn About section with:", {
        aboutText: noAboutSection ? null : aboutText,
        goal,
        industry,
        tone,
        tailoringMode: tailoringMode || "personalized",
      });

      const result = await generateLinkedInAbout(
        noAboutSection ? null : aboutText,
        goal,
        industry,
        tone,
        tailoringMode || "personalized",
      );

      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to generate LinkedIn About section");
      }

      console.log("LinkedIn About section generated:", result.data);

      // Update state
      setGeneratedText(result.data.generated_text);
      hasGeneratedRef.current = true;

      // Add to optimizations list with created_at as string
      setOptimizations((prev) => [
        {
          ...result.data,
          created_at: new Date().toISOString(), // Convert to string
        },
        ...prev,
      ]);

      toast({
        title: "LinkedIn About Section Generated",
        description: "Your LinkedIn About section has been successfully generated.",
      });

      // Switch to result tab
      setActiveTab("result");

      // Scroll to result
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } catch (error: any) {
      console.error("Error generating LinkedIn About section:", error);
      toast({
        title: "Generation Failed",
        description: error.message || "An error occurred while generating your LinkedIn About section.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Regenerate LinkedIn About section
  const handleRegenerate = async () => {
    if (!goal || !industry || !tone) return;
    setIsGenerating(true);

    try {
      const result = await generateLinkedInAbout(
        noAboutSection ? null : aboutText,
        goal,
        industry,
        tone,
        tailoringMode || "personalized",
      );

      if (!result.success || !result.data) {
        throw new Error(result.error || "Failed to regenerate LinkedIn About section");
      }

      // Update state
      setGeneratedText(result.data.generated_text);

      // Add to optimizations list with created_at as string
      setOptimizations((prev) => [
        {
          ...result.data,
          created_at: new Date().toISOString(), // Convert to string
        },
        ...prev,
      ]);

      toast({
        title: "LinkedIn About Section Regenerated",
        description: "Your LinkedIn About section has been successfully regenerated.",
      });
    } catch (error: any) {
      console.error("Error regenerating LinkedIn About section:", error);
      toast({
        title: "Regeneration Failed",
        description: error.message || "An error occurred while regenerating your LinkedIn About section.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Copy to clipboard
  const handleCopy = () => {
    if (!generatedText) return;

    navigator.clipboard.writeText(generatedText);
    setCopied(true);

    toast({
      title: "Copied to Clipboard",
      description: "LinkedIn About section copied to clipboard.",
    });

    setTimeout(() => setCopied(false), 2000);
  };

  // Download as text
  const handleDownload = () => {
    if (!generatedText) return;

    const blob = new Blob([generatedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `linkedin-about-${new Date().toISOString().split("T")[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download Complete",
      description: "Your LinkedIn About section has been downloaded.",
    });
  };

  // Handle delete optimization
  const handleDeleteClick = (optimizationId: string) => {
    setOptimizationToDelete(optimizationId);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (!optimizationToDelete) return;

    setIsDeleting(true);
    try {
      const result = await deleteLinkedInOptimization(optimizationToDelete);

      if (result.success) {
        // Update the local state
        setOptimizations((prev) => prev.filter((opt) => opt.id !== optimizationToDelete));

        toast({
          title: "Optimization Deleted",
          description: "The LinkedIn About section has been successfully deleted.",
        });
      } else {
        throw new Error(result.error || "Failed to delete optimization");
      }
    } catch (error: any) {
      console.error("Error deleting optimization:", error);
      toast({
        title: "Deletion Failed",
        description: error.message || "An error occurred while deleting the optimization.",
        variant: "destructive",
      });
    } finally {
      setIsDeleting(false);
      setDeleteDialogOpen(false);
      setOptimizationToDelete(null);
    }
  };

  // Load optimization from history
  const handleLoadOptimization = (optimization: LinkedInOptimization) => {
    setAboutText(optimization.original_text || "");
    setNoAboutSection(optimization.original_text === null);
    setGoal(optimization.goal);
    setIndustry(optimization.industry);
    setTone(optimization.tone);
    setGeneratedText(optimization.generated_text);
    hasGeneratedRef.current = true;
    setActiveTab("result");

    toast({
      title: "Optimization Loaded",
      description: "LinkedIn About section loaded from history.",
    });
  };

  // Format date
  const formatDate = (dateString: string) => {
    try {
      return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    } catch (error) {
      return "Unknown date";
    }
  };

  // Get the tailoring mode display name
  const getTailoringModeDisplay = (mode: string | null) => {
    switch (mode) {
      case "basic":
      case "quick":
        return "Basic";
      case "personalized":
      case "story":
        return "Personalized";
      case "aggressive":
        return "Aggressive";
      default:
        return "Standard";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8 bg-lucerna-gradient">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">LinkedIn About Section Optimizer</h1>

        <InspirationalQuote />

        {/* Tailoring Mode Badge */}
        <div className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-100 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium mb-1 font-serif">
                Current Tailoring Mode:{" "}
                <span className="font-semibold text-primary">{getTailoringModeDisplay(tailoringMode)}</span>
              </h2>
              <p className="text-sm text-gray-600">This affects how your LinkedIn About section will be optimized.</p>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="new">New Optimization</TabsTrigger>
            <TabsTrigger value="result" disabled={!hasGeneratedRef.current}>
              View Result
            </TabsTrigger>
            <TabsTrigger value="history">View History</TabsTrigger>
          </TabsList>

          {/* New Optimization Tab */}
          <TabsContent value="new" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Panel */}
              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Current LinkedIn About Section</CardTitle>
                  <CardDescription>Paste your current LinkedIn About section or start fresh</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="no-about" checked={noAboutSection} onCheckedChange={handleNoAboutChange} />
                      <Label htmlFor="no-about">I don't have a LinkedIn About section yet</Label>
                    </div>

                    <div>
                      <Label htmlFor="about-text">Current About Section</Label>
                      <Textarea
                        id="about-text"
                        placeholder={
                          noAboutSection ? "Starting fresh..." : "Paste your current LinkedIn About section here..."
                        }
                        className="min-h-[200px] resize-none lucerna-input"
                        value={aboutText}
                        onChange={(e) => setAboutText(e.target.value)}
                        disabled={noAboutSection}
                      />
                    </div>

                    <div>
                      <Label htmlFor="tone">Tone</Label>
                      <Select value={tone} onValueChange={setTone}>
                        <SelectTrigger id="tone" className="lucerna-input">
                          <SelectValue placeholder="Select a tone" />
                        </SelectTrigger>
                        <SelectContent>
                          {tones.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right Panel */}
              <Card className="shadow-soft border-ash/50">
                <CardHeader>
                  <CardTitle className="font-serif">Career Goals & Industry</CardTitle>
                  <CardDescription>Tell us about your target role and industry</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="career-goal">Career Goal or Target Role</Label>
                      <Input
                        id="career-goal"
                        placeholder="e.g., Senior Software Engineer at a fintech company"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="lucerna-input"
                      />
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Select value={industry} onValueChange={setIndustry}>
                        <SelectTrigger id="industry" className="lucerna-input">
                          <SelectValue placeholder="Select an industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((ind) => (
                            <SelectItem key={ind} value={ind}>
                              {ind}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      onClick={handleGenerate}
                      disabled={isGenerating || !goal || (!aboutText && !noAboutSection)}
                      className="w-full mt-4 lucerna-button btn-hover"
                    >
                      {isGenerating ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Generating...
                        </>
                      ) : (
                        <>
                          <Linkedin className="h-4 w-4 mr-2" />
                          Generate LinkedIn About Section
                        </>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Result Tab */}
          <TabsContent value="result" className="mt-6">
            <div ref={resultRef}>
              {hasGeneratedRef.current && generatedText ? (
                <Card className="shadow-soft border-ash/50">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                      <CardTitle className="font-serif">Generated LinkedIn About Section</CardTitle>
                      <CardDescription>
                        Tone: {tone} | Industry: {industry} | Goal: {goal}
                      </CardDescription>
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
                        onClick={handleRegenerate}
                        disabled={isGenerating}
                        className="lucerna-button btn-hover"
                      >
                        {isGenerating ? (
                          <>
                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                            Regenerating...
                          </>
                        ) : (
                          <>
                            <RefreshCw className="h-4 w-4 mr-2" />
                            Regenerate
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-6 rounded-md border whitespace-pre-wrap shadow-soft">
                      {generatedText}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="text-center py-16 bg-white rounded-lg border shadow-soft">
                  <Linkedin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">
                    No LinkedIn About Section Generated
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-md mx-auto">
                    You haven't generated a LinkedIn About section yet. Go to the New Optimization tab to create one.
                  </p>
                  <Button onClick={() => setActiveTab("new")} className="lucerna-button btn-hover">
                    Create New Optimization
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="mt-6">
            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : optimizations.length > 0 ? (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4 font-serif">
                  Your LinkedIn About Section History
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {optimizations.map((optimization) => (
                    <Card key={optimization.id} className="hover:shadow-card transition-shadow shadow-soft">
                      <CardHeader className="pb-2">
                        <CardTitle className="flex items-start justify-between">
                          <div className="flex items-center">
                            <Linkedin className="h-5 w-5 text-primary mr-2" />
                            <span className="font-serif">{optimization.tone} Tone</span>
                          </div>
                          <Badge variant="outline" className="bg-white">
                            {optimization.industry}
                          </Badge>
                        </CardTitle>
                        <div className="flex items-center text-xs text-gray-500">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{formatDate(optimization.created_at)}</span>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="h-32 overflow-hidden">
                          <p className="text-sm font-medium mb-1">Goal: {optimization.goal}</p>
                          <p className="text-sm text-gray-600 line-clamp-5">{optimization.generated_text}</p>
                        </div>
                      </CardContent>
                      <CardContent className="pt-0 pb-4 flex justify-between">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleLoadOptimization(optimization)}
                            className="btn-hover"
                          >
                            View & Edit
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              navigator.clipboard.writeText(optimization.generated_text);
                              toast({
                                title: "Copied to Clipboard",
                                description: "LinkedIn About section copied to clipboard.",
                              });
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
                          onClick={() => handleDeleteClick(optimization.id)}
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
                <Linkedin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">No LinkedIn About Sections Yet</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  You haven't created any LinkedIn About section optimizations yet. Generate your first optimization to
                  get started.
                </p>
                <Button onClick={() => setActiveTab("new")} className="lucerna-button btn-hover">
                  Create Your First Optimization
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
            <AlertDialogTitle>Delete LinkedIn About Section</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this LinkedIn About section? This action cannot be undone.
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
  );
}
