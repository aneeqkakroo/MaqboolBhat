import { Section } from "../../components/ui.jsx";
import { Link } from "react-router-dom";

const LINKS = [
  { to: "/resources/books", label: "Books" },
  { to: "/resources/articles", label: "Articles" },
  { to: "/resources/videos", label: "Videos" },
  { to: "/resources/letters", label: "Letters" },
  { to: "/resources/memoires", label: "Memoires" },
];

export default function ResourcesHome() {
  return (
    <Section title="Resources" kicker="Library">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {LINKS.map((x) => (
          <Link
            key={x.to}
            to={x.to}
            className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition p-5"
          >
            <div className="text-white font-medium">{x.label}</div>
            <div className="text-white/60 text-sm mt-1">Open {x.label}</div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
