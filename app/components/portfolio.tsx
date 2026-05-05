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
          <div className="port-cell port-c1" />
          <div className="port-cell port-c2" />
          <div className="port-cell port-c3" />
          <div className="port-cell port-c4" />
          <div className="port-cell port-c5" />
          <div className="port-cell port-c6" />
        </div>
      </div>
    </section>
  );
}
