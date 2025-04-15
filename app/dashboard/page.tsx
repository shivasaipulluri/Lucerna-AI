import { NavBar } from "@/components/nav-bar"
import { DashboardClient } from "./dashboard-client"
import { Footer } from "@/components/footer"

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: { tab?: string }
}) {
  // Properly await the searchParams object
  const resolvedParams = await Promise.resolve(searchParams)
  const initialTab = resolvedParams.tab || "history"

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <DashboardClient initialTab={initialTab} />
      </main>
      <Footer />
    </div>
  )
}
