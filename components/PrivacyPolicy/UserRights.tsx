import SectionBlock from "@/components/shared/SectionBlock";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const rights = [
  {
    label: "Akses",
    desc: "Meminta salinan data pribadi yang kami simpan tentang Anda.",
  },
  {
    label: "Koreksi",
    desc: "Memperbarui atau memperbaiki informasi yang tidak akurat.",
  },
  {
    label: "Penghapusan",
    desc: "Meminta penghapusan data Anda dalam kondisi tertentu.",
  },
  {
    label: "Pembatasan",
    desc: "Membatasi pemrosesan data Anda dalam situasi tertentu.",
  },
  {
    label: "Portabilitas",
    desc: "Menerima data Anda dalam format yang dapat dibaca mesin.",
  },
  {
    label: "Keberatan",
    desc: "Menolak pemrosesan data untuk tujuan pemasaran langsung.",
  },
];

export default function UserRights() {
  return (
    <SectionBlock number="04" title="Hak-Hak Anda">
      <p>
        Sesuai dengan peraturan perlindungan data yang berlaku, Anda memiliki
        hak-hak berikut terkait data pribadi Anda:
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 !mt-2">
        {rights.map((right) => (
          <li
            key={right.label}
            className="bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/10 rounded-xl p-4 flex items-start gap-3"
          >
            <span className="text-sm">
              <strong className="text-[#1a1a18] dark:text-white font-semibold block mb-0.5">
                {right.label}
              </strong>
              <span className="text-[#6b6860] dark:text-gray-400">
                {right.desc}
              </span>
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
          Untuk menggunakan hak-hak ini, hubungi kami di{" "}
          <a
            href="mailto:privacy@diansadigital.id"
            className="font-semibold underline underline-offset-2 decoration-[#1a1a18]/30 dark:decoration-white/30 hover:decoration-[#1a1a18] dark:hover:decoration-white transition-all"
          >
            privacy@diansadigital.id
          </a>
          . Kami akan merespons dalam{" "}
          <span className="font-semibold">30 hari kerja</span>.
        </p>
      </div>
    </SectionBlock>
  );
}
