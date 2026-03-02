import Image from "next/image";
import type { Service } from "@/data/services";
import { Button } from "./Button";

type Props = {
  service: Service;
  variant?: "default" | "media";
};

export function ServiceCard({ service, variant = "default" }: Props) {
  const isMedia = variant === "media" && !!service.imageSrc;

  return (
    <article
      className={[
        "group relative overflow-hidden rounded-xl border p-5 transition",
        "hover:-translate-y-0.5 hover:shadow-sm",
        isMedia ? "text-white" : "",
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
            {/* readability overlay */}
            <div className="absolute inset-0 bg-black/50 transition duration-200 group-hover:bg-black/60" />
          </div>

          {/* Foreground content */}
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
          <div className="text-xs font-medium opacity-70">
            {service.category}
          </div>
          <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm opacity-80">{service.summary}</p>

          <Button
            href={`/contact?service=${service.id}`}
            variant="outline"
            className="mt-4"
          >
            {service.ctaLabel}
          </Button>
        </>
      )}
    </article>
  );
}
