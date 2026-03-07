import { Container } from "./Container";
import { Button } from "./Button";

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
          <Button
            href="/contact"
            variant="outline"
            className="border-white/30 text-white hover:bg-white hover:text-black"
          >
            Request a quote
          </Button>
        </div>
      </Container>
    </section>
  );
}
