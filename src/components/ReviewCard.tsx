import type { Review } from "@/data/reviews";

type Props = {
  review: Review;
};

function Stars({ rating }: { rating: Review["rating"] }) {
  return (
    <div
      className="text-sm text-amber-500"
      aria-label={`${rating} out of 5 stars`}
    >
      {"★".repeat(rating)}
      <span className="opacity-30 text-amber-500">
        {"★".repeat(5 - rating)}
      </span>
    </div>
  );
}

function initials(name: string) {
  // "A. Thompson" -> "AT", "J. Rivera" -> "JR"
  const parts = name.replace(".", "").split(" ").filter(Boolean);
  const first = parts[0]?.[0] ?? "N";
  const last = parts[1]?.[0] ?? "";
  return (first + last).toUpperCase();
}

export function ReviewCard({ review }: Props) {
  const accent =
    review.rating === 5
      ? "bg-black/70 dark:bg-white/70"
      : "bg-black/40 dark:bg-white/40";

  return (
    <article className="group relative overflow-hidden rounded-2xl border bg-white/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5">
      {/* accent strip */}
      <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />

      <div className="flex items-start gap-4">
        {/* avatar */}
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white text-sm font-semibold dark:bg-black">
          {initials(review.name)}
        </div>

        <div className="min-w-0">
          <Stars rating={review.rating} />
          <p className="mt-3 text-sm leading-relaxed opacity-80">“{review.quote}”</p>

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            <span className="font-medium">{review.name}</span>
            <span className="opacity-60">•</span>
            <span className="opacity-70">{review.service}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
