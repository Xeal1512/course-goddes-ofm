// Server Component — static final CTA
import Link from "next/link";
import { Crown, ArrowRight } from "lucide-react";
import { REFERRAL_LINK } from "../../data/course-data";

export function FinalCta() {
  return (
    <section className="py-28 px-5 relative overflow-hidden" aria-labelledby="final-cta-heading">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(90,35,72,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-2xl text-center space-y-7">
        {/* Crown icon */}
        <div className="flex justify-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #5A2348, #7a3060)",
              boxShadow: "0 0 40px rgba(90,35,72,0.5)",
            }}
          >
            <Crown
              className="h-7 w-7"
              style={{ color: "#B78A3A" }}
              aria-hidden="true"
            />
          </div>
        </div>

        <h2
          id="final-cta-heading"
          className="text-4xl sm:text-5xl font-bold leading-tight"
          style={{ color: "#E6D8BE" }}
        >
          Comienza hoy por {" "}
          <span className="font-display italic" style={{ color: "#B78A3A" }}>
            $0.
          </span>
        </h2>

        <p
          className="text-base leading-relaxed"
          style={{ color: "rgba(230,216,190,0.6)" }}
        >
          Crea tu cuenta de OnlyFans, regístrate en nuestra plataforma y accede al primer módulo del sistema completamente gratis. Comprueba el valor por ti misma antes de comprometerte.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2.5 rounded-2xl px-10 py-4 text-sm font-bold w-full sm:w-auto justify-center cursor-pointer"
            style={{ boxShadow: "0 0 50px rgba(183,138,58,0.35)" }}
          >
            <span className="relative z-10">Empieza tu prueba gratis</span>
            <ArrowRight
              className="h-5 w-5 relative z-10"
              aria-hidden="true"
            />
          </a>
        </div>

        <p className="text-xs" style={{ color: "rgba(230,216,190,0.3)" }}>
          Tras registrarte, accede al curso en{" "}
          <Link
            href="/curso"
            className="underline underline-offset-2 transition-colors hover:text-[#B78A3A]"
          >
            goddess-ofm.com/curso
          </Link>
        </p>
      </div>
    </section>
  );
}
