export const CardIssuingSection = () => {
  return (
    <section className="py-24 px-6" id="smartrestaurant">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Operations modules
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold">Smart Restaurant &amp; Staff</h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Smart restaurant card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent/80 p-8 text-dark-bg">
            <div className="relative z-10 space-y-4">
              <h3 className="text-3xl font-bold">Smart Restaurant</h3>
              <p className="text-dark-bg/80">
                QR menus, POS, kitchen display and inventory &amp; recipe costing with
                service charge and tax rules.
              </p>
            </div>
          </div>
          {/* Staff & HR card */}
          <div className="bg-muted rounded-2xl p-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold">Staff &amp; HR</h3>
              <p className="text-muted-foreground">
                Simplify your human resources. Manage shift scheduling, checklists,
                instructor and affiliate payouts in one place.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                  Shift &amp; HR scheduling &amp; checklists
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                  Instructor &amp; affiliate payouts
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1"></span>
                  Capacity &amp; attendance management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
