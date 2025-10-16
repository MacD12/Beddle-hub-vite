import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";

const Resources = () => {
  // List of guides available.  Each entry corresponds to a module with a
  // dedicated how‑to page.  The slug should match the keys in guidesData.
  const guides = [
    {
      slug: "channel-manager",
      title: "Channel Manager",
      description: "Keep your inventory in sync across OTAs and avoid overbookings.",
    },
    {
      slug: "booking-engine",
      title: "Booking Engine",
      description: "Set up commission‑free direct bookings with upsells and payment links.",
    },
    {
      slug: "property-restaurant",
      title: "Property & Restaurant",
      description: "Unify your PMS with F&B operations for seamless guest billing.",
    },
    {
      slug: "smart-restaurant",
      title: "Smart Restaurant",
      description: "Digitise your dining experience with QR menus, POS and inventory tools.",
    },
    {
      slug: "surf-school-experiences",
      title: "Surf School & Experiences",
      description: "Manage classes, tours and instructor payouts all in one dashboard.",
    },
    {
      slug: "staff-hr",
      title: "Staff & HR",
      description: "Schedule shifts, track time and handle payouts for your team.",
    },
    {
      slug: "revenue-management",
      title: "Revenue Management",
      description: "Automate pricing and forecasting to maximise occupancy and ADR.",
    },
    {
      slug: "gift-promotions",
      title: "Gift & Promotions",
      description: "Create vouchers, coupons and packages to engage your guests.",
    },
    {
      slug: "tourism-websites",
      title: "Tourism Websites",
      description: "Build a high‑converting website integrated with your booking engine.",
    },
    {
      slug: "experiences",
      title: "Experiences",
      description: "Sell tours, excursions and add‑ons alongside lodging.",
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Resources</h1>
            <p className="text-lg text-muted-foreground">
              Guides, tutorials and how‑tos to help you make the most of Beddle Hub.
            </p>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                to={`/resources/${guide.slug}`}
                className="block bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{guide.title}</h3>
                <p className="text-sm text-muted-foreground">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;