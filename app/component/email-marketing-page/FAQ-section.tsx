"use client";

import { useState } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    question: "Why choose us for your PPC management needs?",
    answer:
      "Our team doesn’t just manage PPC campaigns; we become an extension of your business. With a combination of data-driven strategies, continuous optimisation, and a passion for achieving your goals, we stand apart. Add to this our commitment to transparency, regular reporting, and open communication, and you have a partnership that’s truly geared for success.",
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
    <div className="flex flex-col justify-center items-center py-24 bg-white text-black">
      <h2 className="text-5xl font-semibold font-sans mb-10">
        Frequently Asked <span className="text-[#9C27B0]"> Questions</span>
      </h2>
      <div className="space-y-6 max-w-6xl w-full mx-auto">
        {faqs.map((reason, idx) => (
          <div
            key={idx}
            className="bg-slate-100 rounded-2xl w-full px-6 py-10 cursor-pointer transition duration-300"
            onClick={() => toggle(reason.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#9C27B0] w-7 h-7 rounded-full flex items-center justify-center text-white">
                  <Check size={16} />
                </div>
                <h3 className="font-semibold text-xl">{reason.question}</h3>
              </div>

              <span className="text-[#9C27B0] text-xl">
                {openId === reason.id ? (
                  <Minus size={16} />
                ) : (
                  <Plus size={16} />
                )}
              </span>
            </div>

            <AnimatePresence>
              {openId === reason.id && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="mt-4 text-gray-600 text-lg"
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
