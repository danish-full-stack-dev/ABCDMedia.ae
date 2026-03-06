"use client";

import { motion } from "framer-motion";
import { Calendar, PencilRuler, SlidersHorizontal, Code2 } from "lucide-react";

const steps = [
  { title: "Discovery & Strategy", desc: "Call", icon: Calendar, side: "left" },
  { title: "Design Sprint", desc: "UI/UX in Figma", icon: PencilRuler, side: "right" },
  { title: "Agile Development", desc: "(web / mobile MVP)", icon: SlidersHorizontal, side: "left" },
  { title: "Launch & Learn", desc: "(live feedback, iterate)", icon: Code2, side: "right" },
];

export default function HowWeDo() {
  return (
    <>
      <style>{`
        .timeline-card {
          border-radius: 20px;
          padding: 28px 24px 20px;
          transition: all 0.4s ease;
          overflow: hidden;
          position: relative;
          z-index: 20;
          border-bottom: 1px solid #9934C1;
          border-left: 1px solid #9934C1;
          background: linear-gradient(to right, transparent 0%, #9934C1 100%) 0 0 / 30% 1px no-repeat;
          background: linear-gradient(to bottom,, transparent 0%, #9934C1 100%) 100 100 / 50% 1px no-repeat;
        }
        .timeline-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #263238, #9934C1);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .timeline-card:hover::before { opacity: 1; }
        .timeline-card:hover { transform: translateY(-6px); box-shadow: 0 16px 50px rgba(124,58,237,0.25); }
        .timeline-card > * { position: relative; z-index: 2; transition: color 0.4s ease; }
        .timeline-card:hover h4,
        .timeline-card:hover p,
        .timeline-card:hover span { color: white !important; }

        /* Mobile card compact padding */
        @media (max-width: 767px) {
          .timeline-card { padding: 16px 14px 14px; border-radius: 14px; }
        }
      `}</style>

      <section className="relative bg-[#f5f5f7] overflow-hidden py-12 md:py-28">
        <div className="w-10/12 mx-auto relative">

          {/* Heading */}
          <div className="flex justify-center mb-10 md:mb-28">
            <div className="px-5 md:px-8 py-2 md:py-3 border border-[#9934C1] rounded-full text-2xl md:text-5xl font-semibold text-black">
              How <span className="text-[#9934C1]">we do</span>
            </div>
          </div>

          {/* ===== MOBILE: Vertical timeline left-aligned ===== */}
          <div className="flex flex-col gap-0 md:hidden relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-[#e5d0f5] z-0" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                  className="relative flex items-start gap-4 pb-8"
                >
                  {/* Icon on the left line */}
                  <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-[#9934C1] to-[#9934C1] text-white shadow-lg">
                    <Icon size={18} />
                  </div>

                  {/* Card */}
                  <div className="timeline-card flex-1">
                    <span className="text-xs font-semibold text-[#CB30E0]">
                      Step {index + 1}
                    </span>
                    <h4 className="font-semibold text-sm mt-1 text-black">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 mt-1 text-xs">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ===== DESKTOP: Original zigzag timeline — completely untouched ===== */}
          <div className="hidden md:block">
            {/* Center Line */}
            <div className="absolute left-1/2 top-40 bottom-0 w-[2px] bg-[#e5d0f5] -translate-x-1/2 z-0" />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
              }}
              className="space-y-20 relative"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = step.side === "left";

                return (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                    }}
                    className="relative flex items-center justify-center"
                  >
                    {isLeft && (
                      <div className="absolute left-1/2 -translate-x-[130%] w-[30%] z-20">
                        <div className="timeline-card">
                          <span className="text-xs font-semibold text-[#CB30E0]">Step {index + 1}</span>
                          <h4 className="font-semibold text-lg mt-2 text-black">{step.title}</h4>
                          <p className="text-gray-600 mt-1 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    )}

                    <div className="relative z-30 w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#9934C1] to-[#9934C1] text-white shadow-lg">
                      <Icon size={24} />
                    </div>

                    {!isLeft && (
                      <div className="absolute left-1/2 translate-x-[30%] w-[30%] z-20">
                        <div className="timeline-card">
                          <span className="text-xs font-medium text-[#CB30E0]">Step {index + 1}</span>
                          <h4 className="font-semibold text-lg mt-2 text-black">{step.title}</h4>
                          <p className="text-gray-600 mt-1 text-sm">{step.desc}</p>
                        </div>
                      </div>
                    )}

                    <svg className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10" width="500" height="150" viewBox="0 0 500 150" fill="none">
                      {isLeft ? (
                        <path d="M250 75 C200 75, 180 75, 130 75" stroke="#e5d0f5" strokeWidth="2" fill="none" />
                      ) : (
                        <path d="M250 75 C300 75, 320 75, 370 75" stroke="#e5d0f5" strokeWidth="2" fill="none" />
                      )}
                    </svg>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}