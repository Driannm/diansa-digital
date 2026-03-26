import SectionBlock from "@/components/shared/SectionBlock";

const items = [
  { label: "Data Akurat", desc: "Pastikan seluruh informasi yang Anda berikan saat pendaftaran adalah benar, lengkap, dan terkini." },
  { label: "Keamanan", desc: "Anda bertanggung jawab untuk menjaga kerahasiaan kata sandi serta memperbaruinya apabila terdapat indikasi kebocoran." },
  { label: "Laporan", desc: "Segera laporkan kepada kami apabila Anda mengetahui atau mencurigai adanya akses tidak sah terhadap akun Anda." },
  { label: "Satu Akun", desc: "Setiap pengguna hanya diperkenankan memiliki satu akun dan dilarang membuat akun duplikat." },
  { label: "Non-transferable", desc: "Akun bersifat pribadi dan tidak dapat dialihkan atau dipindahtangankan kepada pihak lain." },
];

export default function AccountResponsibility() {
  return (
    <SectionBlock number="02" title="Akun Pengguna">
      <p>
        Anda bertanggung jawab sepenuhnya atas keamanan akun serta seluruh aktivitas
        yang terjadi melalui akun tersebut.
      </p>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.label} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d4f04a] shrink-0" />
            <span className="text-sm text-[#6b6860] dark:text-gray-400">
              <strong className="text-[#1a1a18] font-semibold dark:text-gray-400">{item.label}:</strong>{" "}
              {item.desc}
            </span>
          </li>
        ))}
      </ul>

      <p>
        Kami berhak untuk menangguhkan atau menghentikan akses akun apabila
        ditemukan pelanggaran terhadap ketentuan ini, dengan atau tanpa
        pemberitahuan sebelumnya.
      </p>
    </SectionBlock>
  );
}