type Service = { name: string; meta: string; price: string };

const TOMAS: readonly Service[] = [
  { name: "Střih",                 meta: "45–60 min",   price: "800 Kč"  },
  { name: "Střih + Vousy",         meta: "75–90 min",   price: "1 350 Kč" },
  { name: "Vousy",                 meta: "30–45 min",   price: "650 Kč"  },
  { name: "Střih + Péče o pleť",   meta: "75–90 min",   price: "1 350 Kč" },
  { name: "Kompletní péče",        meta: "105–120 min", price: "1 750 Kč" },
];

const DENISA: readonly Service[] = [
  { name: "Střih",                 meta: "45–60 min",   price: "750 Kč"  },
  { name: "Střih + Vousy",         meta: "75–90 min",   price: "1 300 Kč" },
  { name: "Vousy",                 meta: "30–45 min",   price: "600 Kč"  },
  { name: "Střih + Péče o pleť",   meta: "75–90 min",   price: "1 300 Kč" },
  { name: "Kompletní péče",        meta: "105–120 min", price: "1 700 Kč" },
];

const EMAIL = "[email protected]";

function bookingHref(barber: string, service: string): string {
  const subject = `Rezervace · ${barber} · ${service}`;
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

function PriceList({ eyebrow, title, services }: { eyebrow: string; title: string; services: readonly Service[] }) {
  return (
    <div className="cenik-col">
      <div className="col-eye">— {eyebrow}</div>
      <h3>{title}</h3>
      {services.map((s, i) => (
        <div key={i} className="cenik-row">
          <div>
            <div className="cenik-name">{s.name}</div>
            <div className="cenik-meta">{s.meta}</div>
          </div>
          <div className="cenik-price">{s.price}</div>
          <a
            className="btn-mini"
            href={bookingHref(eyebrow, s.name)}
            aria-label={`Rezervovat: ${s.name} u ${eyebrow}`}
          >
            Rezervovat
          </a>
        </div>
      ))}
    </div>
  );
}

export function Cenik() {
  return (
    <section className="section" id="cenik">
      <div className="section-inner">
        <div className="section-head">
          <div>
            <div className="eyebrow" style={{ marginBottom: 8 }}>— Ceník</div>
            <h2 className="display-l">Služby &amp; ceny</h2>
          </div>
          <p className="body-text" style={{ maxWidth: "36ch", fontSize: 14 }}>
            Ceny jsou orientační. Konečnou cenu určí délka úkonu a typ služby.
          </p>
        </div>
        <div className="cenik-grid">
          <PriceList eyebrow="TOMÁŠ"  title="Cenovka" services={TOMAS} />
          <PriceList eyebrow="DENISA" title="Cenovka" services={DENISA} />
        </div>
      </div>
    </section>
  );
}
