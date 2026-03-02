import Hero from "../component/social-ads-page/hero";
import FAQSection from "../component/social-ads-page/FAQ-section";
import Contact from "../component/social-ads-page/contact";
import WhyChooseUs from "../component/social-ads-page/whychoose";
import ApproachSection from "../component/social-ads-page/our-approch";
import StrategyCallSection from "../component/social-ads-page/strategy-call-section";
import TestimonialsSection from "../component/social-ads-page/testimonials";
import DidYouKnow from "../component/social-ads-page/didYouKnow";

export default function page() {
  return (
    <div>
      <Hero />
      <DidYouKnow />
      <WhyChooseUs />
      <ApproachSection />
      <StrategyCallSection />
      <FAQSection />
      <TestimonialsSection />
      <Contact />
    </div>
  );
}
