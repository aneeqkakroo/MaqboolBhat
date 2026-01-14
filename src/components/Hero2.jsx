import { Badge, Button, Container } from "./ui.jsx";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="pt-8 sm:pt-16 pb-8 bg-gradient-to-b from-black via-zinc-950 to-black">
      <Container>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left side: image */}
          <div className="relative lg:justify-self-end">
            <div className="mx-auto lg:mx-0 w-full max-w-[560px] aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <img
                src="/pictures/MBSgrave.jpg"
                alt="Portrait"
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: "50% 35%" }}
              />
            </div>
          </div>

          {/* Right side: text */}
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 mb-4">
              <Badge>Executed Without Justice</Badge>
              <Badge>Still Imprisoned After Death</Badge>
              <Badge>A Grave Without a Body</Badge>
            </div>

            <h1 className="text-[clamp(28px,6vw,56px)] font-extrabold leading-tight text-white">
              Empty Grave — Still Awaiting the Return of Remains of <span className="text-rose-500">Maqbool Bhat</span>
            </h1>

            <p
                className="mt-4 text-white/80 text-lg max-w-xl leading-[2.2]"
                dir="rtl"
                style={{ fontFamily: '"Noto Nastaliq Urdu", serif' }}
            >
                جس کی جسدِ خاکی حکومتِ ہند کے پاس امانت ہے،
                <br />
                قوم کو آج بھی اُس کے لوٹنے کا انتظار ہے۔
              </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
