"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Email Marketing",
  "APSIS AI Assistant",
  "Marketing Automation",
  "SMS Marketing",
  "Website behaviour tracking",
  "Webforms",
  "Event Management",
  "Insights & Analytics",
];

export default function HookSection() {
  return (
    <section className="bg-white py-24">
      <div className="w-10/12 mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT SIDE */}
        <div className="flex-1">
          
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What is{" "}
            <span className="text-[#9934C1]">
              HOOK?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
            The marketing tool offered by <span className="font-semibold text-gray-800">AbcdMedia</span> that you need to grow your business. APSIS One includes everything you need to improve your marketing results, increase retention, and grow your business. We help you:
          </p>

          {/* Features Box */}
          <div className="bg-slate-50 rounded-3xl p-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  
                  {/* Purple Check Icon */}
                  <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#9934C1]">
                    <Check className="w-4 h-4 text-white" />
                  </div>

                  <span className="text-gray-800 text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT SIDE ILLUSTRATION */}
      <div className="flex-1 flex justify-end">
  <Image
    src="/hook1.png"
    alt="Hook Illustration"
    width={9000}
    height={9000}
    className="object-contain translate-x-16"
  />
</div>

      </div>
    </section>
  );
}