import { getStatusStats } from "@/lib/sites-data"

export function StatsBar() {
  const stats = getStatusStats()

  const items = [
    {
      label: "总计",
      value: stats.total,
      colorClass: "text-foreground",
    },
    {
      label: "可访问",
      value: stats.accessible,
      colorClass: "text-status-accessible",
    },
    {
      label: "部分可访问",
      value: stats.partial,
      colorClass: "text-status-partial",
    },
    {
      label: "已封锁",
      value: stats.blocked,
      colorClass: "text-status-blocked",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {items.map((item) => (
        <div
          key={item.label}
          className="bg-card border border-border rounded-lg p-4 text-center"
        >
          <div className={`text-3xl font-bold ${item.colorClass}`}>
            {item.value}
          </div>
          <div className="text-sm text-muted-foreground mt-1">{item.label}</div>
        </div>
      ))}
    </div>
  )
}
