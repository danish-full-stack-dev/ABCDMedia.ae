import CarouselSlider from "./component/landing-page/carouselSlider";
import Hero from "./component/landing-page/hero";
import WhyUs from "./component/landing-page/whyus";
export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      <WhyUs />
      <CarouselSlider />
    </div>
  );
}
