import { Section } from "../../components/ui.jsx";
import resourceMemoires from "../../data/resourcememoires.js";
import { MemoireCard } from "../../components/ResourceCards";

export default function Memoires() {
  const list = resourceMemoires ?? [];

  return (
    <Section title="Memoires" kicker="Resources">
      {list.length === 0 ? (
        <div className="text-white/60 text-sm">No memoires yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <MemoireCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </Section>
  );
}
