import { Section } from "../../components/ui.jsx";
import resourceArticles from "../../data/resourcearticles.js";
import { ArticleCard } from "../../components/ResourceCards";

export default function Articles() {
  const list = resourceArticles ?? [];

  return (
    <Section title="Articles" kicker="Resources">
      {list.length === 0 ? (
        <div className="text-white/60 text-sm">No articles yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <ArticleCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </Section>
  );
}
