import React from "react";
import Hero from "../component/pricing-page/hero";
import PricingSection from "../component/pricing-page/pricing-section";
import FAQSection from "../component/pricing-page/FAQ-section";
import PricingComparisonTable from "../component/pricing-page/comparison-table";
import Contact from "../component/pricing-page/contact";
import StrategyCallSection from "../component/pricing-page/strategy-call-section";

export default function page() {
  return (
    <div>
      <Hero />
      <PricingSection />
      <PricingComparisonTable />
      <StrategyCallSection/>
      <FAQSection />
      <Contact />
    </div>
  );
}
