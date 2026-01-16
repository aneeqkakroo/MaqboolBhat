import { Card } from "../ui.jsx";

export default function LetterCard({ r, onOpen }) {
  return (
    <Card className="p-5 transition hover:bg-white/10">
      {/* Top row: left "Letter", right date */}
      <div className="flex items-center justify-between text-xs text-white/60">
        <span>Letter</span>
        {r.date ? <span>{r.date}</span> : <span />}
      </div>

      {/* From / To */}
      <div className="mt-2 space-y-1 text-xs text-white/70">
        {r.from ? (
          <div>
            <span className="text-white/60">Letter from:</span> {r.from}
          </div>
        ) : null}

        {r.to ? (
          <div>
            <span className="text-white/60">Letter to:</span> {r.to}
          </div>
        ) : null}
      </div>

      {/* Title -> opens modal */}
      <button
        type="button"
        onClick={() => onOpen?.(r)}
        className="mt-3 block w-full text-left font-semibold text-white hover:underline"
      >
        {r.title}
      </button>

      {/* Optional description */}
      {r.desc ? (
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
      ) : null}
    </Card>
  );
}
