import { useEffect, useState } from "react";
import { Section } from "../components/ui.jsx";
import media from "../data/media.js";

export default function Media() {
  const [active, setActive] = useState(null);

  // close on ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Section title="Media Archives" kicker="Archive">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {media.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActive(m)}
            className="group text-left overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            {/* SAME SIZE SQUARE THUMBNAILS – FIXED */}
            <div className="relative w-full aspect-square overflow-hidden">
              <img
                src={m.src}
                alt={m.alt}
                loading="lazy"
                className={`absolute inset-0 h-full w-full transition-transform duration-300 group-hover:scale-105 
                  ${m.fit === "fill" ? "object-fill" : "object-cover"}`}
              />
            </div>

            {/* SAME HEIGHT CAPTION AREA */}
            <div className="p-2 text-xs text-white/70 line-clamp-2 min-h-[2.5rem]">
              {m.alt}
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActive(null)} // clicking outside closes
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking image area
          >
            <button
              className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-black/80 border border-white/15 text-white grid place-items-center hover:bg-black transition"
              onClick={() => setActive(null)}
              aria-label="Close"
              type="button"
            >
              ✕
            </button>

            <img
              src={active.src}
              alt={active.alt}
              className="w-full max-h-[85vh] object-contain rounded-2xl border border-white/10 bg-black"
            />

            <div className="mt-2 text-sm text-white/80">{active.alt}</div>
          </div>
        </div>
      )}
    </Section>
  );
}
