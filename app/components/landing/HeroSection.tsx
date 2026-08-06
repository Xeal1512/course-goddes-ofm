import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, ChevronDown } from "lucide-react";
import { REFERRAL_LINK } from "../../data/course-data";

export function HeroSection() {
  return (
    <section className="relative min-h-[92dvh] flex items-center overflow-hidden">
      {/* Static decorative background — no JS needed */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(90,35,72,0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 40% 50% at 80% 50%, rgba(183,138,58,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.022] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(230,216,190,1) 1px, transparent 1px), linear-gradient(90deg, rgba(230,216,190,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 sm:py-32 text-center">
        <div className="space-y-6 animate-hero-in">
          {/* Eyebrow */}
          <div className="flex justify-center">
            <span
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em]"
              style={{
                background: "rgba(183,138,58,0.1)",
                borderColor: "rgba(183,138,58,0.35)",
                color: "#B78A3A",
              }}
            >
              <Zap className="h-3 w-3" aria-hidden="true" />
              Metodología probada en LATAM
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight max-w-4xl mx-auto"
            style={{ color: "#E6D8BE" }}
          >
            Crea ingresos reales
            <br />
            <span className="font-display italic" style={{ color: "#B78A3A" }}>
              de forma discreta
            </span>
            <br />
            con OnlyFans.
          </h1>

          {/* Sub */}
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{ color: "rgba(230,216,190,0.6)" }}
          >
            Goddess OFM es la guía completa para creadoras LATAM que quieren
            construir un flujo de ingresos mensual recurrente — sin mostrar el
            rostro, sin conocimientos previos y sin riesgo para su privacidad.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2.5 rounded-2xl px-8 py-3.5 text-sm font-bold cursor-pointer"
              style={{ boxShadow: "0 0 40px rgba(183,138,58,0.3)" }}
            >
              <span className="relative z-10">Quiero empezar ahora</span>
              <ArrowRight className="h-4 w-4 relative z-10" aria-hidden="true" />
            </a>
            <Link
              href="/curso"
              className="btn-ghost flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold cursor-pointer"
            >
              Ver el curso completo
            </Link>
          </div>

          {/* Trust pills */}
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-4 list-none">
            {[
              "Empieza gratis hoy",
              "Pago único por acceso total",
              "Soporte por WhatsApp",
            ].map((t) => (
              <li
                key={t}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(230,216,190,0.35)" }}
              >
                <ShieldCheck
                  className="h-3.5 w-3.5"
                  style={{ color: "#B78A3A" }}
                  aria-hidden="true"
                />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Scroll hint — CSS animated */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow"
        style={{ color: "rgba(183,138,58,0.4)" }}
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
