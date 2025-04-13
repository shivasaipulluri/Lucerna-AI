import { formatDistanceToNow } from "date-fns"
import type { TailoringAnalyticsData } from "@/types"
import { CheckCircle, XCircle } from "lucide-react"

interface TimelineProps {
  data: TailoringAnalyticsData[]
}

export function Timeline({ data }: TimelineProps) {
  if (!data.length) {
    return <div className="text-center py-8 text-gray-500">No tailoring events found</div>
  }

  return (
    <div className="space-y-4">
      {data.map((item) => (
        <div key={item.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg border">
          <div className="mt-1">
            {item.golden_passed ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-amber-500" />
            )}
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-medium">
                {item.tailoring_mode.charAt(0).toUpperCase() + item.tailoring_mode.slice(1)} Tailoring
              </h4>
              <span className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}
              </span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
              <div>
                <span className="text-gray-500">ATS Score:</span> {item.ats_score}%
              </div>
              <div>
                <span className="text-gray-500">JD Score:</span> {item.jd_score}%
              </div>
              <div>
                <span className="text-gray-500">Iterations:</span> {item.iterations}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
