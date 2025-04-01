"use client";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface AnimatedSectionHeadingProps {
  children: React.ReactNode;
  className?: string;
}
export default function AnimatedSectionHeading({
  children,
  className,
}: AnimatedSectionHeadingProps) {
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

  return (
    <motion.div
      key="section-heading"
      variants={headingVariants}
      initial="hidden"
      whileInView="visible"
      className={className}
      viewport={{ once: false, amount: 0.3 }}
    >
      <SectionHeading size="large">{children}</SectionHeading>
    </motion.div>
  );
}
