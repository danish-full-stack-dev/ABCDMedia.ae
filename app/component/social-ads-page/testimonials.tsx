"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─── Google Logo SVG ─────────────────────────────────────────────────────── */
const GoogleLogo: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
    <path fill="none" d="M0 0h48v48H0z" />
  </svg>
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
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
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
      "[ABCD MEDIA] managed to cut through the noise and help us stand out from our competitors, restoring our faith in Google Ads. Thank you!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Andrew Johnson",
    date: "23 October, 2025",
    rating: 5,
    review:
      "[ABCD MEDIA] managed to cut through the noise and help us stand out from our competitors, restoring our faith in Google Ads. Thank you!",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Maria Garcia",
    date: "21 October, 2025",
    rating: 5,
    review:
      "Outstanding results! Our ROI tripled within the first month. The team's expertise in Google Ads is truly unmatched in the industry.",
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
  <div className="relative bg-white rounded-2xl p-7 shadow-sm border md:min-w-[50svh] min-w-[35svh] border-gray-100 shrink-0 flex flex-col gap-4 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100/60 transition-all duration-300">
    {/* Quote bubble — top right */}
    <div className="absolute -top-4 right-6">
      <QuoteBubble />
    </div>

    {/* Stars + rating */}
    <div className="flex items-center gap-3 pt-2">
      <Stars count={t.rating} />
      <span className="text-sm font-semibold text-gray-500">5/5 Reviews</span>
    </div>

    {/* Review text */}
    <p className="text-gray-700 text-[15px] leading-relaxed flex-1">
      {t.review}
    </p>

    {/* Divider */}
    <div className="w-full h-px bg-gray-100" />

    {/* Author row */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-purple-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=9C27B0&color=fff`;
          }}
        />
        <div>
          <p className="font-bold text-gray-900 text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.date}</p>
        </div>
      </div>
      <GoogleLogo size={32} />
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
export const TestimonialsSection: React.FC = () => {
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
    <section className="relative w-full py-20 overflow-hidden bg-linear-to-b from-white via-purple-50/30 to-white">
      {/* Decorative background blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-purple-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-pink-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-9/12 mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            What Our Clients Say About us
          </h2>
        </motion.div>

        {/* Scroll controls */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="md:flex hidden justify-end gap-3 mb-6 px-1"
        >
          <ScrollBtn dir="left" onClick={() => scroll("left")} />
          <ScrollBtn dir="right" onClick={() => scroll("right")} />
        </motion.div>

        {/* Cards track */}
        <div className="relative">
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto py-6 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
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

          {/* Hide scrollbar cross-browser */}
          <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&display=swap');
            // div::-webkit-scrollbar { display: none; }
          `}</style>
        </div>

        {/* Dots indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-2 mt-4"
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (!scrollRef.current) return;
                const cardWidth = 400;
                scrollRef.current.scrollTo({
                  left: i * cardWidth,
                  behavior: "smooth",
                });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-[#9C27B0]" : "w-1.5 bg-gray-300 hover:bg-[#9C27B0]/70"}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
