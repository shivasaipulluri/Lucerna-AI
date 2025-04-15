interface SunIconProps {
  className?: string
  size?: number
}

export function SunIcon({ className = "", size = 40 }: SunIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="8" fill="#FBBF24" />
      <circle cx="20" cy="20" r="16" stroke="#FBBF24" strokeOpacity="0.2" strokeWidth="2" />
    </svg>
  )
}
