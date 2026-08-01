"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Copy, CheckCircle2, Zap } from "lucide-react";
import { REFERRAL_LINK } from "../data/course-data";

export const MandatoryBanner: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(REFERRAL_LINK);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative overflow-hidden rounded-2xl"
      style={{
        background: "rgba(26, 12, 22, 0.9)",
        border: "1px solid rgba(183,138,58,0.3)",
        boxShadow: "0 0 32px rgba(90,35,72,0.2), inset 0 1px 0 rgba(230,216,190,0.04)",
      }}
    >
      {/* Left accent stripe */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl"
        style={{ background: "linear-gradient(to bottom, #B78A3A, #5A2348, #B78A3A)" }}
      />

      {/* Decorative orbs */}
      <div className="orb-gold w-72 h-72 -right-16 -top-16" />
      <div className="orb-violet w-48 h-48 -left-8 bottom-0" />

      <div className="relative px-6 py-4 pl-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Left */}
          <div className="flex items-start gap-3.5">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
              style={{ background: "rgba(183,138,58,0.12)", borderColor: "rgba(183,138,58,0.35)", color: "#B78A3A" }}
            >
              <Zap className="h-4 w-4" />
            </div>
            <div>
              <span
                className="text-[10px] font-bold uppercase tracking-[0.14em] block mb-1"
                style={{ color: "#B78A3A" }}
              >
                📌 Paso Obligatorio Inicial
              </span>
              <p className="text-sm leading-relaxed max-w-xl" style={{ color: "rgba(230,216,190,0.8)" }}>
                Regístrate mediante el{" "}
                <span className="font-semibold" style={{ color: "#E6D8BE" }}>
                  enlace oficial Goddess OFM
                </span>{" "}
                para vincular tu cuenta a la red estratégica y desbloquear todos los beneficios.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="btn-ghost flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-medium"
            >
              {copied ? (
                <><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /><span className="text-emerald-400">Copiado</span></>
              ) : (
                <><Copy className="h-3.5 w-3.5" /><span>Copiar link</span></>
              )}
            </button>

            <a
              href={REFERRAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-bold"
            >
              <span>Registrarme en OnlyFans</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
