"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Why choose us for your PPC management needs?",
    answer:
      "Our team doesn't just manage PPC campaigns; we become an extension of your business. With a combination of data-driven strategies, continuous optimisation, and a passion for achieving your goals, we stand apart. Add to this our commitment to transparency, regular reporting, and open communication, and you have a partnership that's truly geared for success.",
  },
  {
    id: 2,
    question: "How often will I receive reports on my campaign's performance?",
    answer:
      "We provide regular performance reports, typically on a monthly basis, along with ongoing insights and optimisation updates.",
  },
  {
    id: 3,
    question: "How quickly can I expect to see results from my PPC campaign?",
    answer:
      "Results can start appearing within weeks, but consistent optimisation over 2–3 months delivers the strongest performance gains.",
  },
  {
    id: 4,
    question: "Do I have full access to my PPC accounts and campaigns?",
    answer:
      "Absolutely. We believe in full transparency, and you will always have access to your accounts and campaign data.",
  },
  {
    id: 5,
    question: "How do you determine the right budget for my PPC campaign?",
    answer:
      "We evaluate your industry, competition, goals, and expected ROI to determine the most effective and scalable ad budget.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="flex flex-col justify-center items-center py-12 md:py-24 px-4 md:px-0">
      {/* H2: 2xl on mobile, 5xl on desktop */}
      <h2 className="text-2xl md:text-5xl font-semibold font-sans mb-6 md:mb-10 text-center">
        Frequently Asked <span className="text-[#9C27B0]"> Questions</span>
      </h2>

      <div className="space-y-3 md:space-y-6 max-w-5xl w-full mx-auto">
        {faqs.map((reason) => (
          <div
            key={reason.id}
            className="rounded-2xl w-full px-4 md:px-6 py-4 md:py-5 cursor-pointer bg-slate-100 transition duration-300"
            onClick={() => toggle(reason.id)}
          >
            <div className="flex justify-between items-center gap-3">
              {/* Question: sm on mobile, base on desktop */}
              <h3 className="font-semibold text-sm md:text-base leading-snug">
                {reason.question}
              </h3>

              <span
                className={`p-1 rounded-full flex-shrink-0 ${openId === reason.id ? "bg-[#9C27B0] text-white" : "bg-gray-100 text-[#9C27B0]"}`}
              >
                {openId === reason.id ? (
                  <Minus size={14} />
                ) : (
                  <Plus size={14} />
                )}
              </span>
            </div>

            <AnimatePresence>
              {openId === reason.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-3 md:mt-4 text-gray-600 text-xs md:text-base"
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {reason.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}