// Server Component — static editorial content, no interactivity
export function ProblemSolution() {
  return (
    <section className="py-24 px-5" aria-labelledby="problem-solution-heading">
      <div className="mx-auto max-w-4xl space-y-16">
        {/* Problem */}
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(183,138,58,0.6)" }}
          >
            El problema
          </p>
          <h2
            id="problem-solution-heading"
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: "#E6D8BE" }}
          >
            Hay cientos de &ldquo;guías&rdquo;.
            <br />
            <span
              className="font-display italic"
              style={{ color: "#5A2348" }}
            >
              Ninguna pensada para LATAM.
            </span>
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(230,216,190,0.55)" }}
          >
            La mayoría del contenido sobre OnlyFans está en inglés, para
            creadoras de Estados Unidos o Europa con PayPal y tarjetas sin
            restricciones. Si eres de México, Colombia, Argentina o Venezuela,
            encontraste las mismas barreras: cómo cobrar, cómo no ser
            identificada, cómo generar tráfico sin pagar publicidad.
          </p>
        </div>

        {/* Gold divider */}
        <div
          className="h-px w-24 mx-auto"
          style={{
            background:
              "linear-gradient(to right, transparent, #B78A3A, transparent)",
          }}
          aria-hidden="true"
        />

        {/* Solution */}
        <div className="space-y-4 max-w-2xl mx-auto text-center">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "#B78A3A" }}
          >
            La solución
          </p>
          <h2
            className="text-3xl sm:text-4xl font-bold leading-tight"
            style={{ color: "#E6D8BE" }}
          >
            Goddess OFM: el sistema que{" "}
            <span className="font-display italic" style={{ color: "#B78A3A" }}>
              sí funciona aquí.
            </span>
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(230,216,190,0.55)" }}
          >
            Un método estructurado en 7 módulos con pasos exactos, scripts
            listos, prompts copiables y la ruta de cobro más eficiente para
            convertir dólares en moneda local desde cualquier país de LATAM.
          </p>
        </div>
      </div>
    </section>
  );
}
