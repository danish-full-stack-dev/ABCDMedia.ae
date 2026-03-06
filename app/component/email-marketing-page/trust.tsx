"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function BrandMarquee() {
  const brandLogos = [
    { name: "Khadi", src: "/khaadi.png" },
    { name: "NERF", src: "/nerf.png" },
    { name: "Outfiters", src: "/outfiters.png" },
    { name: "Saya", src: "/saya.png" },
    { name: "sirona", src: "/sirona.png" },
    { name: "ters", src: "/ters.png" },
    { name: "zero", src: "/zero.png" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // This code only runs in the browser
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full bg-gradient-to-r from-[#15071A] to-[#21073D] py-6 overflow-hidden">
      <motion.div
        className="flex items-center gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: isMobile ? 8 : 15,
          ease: "linear",
        }}
      >
        {[...brandLogos, ...brandLogos].map((brand, index) => (
          <div
            key={`${brand.name}-${index}`}
            className="flex items-center justify-center min-w-[160px]"
            aria-hidden={index >= brandLogos.length}
          >
            <img
              src={brand.src}
              alt={brand.name}
              className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
