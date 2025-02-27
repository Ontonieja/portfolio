"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import NavLinksWithIntersection from "./NavLinksWithIntersection";

export default function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="flex sm:hidden">
      <div className="max-sm:flex">
        <IoMenu className="size-6" onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <div
        className={cn(
          "w-1/2 bg-white shadow-lg h-full fixed top-0 right-0 translate-x-full transform ease-in-out duration-300",
          isMenuOpen && "translate-x-0"
        )}
      >
        <div className="flex flex-col p-6">
          <IoClose className="size-6" onClick={() => setIsMenuOpen(false)} />
          <div className="flex flex-col gap-4 mt-6">
            <NavLinksWithIntersection />
          </div>
        </div>
      </div>
    </div>
  );
}
