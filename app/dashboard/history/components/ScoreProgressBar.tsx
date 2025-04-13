export default function ScoreProgressBar({ score, label }: { score: number; label: string }) {
  // Determine color based on score
  const getColor = (score: number) => {
    if (score >= 95) return { bg: "bg-success", text: "text-success" }
    if (score >= 80) return { bg: "bg-yellow-500", text: "text-yellow-700" }
    return { bg: "bg-destructive", text: "text-destructive" }
  }

  const { bg, text } = getColor(score)

  return (
    <div className="flex items-center gap-1">
      <span className={`text-xs font-medium ${text}`}>{label}</span>
      <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${bg} rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
      <span className="text-xs font-medium">{score}%</span>
    </div>
  )
}
