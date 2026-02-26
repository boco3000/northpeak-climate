import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      <Section>
        <h1 className="text-3xl font-semibold tracking-tight">Services</h1>
        <p className="mt-2 max-w-2xl opacity-80">
          HVAC services designed for reliability, comfort, and efficiency.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </main>
  );
}
