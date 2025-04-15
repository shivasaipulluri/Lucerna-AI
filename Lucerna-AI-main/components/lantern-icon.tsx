interface LanternIconProps {
  size?: number
  className?: string
  glowing?: boolean
}

export function LanternIcon({ size = 24, className = "", glowing = true }: LanternIconProps) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
      >
        <circle cx="12" cy="12" r="6" fill="#FBBF24" />
        {glowing && (
          <>
            <circle cx="12" cy="12" r="9" fill="#FBBF24" fillOpacity="0.3" />
            <circle cx="12" cy="12" r="12" fill="#FBBF24" fillOpacity="0.1" />
          </>
        )}
      </svg>

      {glowing && <div className="absolute inset-0 bg-amber-400/20 blur-md rounded-full animate-pulse-slow"></div>}
    </div>
  )
}
