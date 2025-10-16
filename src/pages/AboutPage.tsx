import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our mission, our team and how we’re transforming hospitality.
            </p>
          </div>
        </section>
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;