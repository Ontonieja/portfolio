"use client";

import { motion } from "framer-motion";

interface AnimatedTilesProps {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}

export default function AnimatedTiles({
  children,
  className,
  once,
}: AnimatedTilesProps) {
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
    <motion.div
      className={className}
      variants={tilesVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
