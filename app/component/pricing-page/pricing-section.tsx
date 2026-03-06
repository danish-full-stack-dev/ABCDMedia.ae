"use client";
import React from "react";

interface Plan {
  price: string;
  priceSub?: string;
  badge: string;
  recommendation: string;
  budget: string;
  features: string[];
  cta: string;
  featured?: boolean;
  blob: "donut" | "spiral" | "half";
}

/* ─── Data ────────────────────────────────────────────────────────────────── */
const plans: Plan[] = [
  {
    price: "$199",
    badge: "Grow",
    recommendation: "Businesses new to Google Ads and/or with lower Ad spends*",
    budget: "Up to $1000 monthly Google Ads budget",
    features: [
      "Free Initial PPC Checkup – No Obligation",
      "6-Month Rolling Contract",
      "Dedicated Account Manager",
      "Standard Support",
      "Customisable Detection Rules",
    ],
    cta: "Get Started",
    blob: "donut",
  },
  {
    price: "$299",
    priceSub: "+10% / Ad Spend",
    badge: "Scale",
    recommendation:
      "Businesses already running Google Ads and/or with larger Ad spends*",
    budget: "Up to $50,000 monthly Google Ads budget",
    features: [
      "Free Initial PPC Checkup – No Obligation",
      "6-Month Rolling Contract",
      "Dedicated Senior Account Manager",
      "Priority Support",
      "ClickExpose™ Pro 100k (RRP $129/mo)",
      "Remarketing Campaigns",
      "Advanced Analytics Dashboard",
    ],
    cta: "Get Started",
    featured: true,
    blob: "spiral",
  },
  {
    price: "$POA",
    badge: "On Demand",
    recommendation:
      'Businesses with higher Ad spends and more bespoke requirements"',
    budget: "Up to $50,000 monthly Google Ads budget",
    features: [
      "Free Initial PPC Checkup – No Obligation",
      "6-Month Rolling Contract",
      "Dedicated Senior Account Manager",
      "Priority Support",
      "ClickExpose Pro Unlimited",
      "Remarketing Campaigns",
      "White-Label Reporting",
    ],
    cta: "Contact Us",
    blob: "half",
  },
];

/* ─── Check icon ──────────────────────────────────────────────────────────── */
const CheckIcon: React.FC = () => (
  <span
    style={{
      flexShrink: 0,
      width: 22,
      height: 22,
      background: "#9C27B0",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 2,
      boxShadow: "0 2px 8px rgba(156,39,176,.35)",
    }}
  >
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path
        d="M2 6l3 3 5-5"
        stroke="#fff"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

/* ─── Single Plan Card ────────────────────────────────────────────────────── */
const PlanCard: React.FC<{ plan: Plan; index: number; mobile?: boolean }> = ({
  plan,
  index,
  mobile = false,
}) => {
  const [hovered, setHovered] = React.useState(false);

  const cardStyle: React.CSSProperties = plan.featured
    ? {
        position: "relative",
        background: "#111111",
        borderRadius: mobile ? 20 : 28,
        padding: mobile ? "28px 20px 32px" : "48px 34px 52px",
        zIndex: 2,
        margin: mobile ? "0" : "-20px -14px",
        boxShadow: hovered
          ? "0 44px 100px rgba(0,0,0,.6), 0 0 50px rgba(156,39,176,.2)"
          : "0 36px 90px rgba(0,0,0,.55), 0 0 0 1px rgba(156,39,176,.35)",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
      }
    : {
        position: "relative",
        background: "#ffffff",
        borderRadius: mobile ? 20 : 24,
        padding: mobile ? "28px 20px 32px" : "40px 34px 44px",
        boxShadow: hovered ? "0 20px 56px rgba(156,39,176,.14)" : "none",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s",
      };

  const textColor = plan.featured ? "rgba(255,255,255,.82)" : "#333";
  const mutedColor = plan.featured ? "rgba(255,255,255,.42)" : "#aaa";
  const dividerColor = plan.featured ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)";

  return (
    <div
      className="border-[#9C27B0] border"
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Price */}
      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
        <span style={{ fontSize: mobile ? 28 : 36, fontWeight: 700, color: plan.featured ? "#fff" : "#111" }}>
          {plan.price}
        </span>
        <span style={{ fontSize: mobile ? 14 : 17, color: plan.featured ? "rgba(255,255,255,.4)" : "#aaa" }}>
          /mo
        </span>
      </div>

      {/* Price sub */}
      <div style={{ fontSize: mobile ? 11 : 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", color: "#BA68C8", marginBottom: mobile ? 14 : 22, minHeight: 20 }}>
        {plan.priceSub || ""}
      </div>

      {/* Plan badge */}
      <div style={{ display: "inline-flex", alignItems: "center", padding: mobile ? "5px 14px" : "6px 20px", borderRadius: 100, fontSize: mobile ? 12 : 13, fontWeight: 700, letterSpacing: ".02em", marginBottom: mobile ? 12 : 18, background: "#9C27B0", color: "#fff", boxShadow: "0 4px 14px rgba(156,39,176,.4)" }}>
        {plan.badge}
      </div>

      {/* Recommendation */}
      <p style={{ fontSize: mobile ? 12 : 13, color: mutedColor, lineHeight: 1.65, marginBottom: mobile ? 14 : 22 }}>
        <span style={{ color: plan.featured ? "rgba(255,255,255,.62)" : "#888", fontWeight: 500 }}>
          Recommended for:
        </span>
        <br />
        {plan.recommendation}
      </p>

      {/* Divider */}
      <div style={{ width: "100%", height: 1, background: dividerColor, marginBottom: mobile ? 12 : 18 }} />

      {/* Budget */}
      <p style={{ fontSize: mobile ? 12 : 13, color: mutedColor, marginBottom: mobile ? 14 : 20 }}>
        {plan.budget}
      </p>

      {/* Features */}
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: mobile ? 10 : 13, marginBottom: mobile ? 20 : 30 }}>
        {plan.features.map((feat, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: mobile ? 12 : 13.5, color: textColor, lineHeight: 1.4 }}>
            <CheckIcon />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <CtaButton label={plan.cta} solid={plan.featured} />
    </div>
  );
};

/* ─── CTA Button ──────────────────────────────────────────────────────────── */
const CtaButton: React.FC<{ label: string; solid?: boolean }> = ({ label, solid }) => {
  const [hovered, setHovered] = React.useState(false);

  const style: React.CSSProperties = solid
    ? {
        width: "100%",
        padding: "14px 20px",
        borderRadius: 12,
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: ".03em",
        cursor: "pointer",
        border: "none",
        background: "#9C27B0",
        color: "#fff",
        boxShadow: hovered ? "0 12px 32px rgba(156,39,176,.55)" : "0 6px 20px rgba(156,39,176,.45)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all .25s",
      }
    : {
        width: "100%",
        padding: "14px 20px",
        borderRadius: 12,
        fontFamily: "inherit",
        fontSize: 14,
        fontWeight: 700,
        letterSpacing: ".03em",
        cursor: "pointer",
        background: hovered ? "#9C27B0" : "transparent",
        border: "1.5px solid rgba(156,39,176,.4)",
        color: hovered ? "#fff" : "#9C27B0",
        boxShadow: hovered ? "0 8px 24px rgba(156,39,176,.3)" : "none",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "all .25s",
      };

  return (
    <button style={style} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {label}
    </button>
  );
};

export default function PricingSection() {
  return (
    <div className="py-12 md:py-24 bg-slate-100">

      {/* ===== Header ===== */}
      <div className="flex flex-col mx-auto text-center w-11/12 md:w-1/2 px-4 md:px-0">
        <h2 className="text-2xl md:text-5xl font-bold mb-3 md:mb-4">Pricing Plan</h2>
        <p className="font-thin text-sm md:text-lg">
          At ABCD MEDIA UAE, we help ambitious brands scale profitably through
          data-driven digital marketing strategies. At ABCD MEDIA UAE,
          profitably through data-driven digital marketing strategies.
        </p>
      </div>

      {/* ===== MOBILE: Stacked cards ===== */}
      <section className="flex md:hidden flex-col gap-4 px-4 pt-8 pb-4">
        {plans.map((plan, i) => (
          <PlanCard key={plan.badge} plan={plan} index={i} mobile={true} />
        ))}
      </section>

      {/* ===== DESKTOP: Original grid — untouched ===== */}
      <section
        className="hidden md:flex"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
        }}
      >
        <div style={{ width: "100%", maxWidth: 1180 }}>
          <div
            className="py-10"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
              alignItems: "center",
            }}
          >
            {plans.map((plan, i) => (
              <PlanCard key={plan.badge} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Approved section ===== */}
      <section className="max-w-10/12 mx-auto flex flex-col md:flex-row px-4 md:px-0">
        <div className="flex flex-col w-full md:w-2/3 gap-2 md:gap-3 py-6 md:py-10">
          <h3 className="text-2xl md:text-3xl font-bold text-[#9C27B0]">Pricing Plan</h3>
          <p className="font-thin text-sm md:text-lg">
            At ABCD MEDIA UAE, we help ambitious brands scale profitably through
            data-driven digital marketing{" "}
            <span className="text-[#9C27B0]">strategies</span>. At ABCD MEDIA
            UAE, profitably through data-driven digital marketing{" "}
            <span className="text-[#9C27B0]">strategies</span>. At ABCD MEDIA
            UAE, we help ambitious brands scale profitably through data-driven
            digital marketing{" "}
            <span className="text-[#9C27B0]">strategies</span>. At ABCD MEDIA
            UAE, profitably through data-driven digital marketing{" "}
            <span className="text-[#9C27B0]">strategies</span>.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="/Subtract.png"
            alt="subtract"
            className="w-full h-48 md:h-72 object-contain"
          />
        </div>
      </section>
    </div>
  );
}