// ROOT ROUTE — Server Component by default (no "use client")
// Composes landing page sections. Each section is an independent Server Component
// except LandingNav (Client) and FaqAccordion (Client island inside FaqSection).
import type { Metadata } from "next";

import { LandingNav } from "./components/landing/LandingNav";
import { HeroSection } from "./components/landing/HeroSection";
import { StatsSection } from "./components/landing/StatsSection";
import { ProblemSolution } from "./components/landing/ProblemSolution";
import { ModulesPreview } from "./components/landing/ModulesPreview";
import { TestimonialsSection } from "./components/landing/TestimonialsSection";
import { ForWhomSection } from "./components/landing/ForWhomSection";
import { FaqSection } from "./components/landing/FaqSection";
import { FinalCta } from "./components/landing/FinalCta";
import { LandingFooter } from "./components/landing/LandingFooter";

export const metadata: Metadata = {
  title: "Goddess OFM — Crea ingresos reales de forma discreta con OnlyFans",
  description:
    "La guía completa para creadoras LATAM: privacidad total, tráfico de Reddit, cobro en dólares y monetización con OnlyFans sin experiencia previa.",
};

// Section order follows ui-ux-pro-max "Hero + Testimonials + CTA" pattern:
// Hero → Stats → Problem/Solution → Modules → Testimonials → ForWhom → FAQ → CTA
export default function LandingPage() {
  return (
    <div style={{ background: "#111011", color: "#E6D8BE" }} className="min-h-dvh overflow-x-hidden">
      <LandingNav />
      <main>
        <HeroSection />
        <StatsSection />
        <ProblemSolution />
        <ModulesPreview />
        <TestimonialsSection />
        <ForWhomSection />
        <FaqSection />
        <FinalCta />
      </main>
      <LandingFooter />
    </div>
  );
}
