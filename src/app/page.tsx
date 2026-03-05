import { Section } from "@/components/Section";
import { ProcessSection } from "@/components/ProcessSection";
import { BackgroundHero } from "@/components/BackgroundHero";
import { ServicesPreview } from "@/components/ServicesPreview";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main>
      <BackgroundHero />
      <div className="relative overflow-hidden">
        {/* Background wash */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/0 via-black/40 to-black/0 dark:via-white/[0.03]" />
        <Section reveal>
          <ProcessSection />
        </Section>
        <section id="services">
          <Section reveal tone="soft">
            <ServicesPreview />
          </Section>
        </section>
        <Section reveal tone="raised">
          <ReviewsSection />
        </Section>
      </div>
    </main>
  );
}
