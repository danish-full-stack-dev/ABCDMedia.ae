import Hero from "../component/website-building/hero";
import HowWeDo from "../component/website-building/HowWeDo";
import FAQSection from "../component/website-building/FAQ-section";
import Contact from "../component/website-building/contact";
import GoogleTestimonialsSection from "../component/generic/google-testimonials";
import TrustpilotTestimonialsSection from "../component/generic/turstpilot-testimonials";
import ExpertiseBanner from "../component/website-building/project";
import WhatWeDo from "../component/website-building/what-wedo";
import Trust from "../component/website-building/trust";
import IndustriesWeCater from "../component/website-building/industries";
import WebDevServices from "../component/website-building/webdev-services";

export default function WebsiteBuildingPage() {
  return (
    <div className="">
      <Hero />
      <WhatWeDo />
      <Trust />
      <HowWeDo />
      <ExpertiseBanner />
      <WebDevServices />
      <IndustriesWeCater />
      <FAQSection />
      <GoogleTestimonialsSection />
      <TrustpilotTestimonialsSection />
      <Contact />
    </div>
  );
}
