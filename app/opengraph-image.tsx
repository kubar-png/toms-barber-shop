import { ImageResponse } from "next/og";

export const alt = "Tom's Barbershop — Minská 98, Brno-Žabovřesky";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(family: string, params: string): Promise<ArrayBuffer> {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:${params}&display=swap`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/url\((https:\/\/[^)]+)\)/);
  if (!match) throw new Error(`Font URL not found for ${family}`);
  const data = await fetch(match[1]).then((r) => r.arrayBuffer());
  return data;
}

const HAIRS: ReadonlyArray<{
  x: number; y: number; rot: number; scale: number; op: number; stroke: number;
}> = [
  { x: 70,   y: 70,   rot: 18,  scale: 1.4, op: 0.42, stroke: 0.7 },
  { x: 1080, y: 90,   rot: -42, scale: 1.1, op: 0.35, stroke: 0.6 },
  { x: 80,   y: 470,  rot: 60,  scale: 1.6, op: 0.5,  stroke: 0.8 },
  { x: 1100, y: 420,  rot: -22, scale: 1.2, op: 0.4,  stroke: 0.65 },
  { x: 850,  y: 510,  rot: 88,  scale: 1.0, op: 0.36, stroke: 0.55 },
  { x: 280,  y: 110,  rot: -14, scale: 1.3, op: 0.32, stroke: 0.6 },
  { x: 200,  y: 510,  rot: 38,  scale: 0.9, op: 0.44, stroke: 0.7 },
  { x: 980,  y: 230,  rot: 110, scale: 1.1, op: 0.3,  stroke: 0.55 },
];

export default async function Image() {
  const [bodoni, inter] = await Promise.all([
    loadGoogleFont("Bodoni Moda", "ital,wght@1,900"),
    loadGoogleFont("Inter Tight", "wght@500"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#070B14",
          backgroundImage:
            "radial-gradient(ellipse 70% 55% at 50% 45%, #E0C49C28 0%, transparent 65%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#F1ECDC",
          position: "relative",
        }}
      >
        {/* Scattered static hairs */}
        {HAIRS.map((h, i) => (
          <svg
            key={i}
            width={28 * h.scale}
            height={124 * h.scale}
            viewBox="0 0 18 80"
            style={{
              position: "absolute",
              left: h.x,
              top: h.y,
              transform: `rotate(${h.rot}deg)`,
              opacity: h.op,
            }}
          >
            <path
              d="M 9 2 Q 2 18 9 36 Q 16 54 9 78"
              fill="none"
              stroke="#E8DFC8"
              strokeWidth={h.stroke}
              strokeLinecap="round"
            />
          </svg>
        ))}

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontFamily: "Inter Tight",
            fontSize: 18,
            letterSpacing: "0.3em",
            color: "#f1ecdc7a",
            textTransform: "uppercase",
            marginBottom: 36,
          }}
        >
          EST. 2024 · BRNO-ŽABOVŘESKY
        </div>

        {/* Tom's wordmark */}
        <div
          style={{
            display: "flex",
            fontFamily: "Bodoni Moda",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: 280,
            lineHeight: 0.9,
            letterSpacing: "-0.045em",
            color: "#F1ECDC",
          }}
        >
          Tom&apos;s
        </div>

        {/* Barbershop in champagne */}
        <div
          style={{
            display: "flex",
            fontFamily: "Inter Tight",
            fontWeight: 500,
            fontSize: 36,
            letterSpacing: "0.42em",
            color: "#E0C49C",
            textTransform: "uppercase",
            marginTop: 24,
          }}
        >
          Barbershop
        </div>

        {/* Address at bottom */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 64,
            fontFamily: "Inter Tight",
            fontWeight: 500,
            fontSize: 22,
            letterSpacing: "0.28em",
            color: "#f1ecdcb3",
            textTransform: "uppercase",
          }}
        >
          Minská 98 · Brno-Žabovřesky
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Bodoni Moda", data: bodoni, style: "italic", weight: 900 },
        { name: "Inter Tight", data: inter, style: "normal", weight: 500 },
      ],
    },
  );
}
