import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// A simple form for requesting a personalised demo. This form is purely
// presentational—it does not handle submission. It can be wired up to
// whatever backend or form service you choose.
/**
 * A form for requesting a personalised demo of Beddle Hub.  You can pass an
 * optional `industry` to customise the heading and default business type, as
 * well as override the default heading and description.  This component is
 * presentational; integrate it with your preferred form handler as needed.
 */
export const DemoForm = ({
  industry,
  title,
  description,
}: {
  industry?: string;
  title?: string;
  description?: string;
}) => {
  const heading =
    title ||
    `Request a personalised demo${industry ? ` for ${industry}` : ""}`;
  const intro =
    description ||
    "Tell us about your business and our team will reach out with a custom walkthrough tailored to your needs. We’ll show you how Beddle Hub adapts to any tourism business—from boutique hotels and surf camps to restaurants and safari tours.";
  return (
    <section className="py-24 px-6 bg-background" id="demo-form">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">{heading}</h2>
        <p className="text-lg text-muted-foreground text-center mb-12">{intro}</p>
        <form className="space-y-6 bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="demo-name" className="text-sm font-medium">
                Full name
              </label>
              <Input id="demo-name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-email" className="text-sm font-medium">
                Email address
              </label>
              <Input id="demo-email" type="email" placeholder="jane@example.com" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="demo-phone" className="text-sm font-medium">
                Phone number
              </label>
              <Input id="demo-phone" type="tel" placeholder="(+94) 123 456 789" />
            </div>
            <div className="space-y-2">
              <label htmlFor="demo-business" className="text-sm font-medium">
                Business type
              </label>
              <Input
                id="demo-business"
                type="text"
                placeholder="Hotel, surf camp, restaurant…"
                defaultValue={industry}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="demo-message" className="text-sm font-medium">
              Additional details
            </label>
            <Textarea
              id="demo-message"
              placeholder="Tell us about your property, goals or any specific requirements"
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full rounded-full text-base">
            Submit request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default DemoForm;