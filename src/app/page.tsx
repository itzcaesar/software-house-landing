import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { Portfolio } from "@/components/sections/portfolio";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { FaqJsonLd } from "@/components/seo/structured-data";
import { en } from "@/lib/dictionaries";

// Section on/off switches — flip to re-enable (components stay in the tree).
const SHOW_TRUSTED_BY = false;
const SHOW_TESTIMONIALS = false;

export default function HomePage() {
  return (
    <>
      <FaqJsonLd id="faq" items={en.faq.items} />
      <Hero />
      {SHOW_TRUSTED_BY && <TrustedBy />}
      <Services />
      <WhyUs />
      <Process />
      <Portfolio />
      {SHOW_TESTIMONIALS && <Testimonials />}
      <Pricing />
      <Faq />
      <Contact />
    </>
  );
}
