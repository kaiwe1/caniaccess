import { StatusBadge } from "@/components/status-badge"

export function Legend() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
      <div className="flex items-center gap-2">
        <StatusBadge status="accessible" size="sm" />
        <span className="text-muted-foreground">正常访问</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusBadge status="partial" size="sm" />
        <span className="text-muted-foreground">部分可用/不稳定</span>
      </div>
      <div className="flex items-center gap-2">
        <StatusBadge status="blocked" size="sm" />
        <span className="text-muted-foreground">已被封锁</span>
      </div>
    </div>
  )
}
