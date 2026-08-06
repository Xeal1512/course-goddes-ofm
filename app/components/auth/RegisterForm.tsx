"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, UserPlus, ArrowRight } from "lucide-react";
import { AuthInput } from "./AuthInput";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { signupAction } from "@/app/auth/actions";

export function RegisterForm() {
  return (
    <motion.div
      key="register-content"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="my-auto space-y-4"
    >
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold text-[#f7e7ce] tracking-tight mb-1">
          ¡Empieza tu Viaje!
        </h1>
        <p className="text-xs text-[var(--ivory-muted)]">
          Completa tus datos para crear tu cuenta
        </p>
      </div>

      <GoogleAuthButton label="Regístrate con Google" />

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-[var(--violet-border)] opacity-60" />
        <span className="flex-shrink-0 mx-3 text-[10px] uppercase font-bold tracking-widest text-[var(--ivory-muted)]">
          O CON CORREO
        </span>
        <div className="flex-grow border-t border-[var(--violet-border)] opacity-60" />
      </div>

      <form action={signupAction} className="space-y-3">
        <AuthInput
          label="Nombre Completo"
          icon={User}
          name="fullName"
          type="text"
          placeholder="María García"
          required
        />

        <AuthInput
          label="Correo electrónico"
          icon={Mail}
          name="email"
          type="email"
          placeholder="maria.garcia@email.com"
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
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#b58737] via-[#d4a74e] to-[#b58737] hover:brightness-110 text-[#120b12] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#b58737]/25 transition-all cursor-pointer mt-1"
        >
          <UserPlus size={16} /> Crear mi Cuenta <ArrowRight size={14} />
        </button>
      </form>
    </motion.div>
  );
}
