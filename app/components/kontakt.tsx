import { MapDark } from "./map-dark";

const EMAIL = "tomsbarbershopbrno" + "@" + "gmail.com";

export function Kontakt() {
  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow">— Kontakt</div>
            <h2 className="display-l">Najdete nás</h2>
          </div>
        </div>
        <div className="kontakt-grid">
          <div>
            <address style={{ fontStyle: "normal" }}>
              <div className="address">
                Minská 98
                <br />
                Brno-Žabovřesky
              </div>
              <div className="address-meta">616 00 · vchod z ulice Minská</div>
            </address>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}>
                <span>Email</span>
                <span>{EMAIL}</span>
              </a>
              <a
                href="https://instagram.com/_tomsbarbershop_"
                target="_blank"
                rel="noreferrer"
              >
                <span>Instagram</span>
                <span>@_tomsbarbershop_</span>
              </a>
              <a
                href="https://mapy.cz/s/dogudoreka"
                target="_blank"
                rel="noreferrer"
              >
                <span>Mapy</span>
                <span>Otevřít trasu</span>
              </a>
            </div>
            <div className="parking">
              Parkování: modrá zóna na Minské nebo Doležalově.
            </div>
          </div>
          <div>
            <div className="map-frame">
              <MapDark />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
