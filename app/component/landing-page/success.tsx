"use client";

import Image from "next/image";

export default function StrategySection() {
  return (
    <section className="w-full text-white pt-28 pb-8 min-h-screen relative">
      <div className="w-2/3 h-full inset-0">
        <Image
          src="/ring 2.jpg"
          alt="3D Spiral"
          fill
          priority
          className="object-cover absolute"
        />
      </div>
      <div className="w-10/12 mx-auto gap-10 absolute inset-0 flex justify-start items-center">
        {/* LEFT CONTENT */}
        <div>
          {" "}
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-12 md:whitespace-nowrap">
            From Strategy to Scalable <br /> Success{" "}
          </h2>
          {/* Content Wrapper (same width as heading) */}
          <div className="max-w-1/2 text-lg font-sans">
            {/* Paragraph 1 */}
            <div className="flex gap-6  mb-8">
              <div className="w-2 rounded-full bg-linear-to-b from-[#731a83] to-[#9C27B0]" />
              <p className="text-gray-300  leading-relaxed">
                We deeply analyse your market, competitors, and target audience
                to uncover growth opportunities. This allows us to build a
                customised, data-backed marketing plan aligned with your goals.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="flex gap-6 mb-8">
              <div className="w-2 rounded-full bg-linear-to-b from-[#731a83] to-[#9C27B0]" />
              <p className="text-gray-300  leading-relaxed">
                We launch campaigns with accurate tracking and clear performance
                benchmarks. Through continuous testing and optimisation, we
                improve results and reduce wasted spend.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="flex gap-6 mb-12">
              <div className="w-2 rounded-full bg-linear-to-b from-[#731a83] to-[#9C27B0]" />
              <p className="text-gray-300  leading-relaxed">
                Once campaigns generate consistent returns, we scale them
                strategically. Our focus is maximising ROI while maintaining
                performance efficiency.
              </p>
            </div>

            {/* Divider */}
            <div className="h-0.5 w-full bg-[#9C27B0] mb-8"></div>

            {/* Bottom Text */}
            <p className="text-gray-400 text-[16px] leading-relaxed font-medium text-white">
              ABCDMEDIA is a performance-driven digital marketing agency focused
              on measurable growth. We combine strategy, creativity, and data to
              deliver campaigns that generate real business results.
            </p>
          </div>
        </div>
        {/* RIGHT IMAGE */}
        <div className=" h-full flex items-center justify-center ">
          {/* Make image same height as left column */}
        </div>
      </div>
    </section>
  );
}
