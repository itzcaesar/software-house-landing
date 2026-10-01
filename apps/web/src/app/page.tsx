import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Niches } from "@/components/sections/niches";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FaqJsonLd } from "@/components/seo/structured-data";
import { id } from "@/lib/dictionaries";
import { SHOW_PORTFOLIO } from "@/lib/content";

// Proof sections stay off until real, approved material exists:
// [ISI: logo klien] (TrustedBy), [ISI: testimoni asli] (Testimonials), [ISI: portofolio asli] (SHOW_PORTFOLIO).
const SHOW_TRUSTED_BY = false;
const SHOW_TESTIMONIALS = false;

export default function HomePage() {
  return (
    <>
      <FaqJsonLd id="faq" items={id.faq.items} />
      <Hero />
      {SHOW_TRUSTED_BY && <TrustedBy />}
      <Services />
      <WhyUs />
      <Process />
      <Pricing />
      <Niches />
      {SHOW_PORTFOLIO && <Portfolio />}
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Faq />
      <Contact />
    </>
  );
}
