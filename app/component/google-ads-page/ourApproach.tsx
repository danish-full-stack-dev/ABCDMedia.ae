"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "Research",
    content:
      "We delve into understanding your business, industry, and competitors. By conducting thorough research and analysing market trends, we build our SEO strategies on robust, data-driven foundations.",
  },
  {
    title: "Strategise",
    content:
      "We craft a bespoke Google Ads strategy tailored to your goals, audience, and budget — ensuring every penny works harder for you.",
  },
  {
    title: "Analyse",
    content:
      "We continuously monitor performance metrics, analysing what's working and identifying opportunities to improve campaign outcomes.",
  },
  {
    title: "Optimise",
    content:
      "We fine-tune bids, creatives, targeting, and landing pages to maximise ROI and drive consistent, scalable growth.",
  },
  {
    title: "Review",
    content:
      "Regular strategy reviews keep your campaigns aligned with your evolving business objectives and market changes.",
  },
  {
    title: "Report",
    content:
      "Transparent, easy-to-understand reports give you full visibility into campaign performance, spend, and results.",
  },
];

export default function OurApproach() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-20 px-6 ">
      <div className="w-10/12  mx-auto ">
        {/* Top Label */}
        <p className="text-[#9934C1] text-sm font-font-medium mb-3">
          Our Approach
        </p>

        <div className="flex flex-col lg:flex-row gap-16 items-start ">
          {/* ===== LEFT: Heading + 3D Image ===== */}
          <div className="lg:w-5/12 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 md:whitespace-nowrap ">
              Let's unleash your{" "}
              <span className="text-[#9934C1]">Google Ads</span>
              <br />
              potential
            </h2>

            {/* 3D Decorative Image */}
    <div className="w-full flex items-center justify-center">
  <div className="relative w-full" style={{ aspectRatio: "1 / 1.1", maxWidth: "800px" }}>
    <Image
      src="/left-ring.png"
      alt="3D decorative shape"
      fill
      className="object-cover"
      style={{
        filter: "drop-shadow(0 8px 30px rgba(0,0,0,0.10))",
        objectPosition: "20% center", // <-- adjust horizontal alignment
      }}
    />
  </div>
</div>
          </div>

          {/* ===== RIGHT: Description + Accordion ===== */}
          <div className="lg:w-7/12 flex flex-col">
            {/* Description */}
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              Our UK-based Google Ads Agency has steered thousands of successful
              campaigns, managing an annual ad spend of over £20 million. What
              to speak with our specialists?
            </p>

            {/* Accordion */}
            <div className="flex flex-col gap-3">
              {steps.map((step, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={step.title}
                    className="rounded-2xl overflow-hidden"
                    style={{ background: "#eef0f8" }}
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        {/* Purple checkmark icon */}
                        <span
                          className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "#9934C1" }}
                        >
                          <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="font-semibold text-gray-800 text-base">
                          {step.title}
                        </span>
                      </div>

                      {/* Arrow icon */}
                      <span className="text-gray-500">
                        {isOpen ? (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#9934C1"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <line x1="12" y1="19" x2="12" y2="5" />
                            <polyline points="5 12 12 5 19 12" />
                          </svg>
                        ) : (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <polyline points="19 12 12 19 5 12" />
                          </svg>
                        )}
                      </span>
                    </button>

                    {/* Accordion Body */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-5 pb-5 text-gray-500 text-sm leading-relaxed">
                            {step.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}