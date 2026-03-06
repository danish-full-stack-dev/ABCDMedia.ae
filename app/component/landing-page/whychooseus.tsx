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

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-100 text-black min-h-screen">
      <div className="max-w-[90%] md:max-w-10/12 mx-auto">

        {/* Heading */}
        <div className="flex flex-col mx-auto text-center">
          <h2 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
            Why Founders Choose{" "}
            <span className="text-[#9C27B0]">ABCDMEDIA?</span>
          </h2>

          <p className="text-xs sm:text-sm md:text-xl text-gray-800 mb-10 leading-relaxed md:w-2/3 mx-auto">
            You get a committed team that understands your business goals and
            works closely with you. We provide proactive guidance, regular
            updates, and ongoing optimisation.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">

          {/* LEFT COLUMN */}
          <div className="flex flex-col w-full md:w-1/2 items-center">
            <img src="/them.png" alt="them avatar" className="w-20 md:w-32" />

            <aside className="flex px-2 md:px-4 h-[45dvh] md:h-[55dvh] w-full">
              <div className="rounded-3xl md:rounded-4xl relative overflow-hidden w-full">

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/whyuse-bg-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute w-full bg-gradient-to-t from-white/50 via-white/30 to-transparent h-3/4 bottom-0" />

                <h3 className="absolute text-white inset-0 flex justify-center text-2xl md:text-4xl font-medium font-sans mt-4">
                  THEM
                </h3>

                <div className="absolute inset-0 z-10 flex items-end">
                  <div className="p-4 md:p-10 text-white h-2/3 flex flex-col w-full justify-between">
                    {[
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: 8 },
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: -4 },
                      { heading: "lorem impose dsfje ldoen ejnf halo new", angle: 3 },
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: -11 },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`w-full flex items-center ${
                          idx % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                        style={{ transform: `rotate(${item.angle}deg)` }}
                      >
                        <p className="text-xs sm:text-sm md:text-xl rounded-full border px-3 py-2 md:px-4 md:py-3">
                          {item.heading}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col w-full md:w-1/2 items-center">
            <img src="/we.png" alt="them avatar" className="w-20 md:w-32" />

            <aside className="flex px-2 md:px-4 h-[45dvh] md:h-[55dvh] w-full">
              <div className="rounded-3xl md:rounded-4xl relative overflow-hidden w-full">

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/whyuse-bg-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute w-full bg-gradient-to-t from-[#9C27B0]/20 via-[#9C27B0]/20 to-transparent h-3/4 bottom-0" />

                <h3 className="absolute text-white inset-0 flex justify-center text-2xl md:text-4xl font-medium font-sans mt-4">
                  ABCD<span className="text-[#9C27B0]">MEDIA</span>
                </h3>

                <div className="absolute inset-0 z-10 flex items-end">
                  <div className="p-4 md:p-10 text-white h-3/4 flex flex-col w-full justify-between">
                    {[
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: 8 },
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: -4 },
                      { heading: "lorem impose dsfje ldoen ejnf hal", angle: 3 },
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: -11 },
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: 8 },
                      { heading: "lorem impose dsfje ldoen ejnf halo", angle: -4 },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`w-full flex items-center ${
                          idx % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                        style={{ transform: `rotate(${item.angle}deg)` }}
                      >
                        <p className="text-xs sm:text-sm md:text-xl rounded-full border px-3 py-2 md:px-4 md:py-3">
                          {item.heading}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </aside>
          </div>

        </div>
      </div>
    </section>
  );
}