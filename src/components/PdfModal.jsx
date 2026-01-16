import { useEffect } from "react";

export default function PdfModal({ open, title, url, onClose }) {
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
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <button
        type="button"
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* panel */}
      <div className="relative mx-auto mt-6 w-[min(1100px,92vw)] h-[min(85vh,900px)] rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-white/10 bg-white/5">
          <div className="min-w-0">
            <div className="text-sm text-white/90 font-semibold truncate">
              {title || "Document"}
            </div>
            <div className="text-xs text-white/60">Press Esc to close</div>
          </div>

          <div className="flex items-center gap-2">
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-3 py-1 text-xs border border-white/15 text-white/80 hover:bg-white/10"
              >
                Open in new tab
              </a>
            ) : null}

            <button
              type="button"
              onClick={onClose}
              className="rounded-full px-3 py-1 text-xs border border-white/15 text-white/80 hover:bg-white/10"
            >
              Close
            </button>
          </div>
        </div>

        {/* viewer */}
        <div className="h-[calc(100%-52px)]">
          {url ? (
            <iframe
              title={title || "PDF Viewer"}
              src={url}
              className="h-full w-full"
            />
          ) : (
            <div className="h-full grid place-items-center text-white/70 text-sm">
              No PDF URL provided.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
