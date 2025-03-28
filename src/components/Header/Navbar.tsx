"use client";

import { useEffect, useState } from "react";
import NavLinksWithIntersection from "./NavLinksWithIntersection";
import { cn } from "@/lib/utils";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";
import SocialLink from "../ui/SocialLink";
import { FaGithubAlt } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Navbar({
  backgroundColor,
}: {
  backgroundColor?: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const isProjectPage = usePathname().startsWith("/projects");

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
        "left-0 text-sm w-full py-5 sticky px-4 xl:px-12 transition-all duration-300 top-0 z-50 bg-white",
        scrolled ? "bg-white shadow-xl" : "bg-transparent",
        isProjectPage && "text-white",
        backgroundColor && backgroundColor
      )}
    >
      <nav
        className={cn(
          "flex justify-between items-center w-full  mx-auto sm:pt-3",
          isProjectPage ? "max-w-[1512px]" : "max-w-[1920px]"
        )}
      >
        <div className="relative bg-transparent">
          <Link className="font-bold ml-2 z-50" href={"/"}>
            Maksymilian Rusnak
          </Link>
          <div className="absolute w-9 h-9 -z-10  rounded-full top-1/2 left-0 transform bg-primary-orange -translate-y-1/2"></div>
        </div>
        <div className="hidden sm:flex items-center gap-5">
          {!isProjectPage ? (
            <NavLinksWithIntersection />
          ) : (
            <div className="flex gap-4">
              <>
                <SocialLink
                  href="https://github.com/Ontonieja"
                  Icon={FaGithubAlt}
                  text="Github"
                  isProjectPage={isProjectPage}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/maksymilian-rusnak/"
                  Icon={IoLogoLinkedin}
                  text="Linkedin"
                  isProjectPage={isProjectPage}
                />
              </>
            </div>
          )}
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
