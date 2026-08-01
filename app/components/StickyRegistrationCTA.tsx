"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Crown, X } from "lucide-react";
import { REFERRAL_LINK } from "../data/course-data";

export const StickyRegistrationCTA: React.FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 28, delay: 2 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-2xl"
          aria-label="Registro de creadora OnlyFans"
        >
          <div
            className="rounded-2xl px-4 py-3 border shadow-2xl"
            style={{
              background: "rgba(20,10,18,0.97)",
              backdropFilter: "blur(20px)",
              borderColor: "rgba(183,138,58,0.35)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(90,35,72,0.3)",
            }}
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className="h-8 w-8 shrink-0 flex items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg, #5A2348, #7a3060)" }}
                >
                  <Crown className="h-4 w-4" style={{ color: "#B78A3A" }} />
                </div>
                <p className="text-xs font-medium truncate" style={{ color: "rgba(230,216,190,0.75)" }}>
                  Regístrate mediante el{" "}
                  <span className="font-bold" style={{ color: "#B78A3A" }}>enlace oficial Goddess OFM</span>
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={REFERRAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold flex items-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-bold"
                >
                  <span className="relative z-10 hidden sm:inline">Registrarme</span>
                  <ExternalLink className="h-3.5 w-3.5 relative z-10" />
                </a>
                <button
                  onClick={() => setVisible(false)}
                  className="btn-ghost rounded-lg p-1.5"
                  aria-label="Cerrar"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
