import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SpecialtySection } from "@/components/SpecialtySection";
import { QnASection } from "@/components/QnASection";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Products</h1>
            <p className="text-lg text-muted-foreground">
              Discover our suite of products built to give your business a new face. From
              channel management and booking engines to smart restaurant POS and surf school
              scheduling, Beddle Hub adapts to any property and includes high‑converting
              websites for your brand.
            </p>
          </div>
        </section>
        <SpecialtySection />
        {/* Frequently asked questions about our products */}
        <QnASection />
      </main>
      <Footer />
    </div>
  );
};

export default Products;