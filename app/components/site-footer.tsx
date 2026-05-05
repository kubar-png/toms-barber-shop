export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="barber-stripe" />
      <div className="foot-row">
        <div className="brand-mark">
          Tom&apos;s{" "}
          <span style={{ color: "var(--fg-muted)", fontStyle: "normal", fontWeight: 400 }}>
            Barbershop
          </span>
        </div>
        <div>© 2024–2026 · Všechna práva vyhrazena</div>
        <div>Brno · CZ</div>
      </div>
    </footer>
  );
}
