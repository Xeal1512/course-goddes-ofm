// Server Component — static testimonials grid
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Valeria M.",
    country: "🇲🇽 México",
    text: "Empecé sin saber nada. En 3 semanas con el método ya tenía mi primera venta PPV. El módulo de Reddit fue un game changer total.",
    stars: 5 as const,
    earnings: "+$420 primer mes",
  },
  {
    name: "Camila R.",
    country: "🇨🇴 Colombia",
    text: "La sección de privacidad me dio la confianza que necesitaba. Nadie en mi entorno se enteró. Cobro desde Binance P2P sin problema.",
    stars: 5 as const,
    earnings: "+$800 segundo mes",
  },
  {
    name: "Sofía L.",
    country: "🇦🇷 Argentina",
    text: "Los bios y prompts listos para copiar me ahorraron semanas de prueba. La estrategia de fans gratuitos → PPV es brutal.",
    stars: 5 as const,
    earnings: "+$650 primer mes",
  },
  {
    name: "Daniela K.",
    country: "🇻🇪 Venezuela",
    text: "Pensé que era complicado cobrar desde LATAM. Con la guía de Paxum y Binance P2P lo resolví en un día. Clarísimo.",
    stars: 5 as const,
    earnings: "Primera venta en 8 días",
  },
] as const;

function TestimonialCard({
  name,
  country,
  text,
  stars,
  earnings,
}: (typeof TESTIMONIALS)[number]) {
  return (
    <article
      className="rounded-2xl border p-6 space-y-4"
      style={{
        background: "rgba(20,10,18,0.85)",
        borderColor: "rgba(90,35,72,0.4)",
      }}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-bold" style={{ color: "#E6D8BE" }}>
            {name}
          </p>
          <p className="text-xs" style={{ color: "rgba(230,216,190,0.4)" }}>
            {country}
          </p>
        </div>
        <span
          className="rounded-full border px-2.5 py-1 text-[10px] font-bold shrink-0"
          style={{
            background: "rgba(183,138,58,0.1)",
            borderColor: "rgba(183,138,58,0.35)",
            color: "#B78A3A",
          }}
        >
          {earnings}
        </span>
      </div>

      {/* Stars */}
      <div className="flex gap-0.5" role="img" aria-label={`${stars} estrellas`}>
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="h-3.5 w-3.5 fill-current"
            style={{ color: "#B78A3A" }}
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote
        className="text-sm leading-relaxed font-display italic"
        style={{ color: "rgba(230,216,190,0.7)" }}
      >
        &ldquo;{text}&rdquo;
      </blockquote>
    </article>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 px-5" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="text-center space-y-3">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(183,138,58,0.6)" }}
          >
            Resultados reales
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#E6D8BE" }}
          >
            Creadoras que ya tomaron el curso.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
