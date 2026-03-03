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
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        padding: "80px 0 100px",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "flex-start",
            marginBottom: 48,
          }}
        >
          {/* Left */}
          <div>
            <p
              style={{
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "#9C27B0",
                marginBottom: 14,
              }}
            >
              Our Approach
            </p>
            <h2
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: "clamp(32px, 3.5vw, 50px)",
                fontWeight: 800,
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
          className="hover:text-white bg-slate-100 duration-400 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          {/* Noise texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {/* Glow blobs */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: 200,
              width: 300,
              height: 300,
              borderRadius: "50%",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: 100,
              width: 200,
              height: 200,
              borderRadius: "50%",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "52px 56px",
              flex: 1,
              maxWidth: "55%",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 36,
                fontWeight: 800,
                marginBottom: 18,
                letterSpacing: "-.02em",
              }}
            >
              Research
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 520,
              }}
            >
              We delve into understanding your business, industry, and
              competitors. By conducting thorough research and analysing market
              trends, we build our SEO strategies on robust, data-driven
              foundations.
            </p>
          </div>

          {/* Illustration — right side */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 0,
            }}
          >
            {/* Mock browser dashboard */}
            <div
              style={{
                background: "#fff",
                borderRadius: "12px 0 0 0",
                padding: "0",
                boxShadow: "-12px 12px 48px rgba(0,0,0,.3)",
                overflow: "hidden",
                width: 320,
                height: 210,
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            >
              {/* Browser top bar */}
              <div
                style={{
                  background: "#1a1a2e",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ff5f57",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#febc2e",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#28c840",
                    display: "inline-block",
                  }}
                />
              </div>
              <div style={{ padding: 12 }}>
                <DashboardIllustration />
              </div>
            </div>

            {/* Floating pie chart */}
            <div
              style={{
                position: "absolute",
                right: 290,
                top: "50%",
                transform: "translateY(-60%)",
                width: 80,
                height: 80,
              }}
            >
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle cx="40" cy="40" r="38" fill="rgba(156,39,176,.15)" />
                <path d="M40 2 A38 38 0 0 1 78 40 L40 40Z" fill="#9C27B0" />
                <path d="M78 40 A38 38 0 0 1 40 78 L40 40Z" fill="#BA68C8" />
                <path
                  d="M40 78 A38 38 0 0 1 2 40 L40 40Z"
                  fill="rgba(156,39,176,.4)"
                />
                <circle cx="40" cy="40" r="18" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Bottom two cards ────────────────────────────────────────────── */}
        <div className="grid grid-flow-col grid-cols-5 gap-5">
          {/* Strategise */}
          <div
            className="grid col-span-2 text-black  hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              borderRadius: 20,
              padding: "44px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 260,
              border: "1px solid rgba(156,39,176,.1)",
            }}
          >
            {/* Decorative circle bg */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 14,
                letterSpacing: "-.02em",
              }}
            >
              Strategise
            </h3>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 300,
              }}
            >
              Every business is unique. By leveraging our research, we develop
              bespoke Google Ads strategies tailored to your specific goals,
              audience, and budget.
            </p>

            {/* Illustration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 0,
                pointerEvents: "none",
              }}
            >
              <img src="/rye-assic.png" alt="" className="w-40 h-20" />
            </div>
          </div>

          {/* Analyse */}
          <div
            className="grid col-span-3 text-black hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              borderRadius: 20,
              padding: "44px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 260,
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

            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 14,
                letterSpacing: "-.02em",
              }}
            >
              Analyse
            </h3>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 340,
              }}
            >
              Performance metrics guide our efforts. We continuously monitor key
              indicators, such as click-through rates and conversion data, to
              refine and optimise your campaigns.
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

        {/* Optimise */}
        <div
          className="hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
          style={{
            position: "relative",
            borderRadius: 20,
            overflow: "hidden",
            minHeight: 280,
            display: "flex",
            alignItems: "center",
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          {/* Noise texture overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.4,
              pointerEvents: "none",
            }}
          />

          {/* Glow blobs */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: 200,
              width: 300,
              height: 300,
              borderRadius: "50%",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -40,
              left: 100,
              width: 200,
              height: 200,
              borderRadius: "50%",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              padding: "52px 56px",
              flex: 1,
              maxWidth: "55%",
            }}
          >
            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 36,
                fontWeight: 800,
                marginBottom: 18,
                letterSpacing: "-.02em",
              }}
            >
              Optimise
            </h3>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 520,
              }}
            >
              We delve into understanding your business, industry, and
              competitors. By conducting thorough research and analysing market
              trends, we build our SEO strategies on robust, data-driven
              foundations.
            </p>
          </div>

          {/* Illustration — right side */}
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 0,
            }}
          >
            {/* Mock browser dashboard */}
            <div
              style={{
                background: "#fff",
                borderRadius: "12px 0 0 0",
                padding: "0",
                boxShadow: "-12px 12px 48px rgba(0,0,0,.3)",
                overflow: "hidden",
                width: 320,
                height: 210,
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
            >
              {/* Browser top bar */}
              <div
                style={{
                  background: "#1a1a2e",
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#ff5f57",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#febc2e",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#28c840",
                    display: "inline-block",
                  }}
                />
              </div>
              <div style={{ padding: 12 }}>
                <DashboardIllustration />
              </div>
            </div>

            {/* Floating pie chart */}
            <div
              style={{
                position: "absolute",
                right: 290,
                top: "50%",
                transform: "translateY(-60%)",
                width: 80,
                height: 80,
              }}
            >
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle cx="40" cy="40" r="38" fill="rgba(156,39,176,.15)" />
                <path d="M40 2 A38 38 0 0 1 78 40 L40 40Z" fill="#9C27B0" />
                <path d="M78 40 A38 38 0 0 1 40 78 L40 40Z" fill="#BA68C8" />
                <path
                  d="M40 78 A38 38 0 0 1 2 40 L40 40Z"
                  fill="rgba(156,39,176,.4)"
                />
                <circle cx="40" cy="40" r="18" fill="white" />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Bottom two cards ────────────────────────────────────────────── */}
        <div className="grid grid-flow-col grid-cols-5 gap-5">
          {/* Report */}
          <div
            className="grid col-span-3 text-black hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              borderRadius: 20,
              padding: "44px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 260,
              border: "1px solid rgba(156,39,176,.1)",
            }}
          >
            {/* Decorative circle bg */}
            <div
              style={{
                position: "absolute",
                top: -40,
                right: -40,
                width: 200,
                height: 200,
                background: "rgba(156,39,176,.06)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 14,
                letterSpacing: "-.02em",
              }}
            >
              Report
            </h3>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 300,
              }}
            >
              Every business is unique. By leveraging our research, we develop
              bespoke Google Ads strategies tailored to your specific goals,
              audience, and budget.
            </p>

            {/* Illustration — bottom right */}
            <div
              style={{
                position: "absolute",
                bottom: 10,
                right: 0,
                pointerEvents: "none",
              }}
            >
              <img src="/rye-assic.png" alt="" className="w-40 h-20" />
            </div>
          </div>

          {/* Review */}
          <div
            className="grid col-span-2 text-black hover:text-white bg-slate-100 duration-300 transition-colors hover:bg-linear-to-br hover:from-[#2d1b4e] hover:via-[#6a0dad] to-[#c026d3]"
            style={{
              borderRadius: 20,
              padding: "44px 40px",
              position: "relative",
              overflow: "hidden",
              minHeight: 260,
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

            <h3
              style={{
                fontFamily: "'Bricolage Grotesque', sans-serif",
                fontSize: 28,
                fontWeight: 800,
                marginBottom: 14,
                letterSpacing: "-.02em",
              }}
            >
              Review
            </h3>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.75,
                margin: 0,
                maxWidth: 340,
              }}
            >
              Performance metrics guide our efforts. We continuously monitor key
              indicators, such as click-through rates and conversion data, to
              refine and optimise your campaigns.
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
