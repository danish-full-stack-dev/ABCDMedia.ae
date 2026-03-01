"use client";

import { motion } from "framer-motion";

export default function DidYouKnow() {
  return (
    <section className="bg-[#f4f4f6] py-16">
      <div className="w-10/12 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        
        {/* LEFT CONTENT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#9C27B0] font-medium tracking-widest uppercase text-sm mb-4"
          >
            Know ABCDMEDIA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl lg:text-4xl font-bold text-black mb-6"
          >
            Did you know?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 text-base leading-relaxed max-w-xl mb-10"
          >
            We consistently achieve over 95% success rate in meeting client
            goals. 84% of online advertisers either use or plan to use Google
            Ads in 2024.{" "}
            <span className="font-semibold text-gray-600">
              Partner with us to dominate the competition and take your
              results to the next level.
            </span>
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="px-8 py-4 rounded-full text-white font-semibold text-lg 
                       bg-[#9934C1]
                       hover:opacity-90 transition-all duration-300"
          >
            View Our Pricing
          </motion.button>
        </div>

        {/* RIGHT STATS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className=" rounded-2xl border border-gray-200 overflow-hidden"
        >
          <div className="grid grid-cols-2">
            
            {/* BOX 1 */}
            <div className="p-10 border-r border-b border-gray-200">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#9934C1] mb-4">
                £2.1M
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Ad Spend managed in the last 30 days
              </p>
            </div>

            {/* BOX 2 */}
            <div className="p-10 border-b border-gray-200">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#9934C1] mb-4">
                9.35x
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Average ROAS
              </p>
            </div>

            {/* BOX 3 */}
            <div className="p-10 border-r border-gray-200">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#9934C1] mb-4">
                +40%
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Average CPC saving achieved with Quality Score
              </p>
            </div>

            {/* BOX 4 */}
            <div className="p-10">
              <h3 className="text-4xl lg:text-5xl font-bold text-[#9934C1] mb-4">
                96%
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Customer satisfaction rate
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}