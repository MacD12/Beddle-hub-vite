import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpecialtySection } from "@/components/SpecialtySection";
import { QnASection } from "@/components/QnASection";

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Solutions</h1>
            <p className="text-lg text-muted-foreground">
              A customisable hospitality platform designed to suit any business – from hotels and
              surf camps to restaurants and tour operators. Explore our modules and see how they
              come together to streamline operations and boost revenue.
            </p>
          </div>
        </section>
        {/* Reuse the modules section to showcase solutions */}
        <SpecialtySection />
        {/* Q&A section tailored to our solutions */}
        <QnASection />
      </main>
      <Footer />
    </div>
  );
};

export default Solutions;