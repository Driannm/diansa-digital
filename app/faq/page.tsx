"use client";

import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Mail01Icon,
  WhatsappFreeIcons,
} from "@hugeicons/core-free-icons";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQCategory from "@/components/FAQ/FAQCategory";
import { faqData } from "@/components/FAQ/faqData";

export default function FAQPage() {
  const ref = useGSAP((gsap) => {
    // Header — sama dengan HeroSection load animation
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".faq-badge", { opacity: 0, y: 16, duration: 0.5 })
      .from(".faq-title", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".faq-desc", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".faq-back", { opacity: 0, x: -16, duration: 0.4 }, "-=0.3");

    // Category blocks scroll trigger
    gsap.utils.toArray<HTMLElement>(".faq-cat").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.from(".cta-box", {
      opacity: 0,
      scale: 0.96,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: ".cta-box", start: "top 85%" },
    });

    gsap.from(".cta-text", {
      opacity: 0,
      x: -40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".cta-box", start: "top 80%" },
    });

    gsap.from(".cta-buttons", {
      opacity: 0,
      x: 40,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".cta-box", start: "top 80%" },
    });
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#e7e3de] min-h-screen pt-24"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {/* ── Header  */}
        <header className="animate-section pt-16 pb-12 border-b border-black/10">
          <div className="faq-badge inline-flex items-center gap-2 bg-[#d4f04a] border border-[#d4f04a] rounded-full px-4 py-1.5 text-xs font-medium text-[#1a1a18] mb-6">
            Pusat Bantuan
          </div>

          <h1 className="faq-title font-display text-5xl lg:text-6xl font-bold text-[#1a1a18] leading-tight">
            Pertanyaan Umum
          </h1>

          <p className="faq-desc mt-6 text-[#6b6860] text-lg max-w-2xl">
            Temukan jawaban atas pertanyaan yang paling sering diajukan terkait
            layanan kami. Jika Anda membutuhkan bantuan lebih lanjut, tim kami
            siap membantu Anda secara langsung.
          </p>
          <div className="mt-8 flex items-center gap-4 text-xs font-medium text-[#6b6860]">
            Diperbarui terakhir: 1 Maret 2025
          </div>

          {/* Back Button */}
          <div className="mt-12 faq-back">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#1a1a18] border border-[#1a1a18]/20 rounded-full px-5 py-2.5 hover:bg-[#1a1a18] hover:text-white transition-all"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>
        </header>

        {/* ── FAQ Categories  */}
        <div className="mt-16 space-y-4">
          {faqData.map((category, i) => (
            <div key={i} className="faq-cat">
              <FAQCategory title={category.title} items={category.items} />
            </div>
          ))}
        </div>

        {/* CTA Block  */}
        <div className="mt-8">
          <div className="cta-box bg-[#1a1a18] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-10 relative overflow-hidden text-center md:text-left">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#d4f04a]/5 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-32 w-40 h-40 rounded-full bg-white/5 translate-y-1/2 pointer-events-none" />

            <div className="cta-text relative z-10 max-w-lg">
              <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight">
                Masih ada pertanyaan?
              </h2>
              <p className="mt-4 text-white/70 text-lg">
                Tim Diansa aktif setiap hari kerja. Respons WhatsApp biasanya
                dalam 1–2 jam.
              </p>
            </div>

            <div className="cta-buttons relative z-10 flex flex-col gap-3 min-w-max">
              <a
                href="mailto:privacy@diansadigital.id"
                className="inline-flex items-center justify-center gap-2 bg-[#d4f04a] text-[#1a1a18] px-7 py-3.5 rounded-xl font-semibold hover:bg-[#c8e840] transition-colors whitespace-nowrap"
              >
                <HugeiconsIcon icon={WhatsappFreeIcons} />
                Chat WhatsApp
              </a>
              <Link
                href="/terms-conditions"
                className="inline-flex items-center justify-center gap-2 bg-white/8 border border-white/15 text-white px-7 py-3.5 rounded-xl font-medium hover:bg-white/15 transition-colors whitespace-nowrap"
              >
                <HugeiconsIcon icon={Mail01Icon} />
                Kirim Email
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
