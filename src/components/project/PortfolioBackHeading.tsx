"use client";
import { useTransition } from "@/contexts/TransitionContext";
import { FaArrowLeft } from "react-icons/fa6";

interface PortfolioBackHeadingProps {
  projectName: string;
  transitionBackgroundColor: string;
}

export default function PortfolioBackHeading({
  projectName,
  transitionBackgroundColor,
}: PortfolioBackHeadingProps) {
  const { startTransition } = useTransition();

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();

    startTransition({
      x: e.clientX,
      y: e.clientY,
      color: "#ECC054",
      duration: 0.8,
      targetPath: "/#portfolio",
      backgroundColor: transitionBackgroundColor,
    });
  };
  return (
    <div className="flex gap-3 lg:gap-6 items-center mt-7 lg:mt-14">
      <div>
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2  transition-opacity cursor-pointer bg-primary-orange p-1 rounded-full"
        >
          <FaArrowLeft className="size-5 text-black hover:text-white ease-out duration-300" />
        </button>
      </div>
      <div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold">
          {projectName}
        </h1>
      </div>
    </div>
  );
}
