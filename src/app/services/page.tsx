import { Section } from "@/components/Section";
import { ServicesGrid } from "@/components/ServicesGrid";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <Section>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Services</h1>
        <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-80">
          HVAC services designed for reliability, comfort, and efficiency.
        </p>

        <div className="mt-8">
          <ServicesGrid services={services} />
        </div>
      </Section>
    </main>
  );
}
