import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./component/landing-page//navbar";

export const gilroy = localFont({
  src: [
    {
      path: "../public/fonts/Gilroy-Light.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABCD Media",
  description:
    "Digital Marketing Agency Specializing in Media Buying, Web Development, SEO, and AI Automation",
  icons: {
    icon: "/webIcon.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${gilroy.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
