"use client";

import { motion } from "framer-motion";

export default function AnimatedTextTyping({ text }: { text: string }) {
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

  return (
    <motion.div
      variants={textVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="lg:text-lg mb-2 text-gray-600 overflow-hidden "
    >
      {text}
    </motion.div>
  );
}
