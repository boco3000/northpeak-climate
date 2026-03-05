import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { Button } from "./Button";
import { services } from "@/data/services";

export function FooterOnBackground() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hvac-cta.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Darken for readability */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Soft gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[120%] w-[120%] bg-gradient-to-tr from-sky-500/20 via-blue-400/10 to-transparent blur-3xl animate-footer-glow" />
        </div>
      </div>

      <Container className="py-10 sm:py-12">
        {/* Top row */}
        <div className="grid gap-8 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <div className="text-lg font-semibold text-white">
              NorthPeak Climate
            </div>
            <p className="mt-2 max-w-sm text-sm text-white/80">
              Reliable heating, cooling, and maintenance with clear
              communication and fast scheduling.
            </p>

            <Button
              href="/contact"
              variant="outline"
              className="mt-5 border-white/25 text-white hover:bg-white hover:text-black"
            >
              Request Service
            </Button>
          </div>

          {/* Quick links */}
          <div className="md:justify-self-center">
            <div className="text-sm font-semibold text-white">Quick links</div>
            <nav className="mt-3 flex flex-col gap-2 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-white/80 hover:text-white transition"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services list */}
          <div className="md:justify-self-end md:text-right">
            <div className="text-sm font-semibold text-white">Services</div>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/contact?service=${service.id}`}
                    className="text-white/80 transition hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Cards row (blurred panels) */}
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white backdrop-blur-md">
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-2 text-sm text-white/80">(555) 555-0199</div>
            <div className="text-sm text-white/80">
              hello@northpeakclimate.com
            </div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white backdrop-blur-md">
            <div className="text-sm font-semibold">Hours</div>
            <div className="mt-2 text-sm text-white/80">Mon–Fri: 8am–6pm</div>
            <div className="text-sm text-white/80">Sat: 9am–2pm</div>
            <div className="text-sm text-white/80">Sun: Closed</div>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 text-white backdrop-blur-md">
            <div className="text-sm font-semibold">Service area</div>
            <p className="mt-2 text-sm text-white/80">
              Serving your local area and nearby towns. Ask about same-day
              availability.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} NorthPeak Climate. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
