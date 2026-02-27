import Link from "next/link";
import { reviews } from "@/data/reviews";
import { ReviewCard } from "./ReviewCard";

export function ReviewsSection() {
  const featured = reviews.slice(0, 3);

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-sm font-medium opacity-70">Reviews</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Trusted by homeowners.
          </h2>
          <p className="mt-2 max-w-2xl opacity-80">
            Real feedback from customers across heating, cooling, and maintenance
            services.
          </p>
        </div>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-md border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:inline-flex"
        >
          Get a quote
        </Link>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        {featured.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}