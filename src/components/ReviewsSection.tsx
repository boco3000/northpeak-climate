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

          <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-80">
            Real feedback from customers across heating, cooling, and
            maintenance services.
          </p>

          {/* Google badge + stat */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-3 py-1">
              <span className="font-medium">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-amber-500">★★★★★</span>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 px-3 py-1">
              <span className="font-medium">4.9 average</span>
              <span>•</span>
              <span>250+ reviews</span>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="hidden shrink-0 rounded-md border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black sm:inline-flex"
        >
          Get a quote
        </Link>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}
