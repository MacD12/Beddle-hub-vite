export const PartnersScroll = () => {
  // A curated list of integrations and partners that Beddle Hub connects with
  const partners = [
    "Stripe",
    "Airbnb",
    "Booking.com",
    "Hostelworld",
    "Agoda",
    "Google Hotel",
    "Tripadvisor",
    "Meta",
    "WhatsApp",
    "Gmail"
  ];

  return (
    <div className="py-12 border-y border-border overflow-hidden" id="integrations">
      <div className="flex animate-scroll">
        {[...partners, ...partners].map((partner, i) => (
          <div key={i} className="flex-shrink-0 px-8">
            <span className="text-muted-foreground font-medium text-sm whitespace-nowrap">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
