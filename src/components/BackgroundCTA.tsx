import Image from "next/image";
import { Container } from "./Container";
import { Button } from "./Button";

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
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-90">
            {description}
          </p>

          <Button
            href={ctaHref}
            variant="outline"
            className="mt-6 border-white/30 text-white hover:bg-white hover:text-black"
          >
            {ctaLabel}
          </Button>
        </div>
      </Container>
    </section>
  );
}
