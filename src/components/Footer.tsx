import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/contact?service=ac-repair", label: "AC Repair" },
  { href: "/contact?service=furnace-repair", label: "Furnace Repair" },
  { href: "/contact?service=system-install", label: "System Installation" },
  { href: "/contact?service=seasonal-tuneup", label: "Seasonal Tune-Up" },
  { href: "/contact?service=iaq", label: "Indoor Air Quality" },
];

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-semibold tracking-tight">
              NorthPeak Climate
            </div>
            <p className="mt-2 max-w-md text-sm opacity-80 leading-relaxed">
              Reliable heating, cooling, and maintenance with clear
              communication and fast scheduling.
            </p>

            <div className="mt-4 text-sm">
              <Button href="/contact" variant="outline">
                Request Service
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-sm font-medium">Quick links</div>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    className="hover:opacity-100 hover:underline"
                    href={l.href}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="text-sm font-medium">Services</div>
            <ul className="mt-3 space-y-2 text-sm opacity-80">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    className="hover:opacity-100 hover:underline"
                    href={l.href}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 text-sm">
          {/* Contact */}
          <div className="rounded-xl border p-5">
            <div className="font-medium">Contact</div>
            <div className="mt-2 opacity-80">
              <div>(555) 555-0199</div>
              <div className="mt-1">hello@northpeakclimate.com</div>
            </div>
          </div>

          {/* Hours */}
          <div className="rounded-xl border p-5">
            <div className="font-medium">Hours</div>
            <div className="mt-2 opacity-80">
              <div>Mon–Fri: 8am–6pm</div>
              <div className="mt-1">Sat: 9am–2pm</div>
              <div className="mt-1">Sun: Closed</div>
            </div>
          </div>

          {/* Service area */}
          <div className="rounded-xl border p-5">
            <div className="font-medium">Service area</div>
            <div className="mt-2 opacity-80 leading-relaxed">
              Serving your local area and nearby towns. Ask about same-day
              availability.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs opacity-70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} NorthPeak Climate. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="hover:underline">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
