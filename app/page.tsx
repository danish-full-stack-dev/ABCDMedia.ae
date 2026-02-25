import CarouselSlider from "./component/landing-page/carouselSlider";
import ScaleSection from "./component/landing-page/cta";
import Hero from "./component/landing-page/hero";
import StrategySection from "./component/landing-page/success";
import Contact from "./component/landing-page/contact";
import Hero from "./component/landing-page/hero";
import WhyChooseUs from "./component/landing-page/whychooseus";
import WhyUs from "./component/landing-page/whyus";
export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <WhyUs />
      <CarouselSlider />
      <StrategySection />
      <ScaleSection/>
      <WhyChooseUs />
      <Contact />
    </div>
  );
}
