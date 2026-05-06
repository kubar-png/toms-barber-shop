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
              <a
                href="https://www.google.com/maps/place/Minsk%C3%A1+98%2C+616+00+Brno-%C5%BDabov%C5%99esky"
                target="_blank"
                rel="noopener noreferrer"
                className="address-link"
                aria-label="Otevřít Minská 98, Brno-Žabovřesky v Google Mapách"
              >
                <span className="address">
                  Minská 98
                  <br />
                  Brno-Žabovřesky
                </span>
              </a>
              <div className="address-meta">616 00 · vchod z ulice Minská</div>
            </address>
            <div className="contact-links">
              <a href={`mailto:${EMAIL}`}>
                <span>Email</span>
                <span>{EMAIL}</span>
              </a>
              <a
                href="https://www.instagram.com/_tomsbarbershop_?igsh=Z2hsNTAzb21oNGl4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Instagram</span>
                <span>@_tomsbarbershop_</span>
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Minsk%C3%A1+98%2C+Brno-%C5%BDabov%C5%99esky"
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
