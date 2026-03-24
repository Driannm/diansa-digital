"use client";

import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

interface PageHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  meta?: string;
  backHref?: string;
  backLabel?: string;
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  metaClassName?: string;
  backButtonClassName?: string;
}

export default function PageHeader({
  badge,
  title,
  description,
  meta,
  backHref,
  backLabel = "Kembali ke Beranda",
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  metaClassName = "",
  backButtonClassName = "",
}: PageHeaderProps) {
  return (
    <header
      className={`animate-section pt-16 pb-12 border-b border-black/10 dark:border-white/10 ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 bg-[#d4f04a] border border-[#d4f04a] rounded-full px-4 py-1.5 text-xs font-medium text-[#1a1a18] mb-6 ${badgeClassName}`}
        >
          {badge}
        </div>
      )}

      <h1
        className={`font-display text-5xl lg:text-6xl font-bold text-[#1a1a18] dark:text-white leading-tight ${titleClassName}`}
      >
        {title}
      </h1>

      {description && (
        <p
          className={`mt-6 text-[#6b6860] dark:text-gray-400 text-lg max-w-2xl ${descriptionClassName}`}
        >
          {description}
        </p>
      )}

      {meta && (
        <div
          className={`mt-8 flex items-center gap-4 text-xs font-medium text-[#6b6860] dark:text-gray-400 ${metaClassName}`}
        >
          {meta}
        </div>
      )}

      {backHref && (
        <div className={`mt-12 ${backButtonClassName}`}>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a18] dark:text-white border border-[#1a1a18]/20 dark:border-white/20 rounded-full px-5 py-2.5 hover:bg-[#d4f04a] dark:hover:bg-[#d4f04a] dark:hover:text-[#1a1a18] transition-all"
          >
            <HugeiconsIcon icon={ArrowLeft02Icon} size={14} color="currentColor" strokeWidth={2} />
            {backLabel}
          </Link>
        </div>
      )}
    </header>
  );
}