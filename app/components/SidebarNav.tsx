"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck, Crown, UserCheck, Settings, Camera,
  Flame, MessageCircleHeart, DollarSign,
  CheckCircle2, Circle, X, ChevronRight, Lock
} from "lucide-react";
import { CourseModule } from "../data/course-data";

interface SidebarNavProps {
  modules: CourseModule[];
  activeModuleId: string;
  setActiveModuleId: (id: string) => void;
  completedModules: string[];
  toggleModuleComplete: (id: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (v: boolean) => void;
  userRole?: string;
  freeModuleIds?: string[];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="h-3.5 w-3.5" />,
  Crown: <Crown className="h-3.5 w-3.5" />,
  UserSecret: <UserCheck className="h-3.5 w-3.5" />,
  Settings: <Settings className="h-3.5 w-3.5" />,
  Camera: <Camera className="h-3.5 w-3.5" />,
  Flame: <Flame className="h-3.5 w-3.5" />,
  MessageCircleHeart: <MessageCircleHeart className="h-3.5 w-3.5" />,
  DollarSign: <DollarSign className="h-3.5 w-3.5" />,
};

const TimelineItem = ({
  mod, isActive, isCompleted, isLocked, onClick, onToggle, index,
}: {
  mod: CourseModule;
  isActive: boolean;
  isCompleted: boolean;
  isLocked: boolean;
  onClick: () => void;
  onToggle: (e: React.MouseEvent) => void;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.045, duration: 0.28 }}
    className={`relative flex gap-2.5 pl-1.5 ${isLocked ? 'opacity-75' : ''}`}
  >
    {/* Timeline dot */}
    <div className="relative z-10 flex flex-col items-center pt-3">
      <button
        onClick={onToggle}
        title={isCompleted ? "Marcar como no visto" : "Marcar como completado"}
        disabled={isLocked}
        className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 ${
          isLocked
            ? "border-[rgba(230,216,190,0.1)] text-[rgba(230,216,190,0.3)] cursor-not-allowed"
            : isCompleted
              ? "border-[#B78A3A] text-[#111011]"
              : isActive
                ? "border-[#5A2348]"
                : "border-[rgba(230,216,190,0.15)] hover:border-[rgba(90,35,72,0.5)]"
        }`}
        style={
          isLocked ? { background: "rgba(17,10,17,0.4)" } 
          : isCompleted ? { background: "#B78A3A" } 
          : isActive ? { background: "rgba(90,35,72,0.25)" } 
          : { background: "rgba(17,10,17,0.6)" }
        }
      >
        {isLocked ? (
          <Lock className="h-2.5 w-2.5" />
        ) : isCompleted ? (
          <CheckCircle2 className="h-3 w-3 text-[#111011]" />
        ) : (
          <Circle className="h-2.5 w-2.5" style={{ color: isActive ? "#5A2348" : "rgba(230,216,190,0.2)" }} />
        )}
      </button>
    </div>

    {/* Nav item */}
    <button
      onClick={onClick}
      className={`flex-1 text-left rounded-xl p-2.5 transition-all duration-200 group ${
        isActive ? "border" : "hover:bg-[rgba(90,35,72,0.08)]"
      }`}
      style={isActive ? {
        background: "rgba(90,35,72,0.18)",
        borderColor: "rgba(90,35,72,0.5)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      } : {}}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2">
          {/* Icon badge */}
          <span
            className="inline-flex items-center justify-center h-6 w-6 rounded-lg border shrink-0"
            style={isActive
              ? { background: "rgba(90,35,72,0.4)", borderColor: "rgba(183,138,58,0.4)", color: "#B78A3A" }
              : { background: "rgba(90,35,72,0.1)", borderColor: "rgba(90,35,72,0.3)", color: "rgba(230,216,190,0.45)" }
            }
          >
            {ICON_MAP[mod.iconName] ?? <Circle className="h-3 w-3" />}
          </span>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-wider"
              style={{ color: isActive ? "#B78A3A" : "rgba(230,216,190,0.35)" }}>
              {mod.number === 0 ? "Paso 0" : `Módulo ${mod.number}`}
            </p>
            <p className="text-xs leading-snug mt-0.5 line-clamp-2"
              style={{ color: isActive ? "#E6D8BE" : "rgba(230,216,190,0.5)" }}>
              {mod.subtitle}
            </p>
          </div>
        </div>
        {isActive && <ChevronRight className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: "#B78A3A" }} />}
      </div>
    </button>
  </motion.div>
);

const SidebarContent = ({
  modules, activeModuleId, setActiveModuleId,
  completedModules, toggleModuleComplete, setIsMobileOpen,
  userRole, freeModuleIds
}: Omit<SidebarNavProps, "isMobileOpen">) => (
  <div className="flex h-full flex-col">
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-4 border-b" style={{ borderColor: "rgba(90,35,72,0.35)" }}>
      <p className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(183,138,58,0.7)" }}>
        Programa del Curso
      </p>
      <button onClick={() => setIsMobileOpen(false)} className="btn-ghost rounded-md p-1 lg:hidden">
        <X className="h-4 w-4" />
      </button>
    </div>

    {/* List */}
    <div className="relative flex-1 overflow-y-auto px-3 py-4 space-y-0.5">
      <div className="timeline-line" />
      {modules.map((mod, idx) => {
        const isLocked = userRole === "free" && freeModuleIds && !freeModuleIds.includes(mod.id);
        return (
          <TimelineItem
            key={mod.id}
            mod={mod}
            index={idx}
            isActive={mod.id === activeModuleId}
            isCompleted={completedModules.includes(mod.id)}
            isLocked={!!isLocked}
            onClick={() => { setActiveModuleId(mod.id); setIsMobileOpen(false); }}
            onToggle={(e) => { e.stopPropagation(); toggleModuleComplete(mod.id); }}
          />
        );
      })}
    </div>

    {/* Footer */}
    <div className="px-4 py-3 border-t" style={{ borderColor: "rgba(90,35,72,0.3)" }}>
      <p className="text-[10px] text-center" style={{ color: "rgba(230,216,190,0.3)" }}>
        {completedModules.length}/{modules.length} completados
      </p>
    </div>
  </div>
);

export const SidebarNav: React.FC<SidebarNavProps> = ({
  modules, activeModuleId, setActiveModuleId,
  completedModules, toggleModuleComplete, isMobileOpen, setIsMobileOpen,
  userRole, freeModuleIds
}) => {
  const props = { modules, activeModuleId, setActiveModuleId, completedModules, toggleModuleComplete, setIsMobileOpen, userRole, freeModuleIds };
  return (
    <>
      <aside
        className="hidden lg:flex w-72 xl:w-80 shrink-0 flex-col sticky top-[57px] h-[calc(100dvh-57px)] border-r"
        style={{ background: "rgba(14,7,13,0.97)", borderColor: "rgba(90,35,72,0.35)" }}
      >
        <SidebarContent {...props} />
      </aside>

      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.aside key="drawer"
              initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 380, damping: 36 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] border-r lg:hidden"
              style={{ background: "rgba(14,7,13,0.99)", borderColor: "rgba(90,35,72,0.4)" }}
            >
              <SidebarContent {...props} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
