import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 px-6" id="demo">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-12 lg:p-16 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Ready to modernise your operations?
              </h2>
              <p className="text-lg text-muted-foreground">
                Book a tailored walkthrough. We’ll map the stack for your business and show you how
                Beddle Hub gives your brand a new face—using QR codes, NFC cards, stickers and bands
                to streamline check‑in, payments and experiences. We’re constantly innovating to keep
                your business ahead of the curve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                  <a href="#demo">Book a Demo →</a>
                </Button>
                <Button variant="outline" className="rounded-full px-8" asChild>
                  <a href="mailto:info@beddlehub.com">Contact Sales</a>
                </Button>
              </div>
            </div>
            <div className="bg-accent/10 p-12 lg:p-16 min-h-[300px] flex items-center justify-center">
              <div className="relative w-full max-w-sm aspect-[3/2] bg-accent rounded-2xl shadow-2xl transform rotate-3">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-dark-bg font-bold text-2xl">Beddle Hub</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-12 h-8 bg-dark-bg/20 rounded"></div>
                      ))}
                    </div>
                    <div className="text-dark-bg/80 text-xs">Hospitality OS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
