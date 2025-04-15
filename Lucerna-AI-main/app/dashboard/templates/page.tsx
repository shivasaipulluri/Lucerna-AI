"use client"

import { NavBar } from "@/components/nav-bar"
import { InspirationalQuote } from "@/components/inspirational-quote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Eye, Crown, FileText } from "lucide-react"
import { Footer } from "@/components/footer"

// Mock template data
const templates = [
  {
    id: "1",
    name: "Professional Classic",
    description: "A clean, professional template with a traditional layout that works well across all industries.",
    isPremium: false,
    previewImage: "/placeholder.svg?height=300&width=220",
  },
  {
    id: "2",
    name: "Modern Minimal",
    description: "A sleek, minimalist design with a contemporary feel, perfect for creative and tech roles.",
    isPremium: false,
    previewImage: "/placeholder.svg?height=300&width=220",
  },
  {
    id: "3",
    name: "Executive Premium",
    description: "An elegant, sophisticated template designed for senior positions and executive roles.",
    isPremium: true,
    previewImage: "/placeholder.svg?height=300&width=220",
  },
  {
    id: "4",
    name: "Technical Specialist",
    description: "Optimized for technical roles with sections for skills, projects, and technical expertise.",
    isPremium: true,
    previewImage: "/placeholder.svg?height=300&width=220",
  },
]

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">ATS-Friendly Templates</h1>

        <InspirationalQuote />

        <div className="mb-8 bg-gradient-to-r from-blue-50 to-amber-50 p-6 rounded-lg border border-blue-100">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 font-serif">Why ATS-Friendly Templates Matter</h2>
          <p className="text-gray-600 mb-4">
            Applicant Tracking Systems (ATS) scan your resume before a human ever sees it. Our templates are designed to
            pass these systems with flying colors, ensuring your resume gets the attention it deserves.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-sm font-medium">Optimized Formatting</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium">Keyword-Friendly Sections</span>
            </div>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <FileText className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-medium">Clean, Scannable Design</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <Card
              key={template.id}
              className="template-card overflow-hidden hover:shadow-md transition-shadow relative"
            >
              <div className="relative">
                {template.isPremium && (
                  <div className="premium-indicator">
                    <div className="flex items-center">
                      <Crown className="h-3 w-3 mr-1" />
                      <span className="text-xs">Premium</span>
                    </div>
                  </div>
                )}
                <div className="h-[220px] bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={template.previewImage || "/placeholder.svg"}
                    alt={template.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="font-serif">{template.name}</CardTitle>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-sm text-gray-600">{template.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between pt-2 border-t">
                <Button variant="outline" size="sm" className="btn-hover">
                  <Eye className="h-4 w-4 mr-1" />
                  Preview
                </Button>
                <Button
                  size="sm"
                  disabled={template.isPremium}
                  className={template.isPremium ? "bg-gray-300" : "bg-primary hover:bg-primary/90 btn-glow"}
                >
                  {template.isPremium ? (
                    <>
                      <Crown className="h-4 w-4 mr-1" />
                      Premium
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 bg-gradient-to-r from-amber-50 to-blue-50 p-6 rounded-lg border border-amber-100 text-center">
          <h3 className="text-xl font-semibold text-primary mb-2 font-serif">Unlock All Premium Templates</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Get access to our full library of premium ATS-optimized templates with a Premium subscription.
          </p>
          <Button className="bg-primary hover:bg-primary/90 btn-glow">
            <Crown className="h-4 w-4 mr-2" />
            Upgrade to Premium
          </Button>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 italic font-serif">"Your design deserves the perfect frame. Let clarity lead."</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
