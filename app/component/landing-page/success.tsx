"use client";

import Image from "next/image";

export default function StrategySection() {
  return (
    <section className="w-full bg-[#0f0b0b] text-white pt-28 pb-8">
      <div className="w-10/12 mx-auto grid lg:grid-cols-2 items-stretch gap-10">

        {/* LEFT CONTENT */} 
        <div> {/* Heading */}
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-12 md:whitespace-nowrap"> 
                From Strategy to Scalable <br /> Success </h2>

          {/* Content Wrapper (same width as heading) */}
          <div className="max-w-[680px]">

            {/* Paragraph 1 */}
            <div className="flex gap-6  mb-8">
              <div className="w-[4px] rounded-full bg-gradient-to-b from-[#A100FF] to-[#a407d9]" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                We deeply analyse your market, competitors, and target audience
                to uncover growth opportunities. This allows us to build a
                customised, data-backed marketing plan aligned with your goals.
              </p>
            </div>

            {/* Paragraph 2 */}
            <div className="flex gap-6 mb-8">
              <div className="w-[4px] rounded-full bg-gradient-to-b from-[#A100FF] to-[#a407d9]" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                We launch campaigns with accurate tracking and clear performance
                benchmarks. Through continuous testing and optimisation, we
                improve results and reduce wasted spend.
              </p>
            </div>

            {/* Paragraph 3 */}
            <div className="flex gap-6 mb-12">
              <div className="w-[4px] rounded-full bg-gradient-to-b from-[#A100FF] to-[#a407d9]" />
              <p className="text-gray-300 text-[15px] leading-relaxed">
                Once campaigns generate consistent returns, we scale them
                strategically. Our focus is maximising ROI while maintaining
                performance efficiency.
              </p>
            </div>

     
           {/* Divider */}
            <div className="h-[2px] w-[580px] bg-[#9C27B0]/30 mb-8"></div>

            {/* Bottom Text */}
            <p className="text-gray-400 text-[16px] leading-relaxed font-medium text-white">
      
                ABCDMEDIA is a performance-driven digital marketing agency
             
              focused on measurable growth. We combine strategy, creativity, and
              data to deliver campaigns that generate real business results.
            </p>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative h-full flex items-center justify-center ">

          {/* Make image same height as left column */}
          <div className="relative w-[90%] h-full min-h-[750px] -translate-x-18">

            <Image
              src="/frame-transparent-bg.png"
              alt="3D Spiral"
              fill
              priority
              className="object-contain scale-[1.85]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}