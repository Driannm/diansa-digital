"use client";

import { useGSAP } from "@/hooks/useGSAP";
import { Mail01Icon } from "@hugeicons/core-free-icons";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurStory from "@/components/AboutUs/OurStory";
import MissionVision from "@/components/AboutUs/MissionVision";
import OurValues from "@/components/AboutUs/OurValues";
import TeamSection from "@/components/AboutUs/TeamSection";
import PageHeader from "@/components/shared/PageHeader";
import CTABlock from "@/components/shared/CTABlock";

export default function AboutUsPage() {
  const ref = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".about-badge", { opacity: 0, y: 16, duration: 0.5 })
      .from(".about-title", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".about-desc", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".about-back", { opacity: 0, x: -16, duration: 0.4 }, "-=0.2");

    gsap.utils.toArray<HTMLElement>(".about-section").forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    });
  });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="bg-[#e7e3de] dark:bg-[#1a1a18] min-h-screen pt-24 transition-colors duration-300"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <PageHeader
          badge="Tentang Kami"
          title="Dibangun dengan niat tumbuh bersama kepercayaan."
          description="Kami adalah tim kecil yang percaya bahwa teknologi terbaik adalah yang
        tidak terasa seperti teknologi — ia hanya bekerja, dengan elegan."
          meta="Diperbarui terakhir: 1 Maret 2025"
          backHref="/"
          backLabel="Kembali ke Beranda"
          badgeClassName="tc-badge"
          titleClassName="tc-title"
          descriptionClassName="tc-desc"
          metaClassName="tc-meta"
          backButtonClassName="tc-back"
        />

        {/* ── Story ───────────────────────────────────── */}
        <div className="about-section">
          <OurStory />
        </div>

        {/* ── Mission & Vision ───────────────────────── */}
        <div className="about-section border-t border-[#1a1a18]/8 dark:border-white/10 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-x-12 lg:gap-x-20">
            <div className="md:col-span-2">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl border-2 border-[#d4f04a] dark:border-[#d4f04a]/80 bg-[#d4f04a]/10 dark:bg-[#d4f04a]/5 select-none">
                <span className="font-display text-xl font-bold text-[#1a1a18] dark:text-white">
                  ✦
                </span>
              </div>
            </div>
            <div className="md:col-span-10">
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-6 text-[#1a1a18] dark:text-white leading-tight tracking-tight">
                Misi &amp; Visi
              </h2>
              <MissionVision />
            </div>
          </div>
        </div>

        {/* ── Values ──────────────────────────────────── */}
        <div className="about-section border-t border-[#1a1a18]/8 dark:border-white/10 py-16 md:py-24">
          <OurValues />
        </div>

        {/* ── Team ────────────────────────────────────── */}
        <div className="about-section border-t border-[#1a1a18]/8 dark:border-white/10 py-16 md:py-24">
          <TeamSection />
        </div>

        {/* CTA */}
        <CTABlock
          title="Ingin tahu lebih banyak?"
          description="Kami selalu senang mendengar dari siapapun - pengguna, calon
                  mitra, jurnalis, atau siapapun yang penasaran dengan apa yang
                  sedang kami bangun."
          buttons={[
            {
              label: "Kirim Email",
              href: "mailto:support@diansadigital.id",
              icon: Mail01Icon,
              variant: "primary",
              external: true,
            },
          ]}
        />
      </main>

      <Footer />
    </div>
  );
}