"use client";

import { useState } from "react";
import type { Theme } from "@/Types";
import { themeCategories } from "./temaData";
import FilterTabs from "@/components/shared/FilterTabs";
import ThemeCard from "./ThemeCard";

interface ThemeGridProps {
  themes: Theme[];
}

export default function ThemeGrid({ themes }: ThemeGridProps) {
  const [active, setActive] = useState("Semua");

  const filtered =
    active === "Semua" ? themes : themes.filter((t) => t.category === active);

  return (
    <div>
      <FilterTabs
        categories={themeCategories}
        active={active}
        onChange={setActive}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {filtered.map((theme) => (
          <ThemeCard key={theme.id} theme={theme} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="font-display text-xl font-bold text-[#1a1a18] mb-2">
            Belum ada tema di kategori ini.
          </p>
          <p className="text-sm text-[#6b6860]">Coba pilih kategori lain.</p>
        </div>
      )}
    </div>
  );
}
