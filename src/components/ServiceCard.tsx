import Image from "next/image";
import type { Service } from "@/data/services";
import { Button } from "./Button";

type Props = {
  service: Service;
  variant?: "default" | "media";
};

function categoryAccent(category: Service["category"]) {
  switch (category) {
    case "Heating":
      return {
        bar: "bg-orange-500/60 dark:bg-orange-300/70",
        tint: "bg-orange-500/5 dark:bg-orange-400/5",
        border: "border-orange-500/20 dark:border-orange-300/20",
      };
    case "Cooling":
      return {
        bar: "bg-sky-500/60 dark:bg-sky-300/70",
        tint: "bg-sky-500/5 dark:bg-sky-400/5",
        border: "border-sky-500/20 dark:border-sky-300/20",
      };
    case "Maintenance":
      return {
        bar: "bg-amber-500/60 dark:bg-amber-300/70",
        tint: "bg-amber-500/5 dark:bg-amber-400/5",
        border: "border-amber-500/20 dark:border-amber-300/20",
      };
    case "Air Quality":
      return {
        bar: "bg-emerald-500/60 dark:bg-emerald-300/70",
        tint: "bg-emerald-500/5 dark:bg-emerald-400/5",
        border: "border-emerald-500/20 dark:border-emerald-300/20",
      };
    default:
      return { bar: "bg-black/40 dark:bg-white/40", tint: "", border: "" };
  }
}

export function ServiceCard({ service, variant = "default" }: Props) {
  const isMedia = variant === "media" && !!service.imageSrc;

  const accent = categoryAccent(service.category);

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-xl border p-5 transition duration-200 ease-out",
        "hover:-translate-y-0.5 hover:shadow-sm",
        isMedia ? "text-white" : `${accent.tint} ${accent.border}`,
      ].join(" ")}
    >
      {isMedia ? (
        <>
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src={service.imageSrc!}
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-200 group-hover:blur-[2px] group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/50 transition duration-200 group-hover:bg-black/60" />
          </div>

          <div className="relative">
            <div className="text-xs font-medium opacity-90">
              {service.category}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm opacity-80">{service.summary}</p>

            <Button
              href={`/contact?service=${service.id}`}
              variant="outline"
              className="mt-4 border-white/30 text-white bg-white/10 hover:bg-white hover:text-black"
            >
              {service.ctaLabel}
            </Button>
          </div>
        </>
      ) : (
        <>
          {/* LEFT ACCENT BAR */}
          <div className={`absolute left-0 top-0 h-full w-1 ${accent.bar}`} />

          {/* CONTENT WRAPPER */}
          <div className="relative">
            <div className="text-xs font-medium opacity-80">
              {service.category}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm opacity-80 leading-relaxed">
              {service.summary}
            </p>

            <Button
              href={`/contact?service=${service.id}`}
              variant="outline"
              className="mt-4"
            >
              {service.ctaLabel}
            </Button>
          </div>
        </>
      )}
    </article>
  );
}
