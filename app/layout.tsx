import type { Metadata } from "next";
import { Bodoni_Moda, Inter_Tight } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toms-barber-shop.vercel.app"),
  title: "Tom's Barbershop",
  description:
    "Profesionalita, osobní přístup, precizní stříhání. Klasické pánské střihy, péče o vousy a holení horkým ručníkem v Brně-Žabovřeskách.",
  openGraph: {
    title: "Tom's Barbershop",
    description: "Klasické pánské střihy, péče o vousy a holení horkým ručníkem v Brně-Žabovřeskách.",
    type: "website",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tom's Barbershop",
    description: "Klasické pánské střihy, péče o vousy a holení horkým ručníkem v Brně-Žabovřeskách.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${bodoni.variable} ${interTight.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
