import { Section } from "../../components/ui.jsx";
import resourceVideos from "../../data/resourcevideos.js";
import { VideoCard } from "../../components/ResourceCards/index.js";

export default function Videos() {
  const list = resourceVideos ?? [];

  return (
    <Section title="Videos" kicker="Resources">
      {list.length === 0 ? (
        <div className="text-white/60 text-sm">No videos yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <VideoCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </Section>
  );
}
