"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/* ================= TYPES ================= */
interface Testimonial {
  name: string;
  date: string;
  avatar: string;
  review: string;
}

/* ================= DATA (5 CARDS) ================= */
const testimonials: Testimonial[] = [
  {
    name: "Shana Williams",
    date: "24 October, 2025",
    avatar: "/client1.png",
    review:
      "ABCD Media helped us scale our campaigns profitably. Their Google Ads strategy restored our faith in PPC marketing.",
  },
  {
    name: "Andrew Johnson",
    date: "23 October, 2025",
    avatar: "/client2.png",
    review:
      "Highly professional team with transparent reporting. We saw strong ROI growth within months.",
  },
  {
    name: "Sophia Clark",
    date: "20 October, 2025",
    avatar: "/client1.png",
    review:
      "Excellent communication and optimisation strategy. Highly recommended for performance marketing.",
  },
  {
    name: "Daniel Smith",
    date: "18 October, 2025",
    avatar: "/client2.png",
    review:
      "Outstanding communication and campaign structure. Our cost per conversion reduced significantly.",
  },
  {
    name: "Emma Brown",
    date: "15 October, 2025",
    avatar: "/client1.png",
    review:
      "They truly understand performance marketing. Transparent, honest and results-driven team.",
  },
];

/* ================= GOOGLE LOGO ================= */
const GoogleLogo = () => (
  <svg width="26" height="26" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

/* ================= COMPONENT ================= */
export default function TestimonialsSection() {
  const [index, setIndex] = useState<number>(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#f4f4f6] py-28">
      <div className="w-full overflow-hidden">

        <h2 className="text-center text-5xl font-bold text-gray-900 mb-16">
          What Our Clients Say About us
        </h2>

        {/* SLIDER WRAPPER */}
        <div className="relative">

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-[#CB30E0] p-3 rounded-full shadow-md"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-[#CB30E0] p-3 rounded-full shadow-md"
          >
            <ChevronRight />
          </button>

          {/* Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 33.33}%)`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="min-w-[33.33%] px-6 flex justify-center"
              >
                <div className="relative bg-white rounded-3xl p-8 w-[420px] shadow-[0_8px_25px_rgba(203,48,224,0.12)] border">

                  {/* Quote bubble */}
                  <div className="absolute -top-5 right-8 w-10 h-10 bg-[#CB30E0] rounded-full rounded-bl-none flex items-center justify-center text-white text-xl font-bold shadow-lg">
                    ”
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <svg key={star} width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                    {item.review}
                  </p>

                  <div className="h-px bg-gray-200 mb-6" />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-bold text-gray-900">
                          {item.name}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {item.date}
                        </p>
                      </div>
                    </div>

                    <GoogleLogo />
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                index === i ? "bg-[#CB30E0]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}