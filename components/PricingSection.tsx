"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { PricingPlan } from "@/Types/Pricing";

// Komponen ikon checkmark
const CheckIcon = ({ highlighted }: { highlighted: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    className="flex-shrink-0 mt-0.5"
  >
    <circle
      cx="9"
      cy="9"
      r="8"
      stroke={highlighted ? "#d4f04a" : "#1a1a18"}
      strokeOpacity={highlighted ? "1" : "0.15"}
      strokeWidth="1.2"
      className={highlighted ? "" : "dark:stroke-white dark:stroke-opacity-20"}
    />
    <path
      d="M6 9.5L8.5 12L12.5 7"
      stroke={highlighted ? "#d4f04a" : "#1a1a18"}
      strokeOpacity={highlighted ? "1" : "0.8"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={highlighted ? "" : "dark:stroke-white dark:stroke-opacity-80"}
    />
  </svg>
);

interface PricingSectionProps {
  plans: PricingPlan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    // Animasi header
    gsap.from(".pricing-header", {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pricing-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Animasi kartu dengan efek stagger
    gsap.from(".pricing-card", {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pricing-grid",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    ScrollTrigger.refresh();
  });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-28 bg-[#e7e3de] dark:bg-[#1a1a18] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="pricing-header text-center mb-16 md:mb-20">
          <span className="inline-block text-xs tracking-[0.25em] uppercase font-medium text-[#9a9690] dark:text-gray-400 mb-5">
            Harga
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1a1a18] dark:text-white leading-tight tracking-tight">
            Paket yang{" "}
            <span className="italic font-normal text-[#1a1a18]/35 dark:text-white/35">
              Sesuai Kebutuhan
            </span>
          </h2>
          <p className="mt-5 text-[#6b6860] dark:text-gray-400 text-base leading-relaxed max-w-md mx-auto">
            Harga transparan, tanpa biaya tersembunyi.
            <br />
            Semua paket sudah termasuk revisi.
          </p>
        </div>

        {/* Grid Kartu */}
        <div className="pricing-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch md:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                pricing-card group relative rounded-3xl p-7 md:p-8 flex flex-col
                transition-all duration-500 hover:shadow-2xl
                ${
                  plan.highlighted
                    ? "bg-[#1a1a18] dark:bg-[#1a1a18] text-white shadow-xl shadow-black/20 dark:shadow-black/30 md:scale-105 md:-mt-2 md:mb-2"
                    : "bg-white/80 dark:bg-[#1a1a18]/80 backdrop-blur-sm border border-[#1a1a18]/10 dark:border-white/10 hover:bg-white dark:hover:bg-[#1a1a18]/90"
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-6 bg-[#d4f04a] text-[#1a1a18] text-[10px] tracking-[0.2em] uppercase font-bold px-4 py-1.5 rounded-full shadow-md">
                  {plan.badge}
                </div>
              )}

              {/* Nama Paket */}
              <div className="flex items-center gap-2 mb-3">
                <p
                  className={`text-[11px] tracking-[0.2em] uppercase font-semibold ${
                    plan.highlighted
                      ? "text-[#d4f04a]"
                      : "text-[#9a9690] dark:text-gray-400"
                  }`}
                >
                  {plan.name}
                </p>
                {plan.discountBadge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border border-red-500/20">
                    {plan.discountBadge}
                  </span>
                )}
              </div>

              {/* Harga */}
              <div className="mb-3 flex items-baseline gap-2">
                <span
                  className={`text-xs font-medium ${
                    plan.highlighted
                      ? "text-white/40"
                      : "text-[#9a9690] dark:text-gray-400"
                  }`}
                >
                  Rp
                </span>
                <span
                  className={`font-display text-4xl md:text-5xl font-bold leading-none tracking-tight ${
                    plan.highlighted
                      ? "text-white"
                      : "text-[#1a1a18] dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
                {/* Harga coret jika ada originalPrice */}
                {plan.originalPrice && (
                  <>
                    <span
                      className={`text-sm line-through ml-1 ${
                        plan.highlighted
                          ? "text-white/30"
                          : "text-[#9a9690]/60 dark:text-gray-500"
                      }`}
                    >
                      Rp {plan.originalPrice}
                    </span>
                  </>
                )}
              </div>

              {/* Deskripsi */}
              <p
                className={`text-sm leading-relaxed mb-7 ${
                  plan.highlighted
                    ? "text-white/50"
                    : "text-[#6b6860] dark:text-gray-400"
                }`}
              >
                {plan.description}
              </p>

              {/* Garis Pembatas */}
              <div
                className={`w-full h-px mb-7 ${
                  plan.highlighted
                    ? "bg-white/10"
                    : "bg-[#1a1a18]/10 dark:bg-white/10"
                }`}
              />

              {/* Daftar Fitur */}
              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <CheckIcon highlighted={plan.highlighted} />
                    <span
                      className={
                        plan.highlighted
                          ? "text-white/80"
                          : "text-[#4a4a48] dark:text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tombol CTA */}
              <button
                className={`
                  w-full py-4 rounded-2xl text-sm font-semibold tracking-wide
                  transition-all duration-300 active:scale-[0.97]
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  focus-visible:outline-[#d4f04a]
                  ${
                    plan.highlighted
                      ? "bg-[#d4f04a] text-[#1a1a18] hover:bg-[#c8e840] hover:shadow-lg hover:shadow-[#d4f04a]/20"
                      : "bg-[#1a1a18] text-white hover:bg-[#2a2a28] dark:bg-[#d4f04a] dark:text-[#1a1a18] dark:hover:bg-[#c8e840]"
                  }
                `}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Catatan Kaki */}
        <p className="text-center text-xs text-[#9a9690] dark:text-gray-400 mt-12">
          Butuh paket khusus?{" "}
          <a
            href="https://wa.me/628xxx"
            className="text-[#1a1a18] dark:text-white font-medium underline underline-offset-4 decoration-[#1a1a18]/30 dark:decoration-white/30 hover:decoration-[#1a1a18] dark:hover:decoration-white transition-all"
          >
            Hubungi kami via WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
