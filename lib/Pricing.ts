import { PricingPlan } from "@/Types/Pricing";

export async function getPricingPlans(): Promise<PricingPlan[]> {
  return [
    {
      name: "Basic",
      price: "0",
      description: "Cocok untuk acara sederhana namun tetap berkesan.",
      features: [
        "1 tema pilihan",
        "Nama & tanggal acara",
        "Link undangan aktif 3 bulan",
        "RSVP online",
        "Tanpa background music",
        "Masa aktif: 1 hari",
      ],
      cta: "Coba Gratis",
      highlighted: false,
      // Tidak ada diskon untuk Basic
    },
    {
      name: "Premium",
      price: "69.000",
      originalPrice: "99.000",     
      discountBadge: "30% OFF",    
      description: "Lengkap untuk momen paling berharga dalam hidupmu.",
      features: [
        "Semua fitur Basic",
        "Background music pilihan",
        "Galeri foto (hingga 20 foto)",
        "Countdown timer",
        "Google Maps terintegrasi",
        "Link aktif selamanya",
        "Revisi 2x gratis",
      ],
      cta: "Pilih Premium",
      highlighted: true,
      badge: "Terpopuler",
    },
    {
      name: "Exclusive",
      price: "99.000",
      originalPrice: "149.000",      
      discountBadge: "HEMAT 50K",    
      description: "Pengalaman undangan digital setara wedding organizer.",
      features: [
        "Semua fitur Premium",
        "Desain custom penuh",
        "Video opening undangan",
        "Unlimited revisi",
        "Priority support 24/7",
        "QR code undangan",
        "Cetak amplop digital",
      ],
      cta: "Pilih Exclusive",
      highlighted: false,
    },
  ];
}