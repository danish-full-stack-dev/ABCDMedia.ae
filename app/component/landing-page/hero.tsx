"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* ===== Background Video ===== */}{" "}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover blur-md opacity-60 "
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />{" "}
      </div>
      {/* ===== Content ===== */}
      <div className="relative z-10 w-10/12 mx-auto text-center pt-28">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-7xl font-semibold leading-[1.15] tracking-tight mb-8"
        >
          Performance Marketing & Data- <br />
          Driven Growth for UAE's Most <br /> Ambitious Brands
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-xl md:text-lg text-gray-400 mb-12"
        >
          <span className="text-[#C026D3] font-medium font-sans">
            Performance Driven Digital Marketing That Delivers Real Results.
          </span>{" "}
          At ABCD MEDIA UAE, we help ambitious <br /> brands scale profitably
          through data-driven digital marketing strategies.
        </motion.p>

        {/* CTA + Stats in One Line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          {/* Button */}
          <Link
            href="#"
            className="px-12 py-4 rounded-full bg-[#9C27B0] font-semibold hover:scale-105 transition duration-300"
          >
            Learn More
          </Link>

          {/* Stats */}
          <div className="flex items-center gap-12">
            <div>
              <h3 className="text-4xl font-bold">100%</h3>
              <p className="text-sm text-[#C026D3]">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">50+</h3>
              <p className="text-sm  text-[#C026D3]">Experience</p>
            </div>
          </div>
        </motion.div>
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
