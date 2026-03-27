"use client";

import { useGSAP } from "@/hooks/useGSAP";

const testimonials = [
  {
    name: "Rina & Arman",
    event: "Pernikahan · Januari 2025",
    quote: "Undangan digitalnya sangat cantik dan elegan. Banyak tamu yang bertanya beli di mana! Proses pembuatannya juga super cepat.",
    rating: 5,
    initials: "RA",
    color: "from-rose-200 to-pink-300 dark:from-rose-800 dark:to-pink-700",
  },
  {
    name: "Budi Santoso",
    event: "Ulang Tahun · Maret 2025",
    quote: "Awalnya ragu mau pakai undangan digital, tapi hasilnya melebihi ekspektasi. Desain modern dan fiturnya lengkap banget.",
    rating: 5,
    initials: "BS",
    color: "from-blue-200 to-indigo-300 dark:from-blue-800 dark:to-indigo-700",
  },
  {
    name: "Siti & Fajar",
    event: "Pernikahan · Mei 2025",
    quote: "Responsif banget tim Diansa. Revisi dilayani dengan sabar. Undangannya jadi viral di Instagram karena desainnya bagus!",
    rating: 5,
    initials: "SF",
    color: "from-[#d4f04a] to-lime-300 dark:from-[#d4f04a]/80 dark:to-lime-700",
  },
  {
    name: "Dewi Kartika",
    event: "Wisuda · Juli 2025",
    quote: "Sangat memuaskan! Harga terjangkau tapi kualitas premium. Pasti akan pakai lagi untuk acara berikutnya.",
    rating: 5,
    initials: "DK",
    color: "from-amber-200 to-yellow-300 dark:from-amber-800 dark:to-yellow-700",
  },
];

export default function TestimonialSection() {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    // Header animation
    gsap.from(".testi-header", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testi-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Cards animation with stagger
    gsap.utils.toArray<HTMLElement>(".testi-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    ScrollTrigger.refresh();
  });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-24 bg-[#e7e3de] dark:bg-[#1a1a18] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="testi-header text-center mb-16">
          <p className="text-sm font-medium text-[#6b6860] dark:text-gray-400 mb-3">
            — Testimoni
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a18] dark:text-white leading-tight">
            Kata Mereka yang{" "}
            <em className="not-italic text-[#1a1a18]/40 dark:text-white/40">
              Sudah Percaya
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testi-card bg-white/60 dark:bg-[#1a1a18]/60 border border-black/10 dark:border-white/10 rounded-2xl p-7 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-[#1a1a18] dark:text-gray-200 text-sm leading-relaxed mb-6">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-[#1a1a18] dark:text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm text-[#1a1a18] dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#6b6860] dark:text-gray-400">
                    {t.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}