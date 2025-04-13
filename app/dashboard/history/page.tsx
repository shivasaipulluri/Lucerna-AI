import { NavBar } from "@/components/nav-bar"
import HistoryContent from "./components/HistoryContent"

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <HistoryContent />
      </main>
    </div>
  )
}
