export const NAKAHubsSection = () => {
  return (
    <section className="py-24 px-6" id="industries">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Built for every tourism business
            </p>
            <h2 className="text-5xl lg:text-6xl font-bold">Industries we serve</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From boutique villas and surf camps to restaurants, cafés and safari lodges,
              Beddle Hub provides recommended modules and workflows for your specific
              property type.
            </p>
          </div>
          {/*
            Decorative panel illustrating the diversity of tourism
            businesses served.  We replace the previous placeholder
            shape with a 2×2 grid of emoji cards.  Each card uses a
            friendly emoji to represent a core industry (hotels, surf
            camps, restaurants and experiences) and a label beneath.
          */}
          <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden p-8">
            <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
              {/* Hotels */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-accent/10 p-4">
                <span className="text-4xl">🏨</span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">Hotels</p>
              </div>
              {/* Surf Camps */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-accent/10 p-4">
                <span className="text-4xl">🏄‍♂️</span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">Surf Camps</p>
              </div>
              {/* Restaurants */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-accent/10 p-4">
                <span className="text-4xl">🍽️</span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">Restaurants</p>
              </div>
              {/* Experiences */}
              <div className="flex flex-col items-center justify-center rounded-xl bg-accent/10 p-4">
                <span className="text-4xl">🏝️</span>
                <p className="mt-2 text-sm font-medium text-muted-foreground">Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
