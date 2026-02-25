"use client";
import { motion } from "framer-motion";

export default function CarouselSlider() {
  const services = [
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
  ];
  const doubled = [...services, ...services];
  return (
    <div className="bg-slate-200 py-20">
      <div className="">
        {/* Section Header */}
        <p className="text-[#9C27B0] uppercase tracking-widest text-sm font-bold pt-5 text-center">
          Our Services
        </p>
        <h2 className="uppercase md:text-5xl text-2xl text-black pb-5 text-center font-semibold mb-10">
          What we offer
        </h2>
        <motion.div
          className="w-full flex"
          initial={{ opacity: 1 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 24,
            delay: 0.5,
            ease: "linear",
          }}
        >
          {doubled.map((service, idx) => (
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
                <h3 className="text-4xl font-medium font-sans">
                  {service.heading}
                </h3>
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
