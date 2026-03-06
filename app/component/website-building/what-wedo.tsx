"use client";

import { JSX, useEffect, useRef, useState } from "react";

const services = [
  {
    title: "MVP Development (web/mobile):",
    description: "End-to-end builds, core feature-first",
    visual: "dashboard",
    offset: "mt-8",
  },
  {
    title: (
      <>
        UI/UX <br />
        <strong>Design:</strong>
      </>
    ),
    titlePlain: "UI/UX Design:",
    description: "Figma prototypes, design systems, clickable demos",
    visual: "banking",
    offset: "mt-16",
  },
  {
    title: "Product Strategy:",
    description: "Validation-focused planning, roadmap co-creation",
    visual: "roadmap",
    offset: "mt-4",
  },
  {
    title: "Post-launch Support:",
    description: "Weekly sprints, user feedback integration",
    visual: "support",
    offset: "mt-0",
  },
];

function DashboardVisual() {
  return (
    <div style={{ background: "#1e2436", borderRadius: "10px", padding: "12px", marginTop: "16px", fontSize: "0", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}>
      <div style={{ display: "flex", gap: "6px", marginBottom: "8px" }}>
        {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
          <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />
        ))}
      </div>
      <div style={{ display: "flex", gap: "6px" }}>
        <div style={{ width: "28%", display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ background: "#3b4a6b", borderRadius: 4, height: 6 }} />
          {[1, 1, 1, 1, 1].map((_, i) => (
            <div key={i} style={{ background: i === 0 ? "#4f6ef7" : "#2a3452", borderRadius: 4, height: 5 }} />
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5px" }}>
          <div style={{ display: "flex", gap: "4px" }}>
            {[1, 1, 1, 1].map((_, i) => (
              <div key={i} style={{ flex: 1, background: "#2a3452", borderRadius: 4, height: 20, padding: "3px 4px" }}>
                <div style={{ background: "#3b4a6b", borderRadius: 2, height: 4, marginBottom: 2 }} />
                <div style={{ background: "#4f6ef7", borderRadius: 2, height: 3, width: "60%" }} />
              </div>
            ))}
          </div>
          <div style={{ background: "#2a3452", borderRadius: 4, height: 40, padding: "6px 8px", display: "flex", alignItems: "flex-end", gap: "3px" }}>
            {[60, 30, 80, 45, 90, 55, 70, 40, 85, 50, 95, 65].map((h, i) => (
              <div key={i} style={{ flex: 1, background: i === 10 ? "#4f6ef7" : "#3b4a6b", borderRadius: "2px 2px 0 0", height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function BankingVisual() {
  return (
    <div style={{ background: "#1a1a2e", borderRadius: "10px", marginTop: "16px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", position: "relative" }}>
      <div style={{ background: "#16213e", padding: "8px 12px", display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ width: 20, height: 6, background: "#e94560", borderRadius: 3 }} />
        <div style={{ flex: 1, height: 5, background: "#0f3460", borderRadius: 3 }} />
        <div style={{ width: 14, height: 5, background: "#533483", borderRadius: 3 }} />
      </div>
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{ color: "white", fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, marginBottom: 4 }}>Digital banking<br />revolution</div>
        <div style={{ width: "60%", height: 4, background: "#533483", borderRadius: 2, marginBottom: 8 }} />
        <div style={{ width: "40%", height: 18, background: "#e94560", borderRadius: 4, marginBottom: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "60%", height: 4, background: "rgba(255,255,255,0.7)", borderRadius: 2 }} />
        </div>
        <div style={{ background: "linear-gradient(135deg, #1a1a3e 0%, #2d2d6b 100%)", borderRadius: 8, padding: "12px 14px", position: "relative", overflow: "hidden" }}>
          <div style={{ fontSize: 8, color: "rgba(255,255,255,0.6)", marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>Design your personalized credit card.</div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              {[1, 1, 1].map((_, i) => (
                <div key={i} style={{ display: "flex", gap: 3, marginBottom: 2 }}>
                  {[1, 1, 1, 1].map((__, j) => (
                    <div key={j} style={{ width: 6, height: 3, background: "rgba(255,255,255,0.3)", borderRadius: 1 }} />
                  ))}
                </div>
              ))}
            </div>
            <div style={{ color: "rgba(255,255,255,0.8)", fontSize: 9, fontWeight: 700, letterSpacing: 1 }}>VISA</div>
          </div>
          <div style={{ position: "absolute", right: -8, top: -8, width: 40, height: 40, borderRadius: "50%", background: "rgba(255,200,0,0.15)" }} />
          <div style={{ position: "absolute", right: 4, top: -4, width: 28, height: 28, borderRadius: "50%", background: "rgba(255,200,0,0.1)" }} />
        </div>
      </div>
    </div>
  );
}

function RoadmapVisual() {
  const phases = [
    { label: "Ideation", color: "#94a3b8" },
    { label: "High-Fidelity Design", color: "#3b82f6" },
    { label: "UI/UX Design Implementation", color: "#8b5cf6" },
    { label: "Research & Requirement Gathering", color: "#3b82f6" },
    { label: "Front End Implementation", color: "#3b82f6" },
    { label: "Wireframing", color: "#94a3b8" },
    { label: "Back-End Implementation", color: "#1d4ed8" },
  ];
  return (
    <div style={{ background: "white", border: "1px solid #e2e8f0", borderRadius: "10px", padding: "10px", marginTop: "16px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
      <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
        {["#ff5f57", "#ffbd2e", "#28ca41"].map((c, i) => (
          <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        {phases.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: `${20 + i * 8}%`, minWidth: 20, height: 14, background: p.color, borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 4 }}>
              <span style={{ fontSize: 5, color: "white", whiteSpace: "nowrap", overflow: "hidden" }}>{p.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportVisual() {
  return (
    <div style={{ marginTop: "16px", display: "flex", justifyContent: "center", position: "relative", height: "130px" }}>
      <div style={{ position: "absolute", right: 10, bottom: 0 }}>
        <svg width="100" height="110" viewBox="0 0 100 110" fill="none">
          <rect x="15" y="70" width="70" height="38" rx="4" fill="#7c3aed" opacity="0.85" />
          <rect x="20" y="74" width="60" height="28" rx="2" fill="#a78bfa" />
          <rect x="10" y="108" width="80" height="3" rx="1.5" fill="#6d28d9" />
          <ellipse cx="55" cy="65" rx="14" ry="18" fill="#fbbf24" />
          <circle cx="55" cy="42" r="14" fill="#fcd34d" />
          <path d="M41 38 Q55 24 69 38" fill="#1e1b4b" />
          <path d="M42 40 Q55 28 68 40" stroke="#7c3aed" strokeWidth="3" fill="none" />
          <rect x="40" y="38" width="5" height="8" rx="2.5" fill="#7c3aed" />
          <rect x="55" y="38" width="5" height="8" rx="2.5" fill="#7c3aed" />
          <path d="M41 65 Q30 75 35 85" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M69 65 Q80 75 75 85" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" fill="none" />
        </svg>
      </div>
      <div style={{ position: "absolute", top: 0, right: 0, background: "#f59e0b", borderRadius: "50%", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 10, color: "white", boxShadow: "0 4px 12px rgba(245,158,11,0.4)" }}>24/7</div>
      <div style={{ position: "absolute", top: 12, left: 20, background: "#7c3aed", borderRadius: "12px 12px 12px 2px", width: 32, height: 24, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(124,58,237,0.4)" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" /></svg>
      </div>
      <div style={{ position: "absolute", top: 50, right: 85, background: "#a855f7", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(168,85,247,0.4)" }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
      </div>
      <div style={{ position: "absolute", bottom: 20, left: 10, background: "#6d28d9", borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(109,40,217,0.4)" }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
      </div>
    </div>
  );
}

const visuals: Record<string, JSX.Element> = {
  dashboard: <DashboardVisual />,
  banking: <BankingVisual />,
  roadmap: <RoadmapVisual />,
  support: <SupportVisual />,
};

export default function WhatWeDo() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .wwd-card {
          background: white;
          border-radius: 20px;
          padding: 28px 24px 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          transition: all 0.4s ease;
          overflow: hidden;
          position: relative;
        }
        .wwd-card::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #263238, #9934C1);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }
        .wwd-card:hover::before { opacity: 1; }
        .wwd-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 50px rgba(124,58,237,0.25);
        }
        .wwd-card > * { position: relative; z-index: 1; transition: color 0.4s ease; }
        .wwd-card:hover h4,
        .wwd-card:hover p,
        .wwd-card:hover div { color: white !important; }
        .card-anim { opacity: 0; transform: translateY(40px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .card-anim.show { opacity: 1; transform: translateY(0); }

        /* Mobile card overrides */
        @media (max-width: 767px) {
          .wwd-card { padding: 20px 16px 16px; border-radius: 16px; }
        }
      `}</style>

      <section
        ref={ref}
        style={{
          background: "#f8f9fc",
          fontFamily: "'DM Sans', sans-serif",
        }}
        className="px-5 py-12 md:px-10 md:py-[100px]"
      >
        {/* Heading — 2xl mobile, 5xl desktop */}
        <h2
          className="text-2xl md:text-5xl text-black text-center"
          style={{ marginBottom: "40px", letterSpacing: "-0.5px" }}
        >
          What <span style={{ color: "#9934C1" }}>we do</span>
        </h2>

        {/* ===== MOBILE: Single column stack ===== */}
        <div className="flex flex-col gap-4 md:hidden">
          {services.map((s, i) => (
            <div
              key={i}
              className={`card-anim wwd-card ${visible ? "show" : ""}`}
            >
              {/* Title */}
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: "8px" }}>
                {s.title}
              </div>
              {/* Description — xs on mobile */}
              <p style={{ color: "#64748b", fontSize: "12px", lineHeight: 1.65, margin: 0 }}>
                {s.description}
              </p>
              {/* Visual */}
              {visuals[s.visual]}
            </div>
          ))}
        </div>

        {/* ===== DESKTOP: Original 4-column grid — untouched ===== */}
        <div
          className="hidden md:grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
            alignItems: "start",
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className={`card-anim wwd-card ${visible ? "show" : ""}`}
              style={{ marginTop: i === 1 ? "60px" : i === 0 ? "28px" : i === 2 ? "14px" : "0" }}
            >
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 700, color: "#0f172a", lineHeight: 1.3, marginBottom: "10px" }}>
                {s.title}
              </div>
              <p style={{ color: "#64748b", fontSize: "14px", lineHeight: 1.65, margin: 0 }}>
                {s.description}
              </p>
              {visuals[s.visual]}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}