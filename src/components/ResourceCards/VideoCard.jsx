import { Card } from "../ui.jsx";

export default function VideoCard({ r }) {
  return (
    <Card className="p-5 space-y-3 transition hover:bg-white/10">
      
      {/* Meta */}
      <div className="text-xs text-white/60">
        {r.type || "Video"}
        {r.year && <span> • {r.year}</span>}
        {r.channel && <span> • {r.channel}</span>}
      </div>

      {/* Title */}
      <h3 className="font-semibold text-white leading-snug">
        {r.title}
      </h3>

      {/* YouTube Embed */}
      {r.youtubeId && (
        <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-white/10">
          <iframe
            src={`https://www.youtube.com/embed/${r.youtubeId}`}
            title={r.title}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}

      {/* Description */}
      {r.desc && (
        <p className="text-sm text-white/70 leading-relaxed">
          {r.desc}
        </p>
      )}

      {/* External Link */}
      <a
        href={`https://youtu.be/${r.youtubeId}`}
        target="_blank"
        rel="noreferrer"
        className="inline-block text-sm text-white/60 hover:text-white underline"
      >
        Watch on YouTube →
      </a>
    </Card>
  );
}
