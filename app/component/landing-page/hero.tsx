"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden">

      {/* ===== Full-Screen Background Video ===== */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/landingpage-hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay on LEFT half only — so text is readable over the empty left side of video */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,0,16,0.92) 0%, rgba(10,0,16,0.85) 40%, rgba(10,0,16,0.3) 65%, rgba(10,0,16,0.0) 100%)",
          }}
        />

        {/* Overall dark tint */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* ===== Content — LEFT HALF ONLY ===== */}
      <div className="relative z-10 w-full min-h-screen flex items-center">
        <div className=" w-10/12 flex flex-col justify-center px-10 md:px-16 lg:px-20 pt-28 pb-20">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight mb-8"
          >
            Performance Marketing &amp; Data- <br />Driven Growth for UAE's Most <br />
            Ambitious Brands
          </motion.h1>

          {/* Sub Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base md:text-lg text-gray-300 mb-10 max-w-lg md:whitespace-nowrap"
          >
            <span className="text-[#CB30E0] font-semibold">
              Performance Driven Digital Marketing That Delivers Real Results.
            </span>{" "}
            At ABCD MEDIA UAE, <br /> we help ambitious brands scale profitably through
            data driven digital marketing <br />strategies.
          </motion.p>

          {/* CTA + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-10"
          >
            <Link
              href="#"
              className="px-12 py-5 rounded-full bg-[#A62DD5] font-semibold text-white hover:bg-[#7b1fa2] hover:scale-105 transition duration-300 whitespace-nowrap"
            >
              Learn More
            </Link>

            <div className="flex items-center gap-10">
              <div>
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="text-sm text-[#CB30E0] mt-1">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold">50+</h3>
                <p className="text-sm text-[#CB30E0] mt-1">Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ===== Bottom Decorative Line ===== */}
      <div className="absolute bottom-10 left-0 w-full flex items-center justify-center z-10">
        <div className="relative w-11/12 h-[1px] bg-[#9C27B0]/30">
          <div className="absolute -top-2.5 left-0 w-5 h-5 rounded-full border-2 border-[#9C27B0]" />
          <div className="absolute -top-2.5 right-0 w-5 h-5 rounded-full border-2 border-[#9C27B0]" />
        </div>
      </div>
    </section>
  );
}