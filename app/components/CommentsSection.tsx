"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Send } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface Comment {
  id: string;
  comment_text: string;
  created_at: string;
  users: {
    email: string;
  };
}

export function CommentsSection({ moduleId, userId }: { moduleId: string; userId?: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const supabase = createClient();

  useEffect(() => {
    async function loadComments() {
      const { data, error } = await supabase
        .from("student_comments")
        .select(`
          id,
          comment_text,
          created_at,
          users ( email )
        `)
        .eq("module_id", moduleId)
        .eq("is_approved", true)
        .order("created_at", { ascending: false });

      if (data && !error) {
        setComments(data as any);
      }
    }
    loadComments();
  }, [moduleId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !userId) return;

    setLoading(true);
    const { error } = await supabase.from("student_comments").insert({
      user_id: userId,
      module_id: moduleId,
      comment_text: newComment.trim(),
    });

    setLoading(false);
    if (!error) {
      setNewComment("");
      setSuccessMsg("Comentario enviado. Será visible una vez aprobado por un administrador.");
      setTimeout(() => setSuccessMsg(""), 5000);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(90,35,72,0.3)" }}>
      <h3 className="text-xl font-bold flex items-center gap-2 mb-6" style={{ color: "#E6D8BE" }}>
        <MessageSquare className="w-5 h-5" style={{ color: "#B78A3A" }} />
        Comentarios y Dudas
      </h3>

      {/* Comentarios listados */}
      <div className="space-y-4 mb-8">
        {comments.length === 0 ? (
          <p className="text-sm italic" style={{ color: "rgba(230,216,190,0.4)" }}>
            Aún no hay comentarios en este módulo. ¡Sé la primera en compartir tus dudas o experiencias!
          </p>
        ) : (
          comments.map((c) => (
            <div key={c.id} className="p-4 rounded-xl border" style={{ background: "rgba(20,10,18,0.5)", borderColor: "rgba(90,35,72,0.2)" }}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-[#5A2348] flex items-center justify-center text-[10px] font-bold text-[#E6D8BE]">
                  {c.users?.email?.charAt(0).toUpperCase() || "U"}
                </div>
                <span className="text-xs font-bold" style={{ color: "rgba(230,216,190,0.7)" }}>
                  {c.users?.email?.split('@')[0] || "Usuario"}
                </span>
                <span className="text-[10px]" style={{ color: "rgba(230,216,190,0.4)" }}>
                  {new Date(c.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(230,216,190,0.9)" }}>
                {c.comment_text}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Formulario */}
      {userId ? (
        <form onSubmit={handleSubmit} className="space-y-3">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe tu comentario o duda aquí..."
            className="w-full bg-transparent border rounded-xl p-4 text-sm focus:outline-none focus:ring-1 transition-all resize-none h-24"
            style={{
              borderColor: "rgba(90,35,72,0.5)",
              color: "#E6D8BE",
            }}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-green-400">{successMsg}</span>
            <button
              type="submit"
              disabled={loading || !newComment.trim()}
              className="btn-gold px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar Comentario"}
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      ) : (
        <p className="text-sm" style={{ color: "rgba(230,216,190,0.5)" }}>
          Debes iniciar sesión para dejar un comentario.
        </p>
      )}
    </div>
  );
}
