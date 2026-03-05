"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";


export default function Hero() {
  return (
    <section
      className="relative flex items-center text-white overflow-hidden"
      style={{ minHeight: "70vh", background: "#0a0010" }}
    >
 {/* ===== Background Image ===== */}
<div className="absolute inset-0 z-0 overflow-hidden">

  <Image
    src="/heroo-bg.png"
    alt="Background"
    fill
    priority
    className="object-cover opacity-100"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Purple radial glow */}
  <div
    className="absolute inset-0"
    style={{
      background:
        "radial-gradient(ellipse 70% 60% at 60% 50%, rgba(120, 30, 160, 0.4) 0%, rgba(80, 0, 120, 0.15) 50%, transparent 75%)",
    }}
  />

</div>

      {/* ===== Two-Column Layout ===== */}
      <div className="relative z-10 w-11/12 max-w-7xl mx-auto flex flex-row items-center justify-between gap-8 py-16 min-h-[70vh]">

        {/* ===== LEFT: Text Content ===== */}
        <div className="flex-1 flex flex-col justify-center max-w-2xl">

          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-300 mb-8"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                border: "1px solid rgba(255,255,255,0.2)",
                // background: "rgba(255,255,255,0.05)",
              }}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
              <ChevronRight size={16} className="opacity-60" />
              <span className="opacity-70">Ads Management</span>
              <ChevronRight size={16} className="opacity-60" />
              <span className="font-medium text-white">Social Ads</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] mb-3 md:whitespace-nowrap"
            
          >
           The Social Ads agency that actually <br /> delivers – and then some.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl md:whitespace-nowrap"
          >
          Our UK-based Google Ads Agency has steered thousands of successful campaigns, <br /> managing an annual ad spend of over £20 million. What to speak with our specialists?
          </motion.p>
        </div>

        {/* ===== RIGHT: Boy Character Image ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex-shrink-0 relative"
          style={{ width: "420px", height: "420px" }}
        >
          <Image
            src="/social-ads-hero.png"
            alt="Google Ads Hero Character"
            fill
            className="object-contain object-bottom drop-shadow-2xl scale-150"
            priority
          />
        </motion.div>
      </div>

      {/* ===== Bottom Decorative Line ===== */}
      <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-10 pb-6 opacity-50">
        <div className="relative w-10/12 h-[1px] bg-[#9C27B0]/40">
          <div className="absolute -top-[9px] left-0 w-[18px] h-[18px] rounded-full border-2 border-[#9C27B0]" />
          <div className="absolute -top-[9px] right-0 w-[18px] h-[18px] rounded-full border-2 border-[#9C27B0]" />
        </div>
      </div>
    </section>
  );
}