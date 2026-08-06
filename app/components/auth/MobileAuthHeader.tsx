import Image from "next/image";

interface MobileAuthHeaderProps {
  isLogin: boolean;
}

export function MobileAuthHeader({ isLogin }: MobileAuthHeaderProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#1c101c]/90 border border-[var(--violet-border)] shadow-lg">
      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[var(--gold-border)] shadow-md bg-[#100810]">
        <Image
          src={isLogin ? "/images/auth_welcome_v2.png" : "/images/auth_register_v2.png"}
          alt="Avatar"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
      <div className="flex flex-col min-w-0">
        <h1 className="font-display text-base font-bold text-[#f7e7ce] truncate">
          {isLogin ? "¡Bienvenida de vuelta!" : "¡Empieza tu Viaje!"}
        </h1>
        <p className="text-[11px] text-[var(--ivory-muted)] leading-tight">
          {isLogin ? "Inicia sesión para continuar" : "Completa tus datos para empezar"}
        </p>
      </div>
    </div>
  );
}
