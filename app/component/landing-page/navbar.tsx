"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Media Buying", href: "/media-buying" },
    { name: "Web Development", href: "/pages/web-development" },
    { name: "Email Marketing", href: "/email-markeeting" },
    { name: "AI Automation", href: "/pages/ai-automation" },
  ];

  return (
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
              className={`transition-all duration-200 ${
                link.name === "Web Development"
                  ? " text-[#C026D3]"
                  : "hover:text-[#9C27B0]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden absolute right-6 top-0 text-white"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-6 px-6 space-y-4 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 ${
                link.name === "Web Development"
                  ? "text-[#9C27B0]"
                  : "hover:text-[#9C27B0]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
