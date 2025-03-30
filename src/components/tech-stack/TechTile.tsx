"use client";

import { motion } from "framer-motion";
import StackIcon from "tech-stack-icons";

interface TechTileProps {
  title: string;
  icon: string;
}

export default function TechTile({ icon, title }: TechTileProps) {
  const tileVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ rotate: 5 }}
      className="flex gap-2 justify-center items-center group bg-section-background/[0.25] px-4 py-1.5 rounded-lg font-medium border border-light-gray/[0.1]"
    >
      <StackIcon
        name={icon}
        className="size-4 lg:size-5 group-hover:scale-125 transition-transform duration-300"
      />
      <span className="text-sm lg:text-base text-gray-800 group-hover:bg-gradient-to-r group-hover:from-primary-orange group-hover:via-[#83dc9f] group-hover:to-[#6e40c9] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ease-in-out">
        {title}
      </span>
    </motion.div>
  );
}
