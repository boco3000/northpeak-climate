import { Section } from "@/components/Section";
import { ImagePanel } from "@/components/ImagePanel";
import { Button } from "@/components/Button";

export default function AboutPage() {
  return (
    <main>
      {/* Intro */}
      <Section reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-medium opacity-70">About</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Local HVAC pros focused on comfort, clarity, and craftsmanship.
            </h1>
            <p className="mt-4 max-w-2xl text-base sm:text-lg opacity-80">
              NorthPeak Climate is built around clear communication and reliable
              scheduling—so homeowners know what to expect and feel confident in
              the work being done.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact" variant="outline">
                Request Service
              </Button>
              <Button href="/services" variant="ghost">
                View Services
              </Button>
            </div>
          </div>

          <ImagePanel
            src="/images/about-us.jpg"
            alt="Technician and homeowner discussing HVAC system"
            aspect="16/9"
            overlay={
              <>
                <p className="text-sm opacity-90">Our promise</p>
                <h2 className="mt-2 text-xl font-semibold">
                  Do the job right—then stand behind it.
                </h2>
              </>
            }
          />
        </div>
      </Section>

      {/* Values */}
      <Section reveal>
        <div>
          <p className="text-sm font-medium opacity-70">What we value</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            A better service experience.
          </h2>
          <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-80">
            We aim to make HVAC straightforward—diagnose clearly, price
            transparently, and follow through.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm">
              <div className="text-sm font-medium">Communication</div>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">
                You’ll understand what’s happening, what it costs, and what to
                expect next—no surprises.
              </p>
            </div>

            <div className="rounded-2xl border p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm">
              <div className="text-sm font-medium">Craftsmanship</div>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">
                Clean work, careful installs, and repairs that address root
                causes—not temporary patches.
              </p>
            </div>

            <div className="rounded-2xl border p-6 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-sm">
              <div className="text-sm font-medium">Reliability</div>
              <p className="mt-2 text-sm opacity-80 leading-relaxed">
                On-time scheduling, respectful service, and follow-up you can
                count on.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How we work (short) */}
      <Section reveal>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-medium opacity-70">How we work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Simple process. Professional results.
            </h2>
            <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-80">
              Whether it’s a repair or a full system replacement, we keep the
              process clear and efficient.
            </p>

            <ol className="mt-6 space-y-4 text-sm">
              <li className="rounded-xl border p-5">
                <div className="font-medium">1) Diagnose</div>
                <p className="mt-2 opacity-80 leading-relaxed">
                  We inspect the system and identify the root cause.
                </p>
              </li>
              <li className="rounded-xl border p-5">
                <div className="font-medium">2) Options</div>
                <p className="mt-2 opacity-80 leading-relaxed">
                  You get clear options with upfront pricing and tradeoffs.
                </p>
              </li>
              <li className="rounded-xl border p-5">
                <div className="font-medium">3) Resolve</div>
                <p className="mt-2 opacity-80 leading-relaxed">
                  We complete the work, verify performance, and clean up.
                </p>
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border p-6">
            <div className="text-sm font-medium">Service area</div>
            <p className="mt-2 text-sm opacity-80 leading-relaxed">
              Serving your local area and nearby towns. Same-day service may be
              available depending on scheduling.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 text-sm">
              <div className="rounded-xl border p-4">
                <div className="font-medium">Licensed & insured</div>
                <div className="mt-1 opacity-70">Qualified technicians</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-medium">Upfront estimates</div>
                <div className="mt-1 opacity-70">Clear pricing</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-medium">Maintenance plans</div>
                <div className="mt-1 opacity-70">Prevent breakdowns</div>
              </div>
              <div className="rounded-xl border p-4">
                <div className="font-medium">Workmanship</div>
                <div className="mt-1 opacity-70">Quality-focused</div>
              </div>
            </div>

            <div className="mt-6">
              <Button href="/contact" variant="outline">
                Get a quote
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
