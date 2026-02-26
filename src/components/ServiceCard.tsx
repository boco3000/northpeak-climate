import Link from "next/link";
import type { Service } from "@/data/services";

type Props = {
  service: Service;
};

export function ServiceCard({ service }: Props) {
  return (
    <article className="rounded-xl border p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
      <div className="text-xs font-medium opacity-70">{service.category}</div>
      <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
      <p className="mt-2 text-sm opacity-80">{service.summary}</p>

      <Link
        href={`/contact?service=${service.id}`}
        className="mt-4 inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
      >
        {service.ctaLabel}
      </Link>
    </article>
  );
}
