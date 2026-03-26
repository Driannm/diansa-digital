"use client";

import { useGSAP } from "@/hooks/useGSAP";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UserObligations from "@/components/TermsConditions/UserObligations";
import AccountResponsibility from "@/components/TermsConditions/AccountResponsibility";
import ProhibitedActivities from "@/components/TermsConditions/ProhibitedActivities";
import PaymentTerms from "@/components/TermsConditions/PaymentTerms";
import Liability from "@/components/TermsConditions/Liability";
import SectionBlock from "@/components/shared/SectionBlock";
import PageHeader from "@/components/shared/PageHeader";
import CTABlock from "@/components/shared/CTABlock";

import { Mail01Icon } from "@hugeicons/core-free-icons";

export default function TermsConditionsPage() {
  const containerRef = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".tc-badge", { opacity: 0, y: 16, duration: 0.5 })
      .from(".tc-title", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".tc-desc", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".tc-back", { opacity: 0, x: -16, duration: 0.4 }, "-=0.3");

    gsap.utils.toArray<HTMLElement>(".tc-section").forEach((el) => {
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
    <>
      <Navbar />
      <main
        ref={containerRef as React.RefObject<HTMLElement>}
        className="bg-[#e7e3de] dark:bg-[#1a1a18] min-h-screen pt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <PageHeader
            badge="Legalitas & Aturan"
            title="Syarat & Ketentuan"
            description="Ketentuan penggunaan layanan Diansa Digital disusun untuk memberikan panduan yang jelas, memastikan pengalaman terbaik bagi Anda, dan menjaga kepatuhan hukum."
            meta="Diperbarui terakhir: 1 Maret 2025"
            backHref="/"
            backLabel="Kembali ke Beranda"
            badgeClassName="tc-badge"
            titleClassName="tc-title"
            descriptionClassName="tc-desc"
            metaClassName="tc-meta"
            backButtonClassName="tc-back"
          />

          {/* Sections */}
          <div className="mt-8">
            <div className="tc-section">
              <UserObligations />
            </div>
            <div className="tc-section">
              <AccountResponsibility />
            </div>
            <div className="tc-section">
              <ProhibitedActivities />
            </div>
            <div className="tc-section">
              <PaymentTerms />
            </div>
            <div className="tc-section">
              <Liability />
            </div>

            {/* Penutup - Hukum & Penyelesaian */}
            <SectionBlock
              number="06"
              title="Hukum & Penyelesaian"
              className="tc-section border-t border-black/10 pt-16"
            >
              <p>
                Syarat dan Ketentuan ini diatur dan ditafsirkan berdasarkan hukum
                Republik Indonesia. Segala sengketa yang timbul akan diupayakan
                penyelesaiannya melalui musyawarah untuk mufakat sebelum ditempuh
                jalur hukum.
              </p>
            </SectionBlock>

            <CTABlock
              title="Memerlukan bantuan atau klarifikasi?"
              description="Tim legal kami siap memberikan penjelasan dan bantuan terkait seluruh ketentuan penggunaan platform Diansa Digital."
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}