export type ServiceCategory = "Heating" | "Cooling" | "Maintenance" | "Air Quality";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    id: "ac-repair",
    title: "AC Repair",
    category: "Cooling",
    summary: "Fast diagnostics and reliable fixes to restore comfort quickly.",
    ctaLabel: "Request Service",
  },
  {
    id: "furnace-repair",
    title: "Furnace Repair",
    category: "Heating",
    summary: "Safe, efficient repairs for gas and electric heating systems.",
    ctaLabel: "Request Service",
  },
  {
    id: "system-install",
    title: "System Installation",
    category: "Heating",
    summary: "New installs sized to your home for efficiency and long-term savings.",
    ctaLabel: "Get an Estimate",
  },
  {
    id: "seasonal-tuneup",
    title: "Seasonal Tune-Up",
    category: "Maintenance",
    summary: "Prevent breakdowns with seasonal checks and performance tuning.",
    ctaLabel: "Schedule Tune-Up",
  },
  {
    id: "iaq",
    title: "Indoor Air Quality",
    category: "Air Quality",
    summary: "Filtration and air solutions to help your home feel cleaner and healthier.",
    ctaLabel: "Explore Options",
  },
];