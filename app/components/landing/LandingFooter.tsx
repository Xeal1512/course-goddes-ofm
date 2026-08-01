// Server Component — static footer
import Link from "next/link";
import { Crown } from "lucide-react";

export function LandingFooter() {
  return (
    <footer
      className="border-t py-8 px-5"
      style={{
        borderColor: "rgba(90,35,72,0.35)",
        background: "rgba(14,7,13,0.9)",
      }}
    >
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Brand mark */}
        <div className="flex items-center gap-2">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg, #5A2348, #7a3060)" }}
          >
            <Crown
              className="h-3.5 w-3.5"
              style={{ color: "#B78A3A" }}
              aria-hidden="true"
            />
          </div>
          <span
            className="text-xs font-bold tracking-wider"
            style={{ color: "rgba(230,216,190,0.5)" }}
          >
            GODDESS OFM
          </span>
        </div>

        <p
          className="text-[11px] text-center"
          style={{ color: "rgba(230,216,190,0.25)" }}
        >
          Este sitio contiene contenido para adultos. Solo para mayores de 18 años.
        </p>

        <Link
          href="/curso"
          className="text-xs underline underline-offset-2 transition-colors hover:text-[#B78A3A] cursor-pointer"
          style={{ color: "rgba(183,138,58,0.5)" }}
        >
          Ir al curso →
        </Link>
      </div>
    </footer>
  );
}
