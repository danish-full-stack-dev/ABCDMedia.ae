import Hero from "../component/website-building/hero";
import HowWeDo from "../component/website-building/HowWeDo";
import FAQSection from "../component/website-building/FAQ-section";
import Contact from "../component/website-building/contact";
import TestimonialsSection from "../component/website-building/testimonials";
import ExpertiseBanner from "../component/website-building/project";
import WhatWeDo from "../component/website-building/what-wedo";
import Trust from "../component/website-building/trust";
import IndustriesWeCater from "../component/website-building/industries";



export default function WebsiteBuildingPage() {
  return (
    <div className="bg-black text-white">
      <Hero />
     <WhatWeDo/>
     <Trust />
      <HowWeDo/>
      <ExpertiseBanner/>
      <IndustriesWeCater/>
      <FAQSection/>
      <TestimonialsSection/>
      <Contact/>
      
    </div>
  );
}