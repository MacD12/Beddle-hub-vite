import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6" id="home">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Headline emphasises the core value proposition for Beddle Hub */}
            <h1 className="text-6xl lg:text-7xl font-light leading-tight">
              The all‑in‑one hospitality OS
            </h1>
            <p className="mt-4 text-2xl font-bold text-foreground max-w-xl">
              Operate smarter on a white‑glove platform that adapts to any business.
            </p>
            {/* Supporting copy speaks directly to the hospitality audience */}
            <p className="text-lg text-muted-foreground max-w-xl">
              Beddle Hub is the all‑in‑one hospitality OS: channel manager, booking engine,
              property management, surf school, smart restaurant and experiences —
              everything you need to run and scale your property.
            </p>
            {/* Primary call to action */}
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="#demo">Book a Demo →</a>
            </Button>
          </div>

          {/* Illustrative card showcasing sample modules */}
          <div className="relative">
            <div className="bg-muted rounded-3xl p-8 shadow-lg">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <button className="text-muted-foreground hover:text-foreground">←</button>
                  <h3 className="text-sm font-medium">Module Overview</h3>
                </div>
                <div className="space-y-6">
                  {/* First feature item */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Channel Manager</h4>
                      <p className="text-xs text-muted-foreground">
                        Two‑way inventory and rate sync across Airbnb, Booking.com, Hostelworld,
                        Agoda and more.
                      </p>
                    </div>
                  </div>
                  {/* Second feature item */}
                  <div className="border border-border rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">+</div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Booking Engine</h5>
                        <p className="text-xs text-muted-foreground">
                          Zero‑commission direct bookings with promos, upsells and payment links.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Third feature item */}
                  <div className="border border-border rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className="text-2xl">⊕</div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Smart Restaurant</h5>
                        <p className="text-xs text-muted-foreground">
                          QR menus, POS, KDS, inventory &amp; recipe costing.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Grid of placeholders representing other modules */}
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square bg-muted rounded-lg"></div>
                    ))}
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
