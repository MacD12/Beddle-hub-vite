import { Wallet, Globe, Shield, Users } from "lucide-react";

export const SpecialtySection = () => {
  // Key modules that differentiate Beddle Hub from generic booking systems
  const features = [
    {
      icon: Globe,
      color: "text-green-500",
      title: "Channel Manager",
      description:
        "Two‑way inventory & rates across Airbnb, Booking.com, Hostelworld, Agoda and more"
    },
    {
      icon: Wallet,
      color: "text-blue-500",
      title: "Booking Engine",
      description:
        "Zero‑commission direct bookings with coupons, upsells, payment links & abandoned cart nudges"
    },
    {
      icon: Shield,
      color: "text-orange-500",
      title: "Property & Restaurant",
      description:
        "Front desk, housekeeping & billing plus QR menus, POS, KDS, inventory & recipe costing"
    },
    {
      icon: Users,
      color: "text-purple-500",
      title: "Surf School & Experiences",
      description:
        "Level‑based sessions, waivers, instructor payouts, tours, safaris & yoga scheduling"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background" id="modules">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Built to suit any business
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold">Our modules</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
