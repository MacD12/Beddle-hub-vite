export const UnbankedSection = () => {
  return (
    <section className="py-24 px-6" id="stats">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Trusted by Sri Lanka’s tourism ecosystem
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold">
              Over 120 properties trust Beddle Hub
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Hotels, villas, surf camps, restaurants and tour operators rely on Beddle Hub to
              streamline operations and grow revenue. Our numbers speak for themselves.
            </p>
          </div>
          {/* Four statistics showcasing the impact of Beddle Hub */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-3">
              <div className="text-4xl font-bold">120+</div>
              <p className="text-sm">Properties across Sri Lanka run on Beddle Hub</p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-3">
              <div className="text-4xl font-bold">40+</div>
              <p className="text-sm">OTAs integrated via our two‑way channel manager</p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-3">
              <div className="text-4xl font-bold">+12%</div>
              <p className="text-sm">Average ADR lift after switching to Beddle Hub</p>
            </div>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 space-y-3">
              <div className="text-4xl font-bold">99.95%</div>
              <p className="text-sm">Uptime ensuring your business never stops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
