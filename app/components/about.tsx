export function About() {
  return (
    <section className="section" id="about">
      <div className="section-inner">
        <div className="about-grid">
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— O nás</div>
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
              osobní přístup a precizní stříhání. Doporučíme střih, který sedne k vašemu typu
              vlasů i k vám.
            </p>
            <div className="team">
              <div>
                <b>Tomáš Pelán</b>
                <br />
                <span>Holič &amp; majitel</span>
              </div>
              <div>
                <b>Denisa Daňková</b>
                <br />
                <span>Holička</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
