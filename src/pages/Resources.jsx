import { useMemo, useState } from "react";
import { Section, Card } from "../components/ui.jsx";

import resourceBooks from "../data/resourcebooks.js";
import resourceArticles from "../data/resourcearticles.js";
import resourceVideos from "../data/resourcevideos.js";
import resourceLetters from "../data/resourceletters.js";
import resourceMemoires from "../data/resourcememoires.js";

const TABS = [
  { key: "books", label: "Books" },
  { key: "articles", label: "Articles" },
  { key: "videos", label: "Videos" },
  { key: "letters", label: "Letters" },
  { key: "memoires", label: "Memoires" },
];

export default function Resources() {
  const [active, setActive] = useState("books");

  // map tab -> dataset
  const dataMap = useMemo(
    () => ({
      books: resourceBooks,
      articles: resourceArticles,
      videos: resourceVideos,
      letters: resourceLetters,
      memoires: resourceMemoires,
    }),
    []
  );

  const list = dataMap[active] ?? [];

  return (
    <Section title="Resources" kicker="Library">
      {/* Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {TABS.map((t) => {
          const isActive = t.key === active;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(t.key)}
              className={[
                "rounded-full px-4 py-2 text-sm border transition",
                isActive
                  ? "bg-white/15 border-white/20 text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white",
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      {list.length === 0 ? (
        <div className="text-white/60 text-sm">No resources in this section yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <Card key={r.id} className="p-5 transition hover:bg-white/10">
              <div className="text-xs text-white/60">
                {r.type} • {r.meta}
              </div>

              <a
                href={r.href}
                className="mt-1 block font-semibold text-white hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {r.title}
              </a>

              {/* Optional: description field */}
              {r.desc ? (
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{r.desc}</p>
              ) : null}
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
