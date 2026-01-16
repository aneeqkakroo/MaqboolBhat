import { Card } from "../ui.jsx";

export default function BookCard({ r }) {
  return (
    <Card className="p-5 transition hover:bg-white/10">
      <div className="text-xs text-white/60">
        {r.author && <span>{r.author}</span>}
        {r.year && <span> • {r.year}</span>}
        {r.publisher && <span> • {r.publisher}</span>}
      </div>

      <a
        href={r.href}
        target="_blank"
        rel="noreferrer"
        className="mt-1 block font-semibold text-white hover:underline"
      >
        {r.title}
      </a>

      {r.isbn && (
        <div className="mt-2 text-xs text-white/60">ISBN: {r.isbn}</div>
      )}

      {r.desc && (
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
      )}
    </Card>
  );
}
