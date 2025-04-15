import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

export default function EmptyState() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
        <FileText className="h-10 w-10 text-primary" />
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-serif">You haven't tailored your story yet</h3>
      <p className="text-gray-600 max-w-md mb-6">
        Start your journey by tailoring your resume to a specific job description. Each version will appear here,
        showing your progress over time.
      </p>

      <Button asChild size="lg" className="btn-hover">
        <Link href="/dashboard">Start Tailoring Now</Link>
      </Button>
    </div>
  )
}
