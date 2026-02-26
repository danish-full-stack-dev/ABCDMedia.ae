"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Services data
export const allServices = [
  // ---------------- SPECIALIZATION: REAL ESTATE ----------------
  {
    title: "Our Strategic Expertise",
    source: "/b2c animation.mp4",
    description:
      "We empower real estate businesses with modern digital solutions automation, analytics, and immersive experiences to maximize ROI.",
    services: [
      "Operations & Process Management (OPM)",
      "Real Estate CRM Development",
      "Blockchain Development & Web3 Engineering",
      "Trading Platforms & Fintech Engineering",
      "AI Automation & Intelligent Systems",
    ],
  },

  // ---------------- APP DEVELOPMENT ----------------
  {
    title: "Mobile App Development",
    source: "/phoneVideo.mp4",
    description:
      "We develop robust iOS and Android applications that combine intuitive design with powerful functionality and scalable architecture.",
    services: [
      "iOS & Android App Development",
      "Cross-Platform Development (React Native, Flutter)",
      "Backend API & Cloud Integration",
      "App UI/UX Design",
      "Real-Time App Features & Notifications",
      "App Store Optimization (ASO)",
      "App Maintenance & Feature Upgrades",
    ],
  },

  // ---------------- WEB DEVELOPMENT ----------------
  {
    title: "Web Design & Development",
    source: "/web design.mp4",
    description:
      "We build modern, responsive websites engineered for performance, scalability, and exceptional user experience.",
    services: [
      "Custom Website Development",
      "UI/UX Design for Websites",
      "Corporate & Portfolio Websites",
      "E-commerce Development",
      "CMS Development (WordPress, Headless CMS)",
      "Landing Page Development",
      "Website Optimization & Maintenance",
    ],
  },

  // ---------------- DESIGN ----------------
  {
    title: "Brand Identity & Strategy",
    source: "/b2c branding.mp4",
    description:
      "We create strong brand identities and strategic frameworks that position your business for long-term market impact.",
    services: [
      "Complete Brand Identity Systems",
      "Logo & Visual Design",
      "Brand Strategy Development",
      "Typography & Color Systems",
      "Brand Guidelines Creation",
      "Rebranding & Refresh Projects",
      "Messaging & Positioning Frameworks",
    ],
  },

  // ---------------- MARKETING ----------------
  {
    title: "Digital Marketing & Growth",
    source: "/marketing.mp4",
    description:
      "We drive measurable growth using data-driven marketing strategies designed to increase visibility, engagement, and revenue.",
    services: [
      "Social Media Management (SMM)",
      "Paid Ads (Facebook, Google, LinkedIn)",
      "SEO & Content Strategy",
      "Email Marketing & Automation",
      "Influencer & Community Marketing",
      "Funnel Building & Conversion Optimization",
      "Performance Analytics & Reporting",
    ],
  },

  // ---------------- AI ENGINEERING ----------------
  {
    title: "AI Engineering & Automation",
    source: "/automation.mp4",
    description:
      "We engineer intelligent AI systems tailored to automate workflows, enhance operational efficiency, and improve business decision-making.",
    services: [
      "Custom AI Agent Development",
      "Machine Learning Model Development",
      "Business Process Automation",
      "AI Chatbots & Virtual Assistants",
      "Data Engineering & Pipelines",
      "Predictive Analytics Models",
      "AI Integration with Existing Systems",
    ],
  },
];

// Desktop version with scroll animation
const DesktopServices = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  interface Service {
    title: string;
    source: string;
    description: string;
    services: string[];
  }

  interface InnerContentProps {
    service: Service;
    reverse?: Boolean;
  }

  const InnerContent = ({ service, reverse }: InnerContentProps) => {
    return (
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } h-full font-pt`}
      >
        {/* source Section */}
        <div
          className={`w-full md:w-5/12 bg-black/90 md:h-full h-[40vh] md:relative overflow-hidden`}
        >
          {service.title.toLocaleLowerCase() === "mobile app development" ||
          service.title.toLocaleLowerCase() === "our strategic expertise" ||
          service.title.toLocaleLowerCase() === "web design & development" ||
          service.title.toLocaleLowerCase() === "brand identity & strategy" ||
          service.title.toLocaleLowerCase() === "ai engineering & automation" ||
          service.title.toLocaleLowerCase() === "digital marketing & growth" ? (
            <div className="w-full md:h-full h-[40vh] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-95 bg-red-500"
              >
                <source src={service.source} type="video/mp4" />
              </video>
            </div>
          ) : (
            <div className="h-full w-full flex items-center justify-center text-9xl ">
              <img
                src={service.source}
                alt="web dev"
                className="w-full h-full top-0 right-0 object-cover"
              />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-7/12 flex justify-end items-center font-pt">
          <div className="flex flex-col md:h-3/5 md:w-4/5 md:p-0 p-5 justify-start">
            <div className="md:w-3/5 w-full">
              <div className="flex justify-between group">
                <h2 className="text-xl lg:text-4xl md:text-3xl font-bold font-pt mb-6 hover:text-blue-800 hover:cursor-pointer ">
                  {service.title}
                </h2>
                <ArrowUpRight className="w-7 h-7 group-hover:text-blue-800 group-hover:cursor-pointer group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </div>
              <p className="md:text-xl text-base leading-relaxed opacity-90">
                {service.description}
              </p>
              <div className="flex gap-5  mt-5 pb-5 border-b-2 ">
                <p className="text-xs font-bold font-sans bg-[#001a5a] w-fit text-white px-2 py-1 rounded-r-xl">
                  Specialized Solutions We Offer
                </p>
              </div>
              <div className="flex flex-col list-inside mt-5">
                {service.services.map((item, idx) => (
                  <li
                    key={idx}
                    className="px-4 py-2 rounded-full text-sm md:text-lg hover:text-blue-800 mr-2 bg-blend-color-dodge hover:translate-x-1 transition"
                  >
                    {item}
                  </li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <section
  ref={containerRef}
  className="relative w-full"
  style={{ height: `${(allServices.length - 1) * 100}vh` }}
>
  <div className="sticky top-0 h-screen overflow-hidden">
{allServices.map((service, index) => {
  const total = allServices.length;

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${index * 100}%`]
  );

  return (
    <motion.div
      key={index}
      style={{
        y,
        zIndex: total - index,
      }}
      className="absolute inset-0 w-full h-screen bg-white text-black"
    >
      <InnerContent service={service} reverse={index % 2 !== 0} />
    </motion.div>
  );
})}
  </div>
</section>
      <section className="hidden">
        <div className="min-h-screen">
          {allServices.map((servic, index) => (
            <InnerContent
              key={index}
              service={servic}
              reverse={index % 2 === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
};

// Mobile/Tablet version without animation (column layout)
const MobileServices = () => {
  return (
    <section className="w-full py-6 sm:py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="flex flex-col gap-6">
          {allServices.map((service, index) => (
            <div
              key={index}
              className="w-full bg-white border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div className="flex flex-col">
                {/* Image Section */}
                <div className="w-full h-48 sm:h-64 bg-black/90 relative overflow-hidden">
                  <img
                    src={service.source}
                    alt={service.title}
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Content Section */}
                <div className="w-full p-4 sm:p-6">
                  <div className="w-full">
                    {/* Title with Icon */}
                    <div className="flex items-start justify-between gap-3 mb-4 group">
                      <h3 className="text-xl sm:text-2xl font-bold font-pt text-gray-900">
                        {service.title}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 text-gray-900" />
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4">
                      {service.description}
                    </p>

                    {/* Services Tag */}
                    <div className="flex gap-3 mb-4 pb-4 border-b-2 border-gray-200">
                      <p className="text-xs font-bold font-sans bg-[#001a5a] text-white px-2 py-1 rounded-r-xl">
                        Specialized Solutions We Offer
                      </p>
                    </div>

                    {/* Services List */}
                    <ul className="flex flex-col gap-1">
                      {service.services.map((item, idx) => (
                        <li
                          key={idx}
                          className="px-3 py-1.5 text-xs sm:text-sm text-gray-800 list-disc ml-4"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main component that switches between desktop and mobile versions
export const Services = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if screen is desktop size (1024px and above)
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Render desktop version with animation or mobile version without animation
  return isDesktop ? <DesktopServices /> : <MobileServices />;
};