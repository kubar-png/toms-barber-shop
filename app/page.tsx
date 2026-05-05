import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Cenik } from "./components/cenik";
import { Portfolio } from "./components/portfolio";
import { Kontakt } from "./components/kontakt";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Cenik />
      <Portfolio />
      <Kontakt />
      <SiteFooter />
    </>
  );
}
