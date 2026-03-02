"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExpertiseBanner() {
  return (
<section className="relative w-full py-6 overflow-hidden">
 <div className="relative w-11/12 max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-10">

         <div

  className="absolute inset-0"
  style={{
    backgroundImage: "url('/strategy-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    opacity: 0.8,
  }}
/>


          {/* Purple glow */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20 "
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 20% 50%, rgba(140, 30, 180, 0.6) 0%, transparent 70%)",
            }}
          />

          {/* ===== LEFT: Text ===== */}
          <div className="relative z-20 flex flex-col w-10/12 flex-shrink-0 ">
            <h2
              className="text-white font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Our{" "}
              <span className="text-[#C026D3]">
                Google Ads Expertise?
              </span>{" "}
              Think Einstein. Your
              <br />
              Breakthroughs? Pure Genius
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              We save our users an average of 23.5% on their Google Ads Spend,
              increase their conversions, help them scale their campaigns AND
              still find time for lunch.
            </p>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 w-fit"
              style={{ background: "#9C27B0" }}
            >
              View Our Pricing
            </Link>
          </div>

          {/* ===== RIGHT: Image ===== */}
          <div
            className="relative z-10 flex-shrink-0 
                       w-[200px] h-[200px] 
                       sm:w-[260px] sm:h-[260px] 
                       md:w-[320px] md:h-[320px] 
                       lg:w-[380px] lg:h-[380px] 
                       -mr-4 -mb-12"
          >
            <Image
              src="/expertise-sec-bg.png"
              alt="Einstein character"
              fill
              className="object-contain object-bottom"
              style={{
                filter:
                  "drop-shadow(0 0 30px rgba(156,39,176,0.2))",
              }}
            />
          </div>

       
      </div>
    </section>
  );
}