// Server Component — no "use client" needed
import { TrendingUp, Lock, Globe, Users } from "lucide-react";

const STATS = [
  { value: "7 Módulos", label: "Contenido estructurado" },
  { value: "100%", label: "Anónimo y seguro" },
  { value: "LATAM", label: "Cobro optimizado" },
  { value: "Gratis", label: "Acceso con registro" },
] as const;

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="flex flex-col items-center gap-1.5 p-6 rounded-2xl border text-center"
      style={{
        background: "rgba(90,35,72,0.12)",
        borderColor: "rgba(90,35,72,0.4)",
      }}
    >
      <span
        className="text-3xl sm:text-4xl font-bold font-display"
        style={{ color: "#B78A3A" }}
      >
        {value}
      </span>
      <span
        className="text-xs uppercase tracking-wider"
        style={{ color: "rgba(230,216,190,0.5)" }}
      >
        {label}
      </span>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      className="py-16 border-y"
      style={{ borderColor: "rgba(90,35,72,0.3)" }}
      aria-label="Estadísticas del curso"
    >
      <div className="mx-auto max-w-4xl px-5">
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <StatCard key={s.label} value={s.value} label={s.label} />
          ))}
        </dl>
      </div>
    </section>
  );
}
