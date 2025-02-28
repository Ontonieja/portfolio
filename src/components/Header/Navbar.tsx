"use client";

import { useEffect, useState } from "react";
import NavLinksWithIntersection from "./NavLinksWithIntersection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "left-0 text-sm w-full py-5 sticky px-6 xl:px-12 sm:mt-3 transition-all duration-300 top-0 z-50 bg-white",
        scrolled ? "bg-white shadow-xl" : "bg-transparent"
      )}
    >
      <nav className="flex justify-between items-center w-full max-w-1920 mx-auto">
        <div className="relative bg-transparent">
          <Link className="font-bold ml-2 z-50" href={"/"}>
            Maksymilian Rusnak
          </Link>
          <div className="absolute w-9 h-9 -z-10 bg-primary-orange rounded-full top-1/2 left-0 transform  -translate-y-1/2"></div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          <NavLinksWithIntersection />
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
