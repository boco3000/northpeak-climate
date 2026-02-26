import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  ctaHref: string;
  ctaLabel: string;
};

export function BackgroundCTA({
  title,
  description,
  imageSrc,
  ctaHref,
  ctaLabel,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <Container className="relative py-16">
        <div className="max-w-2xl rounded-2xl border border-white/15 bg-white/5 p-6 text-white backdrop-blur">
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 opacity-90">{description}</p>

          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center rounded-md border border-white/30 px-4 py-2 text-sm font-medium hover:bg-white hover:text-black"
          >
            {ctaLabel}
          </Link>
        </div>
      </Container>
    </section>
  );
}