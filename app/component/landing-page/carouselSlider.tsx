"use client";
import { motion } from "framer-motion";

export default function CarouselSlider() {
  return (
    <div className="bg-slate-200 py-20">
      <div className="">
        {/* Section Header */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[#9C27B0] uppercase tracking-widest text-sm font-bold pt-5 text-center"
        >
          Trusted by Leading Brands
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase md:text-5xl text-2xl text-black pb-5 text-center font-semibold mb-10"
        >
          What we offer
        </motion.h2>
        <motion.div
          className="w-full flex"
          animate={{ x: ["0%", "-40%"] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeOut" }}
        >
          {[
            {
              heading: "Socail Media Marketing",
              description:
                "We build strategic social media campaigns that increase the brand awareness, engagement and coner...",
              image: "/3d-graph.jpg",
            },
            {
              heading: "Socail Media Marketing",
              description:
                "We build strategic social media campaigns that increase the brand awareness, engagement and coner...",
              image: "/futuristic-illustration.jpg",
            },
            {
              heading: "Socail Media Marketing",
              description:
                "We build strategic social media campaigns that increase the brand awareness, engagement and coner...",
              image: "/happy-woman.jpg",
            },
            {
              heading: "Socail Media Marketing",
              description:
                "We build strategic social media campaigns that increase the brand awareness, engagement and coner...",
              image: "/hd-digital.jpg",
            },
            {
              heading: "Socail Media Marketing",
              description:
                "We build strategic social media campaigns that increase the brand awareness, engagement and coner...",
              image: "/young-woman.jpg",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className={`px-6 flex ${idx % 2 === 1 ? "flex-col" : "flex-col-reverse"} gap-2 h-auto text-black border-r`}
            >
              <img
                src={service.image}
                alt={service.heading}
                className="shrink-0 min-w-[50svh] h-[35dvh] object-cover"
              />
              <div className="flex flex-col justify-center p-8 mx-auto gap-8">
                <h3 className="text-4xl font-normal">{service.heading}</h3>
                <p className="text-xl">{service.description}</p>
                <div className="flex flex-row items-center gap-2 text-xl">
                  <div className="w-10 h-1 bg-black" />
                  <div className="w-2 h-2 rounded-full bg-[#9C27B0]" />
                  <button>Know</button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
