export type Review = {
  id: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  quote: string;
  service: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    name: "A. Thompson",
    rating: 5,
    service: "AC Repair",
    quote:
      "Quick response and clear communication. The technician explained the issue and had us cool again the same day.",
  },
  {
    id: "r2",
    name: "J. Rivera",
    rating: 5,
    service: "Seasonal Tune-Up",
    quote:
      "Professional, punctual, and thorough. Our system runs quieter and the airflow is noticeably better.",
  },
  {
    id: "r3",
    name: "M. Chen",
    rating: 5,
    service: "Furnace Repair",
    quote:
      "Transparent pricing and no upsell pressure. They fixed the problem and walked us through maintenance tips.",
  },
  {
    id: "r4",
    name: "S. Patel",
    rating: 5,
    service: "Installation",
    quote:
      "Great install experience—clean work, on time, and the new system is a huge improvement in comfort.",
  },
];