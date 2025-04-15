"use client"

import { getAnalyticsData } from "./actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns as eventColumns } from "@/app/admin/analytics/event-columns"
import { columns as interactionColumns } from "@/app/admin/analytics/interaction-columns"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { useEffect, useState } from "react"

function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-24" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-16" />
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="h-[300px]">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {[1, 2].map((i) => (
          <div key={i}>
            <Skeleton className="h-6 w-32 mb-4" />
            <Skeleton className="h-[300px] w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AdminAnalyticsPage() {
  const [analyticsData, setAnalyticsData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getAnalyticsData()
        if (!result.success || !result.data) {
          setError(result.error || "Failed to load analytics data")
          return
        }
        setAnalyticsData(result.data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred")
      }
    }
    fetchData()
  }, [])

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Analytics</h1>
        <div className="text-red-500">
          <p>Error loading analytics data:</p>
          <p>{error}</p>
        </div>
      </div>
    )
  }

  if (!analyticsData) {
    return <LoadingSkeleton />
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Analytics</h1>
      
      <Suspense fallback={<LoadingSkeleton />}>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{analyticsData.counts.users}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Resume Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{analyticsData.counts.resumeEvents}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{analyticsData.counts.interactions}</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Event Type Distribution</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={analyticsData.eventTypeDistribution}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="event_type" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Resume Events</h2>
            <DataTable 
              columns={eventColumns} 
              data={analyticsData.recentResumeEvents}
              pageSize={5}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Interactions</h2>
            <DataTable 
              columns={interactionColumns} 
              data={analyticsData.recentInteractions}
              pageSize={5}
            />
          </div>
        </div>
      </Suspense>
    </div>
  )
}
