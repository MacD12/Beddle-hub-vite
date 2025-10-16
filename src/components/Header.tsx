import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

// Define the list of solutions for the navigation dropdown.  Each entry
// includes a title, a short description and the target URL.  We
// intentionally use emojis instead of relying on lucide icons to avoid
// compile‑time errors when a specific icon isn’t available.  These
// emojis convey the nature of each module in a friendly way.
const solutions = [
  {
    emoji: "📡",
    title: "Channel Manager",
    description: "Sync your rates & availability across all OTAs",
    href: "/solutions#channel-manager",
  },
  {
    emoji: "🛏️",
    title: "Booking Engine",
    description: "Commission‑free direct bookings & payment links",
    href: "/solutions#booking-engine",
  },
  {
    emoji: "🏄",
    title: "Surf School",
    description: "Schedule lessons, take waivers & pay instructors",
    href: "/solutions#surf-school",
  },
  {
    emoji: "🍽️",
    title: "Smart Restaurant",
    description: "QR menus, POS, KDS & inventory costing",
    href: "/solutions#smart-restaurant",
  },
  {
    emoji: "💻",
    title: "Tourism Websites",
    description: "High‑converting sites for hotels & experiences",
    href: "/solutions#websites",
  },
  {
    emoji: "🎒",
    title: "Experiences",
    description: "Tours, safaris, wellness sessions & activities",
    href: "/solutions#experiences",
  },
  {
    emoji: "🏨",
    title: "Property Management",
    description: "Front desk, housekeeping & billing in one place",
    href: "/solutions#property-management",
  },
  {
    emoji: "👥",
    title: "Staff & HR",
    description: "Shifts, checklists & payout management",
    href: "/solutions#staff-hr",
  },
  {
    emoji: "🎁",
    title: "Gift & Promotions",
    description: "Sell gift cards & create promo campaigns",
    href: "/solutions#promotions",
  },
  {
    emoji: "📈",
    title: "Revenue Management",
    description: "Dynamic pricing & forecasting tools",
    href: "/solutions#revenue-management",
  },
];

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Brand and navigation */}
          <div className="flex items-center gap-8">
            {/* Logo: display the provided SVG and hide the brand text visually while keeping it for screen readers */}
            <Link to="/" className="flex items-center gap-2" aria-label="Beddle Hub home">
              <img src="/logo.svg" alt="Beddle Hub logo" className="h-8 w-auto" />
              <span className="sr-only">Beddle Hub</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {/* Solutions dropdown using Radix navigation menu */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-medium px-0">
                      Solutions
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-screen max-w-[90vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl">
                      <div className="p-6 md:p-8">
                        {/* Grid of solution cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                          {solutions.map((item) => (
                            <Link
                              key={item.title}
                              to={item.href}
                              className="flex gap-4 items-start rounded-lg hover:bg-accent/10 p-3 transition-colors overflow-hidden"
                            >
                              <div className="flex-shrink-0 text-2xl">{item.emoji}</div>
                              <div className="space-y-1 min-w-0">
                                <p className="text-sm font-semibold truncate">{item.title}</p>
                                <p className="text-xs text-muted-foreground leading-tight truncate">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        {/* Tagline and explore link */}
                        <div className="mt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-4">
                          <p className="text-sm text-muted-foreground">
                            Built for hotels, surf camps, restaurants &amp; tour operators
                          </p>
                          <Link
                            to="/solutions"
                            className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                          >
                            Explore all solutions →
                          </Link>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  {/* Other top level links remain simple */}
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/products"
                        className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
                      >
                        Products
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/pricing"
                        className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
                      >
                        Pricing
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/resources"
                        className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
                      >
                        Resources
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/industries"
                        className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
                      >
                        Industries
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/about"
                        className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
                      >
                        About
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link
                        to="/blog"
                        className="text-sm font-medium px-4 py-2 hover:text-accent transition-colors"
                      >
                        Blog
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
            {/* Mobile: Solutions dropdown and hamburger for other links */}
            <div className="md:hidden flex items-center gap-2">
              {/* Solutions dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 text-sm font-medium p-2"
                  >
                    Solutions
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-[90vw] sm:max-w-sm md:max-w-md lg:max-w-lg p-4 mt-2" align="end">
                  <div className="grid grid-cols-1 gap-2">
                    {solutions.map((item) => (
                      <DropdownMenuItem key={item.title} asChild>
                        <Link
                          to={item.href}
                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-accent/10 transition-colors overflow-hidden"
                        >
                          <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                          <div className="min-w-0">
                            <p className="text-sm font-medium truncate">{item.title}</p>
                            <p className="text-xs text-muted-foreground leading-tight truncate">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator />
                    <div className="pt-2 text-sm">
                      <p className="text-muted-foreground mb-1">
                        Built for hotels, surf camps, restaurants & tour operators
                      </p>
                      <Link
                        to="/solutions"
                        className="font-medium text-primary underline-offset-4 hover:underline"
                      >
                        Explore all solutions →
                      </Link>
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              {/* Hamburger for other links */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-2">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[80vw] sm:w-80 p-6">
                  <div className="space-y-6">
                    {/* Other links */}
                    <div className="space-y-2">
                      <SheetClose asChild>
                        <Link to="/products" className="block text-sm font-medium hover:text-accent">
                          Products
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/pricing" className="block text-sm font-medium hover:text-accent">
                          Pricing
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/resources" className="block text-sm font-medium hover:text-accent">
                          Resources
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/industries" className="block text-sm font-medium hover:text-accent">
                          Industries
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/about" className="block text-sm font-medium hover:text-accent">
                          About
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link to="/blog" className="block text-sm font-medium hover:text-accent">
                          Blog
                        </Link>
                      </SheetClose>
                    </div>
                    <SheetClose asChild>
                      <Button variant="outline" className="w-full rounded-full text-base" asChild>
                        <Link to="/book-demo">Book a Demo</Link>
                      </Button>
                    </SheetClose>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {/* Call to action */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="rounded-full" asChild>
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
