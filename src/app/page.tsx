import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PlatformsSection } from "@/components/PlatformsSection";
import { CTASection } from "@/components/CTASection";
import { DarkStats } from "@/components/DarkStats";
import { DarkCaseStudiesSection } from "@/components/DarkCaseStudiesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <DarkStats />
      <ServicesSection />
      <DarkCaseStudiesSection />
      <PlatformsSection />
      <CTASection />
    </>
  );
}
