type Service = {
  name: string;
  desc: string;
  meta: string;
  price: string;
  url: string; // Reservio booking link for this specific service
};

// ── Reservio booking ──────────────────────────────────────
const RESERVIO_BASE = "https://toms-barbershop.reservio.com/booking?step=2";
const TOMAS_RID  = "270002c6-7eea-4223-9dc7-0ec457da8041";
const DENISA_RID = "3378cf74-0056-4a91-8c45-4ecad0993bfa";
const RESERVIO_FALLBACK = "https://toms-barbershop.reservio.com/order?what=time";

function reservio(serviceId: string, resourceId: string): string {
  if (!serviceId || !resourceId) return RESERVIO_FALLBACK;
  return `${RESERVIO_BASE}&serviceId=${serviceId}&resourceId=${resourceId}`;
}

// ╔══════════════════════════════════════════════════════════╗
// ║  TOMÁŠ                                                    ║
// ╚══════════════════════════════════════════════════════════╝
const TOMAS: readonly Service[] = [
  { name: "Střih",                desc: "Doporučení a precizní pánský střih.",            meta: "45–60 min",   price: "800 Kč",   url: reservio("6080baf2-d38b-4bfe-b001-58be4332677f", TOMAS_RID) },
  { name: "Střih + Vousy",        desc: "Střih a tvarování vousů s horkým ručníkem.",     meta: "75–90 min",   price: "1 350 Kč", url: reservio("fcbd54ae-3946-4350-ba3c-f08d46db11be", TOMAS_RID) },
  { name: "Vousy",                desc: "Tvarování, holení a péče o vousy.",              meta: "30–45 min",   price: "650 Kč",   url: reservio("b3c7b762-a20d-4bb7-b565-bc4597696db5", TOMAS_RID) },
  { name: "Střih + Péče o pleť",  desc: "Střih plus čištění a hydratace pleti.",          meta: "75–90 min",   price: "1 350 Kč", url: reservio("16d757b8-e2d6-4a49-aeae-00053234bdb1", TOMAS_RID) },
  { name: "Kompletní péče",       desc: "Celkový balíček — střih, vousy i péče o pleť.",  meta: "105–120 min", price: "1 750 Kč", url: reservio("01ec2e55-53ae-456b-9566-635f72ec1446", TOMAS_RID) },
];

// ╔══════════════════════════════════════════════════════════╗
// ║  DENISA                                                   ║
// ╚══════════════════════════════════════════════════════════╝
const DENISA: readonly Service[] = [
  { name: "Střih",                desc: "Doporučení a precizní pánský střih.",            meta: "45–60 min",   price: "750 Kč",   url: reservio("f478a42e-9f41-49b8-a0e3-caf81bb02616", DENISA_RID) },
  { name: "Střih + Vousy",        desc: "Střih a tvarování vousů s horkým ručníkem.",     meta: "75–90 min",   price: "1 300 Kč", url: reservio("6e3d7105-c1ed-4992-bccf-4f480734846f", DENISA_RID) },
  { name: "Vousy",                desc: "Tvarování, holení a péče o vousy.",              meta: "30–45 min",   price: "600 Kč",   url: reservio("bbc3c8ec-5b2d-44cc-93ac-001dbbbaa082", DENISA_RID) },
  { name: "Střih + Péče o pleť",  desc: "Střih plus čištění a hydratace pleti.",          meta: "75–90 min",   price: "1 300 Kč", url: reservio("9dfbe5fd-504e-432a-843e-5d30550d5dcd", DENISA_RID) },
  { name: "Kompletní péče",       desc: "Celkový balíček — střih, vousy i péče o pleť.",  meta: "105–120 min", price: "1 700 Kč", url: reservio("f53238a6-29aa-4740-a10c-0b55eea98e3f", DENISA_RID) },
];

function PriceList({
  eyebrow,
  title,
  services,
}: {
  eyebrow: string;
  title: string;
  services: readonly Service[];
}) {
  return (
    <div className="cenik-col">
      <div className="col-eye">— {eyebrow}</div>
      <h3>{title}</h3>
      {services.map((s, i) => (
        <div key={i} className="cenik-row">
          <div>
            <div className="cenik-name">{s.name}</div>
            <div className="cenik-desc">{s.desc}</div>
            <div className="cenik-meta">{s.meta}</div>
          </div>
          <div className="cenik-price">{s.price}</div>
          <a
            className="btn-mini"
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
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
            <div className="eyebrow">— Ceník</div>
            <h2 className="display-l">Služby &amp; ceny</h2>
          </div>
          <p className="body-text" style={{ maxWidth: "36ch", fontSize: 14 }}>
            Termín si rezervuj přes tlačítko u dané služby. Konzultace ke střihu je v ceně.
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
