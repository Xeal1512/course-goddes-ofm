// Server Component — static module preview grid
import Link from "next/link";
import {
  ShieldCheck, Crown, UserCheck, Camera,
  Flame, MessageCircleHeart, DollarSign,
  Globe, ArrowRight,
} from "lucide-react";

const MODULES_PREVIEW = [
  {
    icon: ShieldCheck,
    label: "Privacidad Total",
    desc: "Cuentas anónimas. Sin rastro. Sin riesgo.",
  },
  {
    icon: Crown,
    label: "Perfil que Vende",
    desc: "Bio, foto, precio y psicología del comprador.",
  },
  {
    icon: Camera,
    label: "Contenido Estratégico",
    desc: "Qué publicar, cuándo y con qué herramientas.",
  },
  {
    icon: Flame,
    label: "Tráfico de Reddit",
    desc: "El método paso a paso para no ser baneada.",
  },
  {
    icon: MessageCircleHeart,
    label: "Mensajería que convierte",
    desc: "Scripts probados para vender sin chatear horas.",
  },
  {
    icon: DollarSign,
    label: "PPV & Suscripciones",
    desc: "Precios, paquetes y cuándo subir el valor.",
  },
  {
    icon: Globe,
    label: "Cobro desde LATAM",
    desc: "Paxum, Binance P2P y bancos locales.",
  },
] as const;

function ModuleCard({
  Icon,
  label,
  desc,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  label: string;
  desc: string;
}) {
  return (
    <div
      className="rounded-2xl border p-5 space-y-3 transition-all duration-200 hover:-translate-y-1"
      style={{
        background: "rgba(20,10,18,0.8)",
        borderColor: "rgba(90,35,72,0.35)",
      }}
    >
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl border"
        style={{
          background: "rgba(183,138,58,0.1)",
          borderColor: "rgba(183,138,58,0.3)",
          color: "#B78A3A",
        }}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="text-sm font-bold" style={{ color: "#E6D8BE" }}>
          {label}
        </h3>
        <p
          className="text-xs mt-1 leading-relaxed"
          style={{ color: "rgba(230,216,190,0.5)" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}

export function ModulesPreview() {
  return (
    <section
      className="py-24 border-y"
      style={{
        borderColor: "rgba(90,35,72,0.3)",
        background: "rgba(90,35,72,0.04)",
      }}
      aria-labelledby="modules-heading"
    >
      <div className="mx-auto max-w-5xl px-5 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-3">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.2em]"
            style={{ color: "rgba(183,138,58,0.6)" }}
          >
            Qué vas a aprender
          </p>
          <h2
            id="modules-heading"
            className="text-3xl sm:text-4xl font-bold"
            style={{ color: "#E6D8BE" }}
          >
            7 módulos. Cada uno con un resultado concreto.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {MODULES_PREVIEW.map((mod) => (
            <ModuleCard
              key={mod.label}
              Icon={mod.icon}
              label={mod.label}
              desc={mod.desc}
            />
          ))}

          {/* CTA card */}
          <div
            className="rounded-2xl border p-5 flex flex-col items-center justify-center text-center gap-4"
            style={{
              background:
                "linear-gradient(135deg, rgba(90,35,72,0.25), rgba(183,138,58,0.08))",
              borderColor: "rgba(183,138,58,0.3)",
            }}
          >
            <Crown
              className="h-8 w-8"
              style={{ color: "#B78A3A" }}
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-bold" style={{ color: "#E6D8BE" }}>
                + Paso 0 obligatorio
              </p>
              <p
                className="text-xs mt-1"
                style={{ color: "rgba(230,216,190,0.5)" }}
              >
                El primer paso antes de todo: registro estratégico en OnlyFans.
              </p>
            </div>
            <Link
              href="/curso"
              className="btn-gold flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer"
            >
              <span className="relative z-10">Ver el curso completo</span>
              <ArrowRight
                className="h-3.5 w-3.5 relative z-10"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
