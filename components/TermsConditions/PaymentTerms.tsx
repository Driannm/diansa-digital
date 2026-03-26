import SectionBlock from "@/components/shared/SectionBlock";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const paymentItems = [
  {
    label: "Penagihan",
    desc: "Biaya berlangganan dikenakan di muka pada setiap periode penagihan.",
  },
  {
    label: "Perpanjangan",
    desc: "Langganan akan diperpanjang secara otomatis kecuali dibatalkan paling lambat 24 jam sebelum periode berikutnya.",
  },
  {
    label: "Refund",
    desc: "Pengembalian dana tersedia dalam waktu 7 hari sejak pembayaran pertama, khusus bagi pengguna baru.",
  },
  {
    label: "Perubahan Harga",
    desc: "Setiap perubahan harga akan diberitahukan sekurang-kurangnya 30 hari sebelum diberlakukan.",
  },
];

export default function PaymentTerms() {
  return (
    <SectionBlock number="04" title="Pembayaran & Pengembalian Dana">
      <p>
        Seluruh harga yang tercantum telah termasuk pajak yang berlaku di
        Indonesia, kecuali dinyatakan lain.
      </p>

      {/* 2-col grid — konsisten dengan TemaSection card grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 !mt-6">
        {paymentItems.map((item) => (
          <li
            key={item.label}
            className="bg-white/60 dark:bg-white/10 border border-[#1a1a18]/8 rounded-xl p-4 flex items-start gap-3"
          >
            <span className="text-sm">
              <strong className="text-[#1a1a18] dark:text-white font-semibold block mb-0.5">
                {item.label}
              </strong>
              <span className="text-[#6b6860] dark:text-gray-400">{item.desc}</span>
            </span>
          </li>
        ))}
      </ul>

      {/* Info note — mirip hero-trust strip */}
      <div className="flex items-start gap-4 bg-[#d4f04a]/50 dark:bg-[#d4f04a]/5 border border-[#d4f04a]/30 dark:border-[#d4f04a]/20 rounded-2xl px-6 py-5">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={20}
          className="text-[#1a1a18] dark:text-white shrink-0 mt-0.5"
        />
        <p className="text-sm text-[#1a1a18] dark:text-gray-200 leading-relaxed">
          Pengembalian dana akan diproses dalam waktu{" "}
          <span className="font-semibold">5–14 hari kerja</span>, tergantung
          pada metode pembayaran yang digunakan.
        </p>
      </div>
    </SectionBlock>
  );
}