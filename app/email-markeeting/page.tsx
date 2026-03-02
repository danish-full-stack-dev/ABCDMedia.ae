import Hero from "../component/email-markeeting-page/hero";
import EmailMarketing from "../component/email-markeeting-page/what-emailmarketing";
import Trust from "../component/email-markeeting-page/trust";
import HookSection from "../component/email-markeeting-page/hook";
import WhoIsHookFor from "../component/email-markeeting-page/hook-for";
import MarketingTools from "../component/email-markeeting-page/TimelineSection";
import FAQSection from "../component/email-markeeting-page/FAQ-section";
import TestimonialsSection from "../component/email-markeeting-page/testimonials";
import Contact from "../component/email-markeeting-page/contact";



export default function EmailMarketingPage() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <EmailMarketing />
      <Trust />
      <HookSection />
      <WhoIsHookFor />
      < MarketingTools/>
      <FAQSection/>
      <TestimonialsSection/>
      <Contact/>

      
    </div>
  );
}