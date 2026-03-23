export interface FAQEntry {
  question: string;
  answer: string;
}

export interface FAQCategoryData {
  title: string;
  items: FAQEntry[];
}

export const faqData: FAQCategoryData[] = [
  {
    title: "Akun & Pendaftaran",
    items: [
      {
        question: "Bagaimana cara membuat akun di Diansa Digital?",
        answer:
          "Klik tombol 'Daftar' di sudut kanan atas halaman utama. Isi formulir dengan nama lengkap, alamat email aktif, dan buat kata sandi yang kuat. Verifikasi email Anda melalui tautan yang kami kirimkan, dan akun siap digunakan.",
      },
      {
        question: "Apakah saya bisa menggunakan satu email untuk beberapa akun?",
        answer:
          "Tidak. Setiap alamat email hanya dapat digunakan untuk satu akun demi keamanan dan kemudahan pemulihan akun. Jika membutuhkan akun tim, pertimbangkan paket Exclusive kami.",
      },
      {
        question: "Bagaimana jika saya lupa kata sandi?",
        answer:
          "Klik 'Lupa Kata Sandi' di halaman login, masukkan email terdaftar, dan kami akan mengirimkan tautan reset yang berlaku 30 menit. Cek folder spam jika email tidak masuk dalam 5 menit.",
      },
    ],
  },
  {
    title: "Paket & Pembayaran",
    items: [
      {
        question: "Metode pembayaran apa saja yang diterima?",
        answer:
          "Kami menerima kartu kredit/debit Visa & Mastercard, transfer bank (BCA, Mandiri, BNI, BRI), dompet digital (GoPay, OVO, DANA, ShopeePay), serta QRIS. Semua transaksi dienkripsi dengan SSL.",
      },
      {
        question: "Apakah ada masa uji coba gratis?",
        answer:
          "Anda bisa melihat demo langsung untuk setiap tema tanpa perlu mendaftar. Untuk mencoba fitur lengkap, tersedia konsultasi gratis dengan tim kami melalui WhatsApp.",
      },
      {
        question: "Bagaimana proses pengembalian dana?",
        answer:
          "Pengembalian dana tersedia dalam 7 hari sejak pembayaran pertama untuk pengguna baru. Ajukan melalui email ke billing@diansadigital.id dengan menyertakan nomor transaksi. Proses memakan waktu 5–14 hari kerja.",
      },
      {
        question: "Bisakah saya upgrade paket setelah memesan?",
        answer:
          "Ya, Anda bisa upgrade kapan saja. Hubungi tim kami via WhatsApp dan kami akan membantu proses upgrade dengan biaya selisih paket saja.",
      },
    ],
  },
  {
    title: "Pembuatan Undangan",
    items: [
      {
        question: "Berapa lama proses pembuatan undangan?",
        answer:
          "Undangan aktif dalam 24 jam setelah data lengkap diterima. Untuk paket Exclusive dengan desain custom, estimasi 2–3 hari kerja.",
      },
      {
        question: "Apakah saya bisa memilih background music sendiri?",
        answer:
          "Ya! Paket Premium dan Exclusive mendukung background music. Anda bisa memilih dari koleksi kami atau mengunggah lagu favorit (format MP3, maks 10MB).",
      },
      {
        question: "Berapa banyak revisi yang diizinkan?",
        answer:
          "Paket Basic: tidak ada revisi. Paket Premium: 2x revisi gratis. Paket Exclusive: unlimited revisi selama masa pengerjaan.",
      },
      {
        question: "Apakah undangan bisa dilihat di semua perangkat?",
        answer:
          "Ya, semua undangan Diansa Digital fully responsive dan dioptimalkan untuk mobile, tablet, dan desktop. Tamu cukup membuka link di browser — tanpa perlu install aplikasi.",
      },
    ],
  },
  {
    title: "Dukungan & Bantuan",
    items: [
      {
        question: "Bagaimana cara menghubungi tim Diansa?",
        answer:
          "Kami bisa dihubungi via WhatsApp (Senin–Sabtu, 08.00–21.00 WIB), email ke support@diansadigital.id, atau DM Instagram @diansa.digital. Respons WhatsApp biasanya dalam 1–2 jam.",
      },
      {
        question: "Apakah link undangan bisa kedaluwarsa?",
        answer:
          "Paket Basic aktif 3 bulan sejak tanggal pembuatan. Paket Premium dan Exclusive aktif selamanya — link tidak akan pernah mati.",
      },
    ],
  },
];