import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[864px] py-24 px-6 text-dark-fg flex items-center"
      style={{
        backgroundImage: "url('/about-dark.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay to darken the background image for better contrast.  Reduce opacity slightly
         (from 60% to 55%) to make the image more visible. */}
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="relative ml-[10%] max-w-4xl">
        <div className="space-y-6">
          <p className="text-sm font-medium text-white/70 uppercase tracking-wider">Get to know us</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">About Beddle Hub</h2>
          <p className="text-lg text-white/80 leading-relaxed">Beddle Hub is the luxury‑grade hospitality OS—uniting reservations, property & restaurant operations, and guest experience into one beautiful, effortless system.</p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-white/70">Channel Manager, PMS, POS & Booking Engine — perfectly integrated</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-white/70">Automation that feels human: payments, invoices, smart pricing, and ops</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
              <p className="text-white/70">Design that converts: premium websites & experiences marketplace built‑in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
