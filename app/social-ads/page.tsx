import Hero from "../component/social-ads-page/hero";
import FAQSection from "../component/social-ads-page/FAQ-section";
import Contact from "../component/social-ads-page/contact";
import WhyChooseUs from "../component/social-ads-page/whychoose";
import ApproachSection from "../component/social-ads-page/our-approch";
import StrategyCallSection from "../component/social-ads-page/strategy-call-section";
import DidYouKnow from "../component/social-ads-page/didYouKnow";
import ExpertiseBanner from "../component/social-ads-page/expertise";
import PricingSection from "../component/social-ads-page/pricing-section";
import GoogleTestimonialsSection from "../component/generic/google-testimonials";
import TrustpilotTestimonialsSection from "../component/generic/turstpilot-testimonials";

export default function page() {
  return (
    <div>
      <Hero />
      <DidYouKnow />
      <WhyChooseUs />
      <ApproachSection />
      <ExpertiseBanner />
      <PricingSection />
      <StrategyCallSection />
      <FAQSection />
      <GoogleTestimonialsSection />
      <TrustpilotTestimonialsSection/>
      <Contact />
    </div>
  );
}
