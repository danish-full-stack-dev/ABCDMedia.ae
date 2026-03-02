import React from "react";
import Hero from "../component/seo-page/hero";
import WhyChooseUs from "../component/seo-page/whychoose";
import DidYouKnow from "../component/seo-page/didYouKnow";
import FAQSection from "../component/seo-page/FAQ-section";
import TestimonialsSection from "../component/seo-page/testimonials";
import Contact from "../component/seo-page/contact";
import ApproachSection from "../component/seo-page/our-approch";
import InternationalSeoSection from "../component/seo-page/international-seo";
import SEOResults from "../component/seo-page/our-results";

export default function page() {
  return (
    <div>
      <Hero />
      <InternationalSeoSection />
      <WhyChooseUs />
      <DidYouKnow />
      <SEOResults />
      <ApproachSection />
      <FAQSection />
      <TestimonialsSection />
      <Contact />
    </div>
  );
}
