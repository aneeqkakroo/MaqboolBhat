import { Card } from "../ui.jsx";

export default function VideoCard({ r }) {
  return (
    <Card className="p-5 transition hover:bg-white/10">
      <div className="text-xs text-white/60">
        {r.platform || "Video"}
        {r.duration && <span> • {r.duration}</span>}
        {r.channel && <span> • {r.channel}</span>}
      </div>

      <a
        href={r.href}
        target="_blank"
        rel="noreferrer"
        className="mt-1 block font-semibold text-white hover:underline"
      >
        {r.title}
      </a>

      {r.thumbnail && (
        <div className="mt-3 overflow-hidden rounded-xl border border-white/10">
          <img
            src={r.thumbnail}
            alt={r.title}
            className="h-40 w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {r.desc && (
        <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
      )}
    </Card>
  );
}
