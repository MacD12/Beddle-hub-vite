import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Blog = () => {
  // Placeholder posts – in a real application these would come from a CMS
  const posts = [
    {
      title: "Boosting ADR with dynamic pricing",
      excerpt:
        "Learn how Beddle Hub’s revenue management tools can increase your average daily rate and occupancy.",
      date: "Jun 2025",
    },
    {
      title: "Surf schools: manage sessions & payments",
      excerpt:
        "Discover how surf camps and schools automate scheduling, waivers and instructor payouts.",
      date: "May 2025",
    },
    {
      title: "Building a high‑converting hotel website",
      excerpt:
        "Our tips for creating a website that drives direct bookings and upsells.",
      date: "Apr 2025",
    },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <section className="py-24 px-6 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights and updates from the Beddle Hub team. Stay up to date on product
              launches, best practices and industry trends.
            </p>
          </div>
        </section>
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-5xl grid lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div
                key={post.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{post.excerpt}</p>
                <a href="#" className="text-accent font-medium">Read more →</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;