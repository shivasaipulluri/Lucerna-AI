"use client"

import { useEffect, useState } from "react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { getTailoringAnalytics } from "./actions"
import { Loader2, BarChart2 } from "lucide-react"

//added to top of file by creating AnalyticsEntry type
type AnalyticsEntry = {
  id: string
  tailoring_mode: string
  ats_score: number
  jd_score: number
  iterations: number
  golden_passed: boolean
  created_at: string
}


// Import the standard shadcn Card components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState<AnalyticsEntry[]>([])
  const [summary, setSummary] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchAnalytics() {
      try {
        setLoading(true)
        const result = await getTailoringAnalytics()
        console.log("Analytics result:", result)

        if (result.success && result.data) {
          setAnalytics(result.data.analytics || [])
          setSummary(
            result.data.summary || {
              totalTailorings: 0,
              avgIterations: 0,
              avgAtsScore: 0,
              avgJdScore: 0,
              modeStats: {},
            },
          )
        } else {
          setError(result.error || "Failed to load analytics data")
        }
      } catch (err) {
        setError("An unexpected error occurred")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchAnalytics()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 container py-8">
          <div className="flex justify-center items-center h-64">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-gray-600">Loading analytics data...</span>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 container py-8">
          <div className="bg-red-50 border border-red-200 text-destructive px-4 py-3 rounded-md">
            <p>{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!analytics || analytics.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 container py-8">
          <h1 className="text-3xl font-bold text-primary mb-6 font-serif">Tailoring Analytics</h1>
          <div className="text-center py-16 bg-white rounded-lg border shadow-soft">
            <BarChart2 className="h-16 w-16 text-gray-300 mx-auto mb-6" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 font-serif">No Analytics Data Available</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Start tailoring resumes to generate analytics data. Each tailoring session will be tracked here.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  // Calculate overall statistics if summary is not available
  const overallStats = summary || {
    totalTailorings: analytics.length,
    avgIterations: analytics.reduce((sum, item) => sum + item.iterations, 0) / analytics.length,
    avgAtsScore: analytics.reduce((sum, item) => sum + item.ats_score, 0) / analytics.length,
    avgJdScore: analytics.reduce((sum, item) => sum + item.jd_score, 0) / analytics.length,
  }

  // Group analytics by tailoring mode
  const grouped = analytics.reduce(
    (acc, entry) => {
      if (!acc[entry.tailoring_mode]) acc[entry.tailoring_mode] = []
      acc[entry.tailoring_mode].push(entry)
      return acc
    },
    {} as Record<string, any[]>,
  )

  // Calculate statistics for each mode
  const modeStats = Object.entries(grouped).map(([mode, entries]) => {
    const typedEntries = entries as {
      ats_score: number
      jd_score: number
      iterations: number
      golden_passed: boolean
    }[]
  
    return {
      mode,
      count: typedEntries.length,
      avgAts: typedEntries.reduce((sum, e) => sum + e.ats_score, 0) / typedEntries.length,
      avgJd: typedEntries.reduce((sum, e) => sum + e.jd_score, 0) / typedEntries.length,
      avgIterations: typedEntries.reduce((sum, e) => sum + e.iterations, 0) / typedEntries.length,
      goldenPassRate: (typedEntries.filter((e) => e.golden_passed).length / typedEntries.length) * 100,
    }
  })
  

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 container py-8">
        <h1 className="text-3xl font-bold text-primary mb-6 font-serif">Tailoring Analytics</h1>

        {/* Overall Stats */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="font-serif">Overall Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-background rounded-lg">
                <div className="text-sm text-gray-500">Total Tailorings</div>
                <div className="text-2xl font-bold">{overallStats.totalTailorings}</div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-sm text-gray-500">Avg ATS Score</div>
                <div className="text-2xl font-bold text-primary">
                  {typeof overallStats.avgAtsScore === "number" ? overallStats.avgAtsScore.toFixed(1) : "0"}%
                </div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-sm text-gray-500">Avg JD Score</div>
                <div className="text-2xl font-bold text-primary">
                  {typeof overallStats.avgJdScore === "number" ? overallStats.avgJdScore.toFixed(1) : "0"}%
                </div>
              </div>
              <div className="p-4 bg-background rounded-lg">
                <div className="text-sm text-gray-500">Avg Iterations</div>
                <div className="text-2xl font-bold text-amber-600">
                  {typeof overallStats.avgIterations === "number" ? overallStats.avgIterations.toFixed(1) : "0"}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mode-specific Stats */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4 font-serif">Performance by Tailoring Mode</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {modeStats.map((stats) => {
            const modeDisplay = stats.mode.charAt(0).toUpperCase() + stats.mode.slice(1)

            return (
              <Card key={stats.mode} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="font-serif">{`${modeDisplay} Mode (${stats.count})`}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Avg ATS Score</span>
                      <span className="text-lg font-bold text-primary">{stats.avgAts.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Avg JD Score</span>
                      <span className="text-lg font-bold text-primary">{stats.avgJd.toFixed(1)}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Avg Iterations</span>
                      <span className="text-lg font-bold text-amber-600">{stats.avgIterations.toFixed(1)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Golden Rules Pass Rate</span>
                      <span className="text-lg font-bold text-success">{stats.goldenPassRate.toFixed(1)}%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Recent Tailoring Events */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4 font-serif">Recent Tailoring Events</h2>
        <div className="space-y-4 mb-8">
          {analytics.slice(0, 10).map((item) => (
            <div key={item.id} className="flex items-start gap-4 p-4 bg-white rounded-lg border shadow-soft">
              <div className="mt-1">
                {item.golden_passed ? (
                  <div className="w-5 h-5 rounded-full bg-success flex items-center justify-center text-white">✓</div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center text-white">!</div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-medium font-serif">
                    {item.tailoring_mode.charAt(0).toUpperCase() + item.tailoring_mode.slice(1)} Tailoring
                  </h4>
                  <span className="text-xs text-gray-500">{new Date(item.created_at).toLocaleDateString()}</span>
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

        {/* Mode Effectiveness Leaderboard */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4 font-serif">Mode Effectiveness Leaderboard</h2>
          <Card className="shadow-soft overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead className="bg-background">
                    <tr>
                      <th className="p-3 text-left font-medium">Rank</th>
                      <th className="p-3 text-left font-medium">Mode</th>
                      <th className="p-3 text-left font-medium">Avg JD Score</th>
                      <th className="p-3 text-left font-medium">Avg ATS Score</th>
                      <th className="p-3 text-left font-medium">Golden Pass %</th>
                      <th className="p-3 text-left font-medium">Avg Iterations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {modeStats
                      .sort((a, b) => b.avgJd - a.avgJd) // Rank by JD Score
                      .map((entry, index) => (
                        <tr key={entry.mode} className="border-t hover:bg-background">
                          <td className="p-3">{index + 1}</td>
                          <td className="p-3 capitalize font-medium">{entry.mode}</td>
                          <td className="p-3">{entry.avgJd.toFixed(1)}%</td>
                          <td className="p-3">{entry.avgAts.toFixed(1)}%</td>
                          <td className="p-3">{entry.goldenPassRate.toFixed(1)}%</td>
                          <td className="p-3">{entry.avgIterations.toFixed(1)}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Insights Section */}
        <div className="mt-8 bg-blue-50 p-6 rounded-md border border-blue-200 shadow-soft">
          <h3 className="text-lg font-semibold mb-2 font-serif">Insights Based on Tailoring Mode Performance</h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>
              <strong>Aggressive Mode:</strong> Best for experienced professionals in tech or leadership roles. Achieves
              highest JD scores but needs careful resume structure.
            </li>
            <li>
              <strong>Personalized Mode:</strong> Ideal for international students, entry-level applicants, or
              project-heavy resumes. Excels when original resumes lack experience.
            </li>
            <li>
              <strong>Basic Mode:</strong> Most efficient for resumes that are already well-structured. Achieves high
              ATS scores with minimal change but slower to reach JD alignment.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  )
}
