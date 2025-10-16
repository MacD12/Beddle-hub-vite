import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QnASection, QnAItem } from "@/components/QnASection";
import { CustomSolutionForm } from "@/components/CustomSolutionForm";
import { DemoForm } from "@/components/DemoForm";

// Define the descriptive text for each solution so we can reuse it on
// industry pages.  These descriptions mirror the copy used in the
// SpecialtySection and navigation dropdown.
const solutionDescriptions: Record<string, string> = {
  "Channel Manager":
    "Two‑way inventory & rates across Airbnb, Booking.com, Hostelworld, Agoda and more", 
  "Booking Engine":
    "Zero‑commission direct bookings with coupons, upsells, payment links & abandoned cart nudges",
  "Property & Restaurant":
    "Front desk, housekeeping & billing plus QR menus, POS, KDS, inventory & recipe costing",
  "Surf School & Experiences":
    "Level‑based sessions, waivers, instructor payouts, tours, safaris & yoga scheduling",
  "Smart Restaurant":
    "QR menus, POS, kitchen display and inventory & recipe costing with service charge and tax rules",
  "Staff & HR":
    "Simplify your human resources: shift & HR scheduling, checklists, instructor and affiliate payouts",
  "Revenue Management":
    "Dynamic pricing and forecasting tools to maximise occupancy and optimise profitability",
  "Gift & Promotions":
    "Sell gift cards and create promotional campaigns to engage guests and boost revenue",
  "Tourism Websites":
    "High‑converting websites that integrate seamlessly with our booking engine and channel manager",
  Experiences:
    "Tours, safaris, wellness sessions and activities—all managed through a single platform",
};

// Data for each industry.  Each entry defines the page title, a
// descriptive summary, the solutions most relevant to that industry and
// a list of Q&A items tailored to common questions for that sector.
const industriesData: Record<
  string,
  {
    title: string;
    description: string;
    solutions: string[];
    qna: QnAItem[];
  }
> = {
  hotels: {
    title: "Hotels",
    description:
      "Modernise your hotel operations with real‑time channel management, commission‑free direct bookings and integrated property & restaurant tools.",
    solutions: [
      "Channel Manager",
      "Booking Engine",
      "Property & Restaurant",
      "Smart Restaurant",
      "Staff & HR",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How can Beddle Hub improve hotel operations?",
        answer:
          "Beddle Hub synchronises your rates across all booking channels, powers your direct booking engine and centralises front desk, housekeeping and restaurant POS in one system. This reduces double‑handling, prevents overbookings and improves guest satisfaction.",
      },
      {
        question: "Can we build a customised solution for our hotel?",
        answer:
          "Yes. Beyond our core modules, we can design bespoke integrations and workflows to match your unique property needs—from spa reservations to loyalty programmes.",
      },
    ],
  },
  hostels: {
    title: "Hostels",
    description:
      "Run your hostel more efficiently with simplified bed management, dynamic pricing and direct booking tools tailored for shared accommodations.",
    solutions: [
      "Channel Manager",
      "Booking Engine",
      "Property & Restaurant",
      "Staff & HR",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "Does Beddle Hub support shared dormitories?",
        answer:
          "Our property management tools handle dormitory inventory, allowing you to sell beds individually, manage occupancy and integrate with OTAs that specialise in hostels.",
      },
      {
        question: "How can hostels increase direct bookings?",
        answer:
          "Use our commission‑free booking engine with promo codes and upsells to convert website visitors into guests. We also build engaging hostel websites designed to drive conversions.",
      },
    ],
  },
  "villas-bungalows": {
    title: "Villas & Bungalows",
    description:
      "Delight guests with seamless bookings, multi‑property management and personalised upsells across your villas and bungalows.",
    solutions: [
      "Channel Manager",
      "Booking Engine",
      "Property & Restaurant",
      "Staff & HR",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "Can I manage multiple villas under one account?",
        answer:
          "Yes. Our property management module supports multi‑property setups, enabling you to centralise bookings, housekeeping and reporting across multiple villas or bungalows.",
      },
      {
        question: "What marketing tools are included?",
        answer:
          "You can create promo codes, upsell packages and gift cards, and integrate with your website to maximise direct bookings and repeat guests.",
      },
    ],
  },
  "surf-camps-schools": {
    title: "Surf Camps & Schools",
    description:
      "Manage surf lessons, equipment rentals and accommodation in one place while automating instructor payouts and waivers.",
    solutions: [
      "Surf School & Experiences",
      "Channel Manager",
      "Booking Engine",
      "Property & Restaurant",
      "Staff & HR",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How does the surf school module work?",
        answer:
          "You can schedule classes by level, assign instructors, handle digital waivers and automate payouts. Guests can book lessons alongside accommodation and experiences.",
      },
      {
        question: "Can we sell gear rentals online?",
        answer:
          "Yes. You can list surfboards and equipment in the booking engine so guests can reserve gear along with their stay.",
      },
    ],
  },
  "restaurants-cafes": {
    title: "Restaurants & Cafés",
    description:
      "Digitise your dining experience with QR menus, POS and kitchen display systems integrated with table management and billing.",
    solutions: [
      "Smart Restaurant",
      "Property & Restaurant",
      "Staff & HR",
      "Booking Engine",
      "Gift & Promotions",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "What restaurant features are included?",
        answer:
          "Our Smart Restaurant module offers POS, QR menus, kitchen display, inventory, recipe costing and service charge & tax management—all integrated with guest accounts.",
      },
      {
        question: "Can we handle online reservations?",
        answer:
          "Yes. Guests can book tables through the booking engine, pre‑order meals and pay using the same secure checkout used for accommodation and experiences.",
      },
    ],
  },
  "tour-operators": {
    title: "Tour Operators",
    description:
      "Offer tours, excursions and itineraries with automated availability, pricing and instant booking confirmation.",
    solutions: [
      "Experiences",
      "Booking Engine",
      "Channel Manager",
      "Revenue Management",
      "Gift & Promotions",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How can I manage multiple tours?",
        answer:
          "You can create tour products with capacities, schedules and pricing. Our system automates availability across OTAs and your website.",
      },
      {
        question: "Do you support bundling tours and accommodation?",
        answer:
          "Absolutely. Packages can combine lodging, activities and extras with dynamic pricing and real‑time inventory control.",
      },
    ],
  },
  "adventure-experiences": {
    title: "Adventure & Experiences",
    description:
      "Sell adrenaline‑filled activities, guided hikes and immersive experiences through a unified booking platform.",
    solutions: [
      "Experiences",
      "Booking Engine",
      "Channel Manager",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "Can guests book experiences online?",
        answer:
          "Yes. Each experience can be listed with availability, pricing tiers and add‑ons. Guests can pay online and receive instant confirmation.",
      },
      {
        question: "How do we manage capacity and safety?",
        answer:
          "Our system tracks attendee numbers, assigns guides and enforces waivers and safety checklists. This ensures a smooth and safe adventure for everyone.",
      },
    ],
  },
  "yoga-wellness": {
    title: "Yoga & Wellness",
    description:
      "Promote mindfulness and wellbeing with session scheduling, instructor management and online bookings for classes and retreats.",
    solutions: [
      "Experiences",
      "Booking Engine",
      "Channel Manager",
      "Staff & HR",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "Can we manage classes and retreats?",
        answer:
          "Yes. Schedule classes, limit capacity, accept bookings and manage instructor payouts—all from one dashboard.",
      },
      {
        question: "Do you support membership or subscription models?",
        answer:
          "You can create membership plans and recurring billing using our booking engine and revenue tools.",
      },
    ],
  },
  "ayurveda-clinics": {
    title: "Ayurveda Clinics",
    description:
      "Streamline patient appointments, treatment packages and accommodations with integrated booking and billing tools.",
    solutions: [
      "Booking Engine",
      "Property & Restaurant",
      "Experiences",
      "Staff & HR",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How can we manage treatments and lodging?",
        answer:
          "Assign treatments to rooms, schedule therapists, manage medication inventory and handle billing through a unified interface.",
      },
      {
        question: "Can guests book wellness packages online?",
        answer:
          "Yes. Create customised packages combining treatments, lodging and meals. Guests can select dates and pay online.",
      },
    ],
  },
  "airport-transfers": {
    title: "Airport Transfers",
    description:
      "Coordinate pick‑ups and drop‑offs with real‑time bookings, driver assignments and payment processing.",
    solutions: [
      "Booking Engine",
      "Channel Manager",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "Do you support one‑way and round trips?",
        answer:
          "Yes. Clients can book single or return transfers, select vehicle types and pay online. Drivers receive itineraries and updates instantly.",
      },
      {
        question: "Can we integrate with flight schedules?",
        answer:
          "Our API can connect to flight information systems to adjust timings automatically when flights are delayed or rescheduled.",
      },
    ],
  },
  "car-scooter-rentals": {
    title: "Car & Scooter Rentals",
    description:
      "Manage vehicle inventory, bookings and payments with digital waivers and maintenance tracking.",
    solutions: [
      "Booking Engine",
      "Channel Manager",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How do we track vehicle availability?",
        answer:
          "Real‑time inventory management shows which vehicles are available, out for rental or in maintenance, preventing double bookings.",
      },
      {
        question: "Can renters sign waivers online?",
        answer:
          "Yes. Digital waiver signing is integrated into the booking flow and stored securely for your records.",
      },
    ],
  },
  "safari-camps": {
    title: "Safari Camps",
    description:
      "Synchronise tent inventory, tour schedules and dining operations while offering unforgettable wildlife experiences.",
    solutions: [
      "Channel Manager",
      "Booking Engine",
      "Property & Restaurant",
      "Experiences",
      "Staff & HR",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How can we manage safari tours and lodging?",
        answer:
          "Combine room or tent inventory with tour scheduling. Guests can book both accommodation and guided safaris in one transaction.",
      },
      {
        question: "Do you support online payments for high‑value bookings?",
        answer:
          "Yes. The booking engine supports secure payment methods, instalment plans and payment links for premium packages.",
      },
    ],
  },
  "travel-agencies": {
    title: "Travel Agencies",
    description:
      "Centralise bookings for flights, hotels, tours and transfers with client portals and commission tracking.",
    solutions: [
      "Channel Manager",
      "Booking Engine",
      "Experiences",
      "Revenue Management",
      "Gift & Promotions",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "Can we create packages across multiple suppliers?",
        answer:
          "Yes. Our system lets you bundle flights, hotels and activities while managing supplier contracts and commissions.",
      },
      {
        question: "Do you offer client portals?",
        answer:
          "Travel agents can provide clients with portals to view itineraries, make payments and access travel documents.",
      },
    ],
  },
  "b-bs-homestays": {
    title: "B&Bs & Homestays",
    description:
      "Delight guests with personalised stays, seamless bookings and integrated payment processing across your bed & breakfast or homestay.",
    solutions: [
      "Channel Manager",
      "Booking Engine",
      "Property & Restaurant",
      "Gift & Promotions",
      "Revenue Management",
      "Tourism Websites",
    ],
    qna: [
      {
        question: "How do we handle seasonal rates?",
        answer:
          "Our revenue management tools let you set seasonal pricing, offer discounts and adjust rates based on demand.",
      },
      {
        question: "Can we sell extras like cooking classes?",
        answer:
          "Yes. You can offer add‑ons and experiences within the booking engine, giving guests more reasons to book direct.",
      },
    ],
  },
};

// Helper function to generate a slug from an industry title.  This matches the
// keys used in industriesData and the links in the Industries list.
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

const IndustryDetail = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const data = industriesData[slug];

  if (!data) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32">
          <section className="py-24 px-6 text-center">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Industry not found</h1>
              <p className="text-lg text-muted-foreground">
                We couldn’t find information for this industry. Please check the URL or select another sector.
              </p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">{data.title}</h1>
            <p className="text-lg text-muted-foreground">{data.description}</p>
          </div>
        </section>
        {/* Solutions overview */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
            {data.solutions.map((sol) => (
              <div
                key={sol}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{sol}</h3>
                <p className="text-sm text-muted-foreground">
                  {solutionDescriptions[sol] || "Learn more about this module on our Solutions page."}
                </p>
              </div>
            ))}
          </div>
        </section>
        {/* Demo form tailored to this industry */}
        <DemoForm
          industry={data.title}
          title={`Schedule a demo for ${data.title}`}
          description={`See how our platform works for ${data.title.toLowerCase()}. Share a few details and our team will demonstrate the modules most relevant to your business.`}
        />
        {/* Industry specific FAQ */}
        <QnASection qna={data.qna} />
        {/* Custom solution form */}
        <CustomSolutionForm industry={data.title} />
      </main>
      <Footer />
    </div>
  );
};

export default IndustryDetail;