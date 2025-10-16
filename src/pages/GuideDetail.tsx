import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { QnASection, QnAItem } from "@/components/QnASection";
import { DemoForm } from "@/components/DemoForm";

// Detailed how‑to guides for each module.  Each entry includes a title,
// introductory paragraph, a list of step‑by‑step instructions and a Q&A
// tailored to that module.  Feel free to expand or customise these to
// reflect your own training materials.
const guidesData: Record<
  string,
  {
    title: string;
    intro: string;
    steps: string[];
    qna: QnAItem[];
  }
> = {
  "channel-manager": {
    title: "Channel Manager",
    intro:
      "Synchronise your inventory and rates across all online travel agencies (OTAs). Our channel manager prevents double bookings and ensures rate parity everywhere you sell.",
    steps: [
      "Add your OTA credentials for Booking.com, Airbnb, Hostelworld, Agoda and any other channels you use.",
      "Map each room type from your property to the corresponding listing on every channel.",
      "Define your base rates and availability in Beddle Hub. The system will automatically push updates to all channels and pull reservations back into your PMS.",
      "Use stop‑sell and parity rules to control distribution and avoid undercutting your direct channels.",
    ],
    qna: [
      {
        question: "How do I prevent overbookings?",
        answer:
          "By managing your inventory in one place and letting Beddle Hub push updates instantly, you remove the risk of multiple channels selling the same room at the same time.",
      },
      {
        question: "Can I push rate changes to all channels at once?",
        answer:
          "Yes. Adjust your rates in Beddle Hub and they will propagate to all connected channels within minutes.",
      },
    ],
  },
  "booking-engine": {
    title: "Booking Engine",
    intro:
      "Accept commission‑free direct bookings on your website and through social channels. Our booking engine is optimised for conversions and integrates seamlessly with your PMS.",
    steps: [
      "Customise your booking widget’s colours, fonts and copy to match your brand.",
      "Define your rate plans, add promo codes and upsell packages such as breakfast or airport transfers.",
      "Embed the booking engine on your website or link to it from social media and email campaigns.",
      "Offer secure payments via cards, bank transfers or payment links and automate confirmation emails.",
    ],
    qna: [
      {
        question: "Can I collect deposits or full payments?",
        answer:
          "You decide whether to charge a deposit, full payment or pay‑on‑arrival. Our payment gateway supports all three scenarios.",
      },
      {
        question: "How do I recover abandoned bookings?",
        answer:
          "Enable abandoned cart emails that remind guests to complete their bookings and offer incentives to return.",
      },
    ],
  },
  "property-restaurant": {
    title: "Property & Restaurant",
    intro:
      "Manage your front desk, housekeeping and billing alongside your F&B operations. One system for your rooms and restaurants simplifies operations and eliminates errors.",
    steps: [
      "Configure your room types, rates and packages. Assign bookings to specific rooms and manage check‑ins and check‑outs.",
      "Create housekeeping schedules and track room status (clean, dirty, out of order) in real time.",
      "Set up your restaurant menus, pricing, modifiers and taxes. Our POS and kitchen display systems (KDS) keep orders flowing smoothly.",
      "Generate folios that combine room charges and restaurant spend, and accept payments via card, cash or mobile wallet.",
    ],
    qna: [
      {
        question: "Can I split folios between guests?",
        answer:
          "Yes. You can split bills by guest, room or payment method, making it easy for groups to pay separately.",
      },
      {
        question: "Do you support recipe costing?",
        answer:
          "Our inventory module lets you define recipes and track ingredient usage, yielding precise cost of goods sold (COGS) reports.",
      },
    ],
  },
  "smart-restaurant": {
    title: "Smart Restaurant",
    intro:
      "Transform your dining experience with QR menus, POS, kitchen displays and inventory management. Our smart restaurant tools integrate with your PMS and improve efficiency.",
    steps: [
      "Digitise your menus and generate QR codes for table‑side ordering.",
      "Install our tablet‑friendly POS and KDS for streamlined ordering and communication between front‑of‑house and kitchen.",
      "Manage inventory and recipes, track wastage and view real‑time cost reports.",
      "Configure taxes, service charges and tipping rules to comply with your jurisdiction.",
    ],
    qna: [
      {
        question: "Do diners need to download an app?",
        answer:
          "No. Guests scan a QR code and order directly from a mobile‑friendly web page. They can pay via phone or at the counter.",
      },
      {
        question: "Can I integrate take‑away and delivery orders?",
        answer:
          "Yes. Our system supports dine‑in, take‑away and delivery flows with appropriate modifiers and pickup times.",
      },
    ],
  },
  "surf-school-experiences": {
    title: "Surf School & Experiences",
    intro:
      "Manage surf lessons, yoga classes and other experiences from one dashboard. Schedule sessions, assign instructors and collect waivers easily.",
    steps: [
      "Define your classes or tours with times, durations and capacity limits.",
      "Add instructors and assign them to sessions. Automated rosters ensure fair allocation and prevent conflicts.",
      "Collect digital waivers and payments when guests book lessons or experiences.",
      "Track instructor payouts and performance metrics to motivate your team.",
    ],
    qna: [
      {
        question: "Can I set different price tiers for beginners and advanced lessons?",
        answer:
          "Yes. Each class can have multiple pricing tiers and add‑on options such as equipment rental or photo packages.",
      },
      {
        question: "How do I handle cancellations due to bad weather?",
        answer:
          "You can set custom cancellation policies and automatically notify guests of rescheduling options when conditions are unsafe.",
      },
    ],
  },
  "staff-hr": {
    title: "Staff & HR",
    intro:
      "Simplify your human resource operations with scheduling, time tracking and payout management. Empower your team and ensure compliance.",
    steps: [
      "Add staff profiles including roles, contact details and pay rates.",
      "Create shift patterns and assign staff members. Employees can clock in/out via the mobile app or POS.",
      "Use checklists to standardise tasks and track completion, from housekeeping to kitchen prep.",
      "Manage payouts to instructors, guides and affiliate partners with automated calculations and transfer files.",
    ],
    qna: [
      {
        question: "Do staff need separate logins?",
        answer:
          "Each staff member gets their own role‑based account with appropriate permissions, ensuring data security and accountability.",
      },
      {
        question: "Can I export timesheets for payroll?",
        answer:
          "Absolutely. Export timesheets as CSV or connect to your payroll software via our API.",
      },
    ],
  },
  "revenue-management": {
    title: "Revenue Management",
    intro:
      "Optimise pricing and maximise revenue with automated rate recommendations and forecasting tools.",
    steps: [
      "Set up base rates and define seasons or special events.",
      "Enable automated pricing rules based on occupancy, competitor rates and market demand.",
      "Monitor key metrics such as ADR, RevPAR and occupancy in real time.",
      "Review historical performance and adjust strategies using our comprehensive analytics dashboard.",
    ],
    qna: [
      {
        question: "Does Beddle Hub integrate with rate shoppers?",
        answer:
          "Yes. We pull competitor pricing data to inform our recommendations and help you stay competitive.",
      },
      {
        question: "Can I override the recommended rates?",
        answer:
          "You remain in control. Override any recommendation manually or set minimum and maximum thresholds to suit your strategy.",
      },
    ],
  },
  "gift-promotions": {
    title: "Gift & Promotions",
    intro:
      "Engage guests and boost revenue by offering gift cards, vouchers and promotional campaigns.",
    steps: [
      "Create different types of vouchers such as gift cards, dollar value or percentage‑based promotions.",
      "Set redemption rules, expiration dates and eligible products or services.",
      "Promote your offers via email, social media and your website using unique coupon codes.",
      "Track usage, remaining balances and ROI in your dashboard.",
    ],
    qna: [
      {
        question: "Can gift cards be redeemed online?",
        answer:
          "Yes. Guests can enter voucher codes during checkout when booking rooms, activities or dining.",
      },
      {
        question: "How do I prevent fraud?",
        answer:
          "Each voucher has a unique code and balance, and you can restrict redemption to specified services or booking channels.",
      },
    ],
  },
  "tourism-websites": {
    title: "Tourism Websites",
    intro:
      "Elevate your online presence with high‑converting websites that integrate seamlessly with your booking engine and channel manager.",
    steps: [
      "Choose a template or have our team design a bespoke site to match your brand.",
      "Upload high‑quality photos, write compelling copy and highlight your unique selling points.",
      "Embed the booking engine and display live availability and rates on your site.",
      "Optimise for SEO with clean code, fast performance and schema markup to improve search visibility.",
    ],
    qna: [
      {
        question: "Will my website be mobile friendly?",
        answer:
          "Absolutely. All our templates are responsive and designed to look great on any device.",
      },
      {
        question: "Can I integrate third‑party widgets?",
        answer:
          "Yes. Add chat widgets, review badges, maps and other tools via our integration settings or custom code blocks.",
      },
    ],
  },
  experiences: {
    title: "Experiences",
    intro:
      "Offer tours, excursions and add‑on activities alongside lodging. Manage capacity, pricing and bookings from one unified system.",
    steps: [
      "Create your experiences with descriptions, duration, capacity and pricing tiers.",
      "Add optional extras such as meals, equipment hire or transportation.",
      "Set schedules and blackout dates, then publish to your website and OTAs.",
      "Monitor bookings, adjust availability and collect payments all through Beddle Hub.",
    ],
    qna: [
      {
        question: "Can guests book experiences without accommodation?",
        answer:
          "Yes. You can offer standalone experiences or bundle them with lodging and other services.",
      },
      {
        question: "How do I manage guides and resources?",
        answer:
          "Assign guides and vehicles to each experience, and use our calendar view to avoid conflicts and over‑allocations.",
      },
    ],
  },
};

// Convert a module title into a URL slug.  We mirror the keys above by
// lowercasing, replacing ampersands with 'and', removing punctuation and
// joining with hyphens.
function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
}

const GuideDetail = () => {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const data = guidesData[slug];

  if (!data) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32">
          <section className="py-24 px-6 text-center">
            <div className="container mx-auto max-w-4xl">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">Guide not found</h1>
              <p className="text-lg text-muted-foreground">
                We couldn’t find a guide for this topic. Please check the URL or select another
                module.
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Using {data.title}</h1>
            <p className="text-lg text-muted-foreground">{data.intro}</p>
          </div>
        </section>
        {/* Step by step instructions */}
        <section className="py-12 px-6 bg-background">
          <div className="container mx-auto max-w-5xl space-y-8">
            {data.steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold">
                    {index + 1}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Q&A section for this guide */}
        <QnASection qna={data.qna} />
        {/* Encourage the user to see the solution in action */}
        <DemoForm
          title={`See ${data.title} in action`}
          description={`Want a live walkthrough of our ${data.title.toLowerCase()} tools? Request a personalised demo and discover how it streamlines your business.`}
        />
      </main>
      <Footer />
    </div>
  );
};

export default GuideDetail;