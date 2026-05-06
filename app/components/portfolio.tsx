export function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow">— Portfolio</div>
            <h2 className="display-l">Práce z křesla</h2>
          </div>
          <p className="body-text" style={{ maxWidth: "36ch", fontSize: 14 }}>
            Galerie se připravuje. Sleduj nás na Instagramu pro nejnovější střihy.
          </p>
        </div>
        <div className="port-grid">
          {([1, 2, 3, 4, 5, 6] as const).map((n, i) => (
            <div
              key={n}
              className={`port-cell port-c${n}`}
              style={{ ["--cell" as string]: i } as React.CSSProperties}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
