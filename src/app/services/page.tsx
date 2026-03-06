import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/0 via-black/25 to-black/0 dark:via-white/[0.03]" />

        <Section reveal tone="soft">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Services
            </h1>
            <p className="mt-2 max-w-2xl text-base opacity-80 sm:text-lg">
              HVAC services designed for reliability, comfort, and efficiency.
            </p>

            <div className="mt-8">
              <ServicesGrid services={services} />
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
