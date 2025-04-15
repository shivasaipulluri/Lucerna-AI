"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { InspirationalQuote } from "@/components/inspirational-quote"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, CreditCard, Check, X } from "lucide-react"
import { useSubscription } from "@/context/subscription-context"

export default function SubscriptionPage() {
  const { tier, isPremium } = useSubscription()

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8 bg-lucerna-gradient">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">Your Subscription</h1>

        <InspirationalQuote />

        <div className="mb-10">
          <Card className="bg-lucerna-gradient border-ash/50 shadow-soft">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <Badge className="bg-blue-100 text-primary mb-2">Current Plan</Badge>
                  <h2 className="text-2xl font-bold text-primary mb-1 font-serif">
                    {isPremium ? "Premium Plan" : "Free Plan"}
                  </h2>
                  <p className="text-primary/80">
                    {isPremium
                      ? "You have unlimited access to all features."
                      : "You have limited access to features with daily usage limits."}
                  </p>
                </div>
                {!isPremium && (
                  <Button className="mt-4 md:mt-0 lucerna-button btn-hover">
                    <Crown className="h-4 w-4 mr-2 text-gold" />
                    Upgrade to Premium
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-6 font-serif">Plan Comparison</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <Card className="border-2 border-gray-200 shadow-soft">
            <CardHeader>
              <CardTitle className="font-serif">Free Plan</CardTitle>
              <CardDescription>Your current plan</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-forest flex-shrink-0 mr-2" />
                  <span>
                    <strong>5</strong> basic resume tailorings per day
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-forest flex-shrink-0 mr-2" />
                  <span>
                    <strong>3</strong> personalized resume tailorings per day
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-forest flex-shrink-0 mr-2" />
                  <span>
                    <strong>1</strong> cover letter generation per day
                  </span>
                </li>
                <li className="flex items-start text-gray-400">
                  <X className="h-5 w-5 text-gray-300 flex-shrink-0 mr-2" />
                  <span>No aggressive tailoring mode</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <X className="h-5 w-5 text-gray-300 flex-shrink-0 mr-2" />
                  <span>No LinkedIn optimization</span>
                </li>
                <li className="flex items-start text-gray-400">
                  <X className="h-5 w-5 text-gray-300 flex-shrink-0 mr-2" />
                  <span>No interview coaching</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gold text-primary px-3 py-1 text-xs font-bold uppercase">
              Recommended
            </div>
            <CardHeader>
              <CardTitle className="font-serif">Premium Plan</CardTitle>
              <CardDescription>For serious job hunters</CardDescription>
              <div className="mt-2">
                <span className="text-3xl font-bold">$9.99</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>
                    <strong>Unlimited</strong> basic resume tailorings
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>
                    <strong>Unlimited</strong> personalized resume tailorings
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>
                    <strong>Unlimited</strong> cover letter generations
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Access to aggressive tailoring mode</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>LinkedIn profile optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mr-2" />
                  <span>Interview coaching</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-primary hover:bg-primary/90 btn-hover">
                <CreditCard className="h-4 w-4 mr-2" />
                Upgrade Now
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
