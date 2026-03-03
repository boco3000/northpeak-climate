"use client";

import { useMemo, useState } from "react";
import type { Service, ServiceCategory } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

type Props = {
  services: Service[];
};

export function ServicesGrid({ services }: Props) {
  const categories: Array<"All" | ServiceCategory> = [
    "All",
    "Heating",
    "Cooling",
    "Maintenance",
    "Air Quality",
  ];

  const pillStyles: Record<string, string> = {
    All: "bg-transparent text-inherit border opacity-80 hover:opacity-100",
    Heating:
      "border-orange-500/30 bg-orange-500/10 text-orange-700 hover:bg-orange-500/15 dark:text-orange-300 dark:bg-orange-400/10 dark:border-orange-300/30",
    Cooling:
      "border-sky-500/30 bg-sky-500/10 text-sky-700 hover:bg-sky-500/15 dark:text-sky-300 dark:bg-sky-400/10 dark:border-sky-300/30",
    Maintenance:
      "border-amber-500/30 bg-amber-500/10 text-amber-700 hover:bg-amber-500/15 dark:text-amber-300 dark:bg-amber-400/10 dark:border-amber-300/30",
    "Air Quality":
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-300 dark:bg-emerald-400/10 dark:border-emerald-300/30",
  };

  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filtered = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;

      return matchesCategory;
    });
  }, [services, activeCategory]);

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
              className={[
                "rounded-full border px-3 py-1 text-sm transition duration-200 ease-out",
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : (pillStyles[cat] ?? "opacity-80 hover:opacity-100"),
              ].join(" ")}
            >
              {cat}
            </button>
          );
        })}
      </div>

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
