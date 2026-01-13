import { Section } from "../components/ui.jsx";

/**
 * Biography Page: Maqbool Bhat
 *
 * - Self-contained React component with semantic sections and anchors
 * - Minimal styling so it fits into varied design systems (Tailwind/Bootstrap/plain CSS)
 * - Uses utility classes if available, but degrades gracefully with default browser styles.
 */

export default function Bio() {
  return (
    <Section title="Maqbool Bhat" kicker="Biography" id="bio">
      {/* Page Header */}
      <header className="mb-10">
        <p className="mt-2 text-base opacity-80">
          Born: <strong>18 February 1938</strong>, Trehgam, Kashmir Valley (then Princely State of Jammu &amp; Kashmir).
          <br />
          Died: <strong>11 February 1984</strong>, executed in Tihar Jail, New Delhi.
        </p>

        <div className="mt-4 text-sm opacity-70">
          <span className="inline-block mr-4">Also known as: “Baba-e-Qaum” (Father of the Nation of Kashmir)</span>
          <span className="inline-block mr-4">Father: Ghulam Qadir Bhat</span>
          <span className="inline-block">Organisation: Founder of NLF (precursor to JKLF)</span>
        </div>
      </header>

      {/* Quick Navigation */}
      <nav aria-label="Section navigation" className="mb-8 border-l-4 pl-4">
        <ul className="list-disc ml-4 space-y-1">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#early-life">Early Life &amp; Education</a></li>
          <li><a href="#political-awakening">Political Awakening (1950s)</a></li>
          <li><a href="#pakistan-years">Pakistan Years: Studies, Journalism &amp; Elections (1958–1964)</a></li>
          <li><a href="#plebiscite-front-1965">Azad Kashmir Plebiscite Front &amp; Suchetgarh Oath (1965)</a></li>
          <li><a href="#nlf">National Liberation Front (NLF)</a></li>
          <li><a href="#first-reentry">First Re-entry &amp; First Death Sentence (1966–1968)</a></li>
          <li><a href="#escape-1968">Escape &amp; Return (Dec 1968–1969)</a></li>
          <li><a href="#ganga-hijacking">Ganga Hijacking &amp; Aftermath (1971)</a></li>
          <li><a href="#second-reentry">Second Re-entry &amp; Second Death Sentence (1976)</a></li>
          <li><a href="#jklf">JKLF Formation in Exile (1977)</a></li>
          <li><a href="#execution">Execution (1984)</a></li>
          <li><a href="#legacy">Legacy</a></li>
        </ul>
      </nav>

      {/* Content Sections */}
      <section id="overview" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Overview</h2>
        <p>
          Maqbool Bhat (18 February 1938 – 11 February 1984) was a Kashmiri nationalist leader who founded
          the <strong>National Liberation Front (NLF)</strong>, an underground organisation that later became associated
          with the ideological and organisational lineage of the <strong>Jammu Kashmir Liberation Front (JKLF)</strong>.
          He was arrested in Indian-occupied Kashmir, sentenced to death twice, and ultimately executed and burried in
          <strong> Tihar Jail</strong>, New Delhi, on <strong>11 February 1984</strong>.
        </p>
      </section>

      <section id="early-life" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Early Life &amp; Education</h2>
        <p>
          Muhammad Maqbool Bhat was born in <strong>Trehgam</strong> in the Kashmir Valley to a Kashmiri Muslim family. His
          father was <strong>Ghulam Qadir Bhat</strong>. His mother died when he was eleven years old, after which his
          father remarried. After local schooling, he studied at <strong>St Joseph’s School and College, Baramulla</strong>,
          and graduated with a <strong>BA in History and Political Science</strong> around <strong>1957</strong>.
        </p>
      </section>

      <section id="political-awakening" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Political Awakening (1950s)</h2>
        <p>
          During his college years, Bhat became involved with student activities linked to the{" "}
          <strong>Plebiscite Front</strong>, an organisation founded by <strong>Mirza Afzal Beg</strong> during Sheikh
          Abdullah’s imprisonment for canvassing for Kashmiri independence. After Sheikh Abdullah’s release in{" "}
          <strong>December 1957</strong>, political agitation followed; his subsequent <strong>re-arrest in April 1958</strong>{" "}
          coincided with a crackdown on activists, including student networks. Under these pressures, Bhat left for Pakistan
          in <strong>August 1958</strong>.
        </p>
      </section>

      <section id="pakistan-years" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Pakistan Years: Studies, Journalism &amp; Elections (1958–1964)</h2>
        <p>
          In Pakistan, Bhat enrolled at the <strong>University of Peshawar</strong> and completed an{" "}
          <strong>MA in Urdu Literature</strong>. He also worked for a period as a journalist for a local newspaper.
          In <strong>1961</strong>, he contested the <strong>Basic Democracies</strong> elections introduced under the
          military regime of President Ayub Khan and won the Kashmiri diaspora seat from Peshawar. The elected government
          in Azad Kashmir lasted until <strong>1964</strong>, when Pakistan forced its resignation.
        </p>
      </section>

      <section id="plebiscite-front-1965" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Azad Kashmir Plebiscite Front &amp; Suchetgarh Oath (1965)</h2>
        <p>
          In <strong>April 1965</strong>, the <strong>Azad Kashmir Plebiscite Front</strong> was formed in Muzaffarabad.
          Maqbool Bhat was appointed <strong>Publicity Secretary</strong>, drawing on his journalistic background.
          During the same year, activists travelled to a location near <strong>Suchetgarh</strong> and took an oath—often
          described as a pledge of exclusive commitment to the liberation of Jammu and Kashmir—bringing symbolic soil from
          Indian-administered Kashmir.
        </p>
      </section>

      <section id="nlf" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">National Liberation Front (NLF)</h2>
        <p>
          Alongside associates—most notably <strong>Amanullah Khan</strong>—Bhat supported the creation of an armed wing.
          When the proposal did not gain majority backing within the Plebiscite Front, an underground organisation,
          the <strong>National Liberation Front (NLF)</strong>, was established in <strong>1965</strong>. The NLF was
          organised with political, financial, and armed components; Bhat was tasked with overall coordination. The
          organisation trained cadres and aimed to create conditions in which the people of Jammu and Kashmir could demand
          self-determination.
        </p>
      </section>

      <section id="first-reentry" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">First Re-entry &amp; First Death Sentence (1966–1968)</h2>
        <p>
          After months of recruitment and training, NLF groups crossed into Indian-administered Kashmir on{" "}
          <strong>10 June 1966</strong>. Bhat’s group focused on recruitment and establishing underground cells, while another
          wing trained recruits in sabotage. The operation was compromised near Srinagar in <strong>September 1966</strong>.
          During the episode, a CID police inspector named <strong>Amar Chand</strong> was killed. Following a search and a
          firefight near Handwara, Bhat was captured and tried. In <strong>September 1968</strong>, a Srinagar court issued
          a <strong>death sentence</strong>.
        </p>
      </section>

      <section id="escape-1968" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Escape &amp; Return (Dec 1968–1969)</h2>
        <p>
          In <strong>December 1968</strong>, Maqbool Bhat escaped from prison by tunnelling out of the jail complex along
          with fellow inmates. He returned to Azad Kashmir in <strong>January 1969</strong>, an escape that significantly
          raised his profile among militant circles. However, Pakistani authorities viewed the escape with suspicion;
          he and colleagues were detained and interrogated for months, and he remained under suspicion long afterwards.
        </p>
      </section>

      <section id="ganga-hijacking" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Ganga Hijacking &amp; Aftermath (1971)</h2>
        <p>
          In an effort to draw international attention to the Kashmir issue, NLF-linked militants carried out the hijacking
          of an Indian Airlines aircraft named <strong>Ganga</strong> on <strong>30 January 1971</strong>. The hijackers
          demanded the release of NLF prisoners, landed the plane in Lahore, and later burned the aircraft. Political
          fallout was swift: Pakistan faced international and regional consequences, and authorities arrested the hijackers
          and many alleged collaborators. Maqbool Bhat and numerous NLF activists were detained in the sweeping crackdown
          that followed.
        </p>
      </section>

      <section id="second-reentry" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Second Re-entry &amp; Second Death Sentence (1976)</h2>
        <p>
          In <strong>May 1976</strong>, amid renewed agitation—particularly student protest against the{" "}
          <strong>Indira–Sheikh Accord</strong>—Bhat re-entered Jammu and Kashmir. He was soon rearrested following a bank
          robbery attempt in Kupwara during which a bank employee was killed. He received a{" "}
          <strong>second death sentence</strong>.
        </p>
      </section>

      <section id="jklf" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">JKLF Formation in Exile (1977)</h2>
        <p>
          Bhat’s arrest weakened the NLF’s operational capacity. In exile, organisational restructuring continued: the UK
          chapter of the Plebiscite Front was converted into the <strong>Jammu and Kashmir Liberation Front (JKLF)</strong>{" "}
          in <strong>May 1977</strong>, with an armed wing later described as the National Liberation Army. Various efforts
          were made by different groups to secure Bhat’s release, including high-profile actions and attempted operations
          in subsequent years.
        </p>
      </section>

      <section id="execution" className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Execution (1984)</h2>
        <p>
          In early February 1984, pressure intensified around Bhat’s case. His clemency petition was rejected, and he was
          executed by hanging in <strong>Tihar Jail, New Delhi</strong>, on <strong>11 February 1984</strong>, amid heavy
          security. Reports described him as calm and composed as he was taken to the gallows. His body was buried within
          the Tihar Jail premises, contrary to the wishes of his family and supporters.
        </p>
      </section>

      <section id="legacy" className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Legacy</h2>
        <p>
          Bhat’s execution triggered protests and shutdowns in parts of Kashmir, including extended closures in Trehgam
          and deserted streets in Srinagar. Supporters and several political voices described the hanging as politically
          motivated, while the state framed it as a hardening line against political violence. In the years that followed,
          JKLF’s movement expanded, and demands continued for the return of his mortal remains from Tihar Jail.
        </p>
        <p className="mt-3">
          In <strong>1989</strong>, JKLF launched a militant movement in Kashmir, frequently invoking Maqbool Bhat’s
          symbolism and legacy. On <strong>4 November 1989</strong>, JKLF militants allegedly killed Judge{" "}
          <strong>Neelkanth Ganjoo</strong>, who had presided over the Amar Chand murder trial in which Bhat received the
          death sentence.
        </p>
      </section>

      {/* Footer Note */}
      <footer className="pt-6 border-t text-sm opacity-70">
        <p>
          <em>Compiler:</em> Khawaja Aneeq Kakroo.
        </p>
      </footer>
    </Section>
  );
}
