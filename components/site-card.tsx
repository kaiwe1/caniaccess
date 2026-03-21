"use client"

import { useState } from "react"
import { ChevronDown, ExternalLink, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { StatusBadge } from "@/components/status-badge"
import type { SiteInfo } from "@/lib/sites-data"

interface SiteCardProps {
  site: SiteInfo
}

export function SiteCard({ site }: SiteCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const statusColors = {
    accessible: "border-l-status-accessible",
    partial: "border-l-status-partial",
    blocked: "border-l-status-blocked",
    unknown: "border-l-status-unknown",
  }

  return (
    <div
      className={cn(
        "bg-card rounded-lg border border-border border-l-4 overflow-hidden transition-all hover:border-primary/50",
        statusColors[site.status]
      )}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex-shrink-0 w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-muted-foreground" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-semibold text-foreground truncate">
                {site.name}
              </h3>
              <StatusBadge status={site.status} size="sm" />
            </div>
            <p className="text-sm text-muted-foreground truncate">
              {site.domain}
            </p>
          </div>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-muted-foreground transition-transform flex-shrink-0",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-0 border-t border-border">
          <div className="pt-4 space-y-3">
            <p className="text-sm text-foreground">{site.description}</p>

            {site.notes && (
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">备注：</span>
                {site.notes}
              </p>
            )}

            {site.alternatives && site.alternatives.length > 0 && (
              <div className="text-sm">
                <span className="font-medium text-foreground">国内替代：</span>
                <span className="text-primary">
                  {site.alternatives.join("、")}
                </span>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              <span className="text-xs text-muted-foreground">
                更新时间：{site.lastUpdated}
              </span>
              <a
                href={`https://${site.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                访问网站
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
