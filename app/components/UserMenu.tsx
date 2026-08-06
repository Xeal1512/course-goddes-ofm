"use client";

import { useEffect, useState, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { LogOut, LayoutDashboard, Crown } from "lucide-react";
import { useRouter } from "next/navigation";

export function UserMenu() {
  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<string>("free");
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    
    async function fetchUser() {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setUser(session.user);
        const { data: profile, error } = await supabase.from("users").select("role").eq("id", session.user.id).single();
        if (error) {
          console.error("Error fetching role:", error);
        }
        if (profile) {
          console.log("Rol obtenido de BD:", profile.role);
          setRole(profile.role);
        }
      }
      setLoading(false);
    }
    
    fetchUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (!session?.user) setRole("free");
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return <div className="w-9 h-9 rounded-full bg-[#5A2348]/20 animate-pulse border border-[#5A2348]/40" />;
  }

  if (!user) {
    return (
      <Link href="/login" className="btn-ghost rounded-xl px-4 py-2 text-xs font-semibold cursor-pointer">
        Iniciar Sesión
      </Link>
    );
  }

  const initial = user.email ? user.email.charAt(0).toUpperCase() : "U";

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-[#b58737] to-[#8a6327] border border-[var(--gold)] shadow-lg hover:brightness-110 transition-all focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:ring-offset-2 focus:ring-offset-[#111011]"
      >
        <span className="text-white text-sm font-bold">{initial}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-xl border border-[var(--gold-border)] bg-[#1c0f1c]/95 backdrop-blur-xl shadow-2xl overflow-hidden z-50">
          <div className="px-4 py-3 border-b border-[#5A2348]/40 flex flex-col gap-1">
            <p className="text-sm font-medium text-[var(--gold-bright)] truncate">
              {user.user_metadata?.full_name || "Estudiante"}
            </p>
            <p className="text-xs text-[var(--ivory-muted)] truncate">{user.email}</p>
            
            {/* Etiqueta de Rol */}
            <div className="mt-1 flex items-center gap-1.5 w-fit rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-[#5A2348]/40 border border-[#5A2348]">
              {role === "premium" || role === "admin" ? (
                <Crown className="w-3 h-3 text-[#B78A3A]" />
              ) : null}
              <span className={role === "premium" || role === "admin" ? "text-[#B78A3A]" : "text-[var(--ivory-muted)]"}>
                {role === "admin" ? "Admin" : role === "premium" ? "Premium" : "Gratis"}
              </span>
            </div>
          </div>
          
          <div className="p-1">
            <Link
              href="/curso"
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-[#E6D8BE] hover:bg-[#5A2348]/30 rounded-lg transition-colors w-full text-left"
              onClick={() => setOpen(false)}
            >
              <LayoutDashboard size={16} />
              Ir al Curso
            </Link>
            
            {role === "admin" && (
              <Link
                href="/admin"
                className="flex items-center gap-2 px-3 py-2.5 text-sm text-[var(--gold-bright)] hover:bg-[#5A2348]/30 rounded-lg transition-colors w-full text-left"
                onClick={() => setOpen(false)}
              >
                <Crown size={16} />
                Panel Admin
              </Link>
            )}
            
            <button
              onClick={() => {
                setOpen(false);
                handleSignOut();
              }}
              className="flex items-center gap-2 px-3 py-2.5 text-sm text-red-400 hover:bg-red-400/10 rounded-lg transition-colors w-full text-left"
            >
              <LogOut size={16} />
              Cerrar Sesión
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
