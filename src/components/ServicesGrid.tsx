"use client";

import { useMemo, useState } from "react";
import type { Service, ServiceCategory } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

type Props = {
  services: Service[];
};

export function ServicesGrid({ services }: Props) {
  const [query, setQuery] = useState("");

  const categories: Array<"All" | ServiceCategory> = [
    "All",
    "Heating",
    "Cooling",
    "Maintenance",
    "Air Quality",
  ];

  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;

      const matchesQuery =
        q.length === 0 ||
        service.title.toLowerCase().includes(q) ||
        service.category.toLowerCase().includes(q) ||
        service.summary.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [query, services, activeCategory]);

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isActive = cat === activeCategory;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-3 py-1 text-sm transition ${
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "opacity-80 hover:opacity-100"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
      <input
        type="text"
        placeholder="Search services..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2"
      />

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.length > 0 ? (
          filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <p className="col-span-full text-sm opacity-70">
            No services match your search.
          </p>
        )}
      </div>
    </div>
  );
}
