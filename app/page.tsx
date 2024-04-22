import Image from "next/image";
import HeroSection from "./_components/home/HeroSection";
import WhyUsSection from "./_components/home/WhyUsSection";
import KeyFeatures from "./_components/home/KeyFeatures";
import ServicesSection from "./_components/home/ServicesSection";
import TestimonialSection from "./_components/home/TestimonialSection";

export default function Home() {
  return (
    <main className="space-y-">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <KeyFeatures />
      <TestimonialSection />
    </main>
  );
}
