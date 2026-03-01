import Link from "next/link";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export function ServicesPreview() {
  const featured = services.slice(0, 3);

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-medium opacity-70">Services</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Comfort solutions for every season.
          </h2>
          <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-80">
            From fast repairs to preventative maintenance, we keep your system
            running efficiently year-round.
          </p>
        </div>

        <Link
          href="/services"
          className="hidden shrink-0 rounded-md border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:inline-flex"
        >
          View all services
        </Link>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service) => (
          <ServiceCard key={service.id} service={service} variant="media" />
        ))}
      </div>

      <Link
        href="/services"
        className="mt-6 inline-flex rounded-md border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:hidden"
      >
        View all services
      </Link>
    </div>
  );
}
