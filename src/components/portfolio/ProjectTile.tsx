"use client";

import { cn } from "@/lib/utils";
import { BsArrowUpRight } from "react-icons/bs";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useTransition } from "@/contexts/TransitionContext";

interface ProjectTileProps {
  heading: string;
  description: string;
  link: string;
  className?: string;
  bigger: boolean;
  transitionColor?: string;
  tileContent: React.ReactNode;
}

export default function ProjectTile({
  heading,
  description,
  link,
  className,
  bigger,
  transitionColor = "#000000",
  tileContent,
}: ProjectTileProps) {
  const tileRef = useRef<HTMLDivElement>(null);
  const { startTransition } = useTransition();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    startTransition({
      x: e.clientX,
      y: e.clientY,
      color: transitionColor,
      duration: 0.8,
      targetPath: link,
    });
  };

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
      ref={tileRef}
      className={cn(
        "h-[500px] 2xl:h-[650px] rounded-[22px] p-4 py-8 xl:px-8 md:pb-12 xl:pb-16 text-white relative overflow-hidden cursor-pointer flex flex-col",
        className,
        bigger
          ? "md:w-[calc(55%-12px)] lg:w-[calc(55%-24px)]"
          : "md:w-[calc(45%-12px)] lg:w-[calc(45%-24px)]"
      )}
      onClick={handleClick}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      variants={tileVariants}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center relative z-10">
        <div>
          <h3 className="text-lg xl:text-2xl font-bold">{heading}</h3>
          <p className="text-sm xl:text-lg">{description}</p>
        </div>
        <div className="p-2 lg:p-3 xl:p-4 rounded-full bg-white">
          <BsArrowUpRight className="text-black size-6 lg:size-6 xl:size-8" />
        </div>
      </div>

      {tileContent}
    </motion.div>
  );
}
