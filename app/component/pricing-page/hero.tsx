"use client";

import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[70dvh] flex items-center justify-center text-white overflow-hidden bg-black">
      {/* ===== Background Video ===== */}{" "}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-top blur-md opacity-80 "
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />{" "}
      </div>
      {/* ===== Content ===== */}
      <div className="relative z-10 w-10/12 mx-auto text-center pt-28">
        <div className="flex justify-center items-center mx-auto  w-full gap-1 mb-6">
          <Home className="h-5 w-5" />
          <p className="flex items-center gap-2">
            Home <ArrowRight className="h-4 w-4" />
            pricing
          </p>
        </div>
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-semibold leading-[1.15] tracking-tight mb-3"
        >
          Find a plan that right for you..
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg md:text-base text-gray-400 mb-12 font-sans"
        >
          <span className="text-[#C026D3] font-medium">
            Performance Driven Digital Marketing That Delivers Real Results.
          </span>{" "}
          At ABCD MEDIA UAE, we help ambitious <br /> brands scale profitably
          through data-driven digital marketing strategies.
        </motion.p>
      </div>
      {/* ===== Bottom Decorative Line ===== */}
      {/* <div className="absolute bottom-12 left-0 w-full flex items-center justify-center"> */}
      {/* <div className="relative w-10/12 h-[2px] bg-[#9C27B0]/30 blur-[50%]">
       */}
      {/* Left Circle */}
      {/* <div className="absolute -top-2 left-0 w-6 h-6 rounded-full border-2 border-[#9C27B0]" />
       */}
      {/* Right Circle */}
      {/* <div className="absolute -top-2 right-0 w-6 h-6 rounded-full border-2 border-[#9C27B0]" /> */}
      {/* </div> */}
      {/* </div> */}
    </section>
  );
}
