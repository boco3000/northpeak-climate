import { Section } from "@/components/Section";
import { services } from "@/data/services";
import { FormField } from "@/components/FormField";

type Props = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function ContactPage({ searchParams }: Props) {
  const serviceId =
    typeof searchParams?.service === "string"
      ? searchParams.service
      : undefined;

  const service = serviceId
    ? services.find((s) => s.id === serviceId)
    : undefined;

  return (
    <main>
      <Section>
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="mt-2 max-w-2xl opacity-80">
          Tell us what you need—our team will follow up within 1 business day.
        </p>

        {service ? (
          <div className="mt-6 inline-flex items-center rounded-full border px-3 py-1 text-sm">
            Requesting:{" "}
            <span className="ml-2 font-medium">{service.title}</span>
          </div>
        ) : null}

        <form className="mt-8 space-y-6 rounded-xl border p-6">
          <FormField label="Full Name" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="Jane Doe"
            />
          </FormField>

          <FormField label="Email or Phone" htmlFor="contact">
            <input
              id="contact"
              name="contact"
              type="text"
              required
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="you@example.com"
            />
          </FormField>

          <FormField label="Preferred Contact Method" htmlFor="contactMethod">
            <select
              id="contactMethod"
              name="contactMethod"
              className="w-full rounded-md border bg-white text-black dark:bg-neutral-900 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            >
              <option>Email</option>
              <option>Phone</option>
            </select>
          </FormField>

          <FormField label="Service Needed" htmlFor="service">
            <select
              id="service"
              name="service"
              defaultValue={service?.id ?? ""}
              className="w-full rounded-md border bg-white text-black dark:bg-neutral-900 dark:text-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            >
              <option value="">Select a service</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </FormField>

          <FormField label="Message" htmlFor="message">
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-md border bg-transparent px-3 py-2 text-sm outline-none focus:ring-2"
              placeholder="Tell us about your service needs..."
            />
          </FormField>

          <button
            type="submit"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Submit Request
          </button>
          <p className="mt-3 text-xs opacity-60">
            We typically respond within 1 business day. No spam — just service
            updates.
          </p>
        </form>
      </Section>
    </main>
  );
}
