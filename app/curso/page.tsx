"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";
import { Award } from "lucide-react";
import { Header } from "../components/Header";
import { MandatoryBanner } from "../components/MandatoryBanner";
import { SidebarNav } from "../components/SidebarNav";
import { ModuleView } from "../components/ModuleView";
import { PaywallView } from "../components/PaywallView";
import { CertificateModal } from "../components/CertificateModal";
import { StickyRegistrationCTA } from "../components/StickyRegistrationCTA";
import { COURSE_MODULES } from "../data/course-data";
import { createClient } from "@/utils/supabase/client";

const LS_KEY = "goddess_ofm_completed_v2";

export default function CursoPage() {
  const router = useRouter();
  const [activeId, setActiveId] = useState("paso-obligatorio");
  const [completed, setCompleted] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Estado de usuario, rol y certificado
  const [userRole, setUserRole] = useState<"free" | "premium" | "admin">("free");
  const [userId, setUserId] = useState<string | undefined>(undefined);
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [showCertificate, setShowCertificate] = useState(false);

  // Lista de módulos gratuitos
  const FREE_MODULE_IDS = ["paso-obligatorio", "modulo-1", "modulo-2"];

  useEffect(() => {
    async function checkUserSession() {
      try {
        const supabase = createClient();
        const { data: { user } } = await supabase.auth.getUser();

        if (!user) {
          router.push("/login");
          return;
        }

        setUserId(user.id);
        setUserEmail(user.email);

        const { data: profile } = await supabase
          .from("users")
          .select("role")
          .eq("id", user.id)
          .single();

        if (profile?.role) {
          setUserRole(profile.role as "free" | "premium" | "admin");
        }
      } catch (err) {
        console.error("Auth check error:", err);
      } finally {
        setLoadingAuth(false);
      }
    }

    checkUserSession();
  }, [router]);

  useEffect(() => {
    async function loadProgress() {
      if (!userId) return;
      try {
        const supabase = createClient();
        const { data, error } = await supabase
          .from("progress")
          .select("module_id")
          .eq("user_id", userId)
          .eq("status", "completed");
          
        if (data && !error) {
          const parsed = data.map(d => d.module_id);
          setCompleted(parsed);
          
          if (parsed.length === COURSE_MODULES.length && COURSE_MODULES.length > 0) {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
            });
          }
        }
      } catch (err) {
        console.error("Error loading progress:", err);
      }
    }
    loadProgress();
  }, [userId]);

  const toggleComplete = async (id: string) => {
    if (!userId) return;
    const isNowCompleted = !completed.includes(id);

    setCompleted((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];

      // Si recién acaba de completar el último módulo
      if (next.length === COURSE_MODULES.length && prev.length < COURSE_MODULES.length) {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
        });
        setShowCertificate(true);
      }

      return next;
    });

    const supabase = createClient();
    if (!isNowCompleted) {
      await supabase.from("progress").delete().eq("user_id", userId).eq("module_id", id);
    } else {
      await supabase.from("progress").insert({ user_id: userId, module_id: id, status: "completed" });
    }
  };

  const filtered = useMemo(() => COURSE_MODULES.filter((m) => {
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
  }), [searchQuery]);

  const activeIdx = useMemo(() => COURSE_MODULES.findIndex((m) => m.id === activeId), [activeId]);
  const activeModule = COURSE_MODULES[activeIdx] ?? COURSE_MODULES[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeId]);

  const goNext = () => {
    if (activeIdx < COURSE_MODULES.length - 1) {
      setActiveId(COURSE_MODULES[activeIdx + 1].id);
    }
  };
  const goPrev = () => {
    if (activeIdx > 0) {
      setActiveId(COURSE_MODULES[activeIdx - 1].id);
    }
  };

  const isModuleLocked = userRole === "free" && !FREE_MODULE_IDS.includes(activeModule.id);
  const allCompleted = completed.length === COURSE_MODULES.length;

  if (loadingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111011] text-[var(--gold-bright)]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[var(--gold)] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--ivory-muted)]">
            Cargando tus clases...
          </span>
        </div>
      </div>
    );
  }

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
          userRole={userRole}
          freeModuleIds={FREE_MODULE_IDS}
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

              {/* Botón de Certificación cuando completa el 100% */}
              {allCompleted && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1c0f1c] via-[#2d152d] to-[#1c0f1c] border border-[var(--gold-border)] flex items-center justify-between shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--gold-dim)] border border-[var(--gold)] flex items-center justify-center text-[var(--gold-bright)] shrink-0">
                      <Award size={22} />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-sm text-[#f7e7ce]">¡Felicidades! Has completado el curso</h3>
                      <p className="text-xs text-[var(--ivory-muted)]">Reclama tu certificado oficial descargable en PDF</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowCertificate(true)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#b58737] to-[#d4a74e] text-[#120b12] text-xs font-bold hover:brightness-110 transition-all cursor-pointer whitespace-nowrap"
                  >
                    Ver Certificado
                  </button>
                </div>
              )}

              {isModuleLocked ? (
                <PaywallView moduleTitle={activeModule.title} userId={userId} />
              ) : (
                <ModuleView
                  module={activeModule}
                  userId={userId}
                  isCompleted={completed.includes(activeModule.id)}
                  onToggleComplete={() => toggleComplete(activeModule.id)}
                  onNextModule={goNext}
                  onPrevModule={goPrev}
                  hasNext={activeIdx < COURSE_MODULES.length - 1}
                  hasPrev={activeIdx > 0}
                />
              )}
            </div>
          )}
        </main>
      </div>

      {/* Modal de Certificado */}
      {showCertificate && (
        <CertificateModal
          userName={userEmail?.split("@")[0] || "Estudiante Goddess"}
          onClose={() => setShowCertificate(false)}
        />
      )}

      <StickyRegistrationCTA />
    </div>
  );
}
