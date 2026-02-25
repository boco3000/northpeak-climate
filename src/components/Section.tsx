import type { ReactNode } from "react";
import { Container } from "./Container";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className = "" }: Props) {
  return (
    <section className={`py-12 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}