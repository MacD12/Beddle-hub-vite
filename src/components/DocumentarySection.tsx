import { Button } from "@/components/ui/button";

export const DocumentarySection = () => {
  return (
    <section className="py-24 px-6 bg-dark-bg text-dark-fg" id="stories">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video/graphic placeholder */}
          <div className="relative aspect-video bg-muted/10 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full border-4 border-white/50 flex items-center justify-center mb-4 mx-auto">
                  <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                </div>
                <p className="text-sm text-white/70">Watch Case Study</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-sm font-medium text-white/70 uppercase tracking-wider">
              Customer stories
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">
              Real results, fast
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              See how surf camps, boutique villas and beach hotels boosted revenue and
              eliminated overbookings after adopting Beddle Hub. Our case studies
              highlight measurable impacts like ADR lifts, direct bookings and reduced
              operational chaos.
            </p>
            <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90 px-8" asChild>
              <a href="#blog">Read more →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
