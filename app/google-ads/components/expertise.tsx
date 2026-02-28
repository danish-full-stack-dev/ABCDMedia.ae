"use client";

import Image from "next/image";
import Link from "next/link";

export default function ExpertiseBanner() {
  return (
    <section className=" py-6 px-6">
      <div className="w-10/12 mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden flex items-center justify-between px-14 py-14"
          style={{
            // background: "#0d0010",
            minHeight: "280px",
          }}
        >
          {/* Dark swirl background overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Cellipse cx='400' cy='200' rx='350' ry='180' fill='none' stroke='%239C27B0' stroke-width='60' opacity='0.15'/%3E%3Cellipse cx='400' cy='200' rx='280' ry='130' fill='none' stroke='%239C27B0' stroke-width='40' opacity='0.1'/%3E%3C/svg%3E")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Subtle purple glow left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 20% 50%, rgba(140, 30, 180, 0.6) 0%, transparent 70%)",
            }}
          />

          {/* ===== LEFT: Text + CTA ===== */}
          <div className="relative z-10 flex flex-col max-w-xl">
            <h2 className="text-white font-bold leading-tight mb-5"
              style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
            >
              Our{" "}
              <span className="text-[#C026D3]">Google Ads Expertise?</span>{" "}
              Think Einstein. Your
              <br />
              Breakthroughs? Pure Genius
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              We save our users an average of 23.5% on their Google Ads Spend,
              increase their conversions, help them scale their campaigns AND
              still find time for lunch.
            </p>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:scale-105 w-fit"
              style={{ background: "#9C27B0" }}
            >
              View Our Pricing
            </Link>
          </div>

          {/* ===== RIGHT: 3D Character Image ===== */}
          <div className="relative z-10 flex-shrink-0 h-64 w-72 -mr-4 -mb-14">
            <Image
              src="/expertise-bg.png"
              alt="Einstein character"
              fill
              className="object-contain object-bottom"
              style={{ filter: "drop-shadow(0 0 30px rgba(156,39,176,0.2))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}