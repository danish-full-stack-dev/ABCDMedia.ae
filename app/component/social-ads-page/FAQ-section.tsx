"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Minus, Plus } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1);
  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const reasons = [
    {
      id: 1,
      title: "What is SEO and why is it important?",
      description:
        "SEO (Search Engine Optimization) is the practice of improving your website to rank higher in search engine results. It's crucial because it increases organic visibility, drives qualified traffic, and builds credibility with potential customers.",
    },
    {
      id: 2,
      title: "How long does it take to see SEO results?",
      description:
        "SEO is a long-term strategy. Most websites see meaningful improvements within 3-6 months, but significant results typically take 6-12 months depending on competition, current site health, and strategy implementation.",
    },
    {
      id: 3,
      title: "What's the difference between on-page and off-page SEO?",
      description:
        "On-page SEO involves optimizing elements on your website like content, meta tags, and site structure. Off-page SEO focuses on external factors like backlinks and brand mentions to improve your site's authority and reputation.",
    },
    {
      id: 4,
      title: "Do I need to hire an SEO agency or can I do it myself?",
      description:
        "You can learn SEO basics yourself, but hiring professionals helps you save time and avoid costly mistakes. Agencies bring expertise, tools, and resources to deliver faster, more comprehensive results.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-24 bg-slate-100">
      <h2 className="text-5xl font-semibold font-sans mb-10">
        Frequently Asked <span className="text-[#9C27B0]"> Questions</span>
      </h2>
      <div className="space-y-6 max-w-5xl w-full mx-auto">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="rounded-2xl w-full px-6 py-5 cursor-pointer bg-white transition duration-300"
            onClick={() => toggle(reason.id)}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold text-base">{reason.title}</h3>
              </div>

              <span
                className={`text-sm p-1 rounded-full ${openId === reason.id ? "bg-[#9C27B0] text-white" : "bg-gray-100 text-[#9C27B0]"}`}
              >
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
                  className="mt-4 text-gray-600 text-base"
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {reason.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
