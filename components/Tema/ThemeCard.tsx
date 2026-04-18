import Link from "next/link";
import type { Theme } from "@/Types/";
import { formatPrice } from "@/lib/utilities";

interface ThemeCardProps {
  theme: Theme;
  priority?: boolean;
}

export default function ThemeCard({ theme }: ThemeCardProps) {
  return (
    <Link
      href={`/tema/${theme.slug}`}
      className="tema-card group cursor-pointer rounded-2xl overflow-hidden border border-[#1a1a18]/8 bg-white/60 hover:border-[#1a1a18]/20 hover:shadow-md transition-all duration-300 flex flex-col"
    >
      {/* Cover */}
      <div className={`h-52 bg-gradient-to-br ${theme.color} relative flex items-center justify-center`}>
        {/* Mockup undangan mini */}
        <div className="w-28 h-36 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 flex flex-col items-center justify-center gap-1.5 shadow-xl">
          <div
            className="w-8 h-8 rounded-full border-2"
            style={{ borderColor: theme.accent, backgroundColor: theme.accent + "30" }}
          />
          <div className="w-16 h-1.5 rounded-full bg-white/60 mt-1" />
          <div className="w-12 h-1 rounded-full bg-white/40" />
          <div className="w-14 h-1 rounded-full bg-white/40" />
          <div className="mt-2 w-16 h-5 rounded-md bg-white/30 flex items-center justify-center">
            <span className="text-[7px] font-semibold text-white/80">Buka Undangan</span>
          </div>
        </div>

        {/* Badges */}
        {theme.badge && (
          <span className="absolute top-3 left-3 bg-[#d4f04a] text-[#1a1a18] text-[10px] font-semibold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full">
            {theme.badge}
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white text-[#1a1a18] px-4 py-2 rounded-full text-sm font-semibold">
            Lihat Detail →
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex items-center justify-between flex-1">
        <div>
          <p className="font-semibold text-[#1a1a18] text-sm">{theme.name}</p>
          <p className="text-xs text-[#6b6860] mt-0.5">{theme.category}</p>
        </div>
        <div className="text-right">
          <p className="text-xs font-bold text-[#1a1a18]">
            {formatPrice(theme.price)}
          </p>
          <span className="text-[10px] text-[#6b6860]">/ undangan</span>
        </div>
      </div>
    </Link>
  );
}
