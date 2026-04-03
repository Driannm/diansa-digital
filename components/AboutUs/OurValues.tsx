import SectionBlock from "@/components/shared/SectionBlock";

const values = [
  {
    number: "A",
    title: "Kesederhanaan di Atas Segalanya",
    desc: "Keanggunan sejati bukan tentang menambahkan lebih banyak, tapi mengurangi yang tidak perlu. Setiap fitur melewati filter ketat: apakah ini benar-benar dibutuhkan?",
  },
  {
    number: "B",
    title: "Transparansi Tanpa Kompromi",
    desc: "Tidak ada biaya tersembunyi, tidak ada bahasa legalese yang membingungkan. Kami berbicara lurus dan mengharapkan hal yang sama dari pengguna kami.",
  },
  {
    number: "C",
    title: "Empati sebagai Fondasi",
    desc: "Setiap keputusan produk dimulai dengan bertanya: bagaimana perasaan pengguna saat menggunakan ini? Kami mendengar, bukan hanya mendengarkan.",
  },
  {
    number: "D",
    title: "Pertumbuhan yang Bertanggung Jawab",
    desc: "Kami ingin tumbuh besar, tapi bukan dengan mengorbankan nilai-nilai yang membawa kami sejauh ini. Pertumbuhan yang baik membawa semua pihak maju.",
  },
];

export default function OurValues() {
  return (
    <SectionBlock number="02" title="Nilai-Nilai Kami">
      {/* Grid 2 kolom — konsisten dengan TemaSection grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 !mt-2">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-white/60 dark:bg-white/10 border border-[#1a1a18]/8 rounded-xl p-6 hover:border-[#1a1a18]/16 hover:bg-white/80 transition-all"
          >
            {/* Lime dot badge — konsisten dengan FAQCategory & bullet list */}
            <div className="w-8 h-8 rounded-xl bg-[#d4f04a]/30 border border-[#d4f04a]/50 flex items-center justify-center mb-4">
              <span className="font-display text-sm font-bold text-[#1a1a18]">
                {v.number}
              </span>
            </div>
            <h3 className="font-display text-base font-semibold text-[#1a1a18] dark:text-white mb-2 leading-snug">
              {v.title}
            </h3>
            <p className="text-sm text-[#6b6860] dark:text-gray-400 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </SectionBlock>
  );
}