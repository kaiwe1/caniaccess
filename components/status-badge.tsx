import { cn } from "@/lib/utils"
import type { AccessStatus } from "@/lib/sites-data"

interface StatusBadgeProps {
  status: AccessStatus
  size?: "sm" | "md" | "lg"
}

const statusConfig = {
  accessible: {
    label: "可访问",
    bgClass: "bg-status-accessible",
    textClass: "text-background",
  },
  partial: {
    label: "部分可访问",
    bgClass: "bg-status-partial",
    textClass: "text-background",
  },
  blocked: {
    label: "已封锁",
    bgClass: "bg-status-blocked",
    textClass: "text-foreground",
  },
  unknown: {
    label: "未知",
    bgClass: "bg-status-unknown",
    textClass: "text-foreground",
  },
}

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
}

export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  const config = statusConfig[status]

  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-md",
        config.bgClass,
        config.textClass,
        sizeClasses[size]
      )}
    >
      {config.label}
    </span>
  )
}
