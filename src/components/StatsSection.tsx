import { Button } from "@/components/ui/button";
export const StatsSection = () => {
  return (
    <section className="py-24 px-6" id="benefits">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Why Beddle Hub
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold">
            Grow revenue &amp; streamline operations
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Revenue focused copy */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Revenue in focus
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">Grow ADR &amp; RevPAR</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dynamic pricing, parity alerts and upsell flows help you grow average daily
              rate and RevPAR while keeping occupancy predictable across channels.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                Rate plans, stop‑sell and min/max stay controls
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                Upsell add‑ons, promo codes and gift cards
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                Analytics for ADR, RevPAR &amp; occupancy
              </li>
            </ul>
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="#demo">See Booking System →</a>
            </Button>
          </div>
          {/* Operations focused copy */}
          <div className="space-y-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Operations without chaos
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold">Synchronise every department</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Keep front desk, kitchen, surf sessions and tours in sync. Reduce fraud, double
              entry and scheduling conflicts.
            </p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                Overbooking protection &amp; mapping wizard
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                KDS &amp; POS for the restaurant floor
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                Instructor &amp; affiliate payouts
              </li>
            </ul>
            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="#smartrestaurant">See Smart Restaurant →</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
