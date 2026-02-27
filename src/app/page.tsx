import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { BackgroundCTA } from "@/components/BackgroundCTA";
import { BackgroundHero } from "@/components/BackgroundHero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main>
      <BackgroundHero />
      <Section>
        <Hero />
      </Section>
      <Section>
        <ServicesPreview />
      </Section>
      <Section>
        <ReviewsSection />
      </Section>
      <BackgroundCTA
        title="Need help today?"
        description="Tell us what’s going on and we’ll get back to you quickly with next steps."
        imageSrc="/images/hero.jpg"
        ctaHref="/contact"
        ctaLabel="Request Service"
      />
    </main>
  );
}
