"use client";

interface DotLottieProps {
  src: string;
  loop: boolean;
  autoplay: boolean;
  className?: string;
  style?: React.CSSProperties;
}

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function DotLottie({
  src,
  loop,
  autoplay,
  className,
  style,
}: DotLottieProps) {
  return (
    <DotLottieReact
      src={src}
      loop={loop}
      autoplay={autoplay}
      className={className}
      style={{ ...style }}
    />
  );
}
