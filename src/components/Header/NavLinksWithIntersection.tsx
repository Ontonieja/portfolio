"use client";
import navLinks from "@/lib/navLinks";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function NavLinksWithIntersection() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  });
  return (
    <>
      {navLinks.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className={`transition-opacity duration-300 hover:text-gray-600 ${
            activeSection === item.id ? "font-bold " : ""
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
