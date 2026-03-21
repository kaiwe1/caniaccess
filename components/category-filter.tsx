"use client"

import { cn } from "@/lib/utils"
import { categories, type Category } from "@/lib/sites-data"

interface CategoryFilterProps {
  selected: Category
  onChange: (category: Category) => void
}

export function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-4 py-2 rounded-lg text-sm font-medium transition-all",
            selected === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
