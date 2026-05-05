import { TeamList } from "./team-list";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="eyebrow">— O nás</div>
            <h2 className="display-l">
              Řemeslo,
              <br />
              ne továrna.
            </h2>
          </div>
          <div>
            <p className="quote">
              &ldquo;Svou práci odvádím vždy na maximum. Klient odchází s úsměvem na tváři —
              to je celé.&rdquo;
            </p>
            <p className="body-text">
              Nově otevřený barbershop v Brně-Žabovřeskách. Klademe důraz na profesionalitu,
              osobní přístup a precizní stříhání. Doporučíme ti střih, který sedne tvému typu
              vlasů i tobě.
            </p>
            <TeamList />
          </div>
        </div>
      </div>
    </section>
  );
}
