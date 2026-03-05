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
    title: "Strategise",
    heading: "Strategise",
    description:
      "We craft a bespoke strategy tailored to your goals, audience, and competitive landscape. Every decision is data-backed and designed to maximise your return on ad spend.",
    subheading: "Our strategy phase covers:",
    bullets: [
      {
        bold: "Campaign architecture",
        text: "Structuring campaigns for clarity and control",
      },
      {
        bold: "Audience segmentation",
        text: "Precise targeting based on research insights",
      },
      {
        bold: "Budget allocation",
        text: "Optimising spend across channels and objectives",
      },
      {
        bold: "Creative direction",
        text: "Aligning messaging with audience intent",
      },
      {
        bold: "KPI definition",
        text: "Setting measurable benchmarks for success",
      },
    ],
    footer:
      "A well-built strategy ensures every pound of ad spend is purposeful and every campaign is positioned to deliver.",
  },
  {
    id: 3,
    label: "Third Step",
    title: "Analyse",
    heading: "Analyse",
    description:
      "We dive deep into your campaign data to uncover opportunities, inefficiencies, and trends that shape smarter decisions.",
    subheading: "Our analysis phase covers:",
    bullets: [
      {
        bold: "Performance audits",
        text: "Examining historical campaign data",
      },
      {
        bold: "Funnel analysis",
        text: "Identifying drop-off points and conversion blockers",
      },
      {
        bold: "Attribution modelling",
        text: "Understanding which channels drive results",
      },
      {
        bold: "Cohort reporting",
        text: "Tracking behaviour across audience segments",
      },
      {
        bold: "Insight extraction",
        text: "Turning raw numbers into actionable intelligence",
      },
    ],
    footer:
      "Deep analysis separates reactive marketers from proactive ones — we ensure you're always ahead of the curve.",
  },
  {
    id: 4,
    label: "Fourth Step",
    title: "Optimise",
    heading: "Optimise",
    description:
      "We continuously refine campaigns to squeeze out every drop of performance, reducing waste and scaling what works.",
    subheading: "Our optimisation phase covers:",
    bullets: [
      {
        bold: "Bid management",
        text: "Real-time adjustments to maximise efficiency",
      },
      { bold: "Ad copy testing", text: "A/B and multivariate experiments" },
      {
        bold: "Landing page refinement",
        text: "Improving conversion rates post-click",
      },
      { bold: "Audience pruning", text: "Removing low-value segments" },
      {
        bold: "Budget reallocation",
        text: "Shifting spend toward top performers",
      },
    ],
    footer:
      "Optimisation is never a one-time task — it's the engine that keeps your campaigns compounding in performance.",
  },
  {
    id: 5,
    label: "Fifth Step",
    title: "Review",
    heading: "Review",
    description:
      "Regular strategic reviews ensure your campaigns evolve alongside your business goals, market conditions, and audience behaviour.",
    subheading: "Our review phase covers:",
    bullets: [
      {
        bold: "Monthly performance reviews",
        text: "Deep dives into what's working",
      },
      {
        bold: "Quarterly strategy sessions",
        text: "Reassessing goals and priorities",
      },
      { bold: "Competitor benchmarking", text: "Staying ahead in your market" },
      { bold: "Channel expansion", text: "Exploring new growth opportunities" },
      {
        bold: "Team alignment",
        text: "Keeping stakeholders informed and confident",
      },
    ],
    footer:
      "Reviews keep campaigns sharp and ensure your investment continues to grow with you.",
  },
  {
    id: 6,
    label: "Final Step",
    title: "Report",
    heading: "Report",
    description:
      "Transparent, clear reporting gives you full visibility into performance — no jargon, no black boxes, just honest results.",
    subheading: "Our reporting covers:",
    bullets: [
      {
        bold: "Custom dashboards",
        text: "Tailored to the metrics you care about",
      },
      { bold: "Plain-English summaries", text: "No jargon, always actionable" },
      { bold: "ROI tracking", text: "Clear attribution from spend to revenue" },
      {
        bold: "Trend analysis",
        text: "Month-over-month and year-over-year context",
      },
      { bold: "Next-step recommendations", text: "Always forward-looking" },
    ],
    footer:
      "You'll always know exactly how your campaigns are performing and what we're doing next.",
  },
];

export default function SocialAdsApproach() {
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
          <div>
            <p
              style={{
                color: "#9C27B0",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Our Approach
            </p>
            <h1
              className="mt-1 text-5xl font-bold"
              style={{
                lineHeight: 1.15,
              }}
            >
              {"Let's"} unleash your{" "}
              <span style={{ color: "#9C27B0" }}>Social Ads</span> potential
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
            Our UK-based Google Ads Agency has steered thousands of successful
            campaigns, managing an annual ad spend of over £20 million. Want to
            speak with our specialists?
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
          <div className="flex-1 min-h-96 " style={{ position: "relative" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                style={{
                  background: "#fff",
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
