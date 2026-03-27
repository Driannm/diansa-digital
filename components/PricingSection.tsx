"use client";

import { useGSAP } from "@/hooks/useGSAP";

const plans = [
  {
    name: "Basic",
    price: "149.000",
    description: "Cocok untuk acara sederhana namun tetap berkesan.",
    features: [
      "1 tema pilihan",
      "Nama & tanggal acara",
      "Link undangan aktif 3 bulan",
      "RSVP online",
      "Tanpa background music",
    ],
    cta: "Pilih Basic",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "299.000",
    description: "Lengkap untuk momen paling berharga dalam hidupmu.",
    features: [
      "Semua fitur Basic",
      "Background music pilihan",
      "Galeri foto (hingga 20 foto)",
      "Countdown timer",
      "Google Maps terintegrasi",
      "Link aktif selamanya",
      "Revisi 2x gratis",
    ],
    cta: "Pilih Premium",
    highlighted: true,
    badge: "Terpopuler",
  },
  {
    name: "Exclusive",
    price: "499.000",
    description: "Pengalaman undangan digital setara wedding organizer.",
    features: [
      "Semua fitur Premium",
      "Desain custom penuh",
      "Video opening undangan",
      "Unlimited revisi",
      "Priority support 24/7",
      "QR code undangan",
      "Cetak amplop digital",
    ],
    cta: "Pilih Exclusive",
    highlighted: false,
  },
];

export default function PricingSection() {
  const containerRef = useGSAP((gsap, ScrollTrigger) => {
    // Header animation
    gsap.from(".pricing-header", {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pricing-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    // Card animations
    gsap.utils.toArray<HTMLElement>(".pricing-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 60,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Refresh ScrollTrigger to recalculate positions
    ScrollTrigger.refresh();
  });

  return (
    <section
      ref={containerRef as React.RefObject<HTMLElement>}
      className="py-28 bg-[#e7e3de] dark:bg-[#1a1a18] transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Header ── */}
        <div className="pricing-header text-center mb-20">
          <p className="text-xs tracking-[0.2em] uppercase font-medium text-[#9a9690] dark:text-gray-400 mb-4">
            Harga
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-[#1a1a18] dark:text-white leading-tight tracking-tight">
            Paket yang{" "}
            <span className="italic font-normal text-[#1a1a18]/35 dark:text-white/35">
              Sesuai Kebutuhan
            </span>
          </h2>
          <p className="mt-5 text-[#6b6860] dark:text-gray-400 text-base leading-relaxed max-w-sm mx-auto">
            Harga transparan, tanpa biaya tersembunyi.
            <br />
            Semua paket sudah termasuk revisi.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                pricing-card relative rounded-3xl p-8 flex flex-col
                transition-all duration-300 hover:-translate-y-1
                ${
                  plan.highlighted
                    ? "bg-[#1a1a18] dark:bg-[#1a1a18] text-white shadow-2xl shadow-black/20 dark:shadow-black/30 md:-mt-4 md:pb-12"
                    : "bg-white/70 dark:bg-[#1a1a18]/70 backdrop-blur-sm border border-black/10 dark:border-white/10"
                }
              `}
            >
              {/* Badge */}
              {plan.badge && (
                <span className="absolute -top-3 left-8 bg-[#d4f04a] dark:bg-[#d4f04a] text-[#1a1a18] dark:text-[#1a1a18] text-[10px] tracking-[0.15em] uppercase font-semibold px-3.5 py-1.5 rounded-full">
                  {plan.badge}
                </span>
              )}

              {/* Plan name */}
              <p
                className={`text-[11px] tracking-[0.18em] uppercase font-semibold mb-3 ${
                  plan.highlighted
                    ? "text-[#d4f04a] dark:text-[#d4f04a]"
                    : "text-[#9a9690] dark:text-gray-400"
                }`}
              >
                {plan.name}
              </p>

              {/* Price */}
              <div className="mb-3 flex items-baseline gap-1.5">
                <span
                  className={`text-[11px] font-medium ${
                    plan.highlighted
                      ? "text-white/40 dark:text-white/40"
                      : "text-[#9a9690] dark:text-gray-400"
                  }`}
                >
                  Rp
                </span>
                <span
                  className={`font-display text-[2.6rem] font-bold leading-none tracking-tight ${
                    plan.highlighted
                      ? "text-white dark:text-white"
                      : "text-[#1a1a18] dark:text-white"
                  }`}
                >
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-7 ${
                  plan.highlighted
                    ? "text-white/50 dark:text-white/50"
                    : "text-[#9a9690] dark:text-gray-400"
                }`}
              >
                {plan.description}
              </p>

              {/* Divider */}
              <div
                className={`w-full h-px mb-7 ${
                  plan.highlighted
                    ? "bg-white/10 dark:bg-white/10"
                    : "bg-black/10 dark:bg-white/10"
                }`}
              />

              {/* Features */}
              <ul className="space-y-3.5 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="7.25"
                        stroke={plan.highlighted ? "#d4f04a" : "#1a1a18"}
                        strokeWidth="0.75"
                        strokeOpacity={plan.highlighted ? "1" : "0.2"}
                        className={plan.highlighted ? "" : "dark:stroke-white dark:stroke-opacity-20"}
                      />
                      <path
                        d="M5 8.2L7 10.2L11 6"
                        stroke={plan.highlighted ? "#d4f04a" : "#1a1a18"}
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeOpacity={plan.highlighted ? "1" : "0.6"}
                        className={plan.highlighted ? "" : "dark:stroke-white dark:stroke-opacity-60"}
                      />
                    </svg>
                    <span
                      className={
                        plan.highlighted
                          ? "text-white/75 dark:text-white/75"
                          : "text-[#4a4a48] dark:text-gray-300"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`
                  w-full py-3.5 rounded-2xl text-sm font-semibold tracking-wide
                  transition-all duration-200 active:scale-[0.98]
                  ${
                    plan.highlighted
                      ? "bg-[#d4f04a] text-[#1a1a18] hover:bg-[#caea3f] dark:bg-[#d4f04a] dark:text-[#1a1a18] dark:hover:bg-[#caea3f]"
                      : "bg-[#1a1a18] text-white hover:bg-[#111110] dark:bg-[#d4f04a] dark:text-[#1a1a18] dark:hover:bg-[#caea3f]"
                  }
                `}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <p className="text-center text-xs text-[#9a9690] dark:text-gray-400 mt-10">
          Butuh paket khusus?{" "}
          <a
            href="https://wa.me/628xxx"
            className="text-[#1a1a18] dark:text-white font-medium underline underline-offset-2 decoration-[#1a1a18]/30 dark:decoration-white/30 hover:decoration-[#1a1a18] dark:hover:decoration-white transition-all"
          >
            Hubungi kami via WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}