"use client";
import React from "react";

interface AdvancedGradientTextProps {
  text: string;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  duration?: number;
}

export default function AdvancedGradientText({
  text,
  className = "",
  from = "from-primary-orange",
  via = "via-pink-500",
  to = "to-[#6e40c9]",
  duration = 6,
}: AdvancedGradientTextProps) {
  const animationStyle = {
    animationDuration: `${duration}s`,
  };

  return (
    <span
      className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${via} ${to} animate-gradient ${className}`}
      style={animationStyle}
    >
      {text}
    </span>
  );
}
