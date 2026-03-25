import SectionBlock from "@/components/shared/SectionBlock";

const items = [
  {
    label: "Mitra Layanan",
    desc: "Penyedia layanan terpercaya yang membantu operasional platform kami, terikat perjanjian kerahasiaan yang ketat.",
  },
  {
    label: "Kepatuhan Hukum",
    desc: "Jika diwajibkan oleh hukum, peraturan, atau perintah pengadilan yang berlaku.",
  },
  {
    label: "Perlindungan Hak",
    desc: "Untuk melindungi hak, properti, atau keselamatan perusahaan dan pengguna kami.",
  },
  {
    label: "Persetujuan Anda",
    desc: "Dalam situasi lain hanya dengan persetujuan eksplisit dari Anda.",
  },
];

export default function DataSharing() {
  return (
    <SectionBlock number="03" title="Berbagi Informasi">
      <p>
        Kami dapat berbagi informasi Anda hanya dalam situasi terbatas berikut:
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 !mt-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl p-4 flex items-start gap-3"
          >
            <span className="text-sm">
              <strong className="text-[#1a1a18] dark:text-white font-semibold block mb-0.5">
                {item.label}
              </strong>
              <span className="text-[#6b6860] dark:text-gray-400">
                {item.desc}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </SectionBlock>
  );
}