"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TagPillProps {
  tag: string
  count?: number
  variant?: "default" | "outline" | "secondary"
  size?: "sm" | "md" | "lg"
  href?: string
  className?: string
  onClick?: () => void
}

export function TagPill({ 
  tag, 
  count, 
  variant = "secondary", 
  size = "md",
  href,
  className,
  onClick
}: TagPillProps) {
  const baseClasses = cn(
    "transition-colors hover:bg-muted/80 cursor-pointer",
    {
      "text-xs px-2 py-1": size === "sm",
      "text-sm px-3 py-1": size === "md", 
      "text-base px-4 py-2": size === "lg",
    },
    className
  )

  const content = (
    <Badge 
      variant={variant} 
      className={baseClasses}
      onClick={onClick}
    >
      {tag}
      {count && (
        <span className="ml-1.5 text-xs opacity-60">
          {count}
        </span>
      )}
    </Badge>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    )
  }

  return content
}
