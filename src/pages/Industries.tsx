import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { CustomSolutionForm } from "@/components/CustomSolutionForm";

const Industries = () => {
  const industries = [
    "Hotels",
    "Hostels",
    "Villas & Bungalows",
    "Surf Camps & Schools",
    "Restaurants & Cafés",
    "Tour Operators",
    "Adventure & Experiences",
    "Yoga & Wellness",
    "Ayurveda Clinics",
    "Airport Transfers",
    "Car & Scooter Rentals",
    "Safari Camps",
    "Travel Agencies",
    "B&Bs & Homestays",
  ];

  // Convert an industry title into a slug matching the IndustryDetail route
  const slugify = (title: string) =>
    title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "");
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Industries</h1>
            <p className="text-lg text-muted-foreground">
              Built for every tourism business. Beddle Hub adapts to any property with modules and
              workflows tailored to your needs.
            </p>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const slug = slugify(industry);
              return (
                <Link
                  key={industry}
                  to={`/industries/${slug}`}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col gap-3"
                >
                  <h3 className="text-xl font-semibold">{industry}</h3>
                  <p className="text-sm text-muted-foreground">
                    Explore recommended modules, FAQs and request a custom solution.
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
        {/* Allow general custom solution requests from the industries page */}
        <CustomSolutionForm />
      </main>
      <Footer />
    </div>
  );
};

export default Industries;