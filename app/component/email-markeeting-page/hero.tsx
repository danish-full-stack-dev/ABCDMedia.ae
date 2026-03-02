"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section
        className="relative  flex flex-col items-center justify-center text-white overflow-hidden"
        style={{ minHeight: "70vh", background: "#0a0010" }}
      >
        {/* ===== Background Video ===== */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover blur-md opacity-60"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Glowing orb effect like in the screenshot */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 55% at 50% 45%, rgba(120, 30, 160, 0.45) 0%, rgba(80, 0, 120, 0.2) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* ===== Content ===== */}
        <div className="relative z-10 w-10/12 mx-auto text-center px-6 py-20 flex flex-col items-center">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-lg text-gray-300 mb-10 border border-gray-800 px-4 py-2 rounded-full">
            <span className="flex items-center gap-1">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-70"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Home
            </span>
            <span className="opacity-100">›</span>
            <span className="opacity-70">Marketing Setup</span>
            <span className="opacity-100">›</span>
            <span className="font-medium text-white">Email Marketing Setup</span>
          </div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)" }}
          >
            Email Marketing as easy as ABC
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-base md:text-lg w-10/12 mx-auto leading-relaxed"
          >
           APSIS One empowers marketers to easily create lasting connections. All the marketing <br /> tools and support you need for growth — in one platform.
          </motion.p>
        </div>

        {/* ===== Bottom Decorative Line ===== */}
        <div className="absolute bottom-0 left-0 w-full flex items-center justify-center z-10 pb-6">
          <div className="relative w-10/12 h-[1px] bg-[#9C27B0]/40">
            {/* Left Circle */}
            <div className="absolute -top-[9px] left-0 w-[18px] h-[18px] rounded-full border-2 border-[#9C27B0]" />
            {/* Right Circle */}
            <div className="absolute -top-[9px] right-0 w-[18px] h-[18px] rounded-full border-2 border-[#9C27B0]" />
          </div>
        </div>
      </section>

      
    </>
  );
}