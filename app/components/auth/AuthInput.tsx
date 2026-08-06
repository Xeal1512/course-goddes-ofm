import { LucideIcon } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

interface AuthInputProps extends ComponentPropsWithoutRef<"input"> {
  label: string;
  icon: LucideIcon;
}

export function AuthInput({ label, icon: Icon, ...props }: AuthInputProps) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-semibold text-[var(--ivory-muted)] flex items-center gap-1.5">
        <Icon size={13} className="text-[var(--gold)]" />
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-xl bg-[#201220] border border-[#3d1d36] text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-[var(--gold)] focus:ring-1 focus:ring-[var(--gold)] transition-all"
      />
    </div>
  );
}
