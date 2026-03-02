"use client";

import Image from "next/image";
import Link from "next/link";
import NumbersTalk from "./Numberstalk";
// ─── Data for all 8 timeline sections ───────────────────────────────────────
const sections = [
  {
    number: 1,
    heading: "Rule the inbox with Email Marketing",
    description:
      "Create stunning emails with the flexible drag-and-drop editor and hit send with confidence, delivering warm-welcomed messages straight to their inbox.",
    features: [
      "Build and re-use templates",
      "Streamline your workflows",
      "Seamlessly segment and adapt your emails",
    ],
    cta: { label: "Get Started Free", href: "#" },
    image: "/tool1.png",
    imageAlt: "Email marketing dashboard",
  },
  {
    number: 2,
    heading: "Reach millions with SMS Marketing",
    description:
      "Send targeted SMS campaigns to the right audience at the right time. Drive engagement with personalised messages that convert.",
    features: [
      "High open rates guaranteed",
      "Schedule campaigns easily",
      "Track delivery and clicks",
    ],
    cta: { label: "Explore SMS Marketing", href: "#" },
    image: "/tool2.png",
    imageAlt: "SMS marketing dashboard",
  },
  {
    number: 3,
    heading: "Automate your Marketing Workflows",
    description:
      "Set up powerful automated workflows that nurture leads, onboard customers, and re-engage lapsed users — all without lifting a finger.",
    features: [
      "Drag-and-drop automation builder",
      "Trigger-based sequences",
      "A/B test your automations",
    ],
    cta: { label: "Start Automating", href: "#" },
    image: "/tool3.png",
    imageAlt: "Marketing automation workflow",
  },
  {
    number: 4,
    heading: "Convert visitors with Landing Pages",
    description:
      "Design high-converting landing pages in minutes. No coding needed — just beautiful, responsive pages that turn clicks into customers.",
    features: [
      "Pre-built conversion templates",
      "Integrate with your CRM",
      "Real-time analytics",
    ],
    cta: { label: "Build Landing Pages", href: "#" },
    image: "/tool4.png",
    imageAlt: "Landing page builder",
  },
  
  {
    number: 5,
    heading: "Grow your audience with Forms & Popups",
    description:
      "Capture leads with beautiful embedded forms and timed popups that match your brand and integrate seamlessly with your marketing stack.",
    features: [
      "Smart exit-intent popups",
      "Multi-step forms",
      "GDPR compliant opt-ins",
    ],
    cta: { label: "Create Forms", href: "#" },
    image: "/tool5.png",
    imageAlt: "Forms and popups builder",
  },
  {
    number: 6,
    heading: "Manage all Social Media in one place",
    description:
      "Schedule, publish and analyse posts across all your social channels from a single dashboard. Save hours every week.",
    features: [
      "Unified content calendar",
      "Cross-platform scheduling",
      "Engagement analytics",
    ],
    cta: { label: "Manage Social", href: "#" },
    image: "/tool6.png",
    imageAlt: "Social media management",
  },
  {
    number: 7,
    heading: "Understand your data with Analytics",
    description:
      "Get a bird's-eye view of your entire marketing performance. Understand what's working and where to invest for maximum ROI.",
    features: [
      "Real-time reporting dashboard",
      "Custom KPI tracking",
      "Export reports easily",
    ],
    cta: { label: "View Analytics", href: "#" },
    image: "/tool7.png",
    imageAlt: "Analytics dashboard",
  },
  {
    number: 8,
    heading: "Scale faster with AI-Powered Insights",
    description:
      "Let artificial intelligence do the heavy lifting. Get smart recommendations, predictive analytics, and auto-optimisations that keep you ahead.",
    features: [
      "AI content suggestions",
      "Predictive send-time optimisation",
      "Smart audience segmentation",
    ],
    cta: { label: "Try AI Features", href: "#" },
    image: "/tool8.png",
    imageAlt: "AI powered insights",
  },
];

// ─── CheckIcon helper ────────────────────────────────────────────────────────
function CheckIcon() {
  return (
    <span
      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
      style={{ background: "#9C27B0" }}
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

// ─── Timeline node (circle + connecting line) ────────────────────────────────
function TimelineNode({
  number,
  isLast,
}: {
  number: number;
  isLast: boolean;
}) {
  const cx = 55;
  const cy = 55;
  const r = 42;
  const circumference = 2 * Math.PI * r;

  return (
    <div
      className="flex flex-col items-center flex-shrink-0"
      style={{ width: "110px" }}
    >
      {/* Circle */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: "110px", height: "110px" }}
      >
        <svg
          width="110"
          height="110"
          viewBox="0 0 110 110"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          {/* right half — dashed thin arc */}
          <circle
            cx={cx}
            cy={cy}
            r={r}
            stroke="#9C27B0"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4.82 4.82"
            strokeDashoffset={circumference / 2}
            style={{
              transform: "rotate(180deg)",
              transformOrigin: `${cx}px ${cy}px`,
            }}
          />
          {/* Number */}
          <text
            x={cx}
            y={cy + 9}
            fontFamily="sans-serif"
            fontWeight="800"
            fontSize="26"
            fill="#1a1a2e"
            textAnchor="middle"
          >
            {number}
          </text>
        </svg>
      </div>

      {/* Connecting vertical line (hidden on last node) */}
      
        <div
          style={{
            width: "15px",
            height: "272px",
            background: "#9C27B0",
            opacity: 0.7,
            borderRadius: "10px",
            marginTop: "-2px",
          }}
        />
     
    </div>
  );
}

// ─── Single timeline row ─────────────────────────────────────────────────────
function TimelineRow({
  section,
  isLast,
}: {
  section: (typeof sections)[0];
  isLast: boolean;
}) {
  const isEven = section.number % 2 === 0;

  const TextBlock = (
    <div className="flex-1 flex flex-col justify-center px-8 py-6">
      <h3
        className="font-extrabold text-gray-900 leading-tight mb-4 text-3xl">
    {/* //     style={{ fontSize: "clamp(1.4rem, 2.2vw, 1.9rem)" }} */}
    
        {section.heading}
      </h3>
      <p className="text-gray-500 text-base leading-relaxed mb-5 max-w-sm">
        {section.description}
      </p>

      {/* Features — 2 on first row, 1 on second */}
      <div className="flex flex-col gap-3 mb-7">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {section.features.slice(0, 2).map((f) => (
            <div key={f} className="flex items-center gap-2">
              <CheckIcon />
              <span className="text-gray-700 text-sm font-medium">{f}</span>
            </div>
          ))}
        </div>
        {section.features[2] && (
          <div className="flex items-center gap-2">
            <CheckIcon />
            <span className="text-gray-700 text-sm font-medium">
              {section.features[2]}
            </span>
          </div>
        )}
      </div>

      {/* CTA */}
      <div>
        <Link
          href={section.cta.href}
          className="inline-flex items-center justify-center px-9 py-3.5 rounded-full font-semibold text-white text-sm hover:opacity-90 transition-all"
          style={{ background: "#9934C1" }}
        >
          {section.cta.label}
        </Link>
      </div>
    </div>
  );

  const ImageBlock = (
    <div className="flex-1 flex items-center justify-center py-4 px-4">
      <div className="relative w-full" >
        <Image
          src={section.image}
          alt={section.imageAlt}
          width={620}
          height={400}
          className="object-contain w-full h-auto"
          style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.10))" }}
        />
      </div>
    </div>
  );

  return (
    <div className="flex items-center w-full">
      {/* Left panel */}
      <div className="flex-1">{isEven ? ImageBlock : TextBlock}</div>

      {/* Center timeline */}
      <TimelineNode number={section.number} isLast={isLast} />

      {/* Right panel */}
      <div className="flex-1">{isEven ? TextBlock : ImageBlock}</div>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function MarketingTools() {
  const firstGroup = sections.slice(0, 4);  // sections 1–4
  const secondGroup = sections.slice(4);    // sections 5–8

  return (
    <section className="bg-white py-16 px-6">
      {/* Section Heading */}
      <div className="w-10/12 mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          <span className="text-[#9C27B0]">The marketing</span> tools you need
          to grow your business
        </h2>
      </div>

      {/* ── First 4 rows ── */}
      <div className="w-10/12 mx-auto space-y-24">
        {firstGroup.map((section) => (
          <TimelineRow
            key={section.number}
            section={section}
            isLast={false}
          />
        ))}
      </div>

      {/* ── NumbersTalk banner between section 4 and 5 ── */}
      <NumbersTalk />

      {/* ── Last 4 rows ── */}
      <div className="w-10/12 mx-auto space-y-24">
        {secondGroup.map((section, index) => (
          <TimelineRow
            key={section.number}
            section={section}
            isLast={index === secondGroup.length - 1}
          />
        ))}
      </div>
       </section>
  );
}