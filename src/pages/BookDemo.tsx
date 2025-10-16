import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { DemoForm } from "@/components/DemoForm";

const BookDemo = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Book a Demo</h1>
            <p className="text-lg text-muted-foreground">
              Experience Beddle Hub in action. Tell us about your business and we'll show you
              how our platform can transform your operations and give your brand a new face.
            </p>
          </div>
        </section>
        {/* Call‑to‑action section */}
        <CTASection />
        {/* Demo request form */}
        <DemoForm />
      </main>
      <Footer />
    </div>
  );
};

export default BookDemo;