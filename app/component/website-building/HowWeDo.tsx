"use client";

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
          background: white;
          border-radius: 20px;
          padding: 28px 24px 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          transition: all 0.4s ease;
          overflow: hidden;
          position: relative;
          z-index: 20;
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

        .timeline-card:hover::before {
          opacity: 1;
        }

        .timeline-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 50px rgba(124,58,237,0.25);
        }

        .timeline-card > * {
          position: relative;
          z-index: 2;
          transition: color 0.4s ease;
        }

        .timeline-card:hover h4,
        .timeline-card:hover p,
        .timeline-card:hover span {
          color: white !important;
        }
      `}</style>

      <section className="relative bg-[#f5f5f7] py-28 overflow-hidden">
        <div className="w-10/12 mx-auto relative">

          {/* Heading */}
          <div className="flex justify-center mb-28">
            <div className="px-8 py-3 border border-[#9934C1] rounded-full text-3xl font-semibold text-black">
              How <span className="text-[#CB30E0]">we do</span>
            </div>
          </div>

          {/* Center Line */}
          <div className="absolute left-1/2 top-40 bottom-0 w-[2px] bg-[#e5d0f5] -translate-x-1/2 z-0"></div>

          <div className="space-y-40 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = step.side === "left";

              return (
                <div key={index} className="relative flex items-center justify-center">

                  {isLeft && (
                    <div className="absolute left-1/2 -translate-x-[130%] w-[30%] z-20">
                      <div className="timeline-card">
                        <span className="text-xs font-medium text-[#CB30E0]">
                          Step {index + 1}
                        </span>
                        <h4 className="font-semibold text-lg mt-2 text-black">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mt-1 text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* ICON */}
                  <div className="relative z-30 w-16 h-16 flex items-center justify-center 
                                  rounded-full bg-gradient-to-br 
                                  from-[#263238] to-[#9934C1] text-white shadow-lg">
                    <Icon size={24} />
                  </div>

                  {!isLeft && (
                    <div className="absolute left-1/2 translate-x-[30%] w-[30%] z-20">
                      <div className="timeline-card">
                        <span className="text-xs font-medium text-[#CB30E0]">
                          Step {index + 1}
                        </span>
                        <h4 className="font-semibold text-lg mt-2 text-black">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 mt-1 text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* SVG FIXED */}
                  <svg
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10"
                    width="500"
                    height="150"
                    viewBox="0 0 500 150"
                    fill="none"
                  >
                    {isLeft ? (
                      <path
                        d="M250 75 C200 75, 180 75, 130 75"
                        stroke="#e5d0f5"
                        strokeWidth="2"
                        fill="none"
                      />
                    ) : (
                      <path
                        d="M250 75 C300 75, 320 75, 370 75"
                        stroke="#e5d0f5"
                        strokeWidth="2"
                        fill="none"
                      />
                    )}
                  </svg>

                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}