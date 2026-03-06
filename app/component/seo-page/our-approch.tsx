"use client";
import React, { useEffect, useRef, useState } from "react";

const DashboardIllustration: React.FC = () => (
  <svg
    width="320"
    height="220"
    viewBox="0 0 320 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Browser window */}
    <rect x="60" y="10" width="255" height="185" rx="8" fill="#1a1a2e" />
    <rect x="60" y="10" width="255" height="28" rx="8" fill="#111827" />
    <circle cx="76" cy="24" r="4" fill="#ff5f57" />
    <circle cx="90" cy="24" r="4" fill="#febc2e" />
    <circle cx="104" cy="24" r="4" fill="#28c840" />

    {/* Chart area 1 - area chart */}
    <rect x="72" y="48" width="145" height="75" rx="4" fill="#0f0f1a" />
    <path
      d="M72 110 Q90 85 105 95 Q120 105 135 78 Q150 55 165 68 Q180 80 217 60 L217 123 L72 123Z"
      fill="rgba(156,39,176,.35)"
    />
    <path
      d="M72 110 Q90 85 105 95 Q120 105 135 78 Q150 55 165 68 Q180 80 217 60"
      stroke="#9C27B0"
      strokeWidth="2"
      fill="none"
    />

    {/* Pie chart */}
    <g transform="translate(18, 52)">
      <circle cx="28" cy="28" r="28" fill="rgba(156,39,176,.2)" />
      <path d="M28 0 A28 28 0 0 1 28 56 L28 28Z" fill="#9C27B0" />
      <path d="M28 28 L56 28 A28 28 0 0 1 28 56Z" fill="rgba(156,39,176,.5)" />
    </g>

    {/* Bar chart */}
    <rect x="72" y="132" width="145" height="55" rx="4" fill="#0f0f1a" />
    {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
      <rect
        key={i}
        x={80 + i * 17}
        y={165 - [20, 35, 25, 40, 18, 32, 28, 38][i]}
        width="10"
        height={[20, 35, 25, 40, 18, 32, 28, 38][i]}
        rx="2"
        fill={i % 2 === 0 ? "#9C27B0" : "rgba(156,39,176,.4)"}
      />
    ))}

    {/* Right panel - text lines */}
    <rect
      x="226"
      y="48"
      width="80"
      height="10"
      rx="2"
      fill="rgba(255,255,255,.15)"
    />
    <rect
      x="226"
      y="64"
      width="65"
      height="8"
      rx="2"
      fill="rgba(255,255,255,.08)"
    />
    <rect
      x="226"
      y="78"
      width="75"
      height="8"
      rx="2"
      fill="rgba(255,255,255,.08)"
    />
    <rect
      x="226"
      y="92"
      width="55"
      height="8"
      rx="2"
      fill="rgba(255,255,255,.08)"
    />

    {/* Small area chart bottom right */}
    <rect x="226" y="110" width="80" height="45" rx="4" fill="#0f0f1a" />
    <path
      d="M226 148 Q236 138 248 143 Q260 148 270 132 Q280 118 306 122 L306 155 L226 155Z"
      fill="rgba(156,39,176,.3)"
    />
    <path
      d="M226 148 Q236 138 248 143 Q260 148 270 132 Q280 118 306 122"
      stroke="#BA68C8"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const StrategyIllustration: React.FC = () => (
  <svg
    width="200"
    height="180"
    viewBox="0 0 200 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Person */}
    <circle cx="90" cy="40" r="18" fill="#9C27B0" />
    <rect x="72" y="62" width="36" height="50" rx="8" fill="#7B1FA2" />
    <rect x="58" y="68" width="16" height="38" rx="8" fill="#9C27B0" />
    <rect x="94" y="68" width="16" height="38" rx="8" fill="#9C27B0" />
    <rect x="72" y="112" width="14" height="40" rx="7" fill="#6A1B9A" />
    <rect x="90" y="112" width="14" height="40" rx="7" fill="#6A1B9A" />

    {/* Diamond / geometric shape */}
    <polygon
      points="145,20 175,55 145,90 115,55"
      fill="#9C27B0"
      opacity="0.9"
    />
    <polygon
      points="145,30 168,55 145,80 122,55"
      fill="#BA68C8"
      opacity="0.6"
    />
    <polygon
      points="145,42 160,55 145,68 130,55"
      fill="#CE93D8"
      opacity="0.8"
    />

    {/* Floating particles */}
    <circle cx="40" cy="30" r="5" fill="rgba(156,39,176,.4)" />
    <circle cx="185" cy="120" r="7" fill="rgba(156,39,176,.3)" />
    <circle cx="20" cy="130" r="4" fill="rgba(186,104,200,.5)" />
  </svg>
);

/* ─── Main Component ──────────────────────────────────────────────────────── */
export const ApproachSection: React.FC = () => {
  return (
    <section
      style={{
        background: "#fff",
        padding: "80px 0 100px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .anim-fadeUp  { animation: fadeUp  .7s cubic-bezier(.22,1,.36,1) both; }
        .anim-fadeIn  { animation: fadeIn  .8s ease both; }
        .anim-slideR  { animation: slideRight .7s cubic-bezier(.22,1,.36,1) both; }

        .approach-subcard:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 16px 48px rgba(156,39,176,.12) !important;
        }
      `}</style>

      <div className="max-w-9/12 mx-auto">
        {/* ── Top header row ─────────────────────────────────────────────── */}
        <div
          className="grid md:grid-cols-2"
          style={{
            gap: 48,
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          {/* Left */}
          <div>
            <p
              className="md:text-sm text-xs font-sans font-medium"
              style={{
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#9C27B0",
                marginBottom: 14,
              }}
            >
              Our Approach
            </p>
            <h2
              className="md:text-5xl font-bold text-2xl"
              style={{
                color: "#111",
                lineHeight: 1.15,
                letterSpacing: "-.025em",
                margin: 0,
              }}
            >
              {"Let's"} unleash your{" "}
              <span style={{ color: "#9C27B0" }}>Social Ads</span> potential
            </h2>
          </div>

          {/* Right */}
          <div className="flex justify-end items-end h-full">
            <p
              style={{
                fontSize: 15,
                color: "#666",
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 480,
              }}
            >
              Our UK-based Google Ads Agency has steered thousands of successful
              campaigns, managing an annual ad spend of over £20 million. What
              to speak with our specialists?
            </p>
          </div>
        </div>

        {/* ── Research — full-width hero card ────────────────────────────── */}
        <div
          className="relative rounded-2xl overflow-hidden flex md:flex-row flex-col items-center mb-6 hover:text-white bg-slate-100 duration-400 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
          style={{
            minHeight: 280,
          }}
        >
          {/* Content */}
          <div className="md:px-14 md:w-3/4 w-full md:order-1 order-2 md:py-0 p-4">
            <h3 className="md:text-4xl text-xl font-bold md:mb-4">Research</h3>
            <p className="md:text-base text-sm">
              We delve into understanding your business, industry, and
              competitors. By conducting thorough research and analysing market
              trends, we build our SEO strategies on robust, data-driven
              foundations.
            </p>
          </div>
          <div className="md:absolute md:w-1/4 md:-right-5 md:-bottom-5 md:order-2 order-1">
            <img
              src="/3d-graph.jpg"
              alt="chart"
              className="md:h-40 md:object-contain h-auto object-cover w-full"
            />
          </div>
        </div>

        {/* ── Bottom two cards ────────────────────────────────────────────── */}
        <div className="grid md:grid-flow-col grid-flow-row md:grid-cols-5 grid-cols-1 md:space-x-5 space-y-5">
          {/* Strategise */}
          <div
            className="flex flex-col md:col-span-3 grid-flow-row relative md:py-11 md:px-10 p-4 overflow-hidden rounded-2xl text-black  hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              minHeight: 240,
              border: "1px solid rgba(156,39,176,.1)",
            }}
          >
            <h3 className="md:text-4xl text-xl font-bold md:mb-4">
              Strategise
            </h3>
            <p className="md:text-base text-sm">
              Every business is unique. By leveraging our research, we develop
              bespoke Google Ads strategies tailored to your specific goals,
              audience, and budget.
            </p>

            {/* Illustration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                right: 0,
                pointerEvents: "none",
              }}
            >
              <img src="/rye-assic.png" alt="" className="w-40 h-20" />
            </div>
          </div>

          {/* Analyse */}
          <div
            className="flex flex-col md:col-span-3 grid-flow-row relative md:py-11 md:px-10 p-4 overflow-hidden rounded-2xl text-black  hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              minHeight: 240,
              border: "1px solid rgba(156,39,176,.1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 200,
                height: 200,
                background: "rgba(156,39,176,.06)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <h3 className="md:text-4xl text-xl font-bold md:mb-4">Analyze</h3>
            <p className="md:text-base text-sm">
              Every business is unique. By leveraging our research, we develop
              bespoke Google Ads strategies tailored to your specific goals,
              audience, and budget.
            </p>

            {/* Illustration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                pointerEvents: "none",
              }}
            >
              <img src="/rye-assic.png" alt="" className="w-40 h-20" />
            </div>
          </div>
        </div>

        {/* ── Research — full-width hero card ────────────────────────────── */}
        <div
          className="relative rounded-2xl mt-6 overflow-hidden flex md:flex-row flex-col items-center mb-6 hover:text-white bg-slate-100 duration-400 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
          style={{
            minHeight: 280,
          }}
        >
          {/* Content */}
          <div className="md:px-14 md:w-3/4 w-full md:order-1 order-2 md:py-0 p-4">
            <h3 className="md:text-4xl text-xl font-bold md:mb-4">Optimize</h3>
            <p className="md:text-base text-sm">
              We delve into understanding your business, industry, and
              competitors. By conducting thorough research and analysing market
              trends, we build our SEO strategies on robust, data-driven
              foundations.
            </p>
          </div>
          <div className="md:absolute md:w-1/4 md:-right-5 md:-bottom-5 md:order-2 order-1">
            <img
              src="/3d-graph.jpg"
              alt="chart"
              className="md:h-40 md:object-contain h-auto object-cover w-full"
            />
          </div>
        </div>

        {/* ── Bottom two cards ────────────────────────────────────────────── */}
        <div className="grid md:grid-flow-col grid-flow-row md:grid-cols-5 grid-cols-1 md:space-x-5 space-y-5">
          {/* Strategise */}
          <div
            className="flex flex-col md:col-span-3 grid-flow-row relative md:py-11 md:px-10 p-4 overflow-hidden rounded-2xl text-black  hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              minHeight: 240,
              border: "1px solid rgba(156,39,176,.1)",
            }}
          >
            <h3 className="md:text-4xl text-xl font-bold md:mb-4">
              Strategise
            </h3>
            <p className="md:text-base text-sm">
              Every business is unique. By leveraging our research, we develop
              bespoke Google Ads strategies tailored to your specific goals,
              audience, and budget.
            </p>

            {/* Illustration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: -5,
                right: 0,
                pointerEvents: "none",
              }}
            >
              <img src="/rye-assic.png" alt="" className="w-40 h-20" />
            </div>
          </div>

          {/* Analyse */}
          <div
            className="flex flex-col md:col-span-3 grid-flow-row relative md:py-11 md:px-10 p-4 overflow-hidden rounded-2xl text-black  hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              minHeight: 240,
              border: "1px solid rgba(156,39,176,.1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: -40,
                left: -40,
                width: 200,
                height: 200,
                background: "rgba(156,39,176,.06)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <h3 className="md:text-4xl text-xl font-bold md:mb-4">Analyze</h3>
            <p className="md:text-base text-sm">
              Every business is unique. By leveraging our research, we develop
              bespoke Google Ads strategies tailored to your specific goals,
              audience, and budget.
            </p>

            {/* Illustration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: 20,
                pointerEvents: "none",
              }}
            >
              <img src="/rye-assic.png" alt="" className="w-40 h-20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
