import Hero from "../component/email-marketing-page/hero";
import EmailMarketing from "../component/email-marketing-page/what-emailmarketing";
import Trust from "../component/email-marketing-page/trust";
import HookSection from "../component/email-marketing-page/hook";
import WhoIsHookFor from "../component/email-marketing-page/hook-for";
import MarketingTools from "../component/email-marketing-page/TimelineSection";
import FAQSection from "../component/email-marketing-page/FAQ-section";
import Contact from "../component/email-marketing-page/contact";
import GoogleTestimonialsSection from "../component/generic/google-testimonials";
import TrustpilotTestimonialsSection from "../component/generic/turstpilot-testimonials";

export default function EmailMarketingPage() {
  return (
    <div className="">
      <Hero />
      <EmailMarketing />
      <Trust />
      <HookSection />
      <WhoIsHookFor />
      <MarketingTools />
      <FAQSection />

      <GoogleTestimonialsSection />
      <TrustpilotTestimonialsSection />
      <Contact />
    </div>
  );
}
