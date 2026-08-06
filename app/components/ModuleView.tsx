"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { CourseModule, ModuleStep, REFERRAL_LINK } from "../data/course-data";
import {
  CheckCircle2, Copy, Check, ExternalLink, ChevronDown,
  ArrowLeft, ArrowRight, Calculator, Flame, DollarSign, Sparkles,
} from "lucide-react";
import Image from "next/image";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const MODULE_IMAGES: Record<number, string> = {
  0: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=900&q=80",
  1: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80",
  2: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=900&q=80",
  3: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80",
  4: "https://images.unsplash.com/photo-1502720705749-871143f0e671?w=900&q=80",
  5: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=900&q=80",
  6: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=900&q=80",
  7: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&q=80",
};

// ─── Step Accordion ────────────────────────────────────────────────────────────
const StepAccordion = ({ step, index }: { step: ModuleStep; index: number }) => {
  const [open, setOpen] = useState(index === 0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  }, []);

  return (
    <motion.div
      variants={fadeUp}
      className="content-card rounded-2xl overflow-hidden"
      whileHover={{ scale: 1.005 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="accordion-trigger w-full flex items-start justify-between gap-4 p-5 text-left"
      >
        <div className="flex items-start gap-3.5">
          <span className="step-badge flex h-7 w-7 shrink-0 items-center justify-center rounded-lg mt-0.5">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-sm font-semibold leading-snug" style={{ color: "#E6D8BE" }}>
              {step.title}
            </h3>
            {!open && (
              <p className="text-xs mt-0.5 line-clamp-1" style={{ color: "rgba(230,216,190,0.4)" }}>
                {step.description}
              </p>
            )}
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          style={{ color: "rgba(230,216,190,0.35)" }}
          className="shrink-0 mt-1"
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 space-y-4">
              <p className="text-sm leading-relaxed" style={{ color: "rgba(230,216,190,0.65)" }}>
                {step.description}
              </p>

              {/* Bullet details */}
              {step.details && step.details.length > 0 && (
                <ul className="space-y-2.5">
                  {step.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs leading-relaxed" style={{ color: "rgba(230,216,190,0.6)" }}>
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "#B78A3A", opacity: 0.7 }} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Table */}
              {step.tableData && (
                <div
                  className="overflow-x-auto rounded-xl border"
                  style={{ borderColor: "rgba(90,35,72,0.35)", background: "rgba(17,10,17,0.9)" }}
                >
                  <table className="w-full data-table">
                    <thead>
                      <tr>{step.tableData.headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {step.tableData.rows.map((row, i) => (
                        <tr key={i}>
                          <td className="font-semibold" style={{ color: "#B78A3A" }}>{row[0]}</td>
                          <td>{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Prompt card */}
              {step.codeOrPrompt && (
                <div
                  className="rounded-xl p-4 space-y-3 border"
                  style={{ background: "rgba(17,10,17,0.95)", borderColor: "rgba(90,35,72,0.3)" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider" style={{ color: "#B78A3A" }}>
                      <Sparkles className="h-3 w-3" />
                      <span>{step.codeOrPrompt.label}</span>
                    </div>
                    {step.codeOrPrompt.promptText && (
                      <button
                        onClick={() => copy(step.codeOrPrompt!.promptText!, `${step.id}-p`)}
                        className="btn-ghost flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-[10px] font-semibold"
                      >
                        {copiedId === `${step.id}-p` ? (
                          <><Check className="h-3 w-3 text-emerald-400" /><span className="text-emerald-400">Copiado</span></>
                        ) : (
                          <><Copy className="h-3 w-3" /><span>Copiar</span></>
                        )}
                      </button>
                    )}
                  </div>

                  {step.codeOrPrompt.promptText && (
                    <code
                      className="block text-xs font-mono rounded-lg p-3 leading-relaxed"
                      style={{ background: "rgba(0,0,0,0.5)", color: "rgba(230,216,190,0.7)" }}
                    >
                      {step.codeOrPrompt.promptText}
                    </code>
                  )}

                  {(step.codeOrPrompt.spanish || step.codeOrPrompt.english) && (
                    <div className="grid sm:grid-cols-2 gap-2">
                      {step.codeOrPrompt.spanish && (
                        <div
                          className="rounded-lg border p-3"
                          style={{ background: "rgba(90,35,72,0.1)", borderColor: "rgba(90,35,72,0.3)" }}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "rgba(183,138,58,0.6)" }}>
                            Español
                          </span>
                          <p className="text-xs font-display italic leading-relaxed" style={{ color: "#E6D8BE" }}>
                            "{step.codeOrPrompt.spanish}"
                          </p>
                        </div>
                      )}
                      {step.codeOrPrompt.english && (
                        <div
                          className="rounded-lg border p-3"
                          style={{ background: "rgba(183,138,58,0.06)", borderColor: "rgba(183,138,58,0.25)" }}
                        >
                          <span className="text-[10px] font-bold uppercase tracking-wider block mb-1" style={{ color: "#B78A3A" }}>
                            English
                          </span>
                          <p className="text-xs font-display italic leading-relaxed" style={{ color: "rgba(230,216,190,0.8)" }}>
                            "{step.codeOrPrompt.english}"
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Link CTA */}
              {step.linkCallout && (
                <a
                  href={step.linkCallout.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center justify-center gap-2 rounded-xl py-2.5 px-5 text-xs font-bold w-full"
                >
                  <span>{step.linkCallout.buttonText}</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ─── PPV Calculator ────────────────────────────────────────────────────────────
const PPVCalculator = () => {
  const [price, setPrice] = useState(15);
  const [buyers, setBuyers] = useState(30);
  const gross = price * buyers;
  const net = (gross * 0.8).toFixed(2);
  const fee = (gross * 0.2).toFixed(2);

  return (
    <motion.div variants={fadeUp} className="bento-card p-5 space-y-4">
      <div className="flex items-center gap-2">
        <Calculator className="h-4 w-4" style={{ color: "#B78A3A" }} />
        <h3 className="text-sm font-semibold" style={{ color: "#E6D8BE" }}>Simulador de Ganancias PPV</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Precio por desbloqueo ($)", value: price, min: 3, max: 200, set: setPrice },
          { label: "Suscriptores que pagan", value: buyers, min: 1, max: 2000, set: setBuyers },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5" style={{ color: "rgba(183,138,58,0.65)" }}>
              {f.label}
            </label>
            <input
              type="number"
              min={f.min}
              max={f.max}
              value={f.value}
              onChange={(e) => f.set(Number(e.target.value))}
              className="w-full rounded-xl px-3 py-2 text-sm font-bold border focus:outline-none transition"
              style={{
                background: "rgba(17,10,17,0.9)",
                borderColor: "rgba(90,35,72,0.4)",
                color: "#E6D8BE",
              }}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Total Bruto", value: `$${gross}`, color: "rgba(230,216,190,0.7)", bg: "rgba(17,10,17,0.9)", border: "rgba(90,35,72,0.3)" },
          { label: "OnlyFans 20%", value: `-$${fee}`, color: "#f87171", bg: "rgba(17,10,17,0.9)", border: "rgba(90,35,72,0.3)" },
          { label: "Tu 80% Neto", value: `$${net}`, color: "#B78A3A", bg: "rgba(183,138,58,0.08)", border: "rgba(183,138,58,0.3)" },
        ].map((r) => (
          <div key={r.label} className="rounded-xl border p-3 text-center" style={{ background: r.bg, borderColor: r.border }}>
            <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "rgba(230,216,190,0.35)" }}>{r.label}</p>
            <p className="text-base font-bold" style={{ color: r.color }}>{r.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// ─── Reddit Checklist ──────────────────────────────────────────────────────────
const RedditChecklist = () => {
  const items = [
    "Registro con correo de trabajo (sin vincular Apple/Google personal)",
    "Desactivar visibilidad en búsquedas externas (Privacidad)",
    "15 días de maduración antes de publicar contenido",
    "5–10 subreddits normales para generar karma",
    "Meta de 100 Karma alcanzada",
    "Limpieza: todos los posts neutros borrados",
  ];
  const [checked, setChecked] = useState(items.map(() => false));
  const done = checked.filter(Boolean).length;

  return (
    <motion.div variants={fadeUp} className="bento-card p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-4 w-4" style={{ color: "#B78A3A" }} />
          <h3 className="text-sm font-semibold" style={{ color: "#E6D8BE" }}>Checklist Reddit Sin Ban</h3>
        </div>
        <span className="text-[11px] font-bold" style={{ color: "rgba(230,216,190,0.4)" }}>{done}/{items.length}</span>
      </div>
      <div className="h-1.5 progress-track">
        <motion.div
          className="h-full progress-fill"
          animate={{ width: `${(done / items.length) * 100}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            onClick={() => setChecked((p) => p.map((v, j) => j === i ? !v : v))}
            className="flex items-start gap-2.5 rounded-lg p-2.5 text-xs cursor-pointer transition-colors"
            style={{ background: checked[i] ? "rgba(90,35,72,0.15)" : undefined }}
          >
            <div
              className="mt-0.5 h-4 w-4 shrink-0 rounded-md border flex items-center justify-center transition-all"
              style={checked[i]
                ? { background: "#B78A3A", borderColor: "#B78A3A", color: "#111011" }
                : { borderColor: "rgba(90,35,72,0.5)" }
              }
            >
              {checked[i] && <Check className="h-2.5 w-2.5" />}
            </div>
            <span style={{ color: checked[i] ? "rgba(230,216,190,0.3)" : "rgba(230,216,190,0.6)", textDecoration: checked[i] ? "line-through" : undefined }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

// ─── Payout Flow ───────────────────────────────────────────────────────────────
const PayoutFlow = () => (
  <motion.div variants={fadeUp} className="bento-card p-5 space-y-3">
    <div className="flex items-center gap-2">
      <DollarSign className="h-4 w-4" style={{ color: "#B78A3A" }} />
      <h3 className="text-sm font-semibold" style={{ color: "#E6D8BE" }}>Ruta de Cobro LATAM</h3>
    </div>
    <div className="flex flex-col sm:flex-row flex-wrap gap-2">
      {[
        { n: "1", label: "OnlyFans", sub: "Retiro desde $20 USD" },
        { n: "2", label: "Paxum / eWallet", sub: "Recepción directa" },
        { n: "3", label: "Binance P2P", sub: "USDT tasa óptima" },
        { n: "4", label: "Banco Local", sub: "Moneda local" },
      ].map((node, i, arr) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className="flex items-start gap-2 rounded-xl border p-3 flex-1 min-w-[120px]"
            style={{ background: "rgba(17,10,17,0.9)", borderColor: "rgba(90,35,72,0.35)" }}
          >
            <span
              className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold"
              style={{ background: "rgba(183,138,58,0.15)", border: "1px solid rgba(183,138,58,0.4)", color: "#B78A3A" }}
            >
              {node.n}
            </span>
            <div>
              <p className="text-xs font-semibold" style={{ color: "#E6D8BE" }}>{node.label}</p>
              <p className="text-[10px]" style={{ color: "rgba(230,216,190,0.4)" }}>{node.sub}</p>
            </div>
          </div>
          {i < arr.length - 1 && (
            <ArrowRight className="h-3.5 w-3.5 shrink-0 hidden sm:block" style={{ color: "rgba(183,138,58,0.4)" }} />
          )}
        </div>
      ))}
    </div>
  </motion.div>
);

// ─── Main Component ────────────────────────────────────────────────────────────
interface ModuleViewProps {
  module: CourseModule;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onNextModule?: () => void;
  onPrevModule?: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const ModuleView: React.FC<ModuleViewProps> = ({
  module, isCompleted, onToggleComplete,
  onNextModule, onPrevModule, hasNext, hasPrev,
}) => {
  const imgSrc = MODULE_IMAGES[module.number] || "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=900&q=80";

  return (
    <motion.div
      key={module.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-5 pb-28"
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <div
        className="relative overflow-hidden rounded-2xl min-h-[220px] sm:min-h-[280px] border"
        style={{ borderColor: "rgba(90,35,72,0.45)", background: "#0e070d" }}
      >
        {/* Background image */}
        <div className="absolute inset-0 img-container-overlay">
          <Image
            src={imgSrc}
            alt={module.subtitle}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            style={{ opacity: 0.18 }}
            priority={module.number === 0}
          />
        </div>

        {/* Decorative orbs */}
        <div className="orb-violet w-[500px] h-[500px] -right-32 -top-32" />
        <div className="orb-gold w-80 h-80 -left-16 bottom-0 opacity-60" />

        {/* Bottom gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(to top, #0e070d 0%, transparent 100%)" }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end h-full p-6 sm:p-8 min-h-[220px] sm:min-h-[280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-3"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="rounded-md px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] border"
                style={{ background: "rgba(183,138,58,0.12)", borderColor: "rgba(183,138,58,0.4)", color: "#B78A3A" }}
              >
                {module.number === 0 ? "Paso Obligatorio" : `Módulo ${module.number}`}
              </span>
              {module.badge && (
                <span
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium border"
                  style={{ background: "rgba(90,35,72,0.2)", borderColor: "rgba(90,35,72,0.4)", color: "rgba(230,216,190,0.6)" }}
                >
                  {module.badge}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight max-w-2xl" style={{ color: "#E6D8BE" }}>
              {module.title.replace(/^Módulo \d+:\s*/, "").replace(/^Paso Obligatorio:\s*/i, "")}
            </h1>

            <p className="font-display italic text-base sm:text-lg" style={{ color: "#B78A3A" }}>
              {module.subtitle}
            </p>

            <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(230,216,190,0.55)" }}>
              {module.summary}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onToggleComplete}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all border ${
                  isCompleted ? "" : "btn-gold"
                }`}
                style={isCompleted ? {
                  background: "rgba(90,35,72,0.25)",
                  borderColor: "rgba(183,138,58,0.4)",
                  color: "#B78A3A",
                } : {}}
              >
                <CheckCircle2 className={`h-4 w-4 ${isCompleted ? "" : "relative z-10"}`} />
                <span className={isCompleted ? "" : "relative z-10"}>
                  {isCompleted ? "Completado ✓" : "Marcar como completado"}
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── STEPS ─────────────────────────────────────────────────────────── */}
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-2.5">
        {module.steps.map((step, idx) => (
          <StepAccordion key={step.id} step={step} index={idx} />
        ))}
      </motion.div>

      {/* ── INTERACTIVE TOOLS ─────────────────────────────────────────────── */}
      <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-4">
        {module.number === 3 && <PPVCalculator />}
        {module.number === 5 && <RedditChecklist />}
        {module.number === 7 && <PayoutFlow />}
      </motion.div>

      {/* ── SUPPORT IMAGES ────────────────────────────────────────────────── */}
      {module.supportImages && module.supportImages.length > 0 && (
        <motion.div variants={fadeUp} className="bento-card p-5 space-y-4 mt-6">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" style={{ color: "#B78A3A" }} />
            <h3 className="text-sm font-semibold" style={{ color: "#E6D8BE" }}>Material de Apoyo</h3>
          </div>
          <div className={`grid gap-4 ${module.supportImages.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'}`}>
            {module.supportImages.map((src, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden border" style={{ borderColor: "rgba(90,35,72,0.3)", background: "rgba(17,10,17,0.5)" }}>
                <img
                  src={src}
                  alt={`Material de apoyo ${idx + 1}`}
                  className="w-full h-auto object-contain rounded-xl"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* ── NAVIGATION ─────────────────────────────────────────────────────── */}
      <div
        className="flex items-center justify-between pt-6 border-t"
        style={{ borderColor: "rgba(90,35,72,0.3)" }}
      >
        <button
          onClick={onPrevModule}
          disabled={!hasPrev}
          className={`btn-ghost flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold ${!hasPrev ? "opacity-20 cursor-not-allowed" : ""}`}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Anterior</span>
        </button>

        <button
          onClick={onNextModule}
          disabled={!hasNext}
          className={`btn-gold flex items-center gap-2 rounded-xl px-6 py-2.5 text-xs font-bold ${!hasNext ? "opacity-20 cursor-not-allowed" : ""}`}
        >
          <span className="relative z-10">Siguiente módulo</span>
          <ArrowRight className="h-4 w-4 relative z-10" />
        </button>
      </div>
    </motion.div>
  );
};
