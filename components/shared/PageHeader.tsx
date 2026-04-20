"use client";

import {
  ArrowLeft02Icon,
  InformationCircleIcon,
  Alert02Icon,
  CheckmarkCircle02Icon,
  Notification02Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon, IconSvgElement } from "@hugeicons/react";
import Link from "next/link";

// ─── Stat Item ────────────────────────────────────────────────────────────────
export interface StatItem {
  label: string;
  value: string | number;
  icon?: IconSvgElement;
  /** Optional suffix, e.g. "genre", "lagu" */
  suffix?: string;
}

// ─── Note Item ────────────────────────────────────────────────────────────────
export interface NoteItem {
  /** Optional bold prefix label rendered inline, e.g. "Info:" */
  label?: string;
  text: string;
  /** Controls background + border color */
  variant?: "default" | "warning" | "info" | "success";
  /** Override the leading icon. Falls back to a sensible default per variant. */
  icon?: IconSvgElement;
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface PageHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: string;
  meta?: string;
  backHref?: string;
  backLabel?: string;

  /** Up to 6 real-time stats */
  stats?: StatItem[];

  /** Up to 2 contextual notes */
  notes?: NoteItem[];

  // ── Class overrides ──────────────────────────────────────────────────────
  className?: string;
  badgeClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  metaClassName?: string;
  backButtonClassName?: string;
  statsClassName?: string;
  notesClassName?: string;
}

// ─── Variant map ─────────────────────────────────────────────────────────────
const noteVariantClasses: Record<NonNullable<NoteItem["variant"]>, string> = {
  default:
    "bg-[#1a1a18]/[.04] border-[#1a1a18]/10 dark:bg-white/[.05] dark:border-white/10",
  warning:
    "bg-amber-400/10 border-amber-400/20",
  info:
    "bg-sky-400/10 border-sky-400/20",
  success:
    "bg-[#d4f04a]/10 border-[#d4f04a]/20",
};

const noteIconDefault: Record<NonNullable<NoteItem["variant"]>, IconSvgElement> = {
  default: Notification02Icon,
  warning: Alert02Icon,
  info: InformationCircleIcon,
  success: CheckmarkCircle02Icon,
};

const noteIconColorClasses: Record<NonNullable<NoteItem["variant"]>, string> = {
  default: "text-[#6b6860] dark:text-white/40",
  warning: "text-amber-500 dark:text-amber-400",
  info: "text-sky-500 dark:text-sky-400",
  success: "text-[#5a7a10] dark:text-[#d4f04a]",
};

const noteTextMutedClasses: Record<NonNullable<NoteItem["variant"]>, string> = {
  default: "text-[#6b6860] dark:text-white/60",
  warning: "text-amber-700/80 dark:text-amber-200/60",
  info: "text-sky-700/80 dark:text-sky-200/60",
  success: "text-[#4a6010]/80 dark:text-white/60",
};

const noteTextStrongClasses: Record<NonNullable<NoteItem["variant"]>, string> = {
  default: "text-[#1a1a18] dark:text-white/80",
  warning: "text-amber-800 dark:text-amber-200/80",
  info: "text-sky-800 dark:text-sky-200/80",
  success: "text-[#3a500c] dark:text-[#d4f04a]/90",
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function PageHeader({
  badge,
  title,
  description,
  meta,
  backHref,
  backLabel = "Kembali ke Beranda",
  stats,
  notes,
  className = "",
  badgeClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  metaClassName = "",
  backButtonClassName = "",
  statsClassName = "",
  notesClassName = "",
}: PageHeaderProps) {
  // Clamp to limits
  const clampedStats = stats?.slice(0, 6);
  const clampedNotes = notes?.slice(0, 2);

  const hasStats = clampedStats && clampedStats.length > 0;
  const hasNotes = clampedNotes && clampedNotes.length > 0;

  return (
    <header
      className={`animate-section pt-16 pb-12 border-b border-black/10 dark:border-white/10 ${className}`}
    >
      {/* ── Badge ── */}
      {badge && (
        <div
          className={`inline-flex items-center gap-2 bg-[#d4f04a] border border-[#d4f04a] rounded-full px-4 py-1.5 text-xs font-medium text-[#1a1a18] mb-6 ${badgeClassName}`}
        >
          {badge}
        </div>
      )}

      {/* ── Title ── */}
      <h1
        className={`font-display text-5xl lg:text-6xl font-bold text-[#1a1a18] dark:text-white leading-tight ${titleClassName}`}
      >
        {title}
      </h1>

      {/* ── Description ── */}
      {description && (
        <p
          className={`mt-6 text-[#6b6860] dark:text-gray-400 text-lg max-w-2xl ${descriptionClassName}`}
        >
          {description}
        </p>
      )}

      {/* ── Meta ── */}
      {meta && (
        <div
          className={`mt-8 flex items-center gap-4 text-xs font-medium text-[#6b6860] dark:text-gray-400 ${metaClassName}`}
        >
          {meta}
        </div>
      )}

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      {hasStats && (
        <div
          className={`mt-10 grid gap-3
            grid-cols-2
            sm:grid-cols-3
            ${clampedStats.length >= 4 ? "lg:grid-cols-4" : ""}
            ${clampedStats.length >= 5 ? "xl:grid-cols-5" : ""}
            ${clampedStats.length === 6 ? "2xl:grid-cols-6" : ""}
            ${statsClassName}`}
        >
          {clampedStats.map((stat, i) => (
            <div
              key={i}
              className="group flex flex-col gap-1.5 rounded-2xl border border-black/8 dark:border-white/8
                         bg-white/60 dark:bg-white/[.04] backdrop-blur-sm
                         px-5 py-4
                         hover:border-[#d4f04a]/60 hover:bg-[#d4f04a]/5
                         transition-all duration-200"
            >
              {/* Icon + label row */}
              <div className="flex items-center gap-2">
                {stat.icon && (
                  <HugeiconsIcon
                    icon={stat.icon}
                    size={14}
                    color="currentColor"
                    strokeWidth={2}
                    className="text-[#6b6860] dark:text-gray-400 shrink-0"
                  />
                )}
                <span className="text-xs font-medium text-[#6b6860] dark:text-gray-400 truncate">
                  {stat.label}
                </span>
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-[#1a1a18] dark:text-white leading-none tabular-nums">
                  {stat.value}
                </span>
                {stat.suffix && (
                  <span className="text-xs text-[#6b6860] dark:text-gray-400 font-medium">
                    {stat.suffix}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Notes ─────────────────────────────────────────────────────────── */}
      {hasNotes && (
        <div
          className={`mt-6 flex flex-col sm:flex-row gap-3 ${notesClassName}`}
        >
          {clampedNotes.map((note, i) => {
            const variant = note.variant ?? "default";
            const icon = note.icon ?? noteIconDefault[variant];
            return (
              <div
                key={i}
                className={`flex-1 flex items-start gap-3 rounded-2xl border px-5 py-4
                            ${noteVariantClasses[variant]}
                            transition-colors duration-200`}
              >
                <HugeiconsIcon
                  icon={icon}
                  size={16}
                  color="currentColor"
                  strokeWidth={2}
                  className={`shrink-0 mt-0.5 ${noteIconColorClasses[variant]}`}
                />
                <p className={`text-sm leading-relaxed ${noteTextMutedClasses[variant]}`}>
                  {note.label && (
                    <span className={`font-semibold ${noteTextStrongClasses[variant]}`}>
                      {note.label}{" "}
                    </span>
                  )}
                  {note.text}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Back button ── */}
      {backHref && (
        <div className={`mt-12 ${backButtonClassName}`}>
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a18] dark:text-white border border-[#1a1a18]/20 dark:border-white/20 rounded-full px-5 py-2.5 hover:bg-[#d4f04a] dark:hover:bg-[#d4f04a] dark:hover:text-[#1a1a18] transition-all"
          >
            <HugeiconsIcon
              icon={ArrowLeft02Icon}
              size={14}
              color="currentColor"
              strokeWidth={2}
            />
            {backLabel}
          </Link>
        </div>
      )}
    </header>
  );
}