import type { ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Props = {
  children: ReactNode;
  className?: string;
  reveal?: boolean;
};

export function Section({ children, className = "", reveal = false }: Props) {
  return (
    <section className={`py-12 ${className}`}>
      <Container>
        {reveal ? <Reveal>{children}</Reveal> : children}
      </Container>
    </section>
  );
}