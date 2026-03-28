"use client";

import { pageClasses } from "@/lib/utilities";

interface FilterTabsProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function FilterTabs({ categories, active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={pageClasses.filterBtn(active === cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
