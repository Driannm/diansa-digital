import SectionBlock from "@/components/shared/SectionBlock";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const items = [
  "Memproses transaksi dan mengirimkan notifikasi terkait akun Anda",
  "Memberikan dukungan pelanggan dan merespons pertanyaan Anda",
  "Mengirimkan pembaruan produk, penawaran promosi, dan konten relevan (dengan persetujuan Anda)",
  "Menganalisis pola penggunaan untuk meningkatkan fitur dan kinerja platform",
  "Mendeteksi, mencegah, dan menangani aktivitas penipuan atau penyalahgunaan",
  "Mematuhi kewajiban hukum yang berlaku di Indonesia",
];

export default function DataUsage() {
  return (
    <SectionBlock number="02" title="Cara Kami Menggunakan Informasi">
      <p>
        Informasi yang dikumpulkan digunakan semata-mata untuk memberikan,
        memelihara, dan meningkatkan layanan kami kepada Anda.
      </p>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d4f04a] shrink-0" />
            <span className="text-sm text-[#6b6860] dark:text-gray-400">
              {item}
            </span>
          </li>
        ))}
      </ul>

      <div className="flex items-start gap-4 bg-[#d4f04a]/10 dark:bg-[#d4f04a]/5 border border-[#d4f04a]/30 dark:border-[#d4f04a]/20 rounded-2xl px-6 py-5">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={20}
          className="text-[#1a1a18] dark:text-white shrink-0 mt-0.5"
        />
        <p className="text-sm text-[#1a1a18] dark:text-gray-200 leading-relaxed">
          Kami <span className="font-semibold">tidak pernah menjual</span> data
          pribadi Anda kepada pihak ketiga untuk tujuan pemasaran. Privasi Anda
          adalah prioritas utama kami.
        </p>
      </div>
    </SectionBlock>
  );
}
