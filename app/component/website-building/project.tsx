"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExpertiseBanner() {
  return (
<section className="relative w-full py-10 overflow-hidden">
 <div className="relative w-10/12 max-w-[1200px] mx-auto flex flex-col md:flex-row items-start justify-between px-6 py-2">

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
                Have a 
              {" "}
              <span className="text-[#C026D3]">
                Project?
              </span>{" "}
             Let’s Discuss
              
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Let’s elevate your digital presence with a website that speaks your brand the way you want. From custom web development services, you can have a digital portfolio, corporate website, or an online store. Convert your ideas, and designs into a functional dynamic website.
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
<div className="relative z-10 flex-shrink-0 
                w-[260px] 
                sm:w-[320px] 
                md:w-[380px] 
                lg:w-[450px] 
                xl:w-[500px]">

  <Image
    src="/question.png"
    alt="Einstein character"
    width={500}
    height={500}
    className="object-contain"
    style={{
      filter: "drop-shadow(0 0 35px rgba(156,39,176,0.25))",
      height: "auto",
      width: "100%",
    }}
    priority
  />
</div>

       
      </div>
    </section>
  );
}