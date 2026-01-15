import {Button} from "../components/ui.jsx";
export default function QuoteBlock({
  image,
  quote,
  urduQuote,
  author,
  align = "left", // "left" | "right"
}) {
  const imageFirst = align === "left";

  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
      <div
        className={`grid gap-8 items-center ${
          imageFirst ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
        }`}
      >
        {/* Image */}
        <div className={imageFirst ? "" : "lg:order-2"}>
          <div className="mx-auto max-w-md aspect-[1/1] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img
              src={image}
              alt={author}
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </div>

        {/* Quote */}
        <div className={imageFirst ? "" : "lg:order-1"}>
          <blockquote className="relative">
            {/* subtle quote mark */}
            <span className="absolute -top-6 -left-4 text-7xl text-white/10 font-serif">
              “
            </span>
            {/* urdu quote */}
            <p className="mt-6 text-xl sm:text-2xl text-white leading-[2.2]" dir="rtl"
            style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }}>
                ”{urduQuote}“
            </p>
            {/* quote */}
            <p className="mt-12 text-xl sm:text-2xl font-medium text-white leading-relaxed">
              “{quote}”
            </p>

            <footer className="mt-6 text-white/70 text-sm tracking-wide">
              — <span className="font-semibold text-white">{author}</span>
            </footer>
            <div className={`mt-6 flex ${imageFirst ? "justify-start" : "justify-end"}`}>
                <Button to="/quotes">More Quotes</Button>
            </div>
            
          </blockquote>
        </div>
      </div>
    </section>
  );
}
