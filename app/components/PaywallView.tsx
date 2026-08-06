"use client";

import { useState } from "react";
import { Lock, Upload, CheckCircle2, Copy, ShieldCheck, Sparkles, Image as ImageIcon } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface PaywallViewProps {
  moduleTitle: string;
  userId?: string;
}

export function PaywallView({ moduleTitle, userId }: PaywallViewProps) {
  const [selectedMethod, setSelectedMethod] = useState<"binance" | "local_bank">("binance");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const binancePayId = "249182391"; // ID o Wallet Binance por defecto

  const copyBinance = () => {
    navigator.clipboard.writeText(binancePayId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setErrorMsg("Por favor adjunta una captura de pantalla del comprobante.");
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const supabase = createClient();

      // 1. Obtener usuario si no viene prop
      let uid = userId;
      if (!uid) {
        const { data: { user } } = await supabase.auth.getUser();
        uid = user?.id;
      }

      if (!uid) {
        setErrorMsg("Debes iniciar sesión para registrar tu pago.");
        setLoading(false);
        return;
      }

      // 2. Subir imagen a Supabase Storage (bucket 'receipts')
      const fileExt = file.name.split(".").pop();
      const filePath = `${uid}/${Date.now()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("receipts")
        .upload(filePath, file);

      if (uploadError) {
        // Fallback si el bucket requiere configuración previa
        console.warn("Storage upload warn:", uploadError);
      }

      // Obtener URL del comprobante
      const { data: urlData } = supabase.storage.from("receipts").getPublicUrl(filePath);
      const proofUrl = urlData?.publicUrl || filePath;

      // 3. Crear registro de pago en tabla `payments`
      const { error: dbError } = await supabase.from("payments").insert({
        user_id: uid,
        amount: 50.0,
        currency: selectedMethod === "binance" ? "USDT" : "USD",
        payment_method: selectedMethod === "binance" ? "binance_manual" : "local_bank",
        proof_data: proofUrl,
        status: "pending",
      });

      if (dbError) {
        throw new Error(dbError.message);
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMsg(err.message || "Error al enviar el comprobante. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="glass-elevated p-8 sm:p-12 rounded-3xl text-center max-w-xl mx-auto border border-[var(--gold-border)] space-y-6 shadow-2xl animate-hero-in">
        <div className="w-16 h-16 rounded-full bg-[var(--gold-dim)] border border-[var(--gold)] flex items-center justify-center mx-auto text-[var(--gold-bright)]">
          <CheckCircle2 size={36} />
        </div>
        <div className="space-y-2">
          <h2 className="font-display text-2xl font-bold text-[#f7e7ce]">¡Comprobante Recibido!</h2>
          <p className="text-sm text-[var(--ivory-muted)]">
            Tu pago se encuentra en estado <strong className="text-[var(--gold-bright)]">Pendiente de Revisión</strong>. 
            Tan pronto verifiquemos tu transacción en Binance, se desbloquearán automáticamente todos los módulos restantes.
          </p>
        </div>
        <div className="p-4 rounded-xl bg-[#201220] border border-[var(--violet-border)] text-xs text-[var(--ivory-subtle)]">
          Tiempo estimado de aprobación: <strong>5 a 30 minutos</strong>.
        </div>
      </div>
    );
  }

  return (
    <div className="glass-elevated p-6 sm:p-10 rounded-3xl border border-[var(--violet-border)] relative overflow-hidden shadow-2xl max-w-2xl mx-auto my-4">
      {/* Background ambient glow */}
      <div className="orb-gold w-96 h-96 -top-20 -right-20 opacity-20 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-dim)] border border-[var(--gold-border)] text-[var(--gold-bright)] text-xs font-bold uppercase tracking-wider">
          <Lock size={13} /> Módulo Bloqueado
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#f7e7ce]">
          Desbloquea el Acceso Premium
        </h2>
        <p className="text-xs sm:text-sm text-[var(--ivory-muted)] max-w-md mx-auto">
          Estás intentando acceder a <strong className="text-white">&ldquo;{moduleTitle}&rdquo;</strong>. Para acceder a todo el contenido exclusivo del curso, realiza tu pago único de por vida.
        </p>
      </div>

      {/* Pricing Pill */}
      <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-[#201020] via-[#2d152d] to-[#201020] border border-[var(--gold-border)] flex items-center justify-between shadow-inner">
        <div>
          <span className="text-xs uppercase tracking-wider text-[var(--gold-bright)] font-bold block">
            Acceso Completo de por Vida
          </span>
          <span className="text-xs text-[var(--ivory-muted)]">Sin mensualidades ni cobros ocultos</span>
        </div>
        <div className="text-right">
          <span className="font-display text-3xl font-extrabold text-gold-shimmer">$50</span>
          <span className="text-xs text-[var(--gold-bright)] font-bold ml-1">USDT</span>
        </div>
      </div>

      {/* Payment Instructions Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Method Selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[var(--ivory-muted)] uppercase tracking-wider block">
            1. Selecciona tu método de pago
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setSelectedMethod("binance")}
              className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                selectedMethod === "binance"
                  ? "bg-[var(--gold-dim)] border-[var(--gold)] text-[var(--gold-bright)] shadow-md"
                  : "bg-[#1c101c] border-[var(--violet-border)] text-[var(--ivory-muted)] hover:border-white/30"
              }`}
            >
              <Sparkles size={14} /> Binance Pay (USDT)
            </button>

            <button
              type="button"
              onClick={() => setSelectedMethod("local_bank")}
              className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                selectedMethod === "local_bank"
                  ? "bg-[var(--gold-dim)] border-[var(--gold)] text-[var(--gold-bright)] shadow-md"
                  : "bg-[#1c101c] border-[var(--violet-border)] text-[var(--ivory-muted)] hover:border-white/30"
              }`}
            >
              <ShieldCheck size={14} /> Pago Local / Otro
            </button>
          </div>
        </div>

        {/* Payment Details */}
        {selectedMethod === "binance" ? (
          <div className="p-4 rounded-2xl bg-[#180d18] border border-[var(--violet-border)] space-y-3">
            <span className="text-xs text-[var(--ivory-muted)] font-semibold block">
              2. Envía $50 USDT a esta cuenta de Binance:
            </span>
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#231223] border border-[#42203b]">
              <div>
                <span className="text-[10px] text-[var(--gold-bright)] font-bold block uppercase">Binance Pay ID</span>
                <span className="font-mono text-sm text-white font-bold">{binancePayId}</span>
              </div>
              <button
                type="button"
                onClick={copyBinance}
                className="px-3 py-1.5 rounded-lg bg-[var(--gold-dim)] border border-[var(--gold-border)] text-[var(--gold-bright)] text-xs font-bold flex items-center gap-1 hover:bg-[var(--gold)] hover:text-black transition-colors cursor-pointer"
              >
                <Copy size={12} /> {copied ? "¡Copiado!" : "Copiar ID"}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-2xl bg-[#180d18] border border-[var(--violet-border)] space-y-2">
            <span className="text-xs text-[var(--ivory-muted)] font-semibold block">
              2. Instrucciones para Pago Local:
            </span>
            <p className="text-xs text-[var(--ivory-subtle)] leading-relaxed">
              Realiza la conversión o transferencia equivalente a <strong>$50 USD</strong> y adjunta la captura del depósito para revisión de nuestro equipo.
            </p>
          </div>
        )}

        {/* Upload Proof */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[var(--ivory-muted)] uppercase tracking-wider block">
            3. Sube tu captura de pantalla (Comprobante)
          </label>

          <label className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-[var(--violet-border)] hover:border-[var(--gold)] rounded-2xl bg-[#180d18] hover:bg-[#201020] transition-colors cursor-pointer group">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-[var(--violet-dim)] border border-[var(--violet-border)] flex items-center justify-center text-[var(--gold)] group-hover:scale-110 transition-transform">
                {file ? <ImageIcon size={20} /> : <Upload size={20} />}
              </div>
              <p className="text-xs text-white font-medium">
                {file ? file.name : "Haz clic para seleccionar o arrastra tu captura aquí"}
              </p>
              <p className="text-[10px] text-[var(--ivory-subtle)]">PNG, JPG o WEBP (Máx. 5MB)</p>
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </label>
        </div>

        {errorMsg && (
          <p className="text-xs text-red-300 bg-red-950/40 p-3 rounded-xl border border-red-900 text-center">
            {errorMsg}
          </p>
        )}

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#b58737] via-[#d4a74e] to-[#b58737] hover:brightness-110 text-[#120b12] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#b58737]/25 transition-all cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <span>Enviando comprobante...</span>
          ) : (
            <>
              <Upload size={18} />
              <span>Enviar Comprobante de Pago</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
