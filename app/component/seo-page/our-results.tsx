"use client";

import { useEffect, useRef, useState } from "react";

const dataPoints = [
  { value: 52, label: "Jul 23" },
  { value: 72, label: "Aug 23" },
  { value: 156, label: "Sep 23" },
  { value: 248, label: "Oct 23" },
];

function AnimatedNumber({
  target,
  duration = 1500,
}: {
  target: number;
  duration?: number;
}) {
  const [current, setCurrent] = useState(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(eased * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return <>{current}</>;
}

function GrowthChart() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(t);
  }, []);

  // SVG path for the curve
  // Points mapped to SVG coords: x from 60 to 540, y from 300 to 20 (inverted)
  const points = [
    { x: 100, y: 280 },
    { x: 320, y: 200 },
    { x: 500, y: 140 },
    { x: 670, y: 30 },
  ];

  const pathD = `M ${points[0].x} ${points[0].y} C ${points[0].x + 60} ${points[0].y - 10}, ${points[1].x - 40} ${points[1].y + 20}, ${points[1].x} ${points[1].y} C ${points[1].x + 60} ${points[1].y - 30}, ${points[2].x - 60} ${points[2].y + 40}, ${points[2].x} ${points[2].y} C ${points[2].x + 60} ${points[2].y - 50}, ${points[3].x - 80} ${points[3].y + 60}, ${points[3].x} ${points[3].y}`;

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 700 320"
        className="w-full h-full overflow-visible"
        style={{ filter: "drop-shadow(0 0 20px rgba(168,85,247,0.4))" }}
      >
        {/* Gradient fill under curve */}
        <defs>
          <linearGradient id="curveGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9C27B0" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#9C27B0" stopOpacity="0.02" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9C27B0" />
            <stop offset="100%" stopColor="#9C27B0" />
          </linearGradient>
          <clipPath id="animClip">
            <rect
              x="0"
              y="0"
              height="320"
              width={animate ? "700" : "0"}
              style={{ transition: "width 1.8s cubic-bezier(0.4,0,0.2,1)" }}
            />
          </clipPath>
        </defs>

        {/* Area fill */}
        <path
          d={`${pathD} L ${points[3].x} 310 L ${points[0].x} 310 Z`}
          fill="url(#curveGrad)"
          clipPath="url(#animClip)"
        />

        {/* Main curve */}
        <path
          d={pathD}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          clipPath="url(#animClip)"
        />

        {/* Data point circles */}
        {points.map((pt, i) => (
          <g
            key={i}
            style={{
              opacity: animate ? 1 : 0,
              transition: `opacity 0.4s ease ${0.4 + i * 0.3}s`,
            }}
          >
            {/* Outer glow ring */}
            <circle cx={pt.x} cy={pt.y} r="30" fill="rgba(168,85,247,0.15)" />
            {/* Main circle */}
            <circle cx={pt.x} cy={pt.y} r="26" fill="#9437B0" />
            {/* Inner highlight */}
            <circle cx={pt.x} cy={pt.y} r="20" fill="#9C27B0" />
            {/* Value label */}
            <text
              x={pt.x}
              y={pt.y + 5}
              textAnchor="middle"
              fontSize="18"
              fontWeight="500"
              fill="white"
            >
              {dataPoints[i].value}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function SEOResults() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const features = [
    "Technical On-Site SEO",
    "Content Optimisation",
    "User Experience (UX) Optimisation",
  ];

  return (
    <>
      {/* Google Font imports */}
      <style>{`
        .seo-section * { box-sizing: border-box; }

        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.35s; }
        .delay-4 { transition-delay: 0.5s; }
        .delay-5 { transition-delay: 0.65s; }

        .check-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cta-btn {
          display: inline-block;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 14px;
          padding: 14px 28px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          text-decoration: none;
          box-shadow: 0 0 20px rgba(147,51,234,0.4);
        }
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 32px rgba(168,85,247,0.6);
        }

        .stat-badge {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 6px;
          letter-spacing: -0.5px;
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 22px;
          color: white;
          letter-spacing: -0.5px;
        }
      `}</style>

      <section
        className="seo-section bg-black"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 40px",
          fontFamily: "'DM Sans', sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          className="max-w-10/12"
          style={{
            margin: "0 auto",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* LEFT: Copy */}
          <div>
            <h2
              className={`fade-up delay-1 ${visible ? "visible" : ""}`}
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                color: "white",
                marginBottom: "24px",
              }}
            >
              Our results?{" "}
              <span className="text-[#9C27B0]">
                A testament to our expertise
              </span>
            </h2>

            <p
              className={`fade-up delay-2 ${visible ? "visible" : ""}`}
              style={{
                color: "#a1a1aa",
                fontSize: "15px",
                lineHeight: 1.75,
                marginBottom: "28px",
                maxWidth: "480px",
              }}
            >
              Following a three-month period of dedicated SEO efforts, the
              subsequent three months yielded remarkable results for WsC®. Their
              Google rankings soared from 52 to 248 top 3 Google positions, with
              a traffic increase of over 2000%. Our main areas of focus during
              this transformative phase included:
            </p>

            <ul
              className={`fade-up delay-3 ${visible ? "visible" : ""}`}
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 28px 0",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {features.map((f, i) => (
                <li
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <span className="check-icon bg-[#9C27B0]">
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                      <path
                        d="M1 4L4 7.5L10 1"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="text-[#9C27B0]">{f}</span>
                </li>
              ))}
            </ul>

            <p
              className={`fade-up delay-4 ${visible ? "visible" : ""}`}
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: 1.6,
                marginBottom: "32px",
              }}
            >
              Our PR team also secured high-quality backlinks to significantly
              raise domain authority...
            </p>

            <div className={`fade-up delay-5 ${visible ? "visible" : ""}`}>
              <button className="cta-btn bg-[#9C27B0]">
                Book Your Free Strategy Call Now
              </button>
            </div>
          </div>

          {/* RIGHT: Chart */}
          <div style={{ position: "relative" }}>
            {/* 376.92% badge */}
            <div
              className={`fade-up delay-2 text-green-400 ${visible ? "visible" : ""}`}
              style={{
                position: "absolute",
                top: "-10px",
                right: "0",
                zIndex: 10,
              }}
            >
              <div className="stat-badge">
                376.92%
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M10 16V4M10 4L4 10M10 4L16 10"
                    stroke="#9C27B0"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Chart area */}
            <div style={{ height: "320px", paddingTop: "40px" }}>
              <GrowthChart />
            </div>

            {/* Bottom label row */}
            <div
              className={`fade-up delay-4 ${visible ? "visible" : ""}`}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: "16px",
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "16px",
              }}
            >
              <div>
                <span
                  style={{
                    color: "white",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                  }}
                >
                  # Top 3 Positions{" "}
                </span>
                <span style={{ color: "#71717a", fontSize: "14px" }}>
                  (July 23 – October 23)
                </span>
              </div>
              <div className="logo-text">
                WsC<span className="logo-dot">.</span>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: 400,
                    color: "#71717a",
                    textAlign: "right",
                    letterSpacing: "2px",
                    marginTop: "-2px",
                  }}
                >
                  LONDON
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
