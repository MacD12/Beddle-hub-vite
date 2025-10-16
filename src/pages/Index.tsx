import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PartnersScroll } from "@/components/PartnersScroll";
import { UnbankedSection } from "@/components/UnbankedSection";
import { SpecialtySection } from "@/components/SpecialtySection";
import { NAKAHubsSection } from "@/components/NAKAHubsSection";
import { DocumentarySection } from "@/components/DocumentarySection";
import { StatsSection } from "@/components/StatsSection";
import { CardIssuingSection } from "@/components/CardIssuingSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <PartnersScroll />
        <UnbankedSection />
        <SpecialtySection />
        <NAKAHubsSection />
        <DocumentarySection />
        <StatsSection />
        <CardIssuingSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
