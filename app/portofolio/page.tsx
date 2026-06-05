import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatStrip from "@/components/shared/StatStrip";
import CTABlock from "@/components/shared/CTABlock";
import PageHeader from "@/components/shared/PageHeader";
import MasonryGrid from "@/components/Portofolio/MasonryGrid";
import { getPortofolioItems } from "@/components/Portofolio/portofolioData";

export const metadata: Metadata = {
  title: "Portofolio - Karya Undangan Digital Diansa",
  description:
    "Lihat koleksi undangan digital yang telah kami buat untuk lebih dari 1.200 klien di seluruh Indonesia.",
};

export default async function PortofolioPage() {
  const items = await getPortofolioItems();
  const weddingCount = items.filter((i) => i.category === "Pernikahan").length;

  return (
    <div className="bg-[#e7e3de] dark:bg-[#1a1a18] min-h-screen pt-24">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pb-32">
        <PageHeader
          badge="Portofolio"
          title="Karya yang Bercerita"
          description="Setiap undangan adalah karya. Lihat apa yang sudah kami ciptakan bersama klien-klien kami."
          backHref="/"
          backLabel="Kembali ke Beranda"
          badgeClassName="faq-badge"
          titleClassName="faq-title"
          descriptionClassName="faq-desc"
          metaClassName="faq-meta"
          backButtonClassName="faq-back"
        />

        <div className="mt-14">
          <MasonryGrid items={items} />
        </div>

        {/* <StatStrip
          stats={[
            { value: "1.200+", label: "Undangan Dibuat" },
            { value: `${weddingCount * 10}+`, label: "Pasangan Bahagia" },
            { value: "4.9★", label: "Rating Google" },
            { value: "98%", label: "Klien Puas" },
          ]}
          className="mt-16"
        /> */}

        {/* <div className="mt-8">
          <CTABlock
            eyebrow="— Giliran kamu berikutnya"
            title={
              <>
                Buat undangan{" "}
                <em className="not-italic text-white/40">yang tak terlupakan</em>
              </>
            }
            description="Bergabung bersama 1.200+ klien yang sudah mempercayakan momen spesial mereka kepada Diansa Digital."
            actions={[
              { label: "Mulai Pesan Sekarang", href: "/contact", variant: "primary" },
              { label: "Lihat Tema", href: "/tema", variant: "secondary" },
            ]}
          />
        </div> */}
      </main>

      <Footer />
    </div>
  );
}
