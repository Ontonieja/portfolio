import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/contexts/TransitionContext";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maksymilian Rusnak | Full Stack Developer",
  description:
    "Portfolio showcasing Maksymilian Rusnak's full-stack projects, professional experience, and skills in React, Next.js and modern web technologies.",
  keywords: [
    "full-stack developer",
    "web development",
    "React developer",
    "Next.js",
    "frontend development",
    "portfolio",
    "Maksymilian Rusnak",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased font-grotesk relative`}
      >
        <Analytics />
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
