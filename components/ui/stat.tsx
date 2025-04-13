import { cn } from "@/lib/utils"

interface StatProps {
  label: string
  value: string | number
  className?: string
  valueClassName?: string
}

export function Stat({ label, value, className, valueClassName }: StatProps) {
  return (
    <div className={cn("flex justify-between items-center py-2", className)}>
      <span className="text-sm text-gray-600">{label}</span>
      <span className={cn("font-semibold text-lg", valueClassName)}>{value}</span>
    </div>
  )
}
