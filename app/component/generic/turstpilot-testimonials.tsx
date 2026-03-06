"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Trustpilot Logo SVG ─────────────────────────────────────────────────────── */
const TrustpilotLogo: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <img src="trustpilot.png" alt="Trustpilot Logo" width={size} height={size} />
);

/* ─── Quote bubble icon ───────────────────────────────────────────────────── */
const QuoteBubble: React.FC = () => (
  <div className="w-10 h-10 rounded-full rounded-bl-none bg-[#9C27B0] flex items-center justify-center shadow-lg shadow-purple-500/30 flex-shrink-0">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
    </svg>
  </div>
);

/* ─── Star rating ─────────────────────────────────────────────────────────── */
const Stars: React.FC<{ count?: number }> = ({ count = 5 }) => (
  <div className="flex items-center gap-1">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#00b77f">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

/* ─── Data ────────────────────────────────────────────────────────────────── */
interface Testimonial {
  name: string;
  date: string;
  rating: number;
  review: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Shana Williams",
    date: "24 October, 2025",
    rating: 5,
    review:
      "[ABCD MEDIA] managed to cut through the noise and help us stand out from our competitors, restoring our faith in Trustpilot Ads. Thank you!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Andrew Johnson",
    date: "23 October, 2025",
    rating: 5,
    review:
      "[ABCD MEDIA] managed to cut through the noise and help us stand out from our competitors, restoring our faith in Trustpilot Ads. Thank you!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Garcia",
    date: "21 October, 2025",
    rating: 5,
    review:
      "Outstanding results! Our ROI tripled within the first month. The team's expertise in Trustpilot Ads is truly unmatched in the industry.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Carter",
    date: "19 October, 2025",
    rating: 5,
    review:
      "Incredible service from start to finish. They understood our brand voice perfectly and delivered campaigns that truly converted.",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sophie Turner",
    date: "17 October, 2025",
    rating: 5,
    review:
      "Best decision we made for our business. Professional, responsive, and the results speak for themselves. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/90.jpg",
  },
  {
    name: "David Kim",
    date: "15 October, 2025",
    rating: 5,
    review:
      "They transformed our ad spend efficiency completely. We went from wasting budget to seeing clear, measurable results every week.",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

/* ─── Single Card ─────────────────────────────────────────────────────────── */
const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="relative bg-white rounded-2xl p-5 md:p-7 shadow-sm border min-w-[75vw] md:min-w-[50svh] border-gray-100 shrink-0 flex flex-col gap-3 md:gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60 transition-all duration-300">

    {/* Stars + rating */}
    <div className="flex items-center gap-2 md:gap-3 pt-2">
      <Stars count={t.rating} />
      <span className="text-xs md:text-sm font-semibold text-gray-500">5/5 Reviews</span>
    </div>

    {/* Review text */}
    <p className="text-gray-700 text-xs md:text-[15px] leading-relaxed flex-1">
      {t.review.split(" ").length > 20
        ? t.review.split(" ").slice(0, 20).join(" ") + "..."
        : t.review}
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-gray-100" />

    {/* Author row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 md:gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-9 h-9 md:w-11 md:h-11 rounded-full object-cover ring-2 ring-purple-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=9C27B0&color=fff`;
          }}
        />
        <div>
          <p className="font-bold text-gray-900 text-xs md:text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.date}</p>
        </div>
      </div>
      <TrustpilotLogo size={70} />
    </div>
  </div>
);

/* ─── Scroll buttons ──────────────────────────────────────────────────────── */
const ScrollBtn: React.FC<{ dir: "left" | "right"; onClick: () => void }> = ({
  dir,
  onClick,
}) => (
  <button
    onClick={onClick}
    className="w-11 h-11 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-[#9C27B0] hover:border-[#9C27B0] hover:text-white text-gray-500 transition-all duration-200 flex-shrink-0"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      {dir === "left" ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  </button>
);

/* ─── Main Section ────────────────────────────────────────────────────────── */
export const TrustpilotTestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 380;
    if (dir === "left" && index > 0)
      setIndex((prev) => (prev - 1) % testimonials.length);
    else if (dir === "right" && index < testimonials.length - 1)
      setIndex((prev) => (prev + 1) % testimonials.length);
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative w-full pb-10 overflow-hidden bg-white">
      {/* Decorative background blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-10/12 mx-auto overflow-hidden">

        {/* Cards track */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-white via-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-transparent via-white to-white z-10 pointer-events-none" />

          <motion.div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 py-6 h-auto"
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{
              delay: 0.15,
              duration: 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Partial left peek card (ghost) */}
            <div className="shrink-0 md:w-10 w-0" />

            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <TestimonialCard t={t} />
              </motion.div>
            ))}

            {/* Partial right peek spacer */}
            <div className="shrink-0 md:w-10 w-0" />
          </motion.div>

          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&display=swap');
          `}</style>
        </div>
      </div>
    </section>
  );
};

export default TrustpilotTestimonialsSection;