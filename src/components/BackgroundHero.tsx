import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { TrustBar } from "./TrustBar";

export function BackgroundHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="HVAC technician servicing a residential system"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Subtle gradient to anchor text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
      </div>

      <Container className="relative py-20 sm:py-24">
        <div className="max-w-2xl text-white">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">
            Licensed & Insured • Same-day availability
          </p>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Comfort you can count on—heating, cooling, and maintenance.
          </h1>

          <p className="mt-4 text-base opacity-90">
            NorthPeak Climate delivers clear communication, reliable scheduling,
            and quality work to keep your home comfortable year-round.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black hover:opacity-90"
            >
              Request Service
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black"
            >
              View Services
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 text-sm">
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <dt className="opacity-80">Average rating</dt>
              <dd className="mt-1 font-medium">4.9★</dd>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
              <dt className="opacity-80">Service area</dt>
              <dd className="mt-1 font-medium">Local & nearby towns</dd>
            </div>
          </dl>
        </div>
      </Container>
      <div className="relative mt-6">
        <TrustBar variant="overlay" />
      </div>
    </section>
  );
}
