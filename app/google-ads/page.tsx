import Hero from "./components/hero";
import DidYouKnow from "./components/didYouKnow";
import Trust from "./components/trust";
import OurApproach from "./components/ourApproach";
import ExpertiseBanner from "./components/expertise";
export default function GoogleAdsPage() {
  return (
    <div className="bg-black text-white">
      <Hero />
      <DidYouKnow />
      <Trust />
      <OurApproach />
     < ExpertiseBanner/>
    </div>
  );
}