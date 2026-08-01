"use client";

import { motion } from "framer-motion";
import { Crown, Send, Menu, Search, TrendingUp } from "lucide-react";
import { TELEGRAM_LINK, TELEGRAM_CONTACT } from "../data/course-data";

interface HeaderProps {
  completedCount: number;
  totalModules: number;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  toggleMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  completedCount, totalModules, searchQuery, setSearchQuery, toggleMobileMenu,
}) => {
  const pct = Math.round((completedCount / totalModules) * 100);

  return (
    <header className="sticky top-0 z-50 glass border-b border-[#5A2348]/40">
      <div className="mx-auto flex max-w-screen-2xl items-center gap-4 px-4 py-3 sm:px-6">
        {/* Mobile toggle */}
        <button onClick={toggleMobileMenu} className="btn-ghost rounded-lg p-2 lg:hidden">
          <Menu className="h-4 w-4" />
        </button>

        {/* Brand mark */}
        <div className="flex items-center gap-3">
          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-xl shadow-lg"
            style={{ background: "linear-gradient(135deg, #5A2348, #7a3060)" }}
          >
            <Crown className="h-4 w-4" style={{ color: "#B78A3A" }} />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-bold tracking-wider" style={{ color: "#E6D8BE" }}>
              GODDESS <span className="text-gold-shimmer">OFM</span>
            </p>
            <p className="font-display italic text-[10px]" style={{ color: "rgba(230,216,190,0.45)" }}>
              Crea dinero de forma discreta.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5" style={{ color: "rgba(230,216,190,0.3)" }} />
            <input
              type="search"
              placeholder="Buscar en el curso…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border pl-9 pr-4 py-1.5 text-xs transition focus:outline-none focus:ring-1"
              style={{
                background: "rgba(90,35,72,0.12)",
                borderColor: "rgba(90,35,72,0.4)",
                color: "#E6D8BE",
                boxShadow: undefined,
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = "rgba(183,138,58,0.5)";
                e.currentTarget.style.boxShadow = "0 0 0 1px rgba(183,138,58,0.2)";
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(90,35,72,0.4)";
                e.currentTarget.style.boxShadow = "none";
              }}
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-3">
          {/* Progress */}
          <div
            className="hidden sm:flex items-center gap-2.5 rounded-full px-3 py-1.5 border"
            style={{ background: "rgba(90,35,72,0.15)", borderColor: "rgba(90,35,72,0.45)" }}
          >
            <TrendingUp className="h-3.5 w-3.5" style={{ color: "#B78A3A" }} />
            <div className="w-20 progress-track h-1.5">
              <motion.div
                className="progress-fill h-full"
                initial={{ width: 0 }}
                animate={{ width: `${pct}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
            <span className="text-[11px] font-bold tabular-nums" style={{ color: "#B78A3A" }}>
              {pct}%
            </span>
          </div>

          {/* Telegram */}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-medium"
          >
            <Send className="h-3 w-3 text-sky-400" />
            <span className="hidden sm:inline" style={{ color: "rgba(230,216,190,0.6)" }}>Soporte</span>
          </a>
        </div>
      </div>
    </header>
  );
};
