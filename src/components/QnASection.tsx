import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

// Frequently asked questions about Beddle Hub's products and services. This
// component renders an accessible accordion with multiple collapsible items.
export interface QnAItem {
  question: string;
  answer: string;
}

// Provide a default set of frequently asked questions.  When a `qna` prop
// is passed, the component will render those items instead.  Otherwise,
// it falls back to these defaults.
const defaultQna: QnAItem[] = [
  {
    question: "What types of businesses can use Beddle Hub?",
    answer:
      "Beddle Hub is built for every tourism business—from boutique hotels and villas to surf camps, hostels, restaurants, safari camps and yoga retreats. The platform adapts to your size and workflow so you can run operations smoothly and give guests a seamless experience.",
  },
  {
    question: "What is the Channel Manager?",
    answer:
      "Our Channel Manager syncs your rates and inventory across all major online travel agencies (OTAs) and partners—Airbnb, Booking.com, Hostelworld, Agoda, Expedia and more. It prevents overbookings and saves hours of manual work by automating updates in real time.",
  },
  {
    question: "How does the Booking Engine work?",
    answer:
      "The booking engine plugs into your website and converts visitors into guests. It lets you accept online payments, offer promo codes, sell add‑ons and upsells, send payment links and recover abandoned carts. There are no commissions, so every direct booking boosts your revenue.",
  },
  {
    question: "Can Beddle Hub manage restaurant and bar operations?",
    answer:
      "Yes. Our Property & Restaurant module includes a point‑of‑sale (POS) system, QR menus, kitchen display system (KDS), inventory and recipe costing. It’s fully integrated with your rooms and guest accounts so you can charge to rooms, split bills and manage tables easily.",
  },
  {
    question: "Does Beddle Hub support surf schools and experiences?",
    answer:
      "Absolutely. The Surf School & Experiences module schedules level‑based lessons, assigns instructors and handles payouts, waivers and equipment. It also manages tours, safaris, yoga classes and any other activities you offer, allowing guests to book everything in one place.",
  },
  {
    question: "Do you build websites?",
    answer:
      "Yes. We design and develop high‑converting websites for tourism businesses. Your new website will integrate seamlessly with our booking engine and showcase your brand to drive more direct bookings and experiences.",
  },
  {
    question: "Where does Beddle Hub operate?",
    answer:
      "Beddle Hub currently serves properties across Sri Lanka and operates in Australia and Singapore. No matter where you’re located, our platform scales with your business as we expand globally.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "We offer a no‑obligation free trial with full access to all modules. Book a demo and our team will configure a trial tailored to your business so you can experience the platform’s power firsthand.",
  },
];

export const QnASection = ({ qna }: { qna?: QnAItem[] }) => {
  const items = qna ?? defaultQna;
  return (
    <section className="py-24 px-6 bg-background" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="border rounded-2xl divide-y divide-border overflow-hidden">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger className="px-6 py-4 bg-white dark:bg-gray-900/70 text-left text-base font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-white/70 dark:bg-gray-900/50 text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default QnASection;