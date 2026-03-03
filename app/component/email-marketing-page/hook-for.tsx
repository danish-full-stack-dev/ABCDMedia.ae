"use client";

import Image from "next/image";

const cards = [
  "Launch marketing campaigns through automation across all your channels.",
  "Power up your solution with native integrations.",
  "Power up your solution with native integrations.",
  "Ensure GDPR-compliance every step of the way.",
  "Gain easy access to advanced marketing techniques, without the learning curve.",
  "Engage with confidence, knowing your messages will reach their inbox.",
];

export default function WhoIsHookFor() {
  return (
    <section className="relative bg-black text-white py-16 overflow-hidden">
      
      {/* LEFT HOOK IMAGE */}
      <div className="absolute left-10 top-[-4] hidden lg:block">
        <Image
          src="/right-hook.png"   
          alt="Hook Left"
          width={280}
          height={400}
          className="object-contain scale-x-[-1]"
        />
      </div>

      {/* RIGHT HOOK IMAGE */}
      <div className="absolute right-10 top-[-4] hidden lg:block">
        <Image
          src="/right-hook.png"   
          alt="Hook Right"
          width={280}
          height={400}
          className="object-contain"
        />
      </div>

      <div className="w-10/12 mx-auto text-center relative z-10">
        
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Who is{" "}
          <span className="text-[#CB30E0]">HOOK for?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-base leading-relaxed">
          HOOK includes everything you need to improve your marketing results,
          increase retention, and grow your business.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {cards.map((text, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 text-left 
              bg-gradient-to-r from-[#263238]  to-[#9934C1]
              hover:scale-105 transition duration-300"
            >
              <p className="text-lg leading-relaxed text-white/90">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}