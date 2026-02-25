import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t">
      <Container className="flex h-16 items-center justify-between">
        © {new Date().getFullYear()} NorthPeak Climate. All rights reserved.
      </Container>
    </footer>
  );
}