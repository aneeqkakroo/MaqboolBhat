import { Section } from "../../components/ui.jsx";
import resourceBooks from "../../data/resourcebooks.js";
import { BookCard } from "../../components/ResourceCards";

export default function Books() {
  const list = resourceBooks ?? [];

  return (
    <Section title="Books" kicker="Resources">
      {list.length === 0 ? (
        <div className="text-white/60 text-sm">No books yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <BookCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </Section>
  );
}
