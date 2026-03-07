import { Section } from "@/components/Section";
import { services } from "@/data/services";
import { FormField } from "@/components/FormField";
import { Button } from "@/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request HVAC service or ask a question. NorthPeak Climate responds within one business day.",
};

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
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/0 via-black/25 to-black/0 dark:via-white/[0.03]" />

        <Section reveal tone="soft">
          {/* Intro panel */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Contact
            </h1>
            <p className="mt-2 max-w-2xl text-base opacity-80 sm:text-lg">
              Tell us what you need—our team will follow up within 1 business
              day.
            </p>

            {service ? (
              <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm">
                Requesting:
                <span className="ml-2 font-medium">{service.title}</span>
              </div>
            ) : null}
          </div>

          {/* Form + info */}
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Form card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <form className="space-y-6">
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

                <FormField
                  label="Preferred Contact Method"
                  htmlFor="contactMethod"
                >
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    className="w-full rounded-md border bg-white px-3 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-black dark:bg-neutral-900 dark:text-white dark:focus:ring-white"
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
                    className="w-full rounded-md border bg-white px-3 py-2 text-sm text-black outline-none focus:ring-2 focus:ring-black dark:bg-neutral-900 dark:text-white dark:focus:ring-white"
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

                <div>
                  <Button type="submit" variant="outline">
                    Submit Request
                  </Button>
                  <p className="mt-3 text-xs opacity-60">
                    We typically respond within 1 business day. No spam — just
                    service updates.
                  </p>
                </div>
              </form>
            </div>

            {/* Info cards */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="text-sm font-medium">Contact</div>
                <div className="mt-3 space-y-1 text-sm opacity-80">
                  <div>(555) 555-0199</div>
                  <div>hello@northpeakclimate.com</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="text-sm font-medium">Hours</div>
                <div className="mt-3 space-y-1 text-sm opacity-80">
                  <div>Mon–Fri: 8am–6pm</div>
                  <div>Sat: 9am–2pm</div>
                  <div>Sun: Closed</div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
                <div className="text-sm font-medium">Service area</div>
                <p className="mt-3 text-sm leading-relaxed opacity-80">
                  Serving your local area and nearby towns. Ask about same-day
                  availability for urgent heating and cooling needs.
                </p>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </main>
  );
}
