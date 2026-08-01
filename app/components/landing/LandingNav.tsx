"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Crown, ArrowRight } from "lucide-react";
import { REFERRAL_LINK } from "../../data/course-data";

export function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(17,10,17,0.97)"
          : "rgba(17,10,17,0.6)",
        backdropFilter: "blur(20px)",
        borderColor: scrolled
          ? "rgba(90,35,72,0.5)"
          : "rgba(90,35,72,0.2)",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.4)"
          : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-xl"
            style={{ background: "linear-gradient(135deg, #5A2348, #7a3060)" }}
          >
            <Crown className="h-4 w-4" style={{ color: "#B78A3A" }} />
          </div>
          <span
            className="font-display font-bold text-sm tracking-wider"
            style={{ color: "#E6D8BE" }}
          >
            GODDESS <span className="text-gold-shimmer">OFM</span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/curso"
            className="btn-ghost rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer"
          >
            Ir al curso
          </Link>
          <a
            href={REFERRAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer"
          >
            <span className="relative z-10">Empezar</span>
            <ArrowRight className="h-3.5 w-3.5 relative z-10" />
          </a>
        </div>
      </div>
    </nav>
  );
}
