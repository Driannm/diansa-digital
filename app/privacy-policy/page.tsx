"use client";

import Link from "next/link";
import { useGSAP } from "@/hooks/useGSAP";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
  Mail01Icon,
} from "@hugeicons/core-free-icons";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionBlock from "@/components/shared/SectionBlock";
import DataCollection from "@/components/PrivacyPolicy/DataCollection";
import DataUsage from "@/components/PrivacyPolicy/DataUsage";
import DataSharing from "@/components/PrivacyPolicy/DataSharing";
import UserRights from "@/components/PrivacyPolicy/UserRights";
import CookiePolicy from "@/components/PrivacyPolicy/CookiePolicy";
import PageHeader from "@/components/shared/PageHeader";
import CTABlock from "@/components/shared/CTABlock";

export default function PrivacyPolicyPage() {
  const ref = useGSAP((gsap) => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tl.from(".pp-back", { opacity: 0, x: -16, duration: 0.4 })
      .from(".pp-badge", { opacity: 0, y: 16, duration: 0.5 }, "-=0.2")
      .from(".pp-title", { opacity: 0, y: 32, duration: 0.7 }, "-=0.3")
      .from(".pp-desc", { opacity: 0, y: 24, duration: 0.6 }, "-=0.4")
      .from(".pp-meta", { opacity: 0, y: 16, duration: 0.5 }, "-=0.3");

    gsap.utils.toArray<HTMLElement>(".pp-section").forEach((el) => {
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
      className="bg-[#e7e3de] dark:bg-[#1a1a18] min-h-screen pt-24"
    >
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {/* Header */}
        <PageHeader
          badge="Privasi & Data"
          title="Kebijakan Privasi"
          description="Kami berkomitmen melindungi dan menghormati privasi Anda. Halaman
            ini menjelaskan bagaimana kami menangani informasi pribadi Anda."
          meta="Diperbarui terakhir: 1 Maret 2025"
          backHref="/"
          backLabel="Kembali ke Beranda"
          badgeClassName="pp-badge"
          titleClassName="pp-title"
          descriptionClassName="pp-desc"
          metaClassName="pp-meta"
          backButtonClassName="pp-back"
        />

        {/* Sections */}
        <div>
          <div className="pp-section">
            <DataCollection />
          </div>
          <div className="pp-section">
            <DataUsage />
          </div>
          <div className="pp-section">
            <DataSharing />
          </div>
          <div className="pp-section">
            <UserRights />
          </div>
          <div className="pp-section">
            <CookiePolicy />
          </div>

          {/* Section 06 — Perubahan Kebijakan */}
          <div className="pp-section">
            <SectionBlock number="06" title="Perubahan Kebijakan">
              <p>
                Kami dapat memperbarui kebijakan privasi ini dari waktu ke
                waktu. Perubahan signifikan akan diberitahukan melalui email
                atau notifikasi di platform setidaknya{" "}
                <span className="font-semibold text-[#1a1a18] dark:text-white">
                  7 hari
                </span>{" "}
                sebelum berlaku.
              </p>
              <p>
                Penggunaan platform setelah pembaruan dianggap sebagai
                penerimaan kebijakan baru.
              </p>
            </SectionBlock>

            {/* CTA Box with lime background */}
            <CTABlock
              title="Ada pertanyaan lain?"
              description="Hubungi Tim Privasi Kami. Tim kami siap menjawab pertanyaan
                    seputar data dan privasi Anda di Diansa Digital."
              buttons={[
                {
                  label: "Kirim Email",
                  href: "mailto:privacy@diansadigital.id",
                  icon: Mail01Icon,
                  variant: "primary",
                  external: true,
                },
                {
                  label: "Syarat & Ketentuan",
                  href: "/terms-conditions",
                  icon: ArrowRight01Icon,
                  variant: "secondary",
                },
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
