import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { ArrowRight, FileText, Wand2, CheckCircle, BarChart, RefreshCw, Download } from "lucide-react"
import { LanternIcon } from "@/components/lantern-icon"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-lucerna-gradient relative overflow-hidden">
          <div className="absolute inset-0 glowing-path"></div>
          <div className="container-narrow relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <LanternIcon size={48} className="mb-4" glowing={true} />
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-serif text-midnight">
                  Illuminate Your Career Journey
                </h1>
                <p className="mx-auto max-w-[700px] text-midnight/80 md:text-xl">
                  Let your story shine with clarity. Lucerna AI refines, you rise.
                </p>
              </div>
              <Button
                size="lg"
                className="px-8 py-6 text-lg group btn-hover bg-midnight hover:bg-amber-500 text-cloud"
                asChild
              >
                <Link href="/auth">
                  Start Tailoring
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-serif text-midnight">How It Works</h2>
              <p className="mt-4 text-midnight/70 md:text-lg max-w-2xl mx-auto">
                Our AI-powered platform transforms your resume into a tailored masterpiece in six simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center p-6 bg-cloud rounded-lg border shadow-soft card-hover">
                <div className="w-14 h-14 rounded-full bg-sky/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-midnight">Upload</h3>
                <p className="text-midnight/70">Upload your resume and the job description you're targeting.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center p-6 bg-cloud rounded-lg border shadow-soft card-hover">
                <div className="w-14 h-14 rounded-full bg-sky/10 flex items-center justify-center mb-4">
                  <Wand2 className="h-6 w-6 text-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-midnight">Tailor</h3>
                <p className="text-midnight/70">Our AI tailors your resume to match the job requirements.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center p-6 bg-cloud rounded-lg border shadow-soft card-hover">
                <div className="w-14 h-14 rounded-full bg-forest/10 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-forest" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-midnight">Golden Rules</h3>
                <p className="text-midnight/70">We verify your resume meets essential quality standards.</p>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col items-center text-center p-6 bg-cloud rounded-lg border shadow-soft card-hover">
                <div className="w-14 h-14 rounded-full bg-sky/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-midnight">Score</h3>
                <p className="text-midnight/70">Get ATS compatibility and job description match scores.</p>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col items-center text-center p-6 bg-cloud rounded-lg border shadow-soft card-hover">
                <div className="w-14 h-14 rounded-full bg-sky/10 flex items-center justify-center mb-4">
                  <RefreshCw className="h-6 w-6 text-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-midnight">Refine</h3>
                <p className="text-midnight/70">Further optimize your resume with one-click refinements.</p>
              </div>

              {/* Step 6 */}
              <div className="flex flex-col items-center text-center p-6 bg-cloud rounded-lg border shadow-soft card-hover">
                <div className="w-14 h-14 rounded-full bg-sky/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-sky" />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-serif text-midnight">Download</h3>
                <p className="text-midnight/70">Download your tailored resume in multiple formats.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Value Points */}
        <section className="py-20 bg-cloud">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-serif text-midnight">
                Why Choose Lucerna AI
              </h2>
              <p className="mt-4 text-midnight/70 md:text-lg max-w-2xl mx-auto">
                Our platform offers unique advantages that set your resume apart from the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-soft border card-hover">
                <h3 className="text-xl font-semibold mb-3 font-serif text-midnight">Fast, Accurate Tailoring</h3>
                <p className="text-midnight/70">
                  Get a professionally tailored resume in minutes, not hours. Our AI analyzes job descriptions with
                  precision.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-soft border card-hover">
                <h3 className="text-xl font-semibold mb-3 font-serif text-midnight">ATS-Friendly & JD Matched</h3>
                <p className="text-midnight/70">
                  Optimize your resume to pass Applicant Tracking Systems and align perfectly with job requirements.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-soft border card-hover">
                <h3 className="text-xl font-semibold mb-3 font-serif text-midnight">Human-Like Storytelling</h3>
                <p className="text-midnight/70">
                  Our AI creates emotionally resonant content that feels human, highlighting your unique value
                  proposition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cloud via-white to-gold/10">
          <div className="container-narrow">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl font-serif text-midnight">
                Ready to Illuminate Your Career?
              </h2>
              <p className="text-midnight/70 md:text-lg max-w-2xl">
                Join thousands of job seekers who have successfully tailored their resumes and secured interviews.
              </p>
              <Button
                size="lg"
                className="px-8 py-6 text-lg mt-4 bg-midnight hover:bg-amber-500 text-cloud btn-hover"
                asChild
              >
                <Link href="/auth">
                  <LanternIcon size={20} className="mr-2" glowing={false} />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
