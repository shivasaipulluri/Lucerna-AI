import { Skeleton } from "@/components/ui/skeleton"

export default function HistorySkeletonLoader() {
  return (
    <div className="px-6 py-10 max-w-5xl mx-auto">
      {/* Header skeleton */}
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-28" />
        </div>

        <div>
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-full max-w-md" />
        </div>

        <Skeleton className="h-24 w-full" />
      </div>

      {/* Timeline skeleton */}
      <div className="mt-10">
        <div className="relative border-l-2 border-gray-200 ml-6 md:ml-8 pl-6 md:pl-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="mb-10">
              <div className="flex items-center mb-4">
                <Skeleton className="absolute -left-3 w-6 h-6 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>

              <div className="space-y-6">
                {[1, 2].map((j) => (
                  <Skeleton key={j} className="h-40 w-full rounded-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
