
import { Link } from "react-router-dom";
import { Section, Card, Button } from "../components/ui.jsx";
import TimelineList from "../components/TimelineList.jsx";
import timeline from "../data/timeline.js";
import Slideshow from "../components/Slideshow.jsx";
import mediaPics from "../data/aboutmediapics.js";
import YouTubeEmbed from "../components/YouTubeEmbed.jsx";


export default function About() {
  return (
    <Section title="About Maqbool Bhat" kicker="Biography">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="p-6">
          <h3 className="text-xl font-semibold">Textual Biography</h3>
          <p className="mt-2 text-white/80">
            Maqbool Bhat (1938–1984) emerged from a politically turbulent Kashmir as a leading nationalist 
            thinker and organiser, whose activism evolved from student politics into underground resistance. 
            Educated in history, political science, and Urdu literature, he became deeply involved with the 
            Plebiscite Front before founding the National Liberation Front (NLF), laying the ideological and 
            organisational foundations for what later became the Jammu Kashmir Liberation Front (JKLF). His 
            life was marked by repeated arrests, exile, imprisonment in both India and Pakistan, two death 
            sentences, and a dramatic prison escape. Despite limited external support and severe repression,
             he remained committed to the principle of Kashmiri self-determination. In 1984, after years on 
             death row, he was executed in Tihar Jail, an act that transformed him into a lasting symbol of 
             resistance. His legacy continues to shape Kashmiri political discourse, where he is remembered 
             as Baba-e-Qaum—the Father of the Nation of Kashmir.
          </p>
          <div className="mt-4">
            <Button to="/biography">Read more</Button>
          </div>
        </Card>
        </div>
        

        <Card className="p-6">
          <h3 className="text-xl font-semibold text-white">Quick Facts</h3>
          <ul className="mt-3 space-y-2 text-white/80 text-sm">
            <li>• Foundational Role in Kashmiri Nationalism</li>
            <li>• Unwavering Commitment Despite Repression</li>
            <li>• Enduring Symbolic and Ideological Legacy</li>
            <li>• Che Guvera of Kashmir</li>
            <li>• Baghat Singh of Kashmir</li>
            <li>• Omar Mukhtar of Valley</li>
          </ul>
        </Card>
      </div>
{/* Next Row */}
      <div className="mt-8 grid md:grid-cols-2 gap-8">
  {/* First column: Timeline */}
  <div id="timeline" className="scroll-mt-28">
    <TimelineList items={timeline}/>
  </div>
  {/* Second column: stack cards */}
  <div className="flex flex-col gap-8">
    <Card className="p-6">
      <h4 className="text-lg font-semibold text-white mb-4">Featured Documents</h4>
      <div className="space-y-3 text-white/80 text-sm">
        <a href="#" className="block hover:underline">
          Shaur-e-Farda (PDF)
        </a>
        <a href="#" className="block hover:underline">
          Escape from Srinagar Jail (PDF)
        </a>
      </div>
    </Card>

    <Card className="p-6">
  <h4 className="text-lg font-semibold text-white mb-4">Media Coverage</h4>
  <Slideshow
    aspect="aspect-[4/3]" // or "aspect-video" / "aspect-[3/2]"
    images={mediaPics}
  />
  <p className="mt-3 text-white/70 text-sm">
    A rotating selection of press photos and program stills.
  </p>
</Card>

<Card className="!p-0 overflow-hidden">
  <div className="grid grid-rows-[auto_1fr]">
    {/* Title */}
    <h4 className="px-4 pt-4 pb-2 text-lg font-semibold text-white">
      Audio Speech of Maqbool Bhat?
    </h4>

    {/* SoundCloud Embed */}
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2246792744&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        className="!rounded-none !border-0"
      />
    </div>
  </div>
</Card>

  {/* Youtube Embed */}
   <Card className="!p-0 overflow-hidden">
    <div className="grid grid-rows-[auto_1fr] h-[380px]">
      <h4 className="px-4 pt-4 pb-2 text-lg font-semibold text-white">
        Who is Maqbool Bhat?
      </h4>
      <YouTubeEmbed
        url="https://youtu.be/543eB6Qa5QM"
        title="Che of Kashmir"
        cover
        className="!rounded-none !border-0"
      />
    </div>
  </Card>

  {/* Youtube Embed */}
  <Card className="!p-0 overflow-hidden">
    <div className="grid grid-rows-[auto_1fr] h-[380px]">
      <h4 className="px-4 pt-4 pb-2 text-lg font-semibold text-white">
        BBC Documentry on Maqbool Bhat?
      </h4>
      <YouTubeEmbed
        url="https://youtu.be/PRciSt39dhI"
        title="Maqbool Bhat | BBC Hindi"
        cover
        className="!rounded-none !border-0"
      />
    </div>
  </Card>

  
  {/* Youtube Embed */}
  <Card className="!p-0 overflow-hidden">
    <div className="grid grid-rows-[auto_1fr] h-[380px]">
      <h4 className="px-4 pt-4 pb-2 text-lg font-semibold text-white">
        Bring Him Back | JKTV
      </h4>
      <YouTubeEmbed
        url="https://youtu.be/kML-Vv-LTx8?t=81"
        title="Maqbool Bhat | BBC Hindi"
        cover
        className="!rounded-none !border-0"
      />
    </div>
  </Card>




    <Card className="p-6">
      <h4 className="text-lg font-semibold text-white mb-4">Related Links</h4>
      <ul className="list-disc ml-4 text-white/80 text-sm space-y-1">
        <li><Link to="/resources" className="hover:underline">Books Written on Maqbool Bhat Shaheed</Link></li>
        <li><Link to="/media" className="hover:underline">Media Archives of Maqbool Bhat Shaheed</Link></li>
      </ul>
    </Card>
  </div>
</div>

    </Section>
  );
}
