"use client";

import { useRef, useState } from "react";
import { Award, Download, Sparkles, X } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CertificateModalProps {
  userName?: string;
  onClose: () => void;
}

export function CertificateModal({ userName = "Estudiante Goddess", onClose }: CertificateModalProps) {
  const certRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const downloadPDF = async () => {
    if (!certRef.current) return;
    setDownloading(true);

    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#111011",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save(`Certificado_Goddess_OFM_${userName.replace(/\s+/g, "_")}.pdf`);
    } catch (err) {
      console.error("PDF generation error:", err);
      alert("Error al generar el certificado en PDF.");
    } finally {
      setDownloading(false);
    }
  };

  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative max-w-4xl w-full flex flex-col items-center space-y-6">
        
        {/* TOP CONTROLS */}
        <div className="w-full flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-dim)] border border-[var(--gold-border)] text-[var(--gold-bright)] text-xs font-bold uppercase">
            <Sparkles size={14} /> Certificación Oficial Completa
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[var(--ivory-muted)] hover:text-white bg-white/5 border border-white/10"
          >
            <X size={18} />
          </button>
        </div>

        {/* PRINTABLE CERTIFICATE CANVAS */}
        <div
          ref={certRef}
          className="w-full aspect-[16/10] bg-gradient-to-br from-[#1c0f1c] via-[#110a11] to-[#251225] border-4 border-[var(--gold-border)] rounded-3xl p-8 sm:p-12 relative flex flex-col justify-between shadow-[0_0_60px_rgba(183,138,58,0.25)] overflow-hidden"
        >
          {/* Decorative Gold Borders & Ornaments */}
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-[var(--gold)]/30 rounded-2xl pointer-events-none" />
          <div className="orb-gold w-96 h-96 -top-20 -right-20 opacity-25 blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <Award size={32} className="text-[var(--gold-bright)]" />
              <span className="font-display font-bold text-xl text-gold-shimmer tracking-wider uppercase">
                Goddess OFM
              </span>
            </div>
            <span className="text-xs font-mono text-[var(--ivory-muted)] uppercase tracking-widest">
              CERT. REGISTRO N° {Math.floor(100000 + Math.random() * 900000)}
            </span>
          </div>

          {/* Body Content */}
          <div className="text-center my-auto space-y-4 z-10 py-6">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-[var(--gold-bright)] block">
              Certificado de Finalización
            </span>
            <p className="text-sm text-[var(--ivory-muted)]">Este certificado acredita oficialmente que</p>
            
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#f7e7ce] underline decoration-[var(--gold-border)] underline-offset-8">
              {userName}
            </h2>

            <p className="text-xs sm:text-sm text-[var(--ivory-muted)] max-w-xl mx-auto leading-relaxed pt-2">
              Ha completado exitosamente la totalidad del plan de estudios del curso <strong className="text-white">Goddess OFM</strong>, demostrando dominio en privacidad, estrategia de contenido, crecimiento en Reddit y monetización efectiva.
            </p>
          </div>

          {/* Footer Signature */}
          <div className="flex items-end justify-between z-10 border-t border-[var(--gold-border)]/40 pt-4">
            <div>
              <span className="text-[10px] text-[var(--ivory-subtle)] uppercase block">Fecha de Emisión</span>
              <span className="text-xs text-white font-medium">{currentDate}</span>
            </div>

            <div className="text-center">
              <div className="font-display italic text-lg text-[var(--gold-bright)]">Goddess Team</div>
              <span className="text-[10px] text-[var(--ivory-subtle)] uppercase block border-t border-[var(--gold-border)]/50 pt-1 px-4">
                Firma Autorizada
              </span>
            </div>
          </div>
        </div>

        {/* DOWNLOAD BUTTON */}
        <button
          onClick={downloadPDF}
          disabled={downloading}
          className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-[#b58737] via-[#d4a74e] to-[#b58737] hover:brightness-110 text-[#120b12] font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#b58737]/30 transition-all cursor-pointer disabled:opacity-50"
        >
          <Download size={18} />
          <span>{downloading ? "Generando Certificado PDF..." : "Descargar Certificado PDF"}</span>
        </button>

      </div>
    </div>
  );
}
