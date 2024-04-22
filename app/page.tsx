import Image from "next/image";
import HeroSection from "./_components/home/HeroSection";
import WhyUsSection from "./_components/home/WhyUsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyUsSection />
    </main>
  );
}
