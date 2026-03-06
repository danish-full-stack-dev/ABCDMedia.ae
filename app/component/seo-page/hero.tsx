"use client";

import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center text-white overflow-hidden bg-[#0a0010] md:min-h-[70vh] min-h-[50dvh]">
      {/* ===== Background Image ===== */}
      <div className="md:block hidden inset-0 overflow-hidden">
        <Image
          src="/heroo-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover opacity-50"
        />

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
      <div className="md:w-10/12 w-full mx-auto flex md:flex-row flex-col justify-between md:gap-8 py-16 h-auto relative">
        {/* ===== IMAGE (TOP on mobile) ===== */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full md:w-1/2 md:flex hidden justify-center items-center order-1 md:order-2"
        >
          <div className="relative h-[70dvh] w-full mx-auto">
            <Image
              src="/seo-hero.png"
              alt="SEO Hero Character"
              fill
              className="object-cover h-[50dvh]"
              priority
            />
          </div>
        </motion.div>

        {/* ===== TEXT CONTENT ===== */}
        <div className="flex-1 flex flex-col justify-center text-start md:w-1/2 gap-2 md:px-0 px-5 order-2 md:order-1">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-300 md:mb-8 mb-4"
          >
            <div
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{ border: "1px solid rgba(255,255,255,0.2)" }}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
              <ChevronRight size={16} className="opacity-50" />
              <span className="font-medium text-white">SEO</span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] mb-3"
          >
            SEO is a Battleground, <br /> Are you{" "}
            <span className="text-[#9C27B0]">ready</span> to Conquer?
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-base md:text-lg leading-relaxed max-w-xl"
          >
            Our UK-Based team knows exactly what it takes to propel websites to
            the top of search engine rankings. Want to speak with our
            specialists?
          </motion.p>
        </div>
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
