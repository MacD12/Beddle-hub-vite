import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// A form allowing businesses to request a custom solution tailored to their industry.
// The optional `industry` prop personalises the heading. This component is
// presentational and does not handle submissions; integrate with your
// preferred backend or form service as needed.
export const CustomSolutionForm = ({ industry }: { industry?: string }) => {
  return (
    <section className="py-24 px-6 bg-background" id="custom-solution-form">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-center">
          Request a custom solution{industry ? ` for ${industry}` : ""}
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12">
          Tell us about your unique requirements and our team will design a bespoke
          solution that fits your business. Whether you’re operating a boutique villa,
          surf camp, restaurant or safari lodge, we’re here to help you modernise and
          grow.
        </p>
        <form className="space-y-6 bg-white dark:bg-gray-900/60 backdrop-blur-sm rounded-3xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="cs-name" className="text-sm font-medium">
                Full name
              </label>
              <Input id="cs-name" type="text" placeholder="Jane Doe" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-email" className="text-sm font-medium">
                Email address
              </label>
              <Input id="cs-email" type="email" placeholder="jane@example.com" required />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="cs-phone" className="text-sm font-medium">
                Phone number
              </label>
              <Input id="cs-phone" type="tel" placeholder="(+94) 123 456 789" />
            </div>
            <div className="space-y-2">
              <label htmlFor="cs-business" className="text-sm font-medium">
                Business type
              </label>
              <Input
                id="cs-business"
                type="text"
                placeholder="Hotel, surf camp, restaurant…"
                defaultValue={industry}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="cs-requirements" className="text-sm font-medium">
              Describe your requirements
            </label>
            <Textarea
              id="cs-requirements"
              placeholder="Tell us what you need, your goals and any specific features or integrations"
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

export default CustomSolutionForm;