import { useMemo, useState } from "react";
import { Section } from "../components/ui.jsx";
import MarkdownModal from "../components/MarkdownModal.jsx";

// datasets
import resourceBooks from "../data/resourcebooks.js";
import resourceArticles from "../data/resourcearticles.js";
import resourceVideos from "../data/resourcevideos.js";
import resourceLetters from "../data/resourceletters.js";
import resourceMemoires from "../data/resourcememoires.js";

// cards
import {
  BookCard,
  ArticleCard,
  VideoCard,
  LetterCard,
  MemoireCard,
} from "../components/ResourceCards";

const TABS = [
  { key: "books", label: "Books" },
  { key: "articles", label: "Articles" },
  { key: "videos", label: "Videos" },
  { key: "letters", label: "Letters" },
  { key: "memoires", label: "Memoires" },
];

const CARD_MAP = {
  books: BookCard,
  articles: ArticleCard,
  videos: VideoCard,
  letters: LetterCard,
  memoires: MemoireCard,
};

export default function Resources() {
  const [active, setActive] = useState("books");

  // Markdown modal state (for letters)
  const [mdOpen, setMdOpen] = useState(false);
  const [mdTitle, setMdTitle] = useState("");
  const [mdContent, setMdContent] = useState("");

  const closeMd = () => {
    setMdOpen(false);
    setMdTitle("");
    setMdContent("");
  };

  const openLetter = async (letter) => {
    // For now: letters are Markdown (option 1).
    // Later you can add PDF support here if needed.
    if (letter.format === "md") {
      try {
        const res = await fetch(letter.href);
        const text = await res.text();
        setMdTitle(letter.title);
        setMdContent(text);
        setMdOpen(true);
      } catch (e) {
        console.error("Failed to load markdown letter:", e);
      }
      return;
    }

    // fallback (if you ever store a PDF link)
    window.open(letter.href, "_blank", "noreferrer");
  };

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
  const CardRenderer = CARD_MAP[active] ?? ArticleCard;

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
        <div className="text-white/60 text-sm">
          No resources in this section yet.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <CardRenderer
              key={r.id}
              r={r}
              onOpen={active === "letters" ? openLetter : undefined}
            />
          ))}
        </div>
      )}

      {/* Markdown Modal */}
      <MarkdownModal
        open={mdOpen}
        title={mdTitle}
        content={mdContent}
        onClose={closeMd}
      />
    </Section>
  );
}
