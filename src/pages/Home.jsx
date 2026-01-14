import Hero from "../components/Hero.jsx";
import { Section, Card, Button} from "../components/ui.jsx";
import TimelineList from "../components/TimelineList.jsx";
import timeline from "../data/timeline.js";
import NumbersBanner from "../components/NumbersBanner.jsx";
import { daysSince } from "../data/daysSince.js";

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="At a Glance">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Bio preview */}
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
            <Button to="/biography#bio">Read more</Button>
          </div>
        </Card>
           <TimelineList items={timeline.slice(0, 4)}  />

          {/* Timeline preview */}
        </div>
      </Section>

      <NumbersBanner
        bg="/pictures/mb arrest pak.jpg" // or any URL
        title=""
        targets={{
        petitions: 12500,                // Petition signs
        daysInJail: daysSince("1984-02-11"), // Auto-updating days in jail
        fabricatedCases: 5,              // Fabricated cases
      }}
      />
    </>
  );
}
