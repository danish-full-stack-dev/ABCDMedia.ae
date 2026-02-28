"use client";
import React, { useState } from "react";

/* ─── Types ───────────────────────────────────────────────────────────────── */
type CellValue = true | string | null;

interface FeatureRow {
  label: string;
  grow: CellValue;
  scale: CellValue;
  onDemand: CellValue;
}

/* ─── Data ────────────────────────────────────────────────────────────────── */
const features: FeatureRow[] = [
  {
    label: "Dedicated Account Manager",
    grow: true,
    scale: "Senior Account Manager",
    onDemand: "Senior Account Manager",
  },
  {
    label: "Account Setup",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Initial Account Audit",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Keyword Research",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Competitor Research & Analysis",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "ClickExpose Protection",
    grow: "Pro 10k (RRP £49/mo)",
    scale: "Pro 100k (RRP £129/mo)",
    onDemand: "Pro Unlimited",
  },
  {
    label: "Landing Page Optimisation Suggestions",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Conversion Tracking/GTM Setup",
    grow: "£299 One-Off",
    scale: true,
    onDemand: true,
  },
  {
    label: "Ad Copywriting",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Multivariate Ad Testing",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Shopping Campaign Management",
    grow: null,
    scale: true,
    onDemand: true,
  },
  {
    label: "Remarketing Campaigns",
    grow: null,
    scale: true,
    onDemand: true,
  },
  {
    label: "Monthly Performance Reports",
    grow: true,
    scale: true,
    onDemand: true,
  },
  {
    label: "Dedicated Slack Channel",
    grow: null,
    scale: true,
    onDemand: true,
  },
  {
    label: "White-Label Reporting",
    grow: null,
    scale: null,
    onDemand: true,
  },
];

/* ─── Check icon variants ─────────────────────────────────────────────────── */
const PurpleCheck: React.FC = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "linear-gradient(135deg, #9C27B0, #6A1B9A)",
      boxShadow: "0 4px 14px rgba(156,39,176,.45)",
      flexShrink: 0,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 7l3.5 3.5 5.5-6"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const GrayCheck: React.FC = () => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 36,
      height: 36,
      borderRadius: "50%",
      background: "rgba(255,255,255,.1)",
      border: "1px solid rgba(255,255,255,.12)",
      flexShrink: 0,
    }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M2.5 7l3.5 3.5 5.5-6"
        stroke="rgba(255,255,255,.7)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

/* ─── Cell renderer ───────────────────────────────────────────────────────── */
const Cell: React.FC<{ value: CellValue; isScale?: boolean }> = ({
  value,
  isScale,
}) => {
  if (value === null) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 44,
        }}
      >
        <span style={{ color: "rgba(255,255,255,.15)", fontSize: 18 }}>—</span>
      </div>
    );
  }
  if (value === true) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 44,
        }}
      >
        {isScale ? <GrayCheck /> : <PurpleCheck />}
      </div>
    );
  }
  // String value
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 44,
      }}
    >
      <span
        style={{
          fontSize: 12.5,
          color: isScale ? "rgba(255,255,255,.65)" : "rgba(255,255,255,.55)",
          textAlign: "center",
          lineHeight: 1.4,
          fontStyle: "italic",
        }}
      >
        {value}
      </span>
    </div>
  );
};

/* ─── Main Component ──────────────────────────────────────────────────────── */
export const PricingComparisonTable: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section
      style={{
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        background: "#0a0a0a",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .cmp-table { animation: fadeIn .5s ease both; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 1100 }} className="cmp-table">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(156,39,176,.12)",
              border: "1px solid rgba(156,39,176,.3)",
              borderRadius: 100,
              padding: "5px 16px",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: ".12em",
              textTransform: "uppercase" as const,
              color: "#BA68C8",
              marginBottom: 14,
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#9C27B0",
                display: "inline-block",
              }}
            />
            Compare Plans
          </div>
          <h2
            style={{
              fontFamily: "'Bricolage Grotesque', sans-serif",
              fontSize: "clamp(28px, 3.5vw, 44px)",
              fontWeight: 800,
              color: "#fff",
              letterSpacing: "-.025em",
            }}
          >
            Everything in the box
          </h2>
        </div>

        {/* Table wrapper */}
        <div
          style={{
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,.06)",
          }}
        >
          {/* Column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 180px 220px 180px",
              background: "#111",
              borderBottom: "1px solid rgba(255,255,255,.07)",
            }}
          >
            {/* Empty first col */}
            <div style={{ padding: "24px 28px" }} />

            {/* Grow */}
            <div style={{ padding: "24px 16px", textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-.01em",
                }}
              >
                Grow
              </span>
            </div>

            {/* Scale — featured column */}
            <div
              style={{
                padding: "28px 16px 24px",
                textAlign: "center",
                background:
                  "linear-gradient(180deg, rgba(156,39,176,.12) 0%, rgba(156,39,176,.04) 100%)",
                borderLeft: "1px solid rgba(156,39,176,.25)",
                borderRight: "1px solid rgba(156,39,176,.25)",
                borderTop: "2px solid #9C27B0",
                borderRadius: "12px 12px 0 0",
                position: "relative" as const,
                marginTop: -1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-.01em",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Scale
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  background: "rgba(156,39,176,.2)",
                  border: "1px solid rgba(156,39,176,.4)",
                  borderRadius: 100,
                  padding: "2px 10px",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#CE93D8",
                  letterSpacing: ".06em",
                  textTransform: "uppercase" as const,
                }}
              >
                ★ Most Popular
              </span>
            </div>

            {/* On-Demand */}
            <div style={{ padding: "24px 16px", textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "'Bricolage Grotesque', sans-serif",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-.01em",
                }}
              >
                On-Demand
              </span>
            </div>
          </div>

          {/* Feature rows */}
          {features.map((row, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredRow(i)}
              onMouseLeave={() => setHoveredRow(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 180px 220px 180px",
                background:
                  hoveredRow === i
                    ? "rgba(156,39,176,.05)"
                    : i % 2 === 0
                      ? "rgba(255,255,255,.018)"
                      : "transparent",
                borderBottom: "1px dashed rgba(255,255,255,.07)",
                transition: "background .18s",
                cursor: "default",
              }}
            >
              {/* Feature label */}
              <div
                style={{
                  padding: "16px 28px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: 500,
                  color: hoveredRow === i ? "#fff" : "rgba(255,255,255,.75)",
                  transition: "color .18s",
                  letterSpacing: ".01em",
                }}
              >
                {row.label}
              </div>

              {/* Grow cell */}
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cell value={row.grow} isScale={false} />
              </div>

              {/* Scale cell — highlighted column */}
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(156,39,176,.04)",
                  borderLeft: "1px solid rgba(156,39,176,.18)",
                  borderRight: "1px solid rgba(156,39,176,.18)",
                }}
              >
                <Cell value={row.scale} isScale={true} />
              </div>

              {/* On-Demand cell */}
              <div
                style={{
                  padding: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Cell value={row.onDemand} isScale={false} />
              </div>
            </div>
          ))}

          {/* CTA footer row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 180px 220px 180px",
              background: "#111",
              borderTop: "1px solid rgba(255,255,255,.07)",
              padding: "24px 0",
            }}
          >
            <div
              style={{
                padding: "0 28px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,.3)",
                  fontStyle: "italic",
                }}
              >
                * Ad spend fees apply
              </span>
            </div>

            {/* Grow CTA */}
            <div
              style={{
                padding: "0 16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CtaButton label="Get Started" variant="outline" />
            </div>

            {/* Scale CTA */}
            <div
              style={{
                padding: "0 16px",
                display: "flex",
                justifyContent: "center",
                background: "rgba(156,39,176,.04)",
                borderLeft: "1px solid rgba(156,39,176,.18)",
                borderRight: "1px solid rgba(156,39,176,.18)",
              }}
            >
              <CtaButton label="Get Started" variant="solid" />
            </div>

            {/* On-Demand CTA */}
            <div
              style={{
                padding: "0 16px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CtaButton label="Contact Us" variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── CTA Button ──────────────────────────────────────────────────────────── */
const CtaButton: React.FC<{ label: string; variant: "solid" | "outline" }> = ({
  label,
  variant,
}) => {
  const [hovered, setHovered] = useState(false);

  const style: React.CSSProperties =
    variant === "solid"
      ? {
          padding: "11px 24px",
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "'Bricolage Grotesque', sans-serif",
          letterSpacing: ".03em",
          cursor: "pointer",
          border: "none",
          background: "#9C27B0",
          color: "#fff",
          boxShadow: hovered
            ? "0 10px 28px rgba(156,39,176,.55)"
            : "0 4px 16px rgba(156,39,176,.4)",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "all .22s",
          whiteSpace: "nowrap" as const,
        }
      : {
          padding: "11px 24px",
          borderRadius: 10,
          fontSize: 13,
          fontWeight: 700,
          fontFamily: "'Bricolage Grotesque', sans-serif",
          letterSpacing: ".03em",
          cursor: "pointer",
          background: hovered ? "#9C27B0" : "transparent",
          border: "1.5px solid rgba(156,39,176,.4)",
          color: hovered ? "#fff" : "#BA68C8",
          boxShadow: hovered ? "0 8px 22px rgba(156,39,176,.3)" : "none",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
          transition: "all .22s",
          whiteSpace: "nowrap" as const,
        };

  return (
    <button
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
};

export default PricingComparisonTable;
