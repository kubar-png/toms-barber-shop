type Hair = {
  x: string;
  dur: string;
  delay: string;
  drift: string;
  spin: string;
  op: number;
  stroke: number;
  d: string;
};

const HAIRS: readonly Hair[] = [
  { x: "6%",  dur: "14s", delay: "0s",   drift: "-30px", spin: "200deg",  op: 0.45, stroke: 0.65, d: "M 9 2 Q 2 18 9 36 Q 16 54 9 78" },
  { x: "14%", dur: "18s", delay: "3s",   drift: "60px",  spin: "-180deg", op: 0.35, stroke: 0.65, d: "M 9 2 Q 16 22 9 40 Q 2 60 12 78" },
  { x: "22%", dur: "16s", delay: "6s",   drift: "-50px", spin: "260deg",  op: 0.55, stroke: 0.8,  d: "M 9 2 Q 4 22 9 42 Q 14 64 7 78" },
  { x: "30%", dur: "22s", delay: "1.5s", drift: "40px",  spin: "-220deg", op: 0.4,  stroke: 0.55, d: "M 9 2 Q 14 18 9 38 Q 4 58 11 78" },
  { x: "38%", dur: "13s", delay: "8s",   drift: "-20px", spin: "140deg",  op: 0.5,  stroke: 0.7,  d: "M 9 2 Q 2 22 9 40 Q 16 60 8 78" },
  { x: "46%", dur: "20s", delay: "4s",   drift: "70px",  spin: "-160deg", op: 0.35, stroke: 0.6,  d: "M 9 2 Q 16 24 9 44 Q 2 62 12 78" },
  { x: "54%", dur: "15s", delay: "2s",   drift: "-60px", spin: "240deg",  op: 0.5,  stroke: 0.8,  d: "M 9 2 Q 4 20 9 38 Q 14 56 7 78" },
  { x: "62%", dur: "17s", delay: "10s",  drift: "30px",  spin: "-200deg", op: 0.42, stroke: 0.65, d: "M 9 2 Q 14 22 9 42 Q 4 60 11 78" },
  { x: "70%", dur: "21s", delay: "5s",   drift: "-40px", spin: "280deg",  op: 0.4,  stroke: 0.55, d: "M 9 2 Q 2 24 9 42 Q 16 62 8 78" },
  { x: "78%", dur: "14s", delay: "7s",   drift: "50px",  spin: "-240deg", op: 0.55, stroke: 0.7,  d: "M 9 2 Q 16 18 9 38 Q 2 58 12 78" },
  { x: "86%", dur: "19s", delay: "11s",  drift: "-30px", spin: "180deg",  op: 0.38, stroke: 0.6,  d: "M 9 2 Q 4 22 9 40 Q 14 60 7 78" },
  { x: "94%", dur: "16s", delay: "0.5s", drift: "-50px", spin: "-180deg", op: 0.45, stroke: 0.65, d: "M 9 2 Q 14 24 9 44 Q 4 64 11 78" },
  { x: "50%", dur: "25s", delay: "9s",   drift: "80px",  spin: "300deg",  op: 0.32, stroke: 0.55, d: "M 9 2 Q 2 20 9 38 Q 16 56 8 78" },
  { x: "18%", dur: "23s", delay: "12s",  drift: "-70px", spin: "-280deg", op: 0.36, stroke: 0.6,  d: "M 9 2 Q 16 22 9 42 Q 2 62 12 78" },
];

export function Hairs() {
  return (
    <div className="hairs" aria-hidden="true">
      {HAIRS.map((h, i) => (
        <span
          key={i}
          className="hair-wrap"
          style={{ ["--x" as string]: h.x } as React.CSSProperties}
        >
          <span
            className="hair"
            style={
              {
                ["--dur" as string]: h.dur,
                ["--delay" as string]: h.delay,
                ["--drift" as string]: h.drift,
                ["--spin" as string]: h.spin,
                ["--op" as string]: String(h.op),
              } as React.CSSProperties
            }
          >
            <svg
              viewBox="0 0 18 80"
              fill="none"
              stroke="currentColor"
              strokeWidth={h.stroke}
              strokeLinecap="round"
            >
              <path d={h.d} />
            </svg>
          </span>
        </span>
      ))}
    </div>
  );
}
