"use client";

// The ONLY interactive Client Component in the landing page.
// Isolated here so the rest of the landing remains Server Components.
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

function FaqRow({ q, a }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden border transition-colors duration-200"
      style={{
        borderColor: open
          ? "rgba(183,138,58,0.3)"
          : "rgba(90,35,72,0.3)",
        background: "rgba(20,10,18,0.7)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 p-5 text-left transition-colors hover:bg-[rgba(90,35,72,0.08)] cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold" style={{ color: "#E6D8BE" }}>
          {q}
        </span>
        <span
          className="shrink-0 mt-0.5 transition-transform duration-200"
          style={{
            color: "#B78A3A",
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
          }}
          aria-hidden="true"
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
      >
        <p
          className="px-5 pb-5 text-sm leading-relaxed"
          style={{ color: "rgba(230,216,190,0.6)" }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <FaqRow key={item.q} q={item.q} a={item.a} />
      ))}
    </div>
  );
}
