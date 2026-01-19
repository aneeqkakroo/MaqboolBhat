import { useState } from "react";
import { Section } from "../../components/ui.jsx";
import MarkdownModal from "../../components/MarkdownModal.jsx";

import resourceLetters from "../../data/resourceletters.js";
import { LetterCard } from "../../components/ResourceCards";

export default function Letters() {
  const list = resourceLetters ?? [];

  const [mdOpen, setMdOpen] = useState(false);
  const [mdTitle, setMdTitle] = useState("");
  const [mdContent, setMdContent] = useState("");

  const closeMd = () => {
    setMdOpen(false);
    setMdTitle("");
    setMdContent("");
  };

  const openLetter = async (letter) => {
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
    window.open(letter.href, "_blank", "noreferrer");
  };

  return (
    <Section title="Letters" kicker="Resources">
      {list.length === 0 ? (
        <div className="text-white/60 text-sm">No letters yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((r) => (
            <LetterCard key={r.id} r={r} onOpen={openLetter} />
          ))}
        </div>
      )}

      <MarkdownModal
        open={mdOpen}
        title={mdTitle}
        content={mdContent}
        onClose={closeMd}
      />
    </Section>
  );
}
