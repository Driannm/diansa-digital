import Link from "next/link";
import type { BlogPost } from "@/Types/Blog";
import { formatDate } from "./BlogData";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white/60 dark:bg-[#1a1a18]/60 border border-[#1a1a18]/8 dark:border-white/10 rounded-2xl overflow-hidden hover:border-[#1a1a18]/20 dark:hover:border-white/20 hover:shadow-md transition-all duration-300"
    >
      {/* Cover — gradient placeholder, ganti dengan <Image> saat API siap */}
      <div
        className={`h-48 bg-gradient-to-br ${post.coverGradient} relative flex items-end p-4`}
      >
        {/* Category badge — konsisten TemaSection badge */}
        <span className="bg-[#d4f04a] text-[#1a1a18] text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
          {post.category}
        </span>

        {post.featured && (
          <span className="absolute top-3 right-3 bg-[#1a1a18] text-white text-[10px] font-semibold uppercase tracking-[0.12em] px-2.5 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-display text-base font-semibold text-[#1a1a18] dark:text-white leading-snug group-hover:text-[#1a1a18]/80 dark:group-hover:text-white/80 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-sm text-[#6b6860] dark:text-gray-400 leading-relaxed line-clamp-2 flex-1">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#1a1a18]/8 dark:border-white/10 mt-auto">
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#d4f04a] to-[#a8c820] border border-[#e7e3de] dark:border-[#1a1a18] flex items-center justify-center text-[9px] font-bold text-[#1a1a18]">
              {post.author.initials}
            </div>
            <span className="text-xs text-[#6b6860] dark:text-gray-400 font-medium">
              {post.author.name.split(" ")[0]}
            </span>
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-[11px] text-[#1a1a18]/30 dark:text-white/30">
            <span>{formatDate(post.publishedAt)}</span>
            <span>·</span>
            <span>{post.readingTime} mnt</span>
          </div>
        </div>
      </div>
    </Link>
  );
}