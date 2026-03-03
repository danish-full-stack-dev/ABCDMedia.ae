import Hero from "../component/google-ads-page/hero";
import DidYouKnow from "../component/google-ads-page/didYouKnow";
import Trust from "../component/google-ads-page/trust";
import OurApproach from "../component/google-ads-page/ourApproach";
import ExpertiseBanner from "../component/google-ads-page/expertise";
import StrategyCallSection from "../component/google-ads-page/strategy-call";
import FAQSection from "../component/google-ads-page/FAQ-section";
import Contact from "../component/google-ads-page/contact";
import TestimonialsSection from "../component/google-ads-page/testimonials";
export default function GoogleAdsPage() {
  return (
    <div className="">
      <Hero />
      <DidYouKnow />
      <Trust />
      <OurApproach />
      <ExpertiseBanner />
      <StrategyCallSection />
      <FAQSection />
      <TestimonialsSection />
      <Contact />
    </div>
  );
}
