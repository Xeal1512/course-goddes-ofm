"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Users,
  DollarSign,
  CheckCircle,
  XCircle,
  Clock,
  ShieldCheck,
  Eye,
  RefreshCw,
  LogOut,
  Settings,
  Sparkles,
  BarChart2,
  MessageSquare,
  Check,
  X,
} from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface PaymentItem {
  id: string;
  user_id: string;
  amount: number;
  currency: string;
  payment_method: string;
  proof_data: string;
  status: "pending" | "completed" | "rejected" | "refunded";
  created_at: string;
  user_email?: string;
}

interface StudentComment {
  id: string;
  user_id: string;
  module_id: string;
  comment_text: string;
  is_approved: boolean;
  created_at: string;
  user_email?: string;
}

interface ModuleMetric {
  module_id: string;
  count: number;
}

export default function AdminPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [payments, setPayments] = useState<PaymentItem[]>([]);
  const [totalUsersCount, setTotalUsersCount] = useState(0);
  const [premiumUsersCount, setPremiumUsersCount] = useState(0);
  const [selectedProofUrl, setSelectedProofUrl] = useState<string | null>(null);

  // Nuevos estados
  const [activeTab, setActiveTab] = useState<
    "pagos" | "metricas" | "comentarios"
  >("pagos");
  const [commentsQueue, setCommentsQueue] = useState<StudentComment[]>([]);
  const [moduleMetrics, setModuleMetrics] = useState<ModuleMetric[]>([]);

  // Settings State
  const [coursePrice, setCoursePrice] = useState(50);
  const [binanceId, setBinanceId] = useState("249182391");
  const [settingsSaved, setSettingsSaved] = useState(false);

  useEffect(() => {
    loadAdminData();
  }, []);

  const loadAdminData = async () => {
    setLoading(true);
    try {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      // 1. Verificar si el usuario actual es 'admin'
      const { data: profile } = await supabase
        .from("users")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role !== "admin") {
        // Redirigir si no es administrador
        router.push("/curso");
        return;
      }

      // 2. Obtener lista de pagos
      const { data: rawPayments } = await supabase
        .from("payments")
        .select("*, users(email)")
        .order("created_at", { ascending: false });

      if (rawPayments) {
        const formatted = rawPayments.map((p: any) => ({
          ...p,
          user_email: p.users?.email || "Usuario sin email",
        }));
        setPayments(formatted);
      }

      // 3. Obtener métricas de usuarios
      const { data: allUsers } = await supabase.from("users").select("role");
      if (allUsers) {
        setTotalUsersCount(allUsers.length);
        setPremiumUsersCount(
          allUsers.filter((u) => u.role === "premium").length,
        );
      }

      // 4. Obtener configuraciones de la plataforma
      const { data: settings } = await supabase
        .from("platform_settings")
        .select("*")
        .single();
      if (settings) {
        if (settings.course_price) setCoursePrice(settings.course_price);
        if (settings.payment_instructions)
          setBinanceId(settings.payment_instructions);
      }

      // 5. Obtener comentarios pendientes de aprobación
      const { data: rawComments } = await supabase
        .from("student_comments")
        .select("*, users(email)")
        .eq("is_approved", false)
        .order("created_at", { ascending: true });

      if (rawComments) {
        const formattedC = rawComments.map((c: any) => ({
          ...c,
          user_email: c.users?.email || "Usuario sin email",
        }));
        setCommentsQueue(formattedC);
      }

      // 6. Calcular métricas de progreso (agrupar por module_id)
      const { data: progressData } = await supabase
        .from("progress")
        .select("module_id");

      if (progressData) {
        const counts: Record<string, number> = {};
        progressData.forEach((p) => {
          counts[p.module_id] = (counts[p.module_id] || 0) + 1;
        });
        const arr = Object.entries(counts).map(([module_id, count]) => ({
          module_id,
          count,
        }));
        // Ordenar por módulo
        arr.sort((a, b) => a.module_id.localeCompare(b.module_id));
        setModuleMetrics(arr);
      }
    } catch (err) {
      console.error("Admin load error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Función para aprobar un pago
  const handleApprovePayment = async (paymentId: string, userId: string) => {
    try {
      const supabase = createClient();

      // a) Actualizar estado del pago a 'completed'
      await supabase
        .from("payments")
        .update({ status: "completed", reviewed_at: new Date().toISOString() })
        .eq("id", paymentId);

      // b) Cambiar el rol del usuario a 'premium' para liberar el curso
      await supabase.from("users").update({ role: "premium" }).eq("id", userId);

      // Recargar datos
      await loadAdminData();
    } catch (err) {
      alert("Error al aprobar pago: " + err);
    }
  };

  // Función para aprobar un comentario
  const handleApproveComment = async (commentId: string) => {
    try {
      const supabase = createClient();
      await supabase
        .from("student_comments")
        .update({ is_approved: true })
        .eq("id", commentId);
      await loadAdminData();
    } catch (err) {
      alert("Error al aprobar comentario: " + err);
    }
  };

  // Función para rechazar/eliminar un comentario
  const handleRejectComment = async (commentId: string) => {
    try {
      const supabase = createClient();
      await supabase.from("student_comments").delete().eq("id", commentId);
      await loadAdminData();
    } catch (err) {
      alert("Error al eliminar comentario: " + err);
    }
  };

  // Función para rechazar un pago
  const handleRejectPayment = async (paymentId: string) => {
    try {
      const supabase = createClient();

      await supabase
        .from("payments")
        .update({ status: "rejected", reviewed_at: new Date().toISOString() })
        .eq("id", paymentId);

      await loadAdminData();
    } catch (err) {
      alert("Error al rechazar pago: " + err);
    }
  };

  // Guardar ajustes de precio e instrucciones
  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const supabase = createClient();
      await supabase
        .from("platform_settings")
        .update({
          course_price: coursePrice,
          payment_instructions: binanceId,
        })
        .eq("id", 1);

      setSettingsSaved(true);
      setTimeout(() => setSettingsSaved(false), 3000);
    } catch (err) {
      alert("Error guardando configuración: " + err);
    }
  };

  // Cálculos de métricas
  const conversionRate =
    totalUsersCount > 0
      ? ((premiumUsersCount / totalUsersCount) * 100).toFixed(1)
      : "0.0";

  const totalRevenue = payments
    .filter((p) => p.status === "completed")
    .reduce((sum, p) => sum + (p.amount || 0), 0);

  const pendingPayments = payments.filter((p) => p.status === "pending");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#111011] text-[var(--gold-bright)]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-[var(--gold)] border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono tracking-widest uppercase text-[var(--ivory-muted)]">
            Cargando Panel de Administración...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d090d] text-[var(--ivory)] p-4 sm:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[var(--violet-border)]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--gold-dim)] border border-[var(--gold-border)] text-[var(--gold-bright)] text-xs font-bold uppercase mb-2">
              <ShieldCheck size={14} /> Panel de Administración
            </div>
            <h1 className="font-display text-3xl font-bold text-[#f7e7ce]">
              Goddess OFM — Control
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadAdminData}
              className="p-2.5 rounded-xl border border-[var(--violet-border)] bg-[#1a0f1a] hover:border-[var(--gold)] text-xs text-[var(--ivory)] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <RefreshCw size={14} /> Actualizar Datos
            </button>
            <button
              onClick={() => router.push("/curso")}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#b58737] to-[#d4a74e] text-[#120b12] text-xs font-bold flex items-center gap-2 hover:brightness-110 transition-all cursor-pointer"
            >
              Ir al Curso
            </button>
          </div>
        </div>

        {/* METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#160b16] border border-[var(--violet-border)] space-y-2">
            <div className="flex items-center justify-between text-[var(--ivory-muted)]">
              <span className="text-xs uppercase font-bold tracking-wider">
                Usuarios Totales
              </span>
              <Users size={18} className="text-[var(--gold)]" />
            </div>
            <span className="font-display text-3xl font-bold text-white block">
              {totalUsersCount}
            </span>
            <span className="text-[11px] text-[var(--ivory-subtle)]">
              Registros registrados en la app
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#160b16] border border-[var(--violet-border)] space-y-2">
            <div className="flex items-center justify-between text-[var(--ivory-muted)]">
              <span className="text-xs uppercase font-bold tracking-wider">
                Tasa de Conversión
              </span>
              <Sparkles size={18} className="text-[var(--gold)]" />
            </div>
            <span className="font-display text-3xl font-bold text-[var(--gold-bright)] block">
              {conversionRate}%
            </span>
            <span className="text-[11px] text-[var(--ivory-subtle)]">
              {premiumUsersCount} usuarios Premium de {totalUsersCount}
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#160b16] border border-[var(--violet-border)] space-y-2">
            <div className="flex items-center justify-between text-[var(--ivory-muted)]">
              <span className="text-xs uppercase font-bold tracking-wider">
                Ingresos Totales
              </span>
              <DollarSign size={18} className="text-emerald-400" />
            </div>
            <span className="font-display text-3xl font-bold text-emerald-400 block">
              ${totalRevenue} USDT
            </span>
            <span className="text-[11px] text-[var(--ivory-subtle)]">
              Suma de pagos aprobados
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-[#160b16] border border-[var(--violet-border)] space-y-2">
            <div className="flex items-center justify-between text-[var(--ivory-muted)]">
              <span className="text-xs uppercase font-bold tracking-wider">
                Pagos Pendientes
              </span>
              <Clock size={18} className="text-amber-400" />
            </div>
            <span className="font-display text-3xl font-bold text-amber-400 block">
              {pendingPayments.length}
            </span>
            <span className="text-[11px] text-[var(--ivory-subtle)]">
              Requieren tu aprobación
            </span>
          </div>
        </div>

        {/* TAB MENU */}
        <div className="flex items-center gap-2 border-b border-[var(--violet-border)] overflow-x-auto pb-px">
          <button
            onClick={() => setActiveTab("pagos")}
            className={`px-4 py-2 font-bold text-sm border-b-2 whitespace-nowrap transition-colors ${activeTab === "pagos" ? "border-[var(--gold)] text-[var(--gold)]" : "border-transparent text-[var(--ivory-muted)] hover:text-white"}`}
          >
            Gestión de Pagos
          </button>
          <button
            onClick={() => setActiveTab("metricas")}
            className={`px-4 py-2 font-bold text-sm border-b-2 whitespace-nowrap transition-colors ${activeTab === "metricas" ? "border-[var(--gold)] text-[var(--gold)]" : "border-transparent text-[var(--ivory-muted)] hover:text-white"}`}
          >
            Métricas del Curso
          </button>
          <button
            onClick={() => setActiveTab("comentarios")}
            className={`px-4 py-2 font-bold text-sm border-b-2 whitespace-nowrap transition-colors flex items-center gap-2 ${activeTab === "comentarios" ? "border-[var(--gold)] text-[var(--gold)]" : "border-transparent text-[var(--ivory-muted)] hover:text-white"}`}
          >
            Moderación de Comentarios
            {commentsQueue.length > 0 && (
              <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {commentsQueue.length}
              </span>
            )}
          </button>
        </div>

        {/* PAYMENTS TABLE */}
        {activeTab === "pagos" && (
          <div className="p-6 rounded-3xl bg-[#140b14]/90 border border-[var(--violet-border)] space-y-4">
            <h2 className="font-display text-xl font-bold text-[#f7e7ce] flex items-center gap-2">
              <Clock size={20} className="text-[var(--gold)]" /> Gestión de
              Pagos y Comprobantes
            </h2>

            {payments.length === 0 ? (
              <div className="text-center py-12 text-[var(--ivory-muted)] text-sm">
                No hay registros de pago en la base de datos.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[var(--violet-border)] text-xs uppercase tracking-wider text-[var(--gold-bright)]">
                      <th className="py-3 px-4">Usuario</th>
                      <th className="py-3 px-4">Monto</th>
                      <th className="py-3 px-4">Método</th>
                      <th className="py-3 px-4">Comprobante</th>
                      <th className="py-3 px-4">Estado</th>
                      <th className="py-3 px-4">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--violet-border)]/40 text-xs">
                    {payments.map((payment) => (
                      <tr
                        key={payment.id}
                        className="hover:bg-[#1f101f]/50 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium text-white">
                          {payment.user_email}
                        </td>
                        <td className="py-4 px-4 font-bold text-[var(--gold-bright)]">
                          ${payment.amount} {payment.currency}
                        </td>
                        <td className="py-4 px-4 text-[var(--ivory-muted)] uppercase">
                          {payment.payment_method}
                        </td>
                        <td className="py-4 px-4">
                          {payment.proof_data ? (
                            <button
                              onClick={() =>
                                setSelectedProofUrl(payment.proof_data)
                              }
                              className="px-2.5 py-1 rounded-lg border border-[var(--violet-border)] bg-[#201020] text-[var(--gold-bright)] hover:border-[var(--gold)] transition-colors flex items-center gap-1 cursor-pointer"
                            >
                              <Eye size={12} /> Ver Captura
                            </button>
                          ) : (
                            <span className="text-[var(--ivory-subtle)]">
                              Sin archivo
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {payment.status === "completed" && (
                            <span className="px-2.5 py-1 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-800 font-bold uppercase text-[10px]">
                              Aprobado
                            </span>
                          )}
                          {payment.status === "pending" && (
                            <span className="px-2.5 py-1 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800 font-bold uppercase text-[10px] animate-pulse">
                              Pendiente
                            </span>
                          )}
                          {payment.status === "rejected" && (
                            <span className="px-2.5 py-1 rounded-full bg-red-950/80 text-red-300 border border-red-800 font-bold uppercase text-[10px]">
                              Rechazado
                            </span>
                          )}
                        </td>
                        <td className="py-4 px-4">
                          {payment.status === "pending" && (
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() =>
                                  handleApprovePayment(
                                    payment.id,
                                    payment.user_id,
                                  )
                                }
                                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                <CheckCircle size={13} /> Aprobar
                              </button>
                              <button
                                onClick={() => handleRejectPayment(payment.id)}
                                className="px-3 py-1.5 rounded-lg bg-red-900/60 hover:bg-red-800 text-red-200 font-bold text-[11px] flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                <XCircle size={13} /> Rechazar
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* METRICS VIEW */}
        {activeTab === "metricas" && (
          <div className="p-6 rounded-3xl bg-[#140b14]/90 border border-[var(--violet-border)] space-y-4">
            <h2 className="font-display text-xl font-bold text-[#f7e7ce] flex items-center gap-2">
              <BarChart2 size={20} className="text-[var(--gold)]" /> Tasa de
              Finalización de Módulos
            </h2>
            <p className="text-sm text-[var(--ivory-subtle)] mb-6">
              Esta tabla muestra cuántos estudiantes han completado cada módulo.
              Ayuda a identificar "cuellos de botella" (donde los alumnos
              abandonan).
            </p>

            {moduleMetrics.length === 0 ? (
              <div className="text-center py-12 text-[var(--ivory-muted)] text-sm">
                No hay datos de progreso aún.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {moduleMetrics.map((m) => (
                  <div
                    key={m.module_id}
                    className="p-4 rounded-xl bg-[#1a0f1a] border border-[var(--violet-border)] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-[var(--gold)] uppercase">
                        {m.module_id.replace("-", " ")}
                      </h4>
                      <p className="text-[10px] text-[var(--ivory-muted)] mt-1">
                        Completados
                      </p>
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {m.count}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* COMMENTS QUEUE */}
        {activeTab === "comentarios" && (
          <div className="p-6 rounded-3xl bg-[#140b14]/90 border border-[var(--violet-border)] space-y-4">
            <h2 className="font-display text-xl font-bold text-[#f7e7ce] flex items-center gap-2">
              <MessageSquare size={20} className="text-[var(--gold)]" />{" "}
              Moderación de Comentarios
            </h2>
            <p className="text-sm text-[var(--ivory-subtle)] mb-6">
              Revisa las dudas o feedback de los alumnos. Apruébalos para
              hacerlos públicos en el respectivo módulo.
            </p>

            {commentsQueue.length === 0 ? (
              <div className="text-center py-12 text-[var(--ivory-muted)] text-sm">
                No hay comentarios pendientes.
              </div>
            ) : (
              <div className="space-y-4">
                {commentsQueue.map((c) => (
                  <div
                    key={c.id}
                    className="p-5 rounded-xl bg-[#1a0f1a] border border-[var(--violet-border)] space-y-3"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="text-xs text-[var(--ivory-muted)]">
                          Usuario:{" "}
                          <span className="font-bold text-white">
                            {c.user_email}
                          </span>{" "}
                          • Módulo:{" "}
                          <span className="text-[var(--gold-bright)] uppercase">
                            {c.module_id}
                          </span>
                        </div>
                        <p className="text-sm mt-2 leading-relaxed text-[var(--ivory)]">
                          {c.comment_text}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleRejectComment(c.id)}
                          className="p-2 rounded-lg bg-red-950/50 text-red-400 hover:bg-red-900/80 transition-colors"
                          title="Eliminar"
                        >
                          <X size={16} />
                        </button>
                        <button
                          onClick={() => handleApproveComment(c.id)}
                          className="p-2 rounded-lg bg-emerald-950/50 text-emerald-400 hover:bg-emerald-900/80 transition-colors"
                          title="Aprobar (Hacer Público)"
                        >
                          <Check size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* SETTINGS CARD */}
        <div className="p-6 rounded-3xl bg-[#140b14]/90 border border-[var(--violet-border)] space-y-4 max-w-2xl">
          <h2 className="font-display text-xl font-bold text-[#f7e7ce] flex items-center gap-2">
            <Settings size={20} className="text-[var(--gold)]" /> Ajustes de
            Plataforma
          </h2>

          <form onSubmit={handleSaveSettings} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-[var(--ivory-muted)]">
                Precio del Curso (USDT)
              </label>
              <input
                type="number"
                value={coursePrice}
                onChange={(e) => setCoursePrice(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl bg-[#201220] border border-[#3d1d36] text-white text-sm"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-[var(--ivory-muted)]">
                ID de Binance Pay / Instrucciones
              </label>
              <input
                type="text"
                value={binanceId}
                onChange={(e) => setBinanceId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#201220] border border-[#3d1d36] text-white text-sm"
              />
            </div>

            {settingsSaved && (
              <p className="text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800">
                ¡Configuración guardada exitosamente!
              </p>
            )}

            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#b58737] to-[#d4a74e] text-[#120b12] font-bold text-xs hover:brightness-110 transition-all cursor-pointer"
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>

      {/* PROOF IMAGE MODAL */}
      {selectedProofUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-2xl w-full bg-[#180c18] border border-[var(--violet-border)] rounded-3xl p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-white">
                Comprobante de Pago
              </h3>
              <button
                onClick={() => setSelectedProofUrl(null)}
                className="p-1 rounded-lg text-[var(--ivory-muted)] hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-black border border-[var(--violet-border)] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selectedProofUrl}
                alt="Comprobante"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="text-right">
              <button
                onClick={() => setSelectedProofUrl(null)}
                className="px-4 py-2 rounded-xl bg-white/10 text-white text-xs font-bold hover:bg-white/20"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
