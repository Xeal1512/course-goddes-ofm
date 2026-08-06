"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import { AuthSlidingImage } from "./AuthSlidingImage";
import { MobileAuthHeader } from "./MobileAuthHeader";

interface AuthFormProps {
  initialMode?: "login" | "register";
}

export function AuthForm({ initialMode = "login" }: AuthFormProps) {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const isLogin = mode === "login";

  const toggleMode = () => {
    setMode((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-2 sm:p-6 md:p-8 relative overflow-hidden bg-[#0a070a]">
      {/* Background ambient glowing orbs */}
      <div className="orb-violet w-[750px] h-[750px] -top-48 -left-48 opacity-40 blur-3xl" />
      <div className="orb-gold w-[650px] h-[650px] -bottom-48 -right-48 opacity-35 blur-3xl" />

      {/* Main Outer Container */}
      <div className="w-full max-w-4xl bg-[#130b14]/95 backdrop-blur-2xl border border-[var(--violet-border)] rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative z-10 min-h-auto md:min-h-[660px] flex flex-col md:flex-row">
        
        {/* DESKTOP SLIDING LAYOUT */}
        <div className="hidden md:flex w-full h-full min-h-[660px] relative overflow-hidden">
          
          {/* SLIDING FORM PANEL */}
          <motion.div
            animate={{ x: isLogin ? "0%" : "100%" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="w-1/2 h-full absolute top-0 left-0 p-8 flex flex-col justify-between z-20 bg-[#130b14]"
          >
            <div className="flex flex-col h-full justify-between">
              {/* Top Bar */}
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--violet-border)] text-xs text-[var(--ivory-muted)] hover:text-white hover:border-[var(--gold-border)] transition-all bg-[var(--violet-dim)]"
                >
                  <ChevronLeft size={14} /> Back
                </Link>
                <span className="text-[10px] font-bold tracking-widest text-[var(--gold-bright)] uppercase bg-[var(--gold-dim)] px-2.5 py-1 rounded-full border border-[var(--gold-border)]">
                  {isLogin ? "Acceso Seguro" : "Registro Gratuito"}
                </span>
              </div>

              {/* Form Content Switcher */}
              <AnimatePresence mode="wait">
                {isLogin ? <LoginForm /> : <RegisterForm />}
              </AnimatePresence>

              {/* Bottom Toggle Link */}
              <div className="text-center pt-3 border-t border-white/5">
                <p className="text-xs text-[var(--ivory-muted)]">
                  {isLogin ? "¿No tienes una cuenta?" : "¿Ya tienes cuenta?"}{" "}
                  <button
                    onClick={toggleMode}
                    className="text-[var(--gold-bright)] font-bold hover:underline cursor-pointer ml-1 inline-flex items-center gap-1"
                  >
                    {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
                  </button>
                </p>
              </div>
            </div>
          </motion.div>

          {/* SLIDING IMAGE PANEL */}
          <AuthSlidingImage isLogin={isLogin} />
        </div>

        {/* MOBILE RESPONSIVE LAYOUT */}
        <div className="flex md:hidden flex-col w-full p-4 space-y-3">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-[var(--violet-border)] text-xs text-[var(--ivory-muted)] bg-[var(--violet-dim)]"
            >
              <ChevronLeft size={13} /> Back
            </Link>
            <span className="text-[9px] font-bold text-[var(--gold-bright)] uppercase tracking-wider bg-[var(--gold-dim)] px-2.5 py-1 rounded-full border border-[var(--gold-border)] whitespace-nowrap">
              {isLogin ? "Acceso Seguro" : "Registro Gratuito"}
            </span>
          </div>

          <MobileAuthHeader isLogin={isLogin} />

          <AnimatePresence mode="wait">
            <div className="space-y-3">
              {isLogin ? <LoginForm /> : <RegisterForm />}

              <div className="text-center pt-1">
                <button
                  onClick={toggleMode}
                  className="text-xs text-[var(--gold-bright)] font-bold hover:underline cursor-pointer"
                >
                  {isLogin ? "¿No tienes cuenta? Regístrate aquí" : "¿Ya tienes cuenta? Inicia sesión aquí"}
                </button>
              </div>
            </div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
