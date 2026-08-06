"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface AuthSlidingImageProps {
  isLogin: boolean;
}

export function AuthSlidingImage({ isLogin }: AuthSlidingImageProps) {
  return (
    <motion.div
      animate={{ x: isLogin ? "0%" : "-100%" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-1/2 h-full absolute top-0 right-0 z-10 overflow-hidden border-l border-[var(--violet-border)] bg-[#100810]"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={isLogin ? "welcome-img" : "register-img"}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="w-full h-full relative"
        >
          <Image
            src={isLogin ? "/images/auth_welcome_v2.png" : "/images/auth_register_v2.png"}
            alt={isLogin ? "Bienvenida de vuelta" : "Empieza tu viaje"}
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#130b14]/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#140b14]/85 backdrop-blur-md border border-[var(--violet-border)] shadow-lg">
            <p className="text-xs text-[var(--ivory)] font-medium italic font-display text-center">
              {isLogin
                ? "“¡Qué gusto verte de nuevo! Continúa tu camino al éxito.”"
                : "“Da el primer paso hoy. Tu futuro financiero te espera.”"}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
