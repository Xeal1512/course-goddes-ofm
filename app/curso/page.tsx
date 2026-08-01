"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { MandatoryBanner } from "../components/MandatoryBanner";
import { SidebarNav } from "../components/SidebarNav";
import { ModuleView } from "../components/ModuleView";
import { StickyRegistrationCTA } from "../components/StickyRegistrationCTA";
import { COURSE_MODULES } from "../data/course-data";

const LS_KEY = "goddess_ofm_completed_v2";

export default function CursoPage() {
  const [activeId, setActiveId] = useState("paso-obligatorio");
  const [completed, setCompleted] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) setCompleted(JSON.parse(saved));
    } catch {}
  }, []);

  const toggleComplete = (id: string) => {
    setCompleted((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try { localStorage.setItem(LS_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };

  const filtered = COURSE_MODULES.filter((m) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      m.summary.toLowerCase().includes(q) ||
      m.steps.some(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.details?.some((d) => d.toLowerCase().includes(q))
      )
    );
  });

  const activeIdx = COURSE_MODULES.findIndex((m) => m.id === activeId);
  const activeModule = COURSE_MODULES[activeIdx] ?? COURSE_MODULES[0];

  const goNext = () => {
    if (activeIdx < COURSE_MODULES.length - 1) {
      setActiveId(COURSE_MODULES[activeIdx + 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  const goPrev = () => {
    if (activeIdx > 0) {
      setActiveId(COURSE_MODULES[activeIdx - 1].id);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-dvh flex flex-col" style={{ background: "#111011" }}>
      <Header
        completedCount={completed.length}
        totalModules={COURSE_MODULES.length}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleMobileMenu={() => setMobileOpen((v) => !v)}
      />

      <div className="flex flex-1 max-w-screen-2xl w-full mx-auto">
        <SidebarNav
          modules={filtered}
          activeModuleId={activeId}
          setActiveModuleId={setActiveId}
          completedModules={completed}
          toggleModuleComplete={toggleComplete}
          isMobileOpen={mobileOpen}
          setIsMobileOpen={setMobileOpen}
        />

        <main className="flex-1 min-w-0 px-4 py-6 sm:px-6 lg:px-8 xl:px-10">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <p className="text-sm" style={{ color: "rgba(230,216,190,0.4)" }}>
                No se encontraron módulos para
              </p>
              <p className="font-display italic mt-1" style={{ color: "rgba(230,216,190,0.7)" }}>
                &ldquo;{searchQuery}&rdquo;
              </p>
            </div>
          ) : (
            <div className="max-w-3xl space-y-6">
              <MandatoryBanner />
              <ModuleView
                module={activeModule}
                isCompleted={completed.includes(activeModule.id)}
                onToggleComplete={() => toggleComplete(activeModule.id)}
                onNextModule={goNext}
                onPrevModule={goPrev}
                hasNext={activeIdx < COURSE_MODULES.length - 1}
                hasPrev={activeIdx > 0}
              />
            </div>
          )}
        </main>
      </div>

      <StickyRegistrationCTA />
    </div>
  );
}
