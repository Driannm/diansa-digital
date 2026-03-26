import SectionBlock from "@/components/shared/SectionBlock";

const items = [
  "Kami tidak menjamin bahwa layanan akan selalu tersedia tanpa gangguan, bebas dari kesalahan, atau sepenuhnya aman.",
  "Total tanggung jawab kami atas segala klaim tidak akan melebihi jumlah yang telah Anda bayarkan dalam 12 bulan terakhir.",
  "Kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, atau konsekuensial yang timbul dari penggunaan layanan.",
];

export default function Liability() {
  return (
    <SectionBlock number="05" title="Batasan Tanggung Jawab">
      <p>
        Layanan Diansa Digital disediakan &ldquo;sebagaimana adanya&rdquo; tanpa jaminan
        dalam bentuk apa pun, baik tersurat maupun tersirat.
      </p>

      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#d4f04a] shrink-0" />
            <span className="text-sm text-[#6b6860] dark:text-gray-400">{item}</span>
          </li>
        ))}
      </ul>

      <p>
        Dalam yurisdiksi tertentu, pengecualian atau pembatasan tanggung jawab
        mungkin tidak diperkenankan, sehingga sebagian dari ketentuan di atas
        dapat tidak berlaku bagi Anda.
      </p>
    </SectionBlock>
  );
}