import type { Review } from "@/data/reviews";

type Props = {
  review: Review;
};

function Stars({ rating }: { rating: Review["rating"] }) {
  return (
    <div className="text-sm" aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span className="opacity-40">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export function ReviewCard({ review }: Props) {
  return (
    <article className="rounded-xl border p-5">
      <Stars rating={review.rating} />
      <p className="mt-3 text-sm opacity-90">“{review.quote}”</p>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="font-medium">{review.name}</span>
        <span className="opacity-70">{review.service}</span>
      </div>
    </article>
  );
}