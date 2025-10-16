import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      features: [
        "Access to core modules",
        "Up to 2 properties",
        "Basic support",
      ],
    },
    {
      name: "Growth",
      price: "$49/mo",
      features: [
        "All Starter features",
        "Unlimited properties",
        "Advanced analytics",
        "Priority support",
      ],
    },
    {
      name: "Pro",
      price: "Custom",
      features: [
        "All Growth features",
        "White‑label websites",
        "Dedicated account manager",
        "Custom integrations",
      ],
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Pricing</h1>
            <p className="text-lg text-muted-foreground">
              Flexible plans designed to fit every business. Start for free and scale as
              your operations grow. Contact us for custom packages and enterprise needs.
            </p>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl grid lg:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col items-center"
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="text-4xl font-extrabold mb-6">{plan.price}</div>
                <ul className="space-y-3 text-sm text-muted-foreground mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                  <a href="/book-demo">Get Started →</a>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;