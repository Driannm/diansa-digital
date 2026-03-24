// app/providers.tsx
"use client";

import { useLenis } from "@/hooks/useLenis";
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  useLenis();
  return (
    <>
      <ThemeProvider
        attribute="class" 
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </>
  );
}
