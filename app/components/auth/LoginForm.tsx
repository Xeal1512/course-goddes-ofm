"use client";

import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { AuthInput } from "./AuthInput";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { loginAction } from "@/app/auth/actions";

export function LoginForm() {
  return (
    <motion.div
      key="login-content"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="my-auto space-y-5"
    >
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-[#f7e7ce] tracking-tight mb-1">
          ¡Bienvenida de vuelta!
        </h1>
        <p className="text-xs text-[var(--ivory-muted)]">
          Inicia sesión para continuar tu progreso
        </p>
      </div>

      <GoogleAuthButton label="Continuar con Google" />

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-[var(--violet-border)] opacity-60" />
        <span className="flex-shrink-0 mx-3 text-[10px] uppercase font-bold tracking-widest text-[var(--ivory-muted)]">
          O CON CORREO
        </span>
        <div className="flex-grow border-t border-[var(--violet-border)] opacity-60" />
      </div>

      <form action={loginAction} className="space-y-3.5">
        <AuthInput
          label="Correo electrónico"
          icon={Mail}
          name="email"
          type="email"
          placeholder="tu@email.com"
          required
        />

        <AuthInput
          label="Contraseña"
          icon={Lock}
          name="password"
          type="password"
          placeholder="••••••••"
          required
        />

        <button
          type="submit"
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#b58737] via-[#d4a74e] to-[#b58737] hover:brightness-110 text-[#120b12] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#b58737]/25 transition-all cursor-pointer pt-3"
        >
          <LogIn size={16} /> Ingresar al curso <ArrowRight size={14} />
        </button>
      </form>
    </motion.div>
  );
}
