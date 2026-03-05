"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    label: "First Step",
    title: "Research",
    heading: "Research",
    description:
      "We begin by gaining a deep understanding of your business, your industry landscape, and your competitive environment. This includes analysing your products or services, target audience, brand positioning, and current digital presence.",
    subheading: "Our research phase covers:",
    bullets: [
      {
        bold: "Comprehensive website audits",
        text: "(technical, on-page, and content analysis)",
      },
      {
        bold: "Keyword research",
        text: "Focused on search intent, relevance, and opportunity",
      },
      {
        bold: "Competitor analysis",
        text: "To identify strengths, weaknesses, and ranking gaps",
      },
      {
        bold: "Market trend",
        text: "Evaluation and seasonal search behaviour insights",
      },
      {
        bold: "Audience behaviour",
        text: "Analysis to understand how users search and engage",
      },
    ],
    footer:
      "By building a solid, data-driven foundation, we ensure every SEO decision is strategic, measurable, and aligned with real market opportunities.",
  },
  {
    id: 2,
    label: "Second Step",
    title: "Design",
    heading: "Design",
    description:
      "We create stunning, user-centric designs that align with your brand identity and business objectives. Our design phase ensures optimal user experience and conversion pathways.",
    subheading: "Our design phase covers:",
    bullets: [
      {
        bold: "Wireframing & prototyping",
        text: "Planning layout and user flows",
      },
      {
        bold: "Visual design",
        text: "Crafting beautiful, on-brand interfaces",
      },
      {
        bold: "Responsive design",
        text: "Ensuring seamless experience across devices",
      },
      {
        bold: "UX/UI best practices",
        text: "Optimising for usability and engagement",
      },
      {
        bold: "Design system creation",
        text: "Building scalable design foundations",
      },
    ],
    footer:
      "Great design is the foundation of successful websites — we ensure every pixel serves user goals and business objectives.",
  },
  {
    id: 3,
    label: "Third Step",
    title: "Development",
    heading: "Development",
    description:
      "We build robust, scalable websites using the latest technologies and best practices. Our development process ensures fast, secure, and maintainable code.",
    subheading: "Our development phase covers:",
    bullets: [
      {
        bold: "Frontend development",
        text: "Building responsive, interactive interfaces",
      },
      {
        bold: "Backend development",
        text: "Creating powerful server-side systems",
      },
      {
        bold: "Database architecture",
        text: "Designing efficient data structures",
      },
      {
        bold: "API integration",
        text: "Connecting services and platforms seamlessly",
      },
      {
        bold: "Performance optimization",
        text: "Ensuring lightning-fast load times",
      },
    ],
    footer:
      "Expert development transforms designs into fully functional digital experiences — we build for performance, security, and scalability.",
  },
  {
    id: 4,
    label: "Fourth Step",
    title: "Testing",
    heading: "Testing",
    description:
      "We rigorously test every aspect of your website to ensure quality, functionality, and security across all devices and browsers.",
    subheading: "Our testing phase covers:",
    bullets: [
      {
        bold: "Functional testing",
        text: "Verifying all features work as intended",
      },
      {
        bold: "Cross-browser testing",
        text: "Ensuring compatibility everywhere",
      },
      {
        bold: "Performance testing",
        text: "Validating speed and load capacity",
      },
      {
        bold: "Security testing",
        text: "Identifying and fixing vulnerabilities",
      },
      {
        bold: "User acceptance testing",
        text: "Gathering stakeholder feedback",
      },
    ],
    footer:
      "Thorough testing ensures your website launches confidently — we catch issues before your users do.",
  },
  {
    id: 5,
    label: "Fifth Step",
    title: "Launch",
    heading: "Launch",
    description:
      "We manage a smooth, coordinated website launch with comprehensive deployment planning, monitoring, and post-launch support.",
    subheading: "Our launch phase covers:",
    bullets: [
      {
        bold: "Deployment planning",
        text: "Coordinating the go-live process",
      },
      {
        bold: "DNS & hosting setup",
        text: "Configuring infrastructure for reliability",
      },
      { bold: "Final QA checks", text: "Last-minute verification and fixes" },
      { bold: "Monitoring & alerts", text: "Catching issues in real-time" },
      {
        bold: "Team training",
        text: "Empowering your team to manage the site",
      },
    ],
    footer:
      "A well-executed launch sets your website up for success — we ensure smooth delivery and immediate support.",
  },
  {
    id: 6,
    label: "Final Step",
    title: "Support & Maintenance",
    heading: "Support & Maintenance",
    description:
      "We provide ongoing support and maintenance to keep your website secure, updated, and performing optimally throughout its lifecycle.",
    subheading: "Our support phase covers:",
    bullets: [
      {
        bold: "Regular backups",
        text: "Protecting your data and content",
      },
      {
        bold: "Security updates",
        text: "Keeping systems patched and protected",
      },
      {
        bold: "Performance monitoring",
        text: "Tracking health and speed metrics",
      },
      {
        bold: "Content management",
        text: "Helping you update and manage your site",
      },
      { bold: "Technical support", text: "Available when you need us" },
    ],
    footer:
      "Long-term support ensures your website remains secure, fast, and effective — we're here for you every step of the way.",
  },
];

export default function WebDevServices() {
  const [active, setActive] = useState(0);
  const current = steps[active];

  return (
    <div className="min-h-screen w-full flex flex-col bg-slate-50">
      {/* Google Fonts */}
      <style>{`
        .step-arrow {
          clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%);
        }
        .step-arrow-active {
          background: linear-gradient(135deg, #000001 0%, #9C27B0 100%);
        }
        .step-arrow-inactive {
          background: #ede9f6;
        }
        .step-arrow-inactive:hover {
          background: #dcade4;
        }
      `}</style>

      <div className="max-w-10/12 mx-auto w-full px-6 py-16 flex flex-col gap-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-6"
        >
          <div className="mx-auto">
            <h1
              className="mt-1 text-5xl font-bold"
              style={{
                lineHeight: 1.15,
              }}
            >
              {"Let's"} unleash your{" "}
              <span style={{ color: "#9C27B0" }}>Web Development</span>{" "}
              potential
            </h1>
          </div>
          <p
            style={{
              maxWidth: 380,
              color: "#6b7280",
              fontSize: "0.92rem",
              lineHeight: 1.65,
              paddingTop: "0.5rem",
            }}
          >
            Our UK-based Web Development Agency has delivered hundreds of
            high-performance websites, specialising in custom design and
            development. Ready to transform your digital presence?
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Steps sidebar */}
          <motion.div
            className="flex flex-col gap-3 w-full md:w-1/3 shrink-0"
            initial={{}}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.08 }}
            >
            {steps.map((step, i) => (
              <motion.button
                key={step.id}
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: i * 0.08,
                }}
                onClick={() => setActive(i)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`step-arrow text-left px-5 py-4 cursor-pointer transition-all duration-200 ${
                  active === i ? "step-arrow-active" : "step-arrow-inactive"
                }`}
                style={{
                  border: "none",
                  outline: "none",
                  borderRadius: 2,
                }}
              >
                <span
                  className={`${active === i ? "text-white" : "text-gray-500"}`}
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 400,
                    display: "block",
                    marginBottom: 1,
                  }}
                >
                  {step.label}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: active === i ? "#fff" : "#3b1f6e",
                  }}
                >
                  {step.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Content panel */}
          <div className="flex-1 min-h-96 bg-white " style={{ position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                style={{
                  borderRadius: 12,
                  padding: "2.5rem",
                  boxShadow:
                    "0 4px 32px rgba(108,33,168,0.06), 0 1px 4px rgba(0,0,0,0.04)",
                }}
              >
                {/* Step indicator pill */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    marginBottom: "1.25rem",
                  }}
                >
                  <span
                    style={{
                      background: "linear-gradient(135deg, #1a0a2e, #9C27B0)",
                      color: "#fff",
                      borderRadius: 999,
                      padding: "2px 14px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      letterSpacing: "0.05em",
                    }}
                  >
                    {current.label}
                  </span>
                </div>

                <h2
                  className=""
                  style={{
                    fontSize: "1.7rem",
                    color: "#0f0a1a",
                    marginBottom: "0.75rem",
                  }}
                >
                  {current.heading}
                </h2>

                <p
                  style={{
                    color: "#4b5563",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {current.description}
                </p>

                <p
                  style={{
                    fontWeight: 700,
                    color: "#0f0a1a",
                    marginBottom: "1rem",
                    fontSize: "0.95rem",
                  }}
                >
                  {current.subheading}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {current.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      custom={i}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.45,
                        ease: "easeOut",
                        delay: i * 0.08,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          width: 9,
                          height: 9,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #9C27B0, #a855f7)",
                          flexShrink: 0,
                          marginTop: 5,
                        }}
                      />
                      <span
                        style={{
                          color: "#374151",
                          fontSize: "0.92rem",
                          lineHeight: 1.6,
                        }}
                      >
                        <strong style={{ color: "#111827" }}>{b.bold}</strong>{" "}
                        <span style={{ color: "#6b7280" }}>{b.text}</span>
                      </span>
                    </motion.li>
                  ))}
                </ul>

                <p
                  style={{
                    color: "#6b7280",
                    fontSize: "0.88rem",
                    lineHeight: 1.7,
                    borderTop: "1px solid #f3f4f6",
                    paddingTop: "1.25rem",
                  }}
                >
                  {current.footer}
                </p>

                {/* Progress bar */}
                <div
                  style={{
                    marginTop: "1.5rem",
                    height: 3,
                    background: "#9C27B0",
                    borderRadius: 999,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      background: "linear-gradient(90deg, #9C27B0, #9C27B0)",
                      borderRadius: 999,
                    }}
                    initial={{ width: 0 }}
                    animate={{
                      width: `${((active + 1) / steps.length) * 100}%`,
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
                <p
                  style={{
                    fontSize: "0.75rem",
                    color: "#9ca3af",
                    marginTop: "0.5rem",
                  }}
                >
                  Step {active + 1} of {steps.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
