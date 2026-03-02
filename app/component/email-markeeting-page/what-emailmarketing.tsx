"use client";

import Image from "next/image";
import { Lightbulb, Settings, BarChart3, Award } from "lucide-react";

const features = [
  {
    title: "Proven Expertise",
    desc: "Decades of combined experience in business strategy and operations",
    icon: Lightbulb,
  },
  {
    title: "20+ years of results",
    desc: "Tailored solutions that meet your unique needs.",
    icon: Award,
  },
  {
    title: "Sustainable Results",
    desc: "Systems and strategies designed for long-term growth.",
    icon: BarChart3,
  },
  {
    title: "Satisfied Clients",
    desc: "Over 10,000 businesses transformed with our proven methods.",
    icon: Settings,
  },
];

export default function EmailMarketing() {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

      {/* Decorative Image */}
      <div className="absolute -left-10 top-0 w-[65%] h-full pointer-events-none hidden lg:block">
        <Image
          src="/email-marketing-white.png"
          alt="Email Marketing Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="w-10/12 mx-auto relative z-10 flex justify-end">
        <div className="w-full lg:w-1/2">

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Email Marketing
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base leading-relaxed mb-14">
            All the marketing tools and support you need for growth — in one platform.
            Know your audience with smart, cross-channel insights and state-of-the-art
            segmentation. Available in 8 local languages, supporting the Nordics,
            Spanish, Dutch, French and English. Launch AI-powered branded campaigns
            that “wow”. Sit back and let Marketing Automation + AI drive your results.
          </p>

          {/* Feature Cards */}
          <div className="flex flex-wrap gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="w-full sm:w-[48%] bg-[#f1f2f8] rounded-2xl px-8 pb-4 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Purple Icon Box */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-left">
                    <Icon className="text-[#CB30E0]" size={26} />
                  </div>

                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}