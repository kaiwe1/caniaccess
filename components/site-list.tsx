"use client"

import { useState, useMemo } from "react"
import { SearchBox } from "@/components/search-box"
import { CategoryFilter } from "@/components/category-filter"
import { SiteCard } from "@/components/site-card"
import { Legend } from "@/components/legend"
import {
  sites,
  searchSites,
  getSitesByCategory,
  type Category,
} from "@/lib/sites-data"

export function SiteList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<Category>("全部")

  const filteredSites = useMemo(() => {
    let result = sites

    if (searchQuery.trim()) {
      result = searchSites(searchQuery)
    } else if (selectedCategory !== "全部") {
      result = getSitesByCategory(selectedCategory)
    }

    return result
  }, [searchQuery, selectedCategory])

  const handleSearchChange = (value: string) => {
    setSearchQuery(value)
    if (value.trim()) {
      setSelectedCategory("全部")
    }
  }

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category)
    setSearchQuery("")
  }

  return (
    <div className="space-y-8">
      <SearchBox value={searchQuery} onChange={handleSearchChange} />

      <CategoryFilter
        selected={selectedCategory}
        onChange={handleCategoryChange}
      />

      <Legend />

      <div className="text-sm text-muted-foreground text-center">
        找到 {filteredSites.length} 个网站
      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {filteredSites.map((site) => (
          <SiteCard key={site.id} site={site} />
        ))}
      </div>

      {filteredSites.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">没有找到匹配的网站</p>
        </div>
      )}
    </div>
  )
}
