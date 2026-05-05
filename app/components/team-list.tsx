"use client";

import { useEffect, useRef, useState } from "react";

type Member = {
  name: string;
  role: string;
  ico: string;
  address: string;
};

const TEAM: readonly Member[] = [
  {
    name: "Tomáš Pelán",
    role: "Holič & majitel",
    ico: "19263716",
    address: "Skácelova 1223/10, 612 00 Brno",
  },
  {
    name: "Denisa Daňková",
    role: "Holička",
    ico: "21289395",
    address: "Krylova 532/8, 669 04 Znojmo",
  },
];

export function TeamList() {
  return (
    <div className="team">
      {TEAM.map((m) => (
        <TeamMember key={m.ico} member={m} />
      ))}
    </div>
  );
}

function TeamMember({ member }: { member: Member }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="team-member" ref={wrapRef}>
      <button
        type="button"
        className="team-trigger"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        <b>{member.name}</b>
        <br />
        <span>{member.role}</span>
      </button>
      {open && (
        <div
          className="info-popover"
          role="dialog"
          aria-label={`Fakturační údaje — ${member.name}`}
        >
          <div className="info-popover-name">{member.name}</div>
          <dl className="info-popover-list">
            <dt>IČO</dt>
            <dd>{member.ico}</dd>
            <dt>Sídlo</dt>
            <dd>{member.address}</dd>
          </dl>
        </div>
      )}
    </div>
  );
}
