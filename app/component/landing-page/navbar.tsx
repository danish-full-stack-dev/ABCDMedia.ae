"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Google Ads", href: "/google-ads" },
    { name: "Pricing", href: "/pricing" },
    { name: "Web Development", href: "/website-building" },
    { name: "Email-Marketing", href: "/email-marketing" },
    { name: "SEO Services", href: "/seo-service" },
    { name: "Social-Ads", href: "/social-ads" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="absolute top-10 left-0 w-full z-50 text-white">
        <div className="w-10/12 mx-auto flex items-end justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-end gap-1">
            <img
              src="/abcd light (1).png"
              alt="ABCD Media Logo"
              className="h-9 w-auto"
            />
            <span className="text-xs text-white/60">.ae</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-medium items-end font-sans">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-all duration-200 group ${
                  link.name === "Pricing"
                    ? " text-[#C026D3] hover:text-white"
                    : "hover:text-[#9C27B0]"
                }`}
              >
                {link.name}
                <div
                  className={`w-0 group-hover:w-11/12 mx-auto h-0.5 ${
                    link.name === "Pricing" ? "bg-white" : "bg-[#9C27B0]"
                  } rounded-2xl transition-all duration-300`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-gradient-to-r from-[#263238] to-[#9934C1] flex flex-col items-center justify-center text-white">

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8"
          >
            <X size={32} />
          </button>

          {/* Mobile Links */}
          <div className="flex flex-col gap-8 text-xl font-medium font-sans items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`transition-all duration-200 group ${
                  link.name === "Pricing"
                    ? "text-[#C026D3] hover:text-white"
                    : "hover:text-[#9C27B0]"
                }`}
              >
                {link.name}

                {/* SAME UNDERLINE EFFECT */}
                <div
                  className={`w-0 group-hover:w-11/12 mx-auto h-0.5 ${
                    link.name === "Pricing" ? "bg-white" : "bg-[#9C27B0]"
                  } rounded-2xl transition-all duration-300`}
                />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}