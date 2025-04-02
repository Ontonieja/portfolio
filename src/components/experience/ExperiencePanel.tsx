"use client";

import experiences from "@/lib/experiences";
import AdvancedGradientText from "../ui/AnimatedGradientText";
import AnimatedSectionHeading from "../ui/AnimatedSectionHeading";
import AnimatedTextTyping from "../ui/AnimatedTextTyping";
import ExperienceTile from "./ExperienceTile";
import { useEffect, useRef, useState } from "react";

export default function ExperiencePanel() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.getBoundingClientRect().top;
      const sectionHeight = sectionRef.current.getBoundingClientRect().height;
      const viewportHeight = window.innerHeight;

      const startTriggerPoint = viewportHeight * 0.5;
      const scrolledAmount = Math.min(
        Math.max(startTriggerPoint - sectionTop, 0),
        sectionHeight
      );

      const progress = Math.min(scrolledAmount / sectionHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-col mx-auto">
        <div className="text-center max-w-[512px] mx-auto">
          <AnimatedTextTyping text="The Experience" />
          <AnimatedSectionHeading className="text-center">
            <span>Experience That Fuels</span>{" "}
            <AdvancedGradientText
              text="My Growth"
              className="drop-shadow-[0_0_25px_rgba(236,72,201,153.0.4)]"
            />
          </AnimatedSectionHeading>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="max-w-[1040px] relative mx-auto pt-20 flex flex-col gap-y-10  md:gap-y-20 lg:gap-y-30 2xl:gap-y-40"
      >
        <div className="absolute left-3 top-0 h-full w-0.5">
          <div className="absolute top-5 h-full w-full"></div>

          <div
            className="absolute top-5 w-full bg-gradient-to-b from-purple-500/0 via-pink-500 to-rose-500"
            style={{
              height: `${scrollProgress * 100}%`,
              transition: "height 0.1s ease-out",
            }}
          ></div>
        </div>

        {experiences.map(
          ({ date, jobTitle, location, companyName, description, logo }) => (
            <ExperienceTile
              key={companyName}
              date={date}
              jobTitle={jobTitle}
              location={location}
              companyName={companyName}
              description={description}
              logo={logo}
            />
          )
        )}
      </div>
    </div>
  );
}
