import SectionBlock from "@/components/shared/SectionBlock";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function UserObligations() {
  return (
    <SectionBlock number="01" title="Penerimaan Ketentuan">
      <p>
        Dengan mengakses dan/atau menggunakan platform Diansa Digital, Anda
        menyatakan bahwa Anda telah membaca, memahami, serta menyetujui seluruh
        syarat dan ketentuan yang berlaku. Apabila Anda tidak menyetujui
        ketentuan ini, Anda disarankan untuk tidak melanjutkan penggunaan
        layanan kami.
      </p>

      {/* Highlight box — konsisten dengan accent lime Diansa */}
      <div className="flex items-start gap-4 bg-[#d4f04a]/50 dark:bg-[#d4f04a]/5 border border-[#d4f04a]/30 dark:border-[#d4f04a]/20 rounded-2xl px-6 py-5">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={20}
          className="text-[#1a1a18] dark:text-white shrink-0 mt-0.5"
        />
        <p className="text-sm text-[#1a1a18] dark:text-gray-200 leading-relaxed">
          Ketentuan ini berlaku bagi seluruh pengguna, termasuk namun tidak
          terbatas pada pengunjung, pengguna terdaftar, serta pelanggan
          berbayar. Untuk menggunakan layanan ini, Anda harus berusia minimal{" "}
          <span className="font-semibold">17 tahun</span> atau telah memperoleh
          persetujuan dari orang tua atau wali yang sah.
        </p>
      </div>
    </SectionBlock>
  );
}