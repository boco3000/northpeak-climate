import Link from "next/link";
import { Container } from "./Container";

type Item = {
  title: string;
  detail: string;
};

type Props = {
  variant?: "default" | "overlay";
};

const items: Item[] = [
  { title: "Licensed & Insured", detail: "Local, qualified technicians" },
  { title: "Upfront Estimates", detail: "Clear pricing, no surprises" },
  { title: "Maintenance Plans", detail: "Prevent breakdowns" },
  { title: "Same-Day Service", detail: "When available" },
];

export function TrustBar({ variant = "default" }: Props) {
  const isOverlay = variant === "overlay";

  return (
    <section className={isOverlay ? "" : "border-b"}>
      <Container className={isOverlay ? "pb-0 pb-2" : "py-6"}>
        <div
          className={
            isOverlay
              ? "rounded-2xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur"
              : "grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {isOverlay ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/20 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="text-sm font-medium">{item.title}</div>
                  <div className="mt-1 text-sm opacity-80">{item.detail}</div>
                </div>
              ))}
            </div>
          ) : (
            items.map((item) => (
              <div key={item.title} className="rounded-xl border p-4">
                <div className="text-sm font-medium">{item.title}</div>
                <div className="mt-1 text-sm opacity-70">{item.detail}</div>
              </div>
            ))
          )}
        </div>

        <div className={isOverlay ? "mt-6 text-sm" : "mt-4 text-sm"}>
  <Link
    href="/contact"
    className={
      isOverlay
        ? "inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition"
        : "underline opacity-80 hover:opacity-100"
    }
  >
    Request a quote
  </Link>
</div>
      </Container>
    </section>
  );
}