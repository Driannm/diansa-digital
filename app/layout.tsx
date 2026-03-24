// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Diansa Digital - Undangan Digital Modern & Elegan",
  description:
    "Desain elegan, fitur lengkap, dan siap dibagikan ke siapa saja. Buat undangan impian Anda dengan Diansa Digital.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn(playfair.variable, dmSans.variable)}>
      <body className="min-h-screen bg-[#e7e3de] dark:bg-[#1a1a18] font-body antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}