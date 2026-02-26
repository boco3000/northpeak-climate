import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { BackgroundCTA } from "@/components/BackgroundCTA";
import { BackgroundHero } from "@/components/BackgroundHero";

export default function Home() {
  return (
    <main>
      <BackgroundHero/>
      <Section>
        <Hero />
      </Section>
    </main>
  );
}
