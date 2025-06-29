import type React from "react"

interface BadgeProps {
  children: React.ReactNode
  className?: string
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 ${className}`}
    >
      {children}
    </span>
  )
}
