export const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-dark-bg text-dark-fg border-t border-white/10">
      <div className="container mx-auto max-w-7xl">
        {/* Top footer: main content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand overview */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Beddle Hub</h3>
              <p className="text-white/70 text-sm mb-6 max-w-xs">
                The all‑in‑one hospitality OS for hotels, villas, surf camps, restaurants and tour
                operators across Sri Lanka and beyond.
              </p>
              <div className="grid grid-cols-1 gap-1">
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-white">Sri Lanka:</span> powering 120+ properties
                </p>
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-white">Australia:</span> operations live
                </p>
                <p className="text-white/80 text-sm">
                  <span className="font-semibold text-white">Singapore:</span> operations live
                </p>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://www.facebook.com" className="text-white/70 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com" className="text-white/70 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://www.linkedin.com" className="text-white/70 hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          {/* Products list */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#modules" className="hover:text-white transition-colors">Channel Manager</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Booking Engine</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Smart Restaurant</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Surf School &amp; Experiences</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Property &amp; Restaurant</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Staff &amp; HR</a></li>
              <li><a href="#modules" className="hover:text-white transition-colors">Revenue &amp; Ops</a></li>
            </ul>
          </div>
          {/* Facts column */}
          <div>
            <h4 className="font-semibold mb-4">Facts</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li>120+ properties onboarded</li>
              <li>40+ OTAs connected</li>
              <li>+12% ADR uplift on average</li>
              <li>99.95% platform uptime</li>
            </ul>
          </div>
          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="mailto:info@beddlehub.com" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          {/* Legal links */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        {/* Bottom footer: copyright and secondary links */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© 2025 Beddle Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white/70 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-white/70 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-white/70 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
