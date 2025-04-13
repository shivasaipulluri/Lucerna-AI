import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
  // Array of inspirational quotes
  const quotes = [
    {
      text: "Your resume is the bridge between your past achievements and future opportunities.",
      author: "Lucerna AI",
    },
     {
      text: "Let your story shine with clarity. Lucerna AI refines, you rise.",
      author: "Lucerna AI",
    },
    {
      text: "Every resume refined is a brighter path forward.",
      author: "Lucerna AI",
    },
    {
      text: "Illuminate your potential with words that resonate.",
      author: "Lucerna AI",
    },
    {
      text:  "Clarity in expression, brilliance in impression.",
      author: "Lucerna AI",
    },
    {
      text: "The right words open the right doors.",
      author: "Lucerna AI",
    },
    {
      text: "The right words can open doors that seem impossible to breach.",
      author: "Lucerna AI",
    },
    {
      text: "In the journey of career growth, clarity of expression is your most reliable compass.",
      author: "Lucerna AI",
    },
    {
      text: "Your professional story deserves to be told with precision and purpose.",
      author: "Lucerna AI",
    },
    {
      text: "The difference between good and great often lies in how well you communicate your value.",
      author: "Lucerna AI",
    },
  ]


  export function InspirationalQuote() {
    // Get a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const quote = quotes[randomIndex]
  
    return (
      <Card className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-100 shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-start">
            <Quote className="h-8 w-8 text-accent/70 mr-4 mt-1 flex-shrink-0" />
            <div>
              <p className="text-gray-800 italic font-serif text-lg mb-2">{quote.text}</p>
              <p className="text-right text-gray-600 font-medium">— {quote.author}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }