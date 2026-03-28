/** Format detik → "3:45" */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

/** Format harga → "Rp 149.000" */
export function formatPrice(price: number): string {
  return `Rp ${price.toLocaleString("id-ID")}.000`;
}

/** Reusable page header classes — semua halaman Diansa */
export const pageClasses = {
  eyebrow: "text-sm font-medium text-[#6b6860] mb-4",
  title: "font-display font-bold text-[#1a1a18] leading-[1.05] tracking-tight",
  desc: "text-[#6b6860] text-lg leading-relaxed max-w-lg",
  backBtn:
    "inline-flex items-center gap-2 text-sm font-medium text-[#6b6860] hover:text-[#1a1a18] transition-colors mb-10 group",
  filterBtn: (active: boolean) =>
    `px-4 py-2 rounded-full text-sm font-medium border transition-all ${
      active
        ? "bg-[#1a1a18] text-white border-[#1a1a18]"
        : "bg-transparent text-[#6b6860] border-[#6b6860]/30 hover:border-[#1a1a18] hover:text-[#1a1a18]"
    }`,
};
