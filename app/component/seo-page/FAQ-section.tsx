"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const reasons = [
    {
      id: 1,
      title: "Performance-Driven Results",
      description:
        "We focus on delivering measurable growth, not just clicks and impressions. Every strategy is built to increase conversions, revenue, and long-term profitability.",
    },
    {
      id: 2,
      title: "Smart, Data-Led Strategies",
      description:
        "Our approach leverages analytics and insights to maximize efficiency and ROI across all campaigns.",
    },
    {
      id: 3,
      title: "Dedicated Expert Support",
      description:
        "A committed team ensures your campaigns run smoothly, providing guidance and proactive solutions at every step.",
    },
    {
      id: 4,
      title: "Full Transparency",
      description:
        "We provide clear reporting and open communication so you always know how your campaigns are performing.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-24">
      <h2 className="text-5xl font-semibold font-sans mb-10">
        Frequently Asked <span className="text-[#9C27B0]"> Questions</span>
      </h2>
      <div className="space-y-6 max-w-5xl w-full mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-slate-100 rounded-2xl w-full px-6 py-10 cursor-pointer transition-all duration-300"
            onClick={() => toggle(reason.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-[#9C27B0] w-7 h-7 rounded-full flex items-center justify-center text-white">
                  <Check size={16} />
                </div>
                <h3 className="font-semibold text-xl">{reason.title}</h3>
              </div>

              <span className="text-[#9C27B0] text-xl">
                {openId === reason.id ? "↑" : "↓"}
              </span>
            </div>

            {openId === reason.id && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
                className="mt-4 text-gray-600 text-lg"
              >
                {reason.description}
              </motion.p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
