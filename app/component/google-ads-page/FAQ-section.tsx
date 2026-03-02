"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Why choose us for your PPC management needs?",
    answer:
      "Our team doesn’t just manage PPC campaigns; we become an extension of your business. With a combination of data-driven strategies, continuous optimisation, and a passion for achieving your goals, we stand apart. Add to this our commitment to transparency, regular reporting, and open communication, and you have a partnership that’s truly geared for success.",
  },
  {
    question: "How often will I receive reports on my campaign's performance?",
    answer:
      "We provide regular performance reports, typically on a monthly basis, along with ongoing insights and optimisation updates.",
  },
  {
    question: "How quickly can I expect to see results from my PPC campaign?",
    answer:
      "Results can start appearing within weeks, but consistent optimisation over 2–3 months delivers the strongest performance gains.",
  },
  {
    question: "Do I have full access to my PPC accounts and campaigns?",
    answer:
      "Absolutely. We believe in full transparency, and you will always have access to your accounts and campaign data.",
  },
  {
    question: "How do you determine the right budget for my PPC campaign?",
    answer:
      "We evaluate your industry, competition, goals, and expected ROI to determine the most effective and scalable ad budget.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="bg-slate-200 py-20 px-6">
      <div className="w-10/12 mx-auto">

        {/* Heading */}
        <h2 className="text-center text-4xl font-bold mb-14 text-gray-900">
          Frequently Asked{" "}
          <span className="text-[#C026D3]">Questions</span>
        </h2>

        {/* FAQ List */}
        <div className="space-y-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-300 
                ${activeIndex === index 
                  ? "bg-white shadow-lg border border-[#C026D3]/30" 
                  : "bg-white/70 border border-gray-200"}`}
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left"
              >
                <span className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </span>

                <span className="ml-4 flex items-center justify-center w-8 h-8 rounded-full bg-[#C026D3] text-white">
                  {activeIndex === index ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-8 pb-8 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}