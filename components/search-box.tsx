"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface SearchBoxProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <Input
        type="text"
        placeholder="搜索网站名称或域名..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-14 pl-12 pr-4 text-lg bg-card border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
      />
    </div>
  )
}
