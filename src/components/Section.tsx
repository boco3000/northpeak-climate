import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Tone = "default" | "soft" | "raised";

type Props = {
  children: ReactNode;
  className?: string;
  reveal?: boolean;
  tone?: Tone;
};

export function Section({
  children,
  className = "",
  reveal = false,
  tone = "default",
}: Props) {
  const toneStyles = {
    default: "",
    soft: "bg-black/20 dark:bg-white/[0.03]",
    raised: "bg-black/30 dark:bg-white/[0.05] border-y border-white/10",
  };

  return (
    <section className={`py-12 ${toneStyles[tone]} ${className}`}>
      <Container>
        {reveal ? <Reveal>{children}</Reveal> : children}
      </Container>
    </section>
  );
}