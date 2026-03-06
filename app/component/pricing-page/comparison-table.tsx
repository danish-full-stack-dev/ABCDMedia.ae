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
  { label: "Dedicated Account Manager", grow: true, scale: "Senior Account Manager", onDemand: "Senior Account Manager" },
  { label: "Account Setup", grow: true, scale: true, onDemand: true },
  { label: "Initial Account Audit", grow: true, scale: true, onDemand: true },
  { label: "Keyword Research", grow: true, scale: true, onDemand: true },
  { label: "Competitor Research & Analysis", grow: true, scale: true, onDemand: true },
  { label: "ClickExpose Protection", grow: "Pro 10k (RRP £49/mo)", scale: "Pro 100k (RRP £129/mo)", onDemand: "Pro Unlimited" },
  { label: "Landing Page Optimisation Suggestions", grow: true, scale: true, onDemand: true },
  { label: "Conversion Tracking/GTM Setup", grow: "£299 One-Off", scale: true, onDemand: true },
  { label: "Ad Copywriting", grow: true, scale: true, onDemand: true },
  { label: "Multivariate Ad Testing", grow: true, scale: true, onDemand: true },
  { label: "Shopping Campaign Management", grow: null, scale: true, onDemand: true },
  { label: "Remarketing Campaigns", grow: null, scale: true, onDemand: true },
  { label: "Monthly Performance Reports", grow: true, scale: true, onDemand: true },
  { label: "Dedicated Slack Channel", grow: null, scale: true, onDemand: true },
  { label: "White-Label Reporting", grow: null, scale: null, onDemand: true },
];

const planNames = ["Grow", "Scale", "On-Demand"] as const;
type PlanKey = "grow" | "scale" | "onDemand";
const planKeys: PlanKey[] = ["grow", "scale", "onDemand"];

/* ─── Check icon variants ─────────────────────────────────────────────────── */
const PurpleCheck: React.FC = () => (
  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg, #9C27B0, #6A1B9A)", boxShadow: "0 4px 14px rgba(156,39,176,.45)", flexShrink: 0 }}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

const GrayCheck: React.FC = () => (
  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.12)", flexShrink: 0 }}>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3.5 3.5 5.5-6" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

const Cell: React.FC<{ value: CellValue; isScale?: boolean }> = ({ value, isScale }) => {
  if (value === null) return <span style={{ color: "rgba(255,255,255,.15)", fontSize: 16 }}>—</span>;
  if (value === true) return isScale ? <GrayCheck /> : <PurpleCheck />;
  return <span style={{ fontSize: 11, color: isScale ? "rgba(255,255,255,.65)" : "rgba(255,255,255,.55)", textAlign: "center", lineHeight: 1.4, fontStyle: "italic" }}>{value}</span>;
};

/* ─── CTA Button ──────────────────────────────────────────────────────────── */
const CtaButton: React.FC<{ label: string; variant: "solid" | "outline"; fullWidth?: boolean }> = ({ label, variant, fullWidth }) => {
  const [hovered, setHovered] = useState(false);
  const base: React.CSSProperties = { padding: "11px 24px", borderRadius: 10, fontSize: 13, fontWeight: 700, fontFamily: "'Bricolage Grotesque', sans-serif", letterSpacing: ".03em", cursor: "pointer", transition: "all .22s", whiteSpace: "nowrap" as const, width: fullWidth ? "100%" : undefined };
  const style: React.CSSProperties = variant === "solid"
    ? { ...base, border: "none", background: "#9C27B0", color: "#fff", boxShadow: hovered ? "0 10px 28px rgba(156,39,176,.55)" : "0 4px 16px rgba(156,39,176,.4)", transform: hovered ? "translateY(-2px)" : "translateY(0)" }
    : { ...base, background: hovered ? "#9C27B0" : "transparent", border: "1.5px solid rgba(156,39,176,.4)", color: hovered ? "#fff" : "#BA68C8", boxShadow: hovered ? "0 8px 22px rgba(156,39,176,.3)" : "none", transform: hovered ? "translateY(-2px)" : "translateY(0)" };
  return <button style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>{label}</button>;
};

/* ─── Mobile: Single Plan Card ───────────────────────────────────────────── */
const MobilePlanCard: React.FC<{ planName: string; planKey: PlanKey; featured?: boolean }> = ({ planName, planKey, featured }) => (
  <div style={{ background: featured ? "#111" : "rgba(255,255,255,0.04)", border: featured ? "1px solid rgba(156,39,176,.5)" : "1px solid rgba(255,255,255,.08)", borderRadius: 16, overflow: "hidden", marginBottom: 14 }}>
    {/* Header */}
    <div style={{ padding: "14px 16px 12px", borderBottom: "1px solid rgba(255,255,255,.07)", background: featured ? "linear-gradient(180deg, rgba(156,39,176,.12) 0%, transparent 100%)" : "transparent", display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 17, fontWeight: 800, color: "#fff" }}>{planName}</span>
      {featured && (
        <span style={{ display: "inline-flex", alignItems: "center", background: "rgba(156,39,176,.2)", border: "1px solid rgba(156,39,176,.4)", borderRadius: 100, padding: "2px 8px", fontSize: 9, fontWeight: 700, color: "#CE93D8", letterSpacing: ".06em", textTransform: "uppercase" as const }}>
          ★ Most Popular
        </span>
      )}
    </div>
    {/* Rows — skip null values for compact mobile view */}
    {features.map((row, i) => {
      const val = row[planKey];
      if (val === null) return null;
      return (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "10px 16px", borderBottom: "1px dashed rgba(255,255,255,.06)", background: i % 2 === 0 ? "rgba(255,255,255,.018)" : "transparent" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,.72)", lineHeight: 1.4, flex: 1 }}>{row.label}</span>
          <div style={{ flexShrink: 0 }}><Cell value={val} isScale={featured} /></div>
        </div>
      );
    })}
    {/* CTA */}
    <div style={{ padding: "14px 16px" }}>
      <CtaButton label={planName === "On-Demand" ? "Contact Us" : "Get Started"} variant={featured ? "solid" : "outline"} fullWidth />
    </div>
  </div>
);

/* ─── Main Component ──────────────────────────────────────────────────────── */
export const PricingComparisonTable: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <section style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", background: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "60px 20px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');
        @keyframes fadeIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        .cmp-table { animation: fadeIn .5s ease both; }
      `}</style>

      <div style={{ width: "100%", maxWidth: 1100 }} className="cmp-table">

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(156,39,176,.12)", border: "1px solid rgba(156,39,176,.3)", borderRadius: 100, padding: "5px 16px", fontSize: 11, fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase" as const, color: "#BA68C8", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#9C27B0", display: "inline-block" }} />
            Compare Plans
          </div>
          {/* H2: 2xl on mobile, desktop original clamp */}
          <h2 className="text-2xl md:text-[clamp(28px,3.5vw,44px)]" style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontWeight: 800, color: "#fff", letterSpacing: "-.025em" }}>
            Everything in the box
          </h2>
        </div>

        {/* ===== MOBILE: Stacked cards ===== */}
        <div className="block md:hidden">
          {planNames.map((name, i) => (
            <MobilePlanCard key={name} planName={name} planKey={planKeys[i]} featured={name === "Scale"} />
          ))}
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.3)", fontStyle: "italic", textAlign: "center", marginTop: 4 }}>* Ad spend fees apply</p>
        </div>

        {/* ===== DESKTOP: Original table — completely untouched ===== */}
        <div className="hidden md:block">
          <div style={{ borderRadius: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,.06)" }}>
            {/* Column headers */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 180px 220px 180px", background: "#111", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
              <div style={{ padding: "24px 28px" }} />
              <div style={{ padding: "24px 16px", textAlign: "center" }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-.01em" }}>Grow</span>
              </div>
              <div style={{ padding: "28px 16px 24px", textAlign: "center", background: "linear-gradient(180deg, rgba(156,39,176,.12) 0%, rgba(156,39,176,.04) 100%)", borderLeft: "1px solid rgba(156,39,176,.25)", borderRight: "1px solid rgba(156,39,176,.25)", borderTop: "2px solid #9C27B0", borderRadius: "12px 12px 0 0", position: "relative" as const, marginTop: -1 }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 22, fontWeight: 800, color: "#fff", letterSpacing: "-.01em", display: "block", marginBottom: 6 }}>Scale</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "rgba(156,39,176,.2)", border: "1px solid rgba(156,39,176,.4)", borderRadius: 100, padding: "2px 10px", fontSize: 10, fontWeight: 700, color: "#CE93D8", letterSpacing: ".06em", textTransform: "uppercase" as const }}>★ Most Popular</span>
              </div>
              <div style={{ padding: "24px 16px", textAlign: "center" }}>
                <span style={{ fontFamily: "'Bricolage Grotesque', sans-serif", fontSize: 20, fontWeight: 800, color: "#fff", letterSpacing: "-.01em" }}>On-Demand</span>
              </div>
            </div>
            {/* Feature rows */}
            {features.map((row, i) => (
              <div key={i} onMouseEnter={() => setHoveredRow(i)} onMouseLeave={() => setHoveredRow(null)}
                style={{ display: "grid", gridTemplateColumns: "1fr 180px 220px 180px", background: hoveredRow === i ? "rgba(156,39,176,.05)" : i % 2 === 0 ? "rgba(255,255,255,.018)" : "transparent", borderBottom: "1px dashed rgba(255,255,255,.07)", transition: "background .18s", cursor: "default" }}>
                <div style={{ padding: "16px 28px", display: "flex", alignItems: "center", fontSize: 14, fontWeight: 500, color: hoveredRow === i ? "#fff" : "rgba(255,255,255,.75)", transition: "color .18s", letterSpacing: ".01em" }}>{row.label}</div>
                <div style={{ padding: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}><Cell value={row.grow} isScale={false} /></div>
                <div style={{ padding: "16px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(156,39,176,.04)", borderLeft: "1px solid rgba(156,39,176,.18)", borderRight: "1px solid rgba(156,39,176,.18)" }}><Cell value={row.scale} isScale={true} /></div>
                <div style={{ padding: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}><Cell value={row.onDemand} isScale={false} /></div>
              </div>
            ))}
            {/* CTA footer */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 180px 220px 180px", background: "#111", borderTop: "1px solid rgba(255,255,255,.07)", padding: "24px 0" }}>
              <div style={{ padding: "0 28px", display: "flex", alignItems: "center" }}><span style={{ fontSize: 13, color: "rgba(255,255,255,.3)", fontStyle: "italic" }}>* Ad spend fees apply</span></div>
              <div style={{ padding: "0 16px", display: "flex", justifyContent: "center" }}><CtaButton label="Get Started" variant="outline" /></div>
              <div style={{ padding: "0 16px", display: "flex", justifyContent: "center", background: "rgba(156,39,176,.04)", borderLeft: "1px solid rgba(156,39,176,.18)", borderRight: "1px solid rgba(156,39,176,.18)" }}><CtaButton label="Get Started" variant="solid" /></div>
              <div style={{ padding: "0 16px", display: "flex", justifyContent: "center" }}><CtaButton label="Contact Us" variant="outline" /></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingComparisonTable;