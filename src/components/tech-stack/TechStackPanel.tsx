"use client";

import techStack from "@/lib/techStack";
import SectionHeading from "../ui/SectionHeading";
import TechTile from "./TechTile";
import { motion } from "framer-motion";

export default function TechStackPanel() {
  const text = "Constantly trying to improve";

  const textVariants = {
    hidden: { opacity: 1, clipPath: "inset(0 100% 0 0)" },
    visible: {
      opacity: 1,
      clipPath: "inset(0 0 0 0)",
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const tilesVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col items-center mt-8 lg:mt-16 mb-24">
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="lg:text-lg mb-2 text-gray-600 overflow-hidden "
      >
        {text}
      </motion.div>

      <motion.div
        key="section-heading"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <SectionHeading
          title="My Tech Stack"
          className="!text-4xl lg:!text-5xl"
        />
      </motion.div>

      <motion.div
        className="flex flex-wrap mx-auto max-w-[896px] justify-center gap-2 lg:gap-4  mt-8 lg:mt-16"
        variants={tilesVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {techStack.map(({ icon, title }) => (
          <TechTile icon={icon} title={title} key={title} />
        ))}
      </motion.div>
    </div>
  );
}
