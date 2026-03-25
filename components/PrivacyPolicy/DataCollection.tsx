import SectionBlock from "@/components/shared/SectionBlock";

const items = [
  "Nama lengkap, alamat email, dan nomor telepon saat pendaftaran akun",
  "Informasi pembayaran yang diproses melalui gateway pembayaran terenkripsi",
  "Data penggunaan seperti halaman yang dikunjungi, waktu kunjungan, dan tindakan yang dilakukan",
  "Informasi perangkat seperti jenis browser, sistem operasi, dan alamat IP",
  "Cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman pengguna",
];

export default function DataCollection() {
  return (
    <SectionBlock number="01" title="Informasi yang Kami Kumpulkan">
      <p>
        Kami mengumpulkan informasi yang Anda berikan secara langsung, informasi yang
        dikumpulkan otomatis saat menggunakan layanan kami, serta informasi dari pihak ketiga.
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
    </SectionBlock>
  );
}