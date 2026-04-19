// app/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TemaSection from "@/components/TemaSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialSection from "@/components/TestimonialSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import { getPricingPlans } from "@/lib/Pricing";

export default async function Home() {
  const plans = await getPricingPlans();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TemaSection />
        <HowItWorksSection />
        <TestimonialSection />
        <PricingSection plans={plans} />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}