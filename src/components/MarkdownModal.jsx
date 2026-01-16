import { useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownModal({ open, title, content, onClose }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* modal */}
      <div className="relative w-full max-w-3xl bg-neutral-950 rounded-2xl shadow-2xl border border-white/10">
        {/* header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
          <div>
            <div className="text-sm font-semibold text-white">
              {title || "Letter"}
            </div>
            <div className="text-xs text-white/60">Press Esc to close</div>
          </div>

          <button
            onClick={onClose}
            className="rounded-full px-3 py-1 text-xs border border-white/20 text-white/80 hover:bg-white/10"
          >
            Close
          </button>
        </div>

        {/* content */}
        <div className="px-6 py-6 max-h-[70vh] overflow-y-auto">
          <article className="prose prose-invert prose-headings:font-semibold prose-p:leading-relaxed max-w-none">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
