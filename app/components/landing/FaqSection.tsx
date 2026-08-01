// Server Component — data owner for the FAQ section
// Passes static data down to the Client island (FaqAccordion)
import { FaqAccordion } from "./FaqAccordion";

const FAQ_ITEMS = [
  {
    q: "¿Necesito mostrar mi cara?",
    a: "No. El curso incluye un módulo completo de estrategia de contenido sin rostro. Muchas creadoras generan más de $1k/mes con identidad anónima.",
  },
  {
    q: "¿Es seguro para alguien en LATAM?",
    a: "Sí. El curso cubre métodos de cobro adaptados a LATAM: Paxum, Binance P2P y conversión a moneda local sin necesidad de cuenta bancaria internacional.",
  },
  {
    q: "¿Cuánto tiempo necesito dedicarle al día?",
    a: "En la fase inicial 1–2 horas diarias son suficientes para configurar todo. Una vez con tráfico activo, puedes manejar tu cuenta con 30–60 min diarios.",
  },
  {
    q: "¿Tengo que saber de tecnología o marketing?",
    a: "No. El curso asume cero conocimiento previo. Cada paso incluye capturas, prompts listos para copiar y tablas de referencia rápida.",
  },
  {
    q: "¿El curso se actualiza?",
    a: "Sí. El material se actualiza cuando cambian las reglas de las plataformas. Tu acceso es de por vida.",
  },
];

export function FaqSection() {
  return (
    <section className="py-24 px-5" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl space-y-10">
        {/* Heading (rendered on server) */}
        <div className="text-center space-y-3">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(183,138,58,0.6)" }}
          >
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="text-3xl font-bold"
            style={{ color: "#E6D8BE" }}
          >
            Todo lo que necesitas saber.
          </h2>
        </div>

        {/* Interactive island — only this part is Client */}
        <FaqAccordion items={FAQ_ITEMS} />
      </div>
    </section>
  );
}
