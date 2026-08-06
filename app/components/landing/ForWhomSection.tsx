// Server Component — static "For Whom" section
import { Lock, Clock, Globe, Users } from "lucide-react";

const FOR_WHOM_BULLETS = [
  "Buscas una fuente de ingresos adicional sin invertir capital inicial",
  "Quieres absoluta privacidad: familia, trabajo y entorno no sabrán nada",
  "No tienes experiencia previa en OnlyFans ni en marketing digital",
  "Estás en LATAM y no sabes cómo cobrar en dólares de forma segura",
  "Quieres un método estructurado, no probar a ciegas",
] as const;

const FEATURE_PILLS = [
  { Icon: Lock, label: "Privacidad total", sub: "Sin rastro digital" },
  { Icon: Clock, label: "Flexible", sub: "Desde 1 h/día" },
  { Icon: Globe, label: "Cobro LATAM", sub: "Sin banco internacional" },
  { Icon: Users, label: "Comunidad", sub: "Soporte por WhatsApp" },
] as const;

export function ForWhomSection() {
  return (
    <section
      className="py-24 border-y"
      style={{
        borderColor: "rgba(90,35,72,0.3)",
        background: "rgba(90,35,72,0.04)",
      }}
      aria-labelledby="for-whom-heading"
    >
      <div className="mx-auto max-w-4xl px-5">
        <div className="grid sm:grid-cols-2 gap-10 items-center">
          {/* Left: bullets */}
          <div className="space-y-5">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "rgba(183,138,58,0.6)" }}
            >
              ¿Para quién es esto?
            </p>
            <h2
              id="for-whom-heading"
              className="text-3xl sm:text-4xl font-bold leading-tight"
              style={{ color: "#E6D8BE" }}
            >
              Este curso es para ti{" "}
              <span className="font-display italic" style={{ color: "#B78A3A" }}>
                si…
              </span>
            </h2>
            <ul className="space-y-3">
              {FOR_WHOM_BULLETS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm"
                  style={{ color: "rgba(230,216,190,0.7)" }}
                >
                  <div
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                    style={{ background: "#B78A3A" }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: feature pills */}
          <div className="grid grid-cols-2 gap-3">
            {FEATURE_PILLS.map(({ Icon, label, sub }) => (
              <div
                key={label}
                className="rounded-2xl border p-4 space-y-2"
                style={{
                  background: "rgba(20,10,18,0.8)",
                  borderColor: "rgba(90,35,72,0.4)",
                }}
              >
                <Icon
                  className="h-5 w-5"
                  style={{ color: "#B78A3A" }}
                  aria-hidden="true"
                />
                <p className="text-xs font-bold" style={{ color: "#E6D8BE" }}>
                  {label}
                </p>
                <p
                  className="text-[10px]"
                  style={{ color: "rgba(230,216,190,0.4)" }}
                >
                  {sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
