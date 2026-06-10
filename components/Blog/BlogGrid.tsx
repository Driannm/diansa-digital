"use client";

import { useState } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/Types/Blog";
import { categories } from "./BlogData";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered =
    activeCategory === "Semua"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter tabs — konsisten persis TemaSection tabs */}
      <div className="flex gap-2 flex-wrap mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              activeCategory === cat
                ? "bg-[#1a1a18] text-white border-[#1a1a18] dark:bg-white dark:text-[#1a1a18] dark:border-white"
                : "bg-transparent text-[#6b6860] border-[#6b6860]/30 hover:border-[#1a1a18] hover:text-[#1a1a18] dark:text-gray-400 dark:border-gray-600 dark:hover:border-white dark:hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid 3 kolom — konsisten TemaSection */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-[#6b6860] dark:text-gray-400">
          <p className="font-display text-xl font-semibold text-[#1a1a18] dark:text-white mb-2">
            Belum ada artikel di kategori ini.
          </p>
          <p className="text-sm">Coba pilih kategori lain.</p>
        </div>
      )}
    </div>
  );
}