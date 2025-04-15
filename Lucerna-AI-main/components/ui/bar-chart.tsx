"use client"

import { useMemo } from "react"
import type { TailoringAnalyticsData } from "@/types"

interface BarChartProps {
  data: TailoringAnalyticsData[]
  metric: "ats_score" | "jd_score" | "iterations"
  title: string
}

export function BarChart({ data, metric, title }: BarChartProps) {
  const chartData = useMemo(() => {
    const grouped = data.reduce(
      (acc, item) => {
        if (!acc[item.tailoring_mode]) {
          acc[item.tailoring_mode] = []
        }
        acc[item.tailoring_mode].push(item)
        return acc
      },
      {} as Record<string, TailoringAnalyticsData[]>,
    )

    return Object.entries(grouped).map(([mode, items]) => {
      const average = items.reduce((sum, item) => sum + item[metric], 0) / items.length
      return {
        mode,
        value: average,
      }
    })
  }, [data, metric])

  const maxValue = Math.max(...chartData.map((item) => item.value))
  const colors = {
    basic: "bg-blue-500",
    personalized: "bg-purple-500",
    aggressive: "bg-red-500",
    quick: "bg-blue-500",
    story: "bg-purple-500",
  }

  return (
    <div className="p-4 bg-white rounded-lg border shadow-sm">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {chartData.map((item) => (
          <div key={item.mode} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium">{item.mode.charAt(0).toUpperCase() + item.mode.slice(1)}</span>
              <span>{metric.includes("score") ? `${item.value.toFixed(1)}%` : item.value.toFixed(1)}</span>
            </div>
            <div className="h-4 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${colors[item.mode as keyof typeof colors] || "bg-gray-500"}`}
                style={{ width: `${(item.value / maxValue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
