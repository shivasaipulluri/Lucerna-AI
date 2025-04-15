import Link from "next/link"

interface LucernaLogoProps {
  variant?: "default" | "light"
  className?: string
}

export function LucernaLogo({ variant = "default", className = "" }: LucernaLogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-primary"
  const accentColor = variant === "light" ? "text-amber-300" : "text-amber-500"

  return (
    <Link href="/" className={`font-serif text-xl font-semibold flex items-center ${textColor} ${className}`}>
      <span className="relative">
        lucerna
        <span className="relative inline-block">
          i<span className="absolute -top-1 -right-0.5 w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse-slow"></span>
        </span>
      </span>
    </Link>
  )
}

