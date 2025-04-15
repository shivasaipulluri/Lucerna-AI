import { modelPrisma } from "@/lib/model-prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Define the types for the event and interaction objects
interface ResumeEvent {
  id: string
  event_type: string
  timestamp: Date
  resume_id?: string
}

interface Interaction {
  id: string
  element: string
  timestamp: Date
  action: string
}

export default async function AnalyticsDashboardPage() {
  try {
    // Test database connection first
    await modelPrisma.$queryRaw`SELECT 1`
    
    // Get counts from the model database
    const [userCount, resumeEventCount, interactionCount] = await Promise.all([
      modelPrisma.user.count(),
      modelPrisma.resumeEvent.count(),
      modelPrisma.interaction.count()
    ])

    // Get recent resume events
    const recentResumeEvents = await modelPrisma.resumeEvent.findMany({
      take: 10,
      orderBy: {
        timestamp: "desc",
      },
    }) as ResumeEvent[]

    // Get recent interactions
    const recentInteractions = await modelPrisma.interaction.findMany({
      take: 10,
      orderBy: {
        timestamp: "desc",
      },
    }) as Interaction[]

    // Get event type distribution
    const eventTypeDistribution = await modelPrisma.$queryRaw<{ event_type: string; count: number }[]>`
      SELECT "event_type", COUNT(*) as count
      FROM "resume_events"
      GROUP BY "event_type"
      ORDER BY count DESC
    `

    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Analytics Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Users</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{userCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{resumeEventCount}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{interactionCount}</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Event Type Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {eventTypeDistribution.map((item) => (
                  <li key={item.event_type} className="flex justify-between">
                    <span>{item.event_type}</span>
                    <span className="font-bold">{item.count}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Resume Events</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recentResumeEvents.map((event) => (
                  <li key={event.id} className="border-b pb-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{event.event_type}</span>
                      <span className="text-sm text-gray-500">{new Date(event.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-600">Resume ID: {event.resume_id || "N/A"}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Interactions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recentInteractions.map((interaction) => (
                  <li key={interaction.id} className="border-b pb-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{interaction.element}</span>
                      <span className="text-sm text-gray-500">{new Date(interaction.timestamp).toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-600">Action: {interaction.action}</div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  } catch (error) {
    console.error("Error in AnalyticsDashboardPage:", error)
    throw error // Re-throw the error to fail the build
  }
}
