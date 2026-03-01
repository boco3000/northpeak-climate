import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/data/services";

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
              className="object-cover transition duration-300 group-hover:blur-[2px] group-hover:scale-[1.02]"
            />
            {/* readability overlay */}
            <div className="absolute inset-0 bg-black/50 transition duration-300 group-hover:bg-black/60" />
          </div>

          {/* Foreground content */}
          <div className="relative">
            <div className="text-xs font-medium opacity-90">
              {service.category}
            </div>
            <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
            <p className="mt-2 text-sm opacity-80">{service.summary}</p>

            <Link
              href={`/contact?service=${service.id}`}
              className="mt-4 inline-flex items-center rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm font-medium hover:bg-white hover:text-black transition"
            >
              {service.ctaLabel}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="text-xs font-medium opacity-70">{service.category}</div>
          <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
          <p className="mt-2 text-sm opacity-80">{service.summary}</p>

          <Link
            href={`/contact?service=${service.id}`}
            className="mt-4 inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            {service.ctaLabel}
          </Link>
        </>
      )}
    </article>
  );
}
