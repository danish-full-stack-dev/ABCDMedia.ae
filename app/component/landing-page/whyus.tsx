"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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

export default function WhyUs() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white text-black">
      <div className="w-11/12 md:max-w-10/12 mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* LEFT COLUMN */}
        <div className="flex flex-col">
          <div className="flex flex-col justify-start md:-mt-10">
            <p className="text-[#9C27B0] text-xs md:text-sm uppercase tracking-widest font-semibold mb-3 md:mb-4">
              Why Choose Us
            </p>

            {/* Main Heading */}
            <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-6 md:mb-10">
              <span className="md:whitespace-nowrap">
                Why Choose <span className="text-[#9C27B0]">ABCDMEDIA?</span>
              </span>
              <br /> We grow when you grow.
            </h2>
          </div>

          <div className="bg-amber-50 flex justify-center mt-4 md:mt-0">
            <img
              src="/whyus0.png"
              alt="Team Member"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-start mt-2 md:mt-1">
          <p className="text-gray-600 mb-6 md:mb-10 text-sm md:text-xl leading-relaxed font-medium font-sans">
            You get a committed team that understands your business goals and
            works closely with you. We provide proactive guidance, regular
            updates, and ongoing optimisation.
          </p>

          <div className="space-y-4 md:space-y-6">
            {reasons.map((reason) => (
              <div
                key={reason.id}
                className="bg-[#ececf3] rounded-2xl px-5 md:px-6 py-6 md:py-10 cursor-pointer transition-all duration-300"
                onClick={() => toggle(reason.id)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#9C27B0] w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-white">
                      <Check size={14} />
                    </div>
                    <h3 className="font-semibold text-base md:text-xl">
                      {reason.title}
                    </h3>
                  </div>

                  <span className="text-[#9C27B0] text-lg md:text-xl">
                    {openId === reason.id ? "↑" : "↓"}
                  </span>
                </div>

                {openId === reason.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 md:mt-4 text-gray-600 text-xs md:text-lg"
                  >
                    {reason.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}