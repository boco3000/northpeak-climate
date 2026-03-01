import { Section } from "@/components/Section";

export default function AboutPage() {
  return (
    <main>
      <Section>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">About</h1>
        <p className="mt-2 max-w-2xl text-base sm:text-lg opacity-80">
          NorthPeak Climate keeps homes comfortable year-round.
        </p>
      </Section>
    </main>
  );
}
