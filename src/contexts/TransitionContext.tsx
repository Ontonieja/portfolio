"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface TransitionContextType {
  startTransition: (options: TransitionOptions) => void;
  completeTransition: () => void;
  isTransitioning: boolean;
  transitionState: "none" | "exit" | "enter";
}

interface TransitionOptions {
  x: number;
  y: number;
  color?: string;
  duration?: number;
  targetPath: string;
  backgroundColor?: string;
}

const TransitionContext = createContext<TransitionContextType>({
  startTransition: () => {},
  completeTransition: () => {},
  isTransitioning: false,
  transitionState: "none",
});

export const useTransition = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionState, setTransitionState] = useState<
    "none" | "exit" | "enter"
  >("none");
  const [options, setOptions] = useState<TransitionOptions | null>(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        sessionStorage.removeItem("pageTransition");
      }

      setShowContent(true);

      setIsTransitioning(false);
      setTransitionState("none");
      setOptions(null);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  useEffect(() => {
    setShowContent(false);

    const handleTransitionData = () => {
      if (typeof window !== "undefined") {
        const savedTransition = sessionStorage.getItem("pageTransition");

        if (savedTransition) {
          const transitionData = JSON.parse(savedTransition);

          setOptions(transitionData);
          setTransitionState("enter");
          setIsTransitioning(true);

          sessionStorage.removeItem("pageTransition");

          setTimeout(
            () => {
              setShowContent(true);

              setTimeout(() => {
                setIsTransitioning(false);
                setTransitionState("none");
              }, 300);
            },
            (transitionData.duration || 0.8) * 1000
          );
        } else {
          setShowContent(true);
          setIsTransitioning(false);
          setTransitionState("none");
        }
      }
    };

    setTimeout(handleTransitionData, 10);
  }, []);

  const startTransition = ({
    x,
    y,
    color = "#000000",
    backgroundColor,
    duration = 0.8,
    targetPath,
  }: TransitionOptions) => {
    setOptions({ x, y, color, duration, backgroundColor, targetPath });
    setTransitionState("exit");
    setIsTransitioning(true);

    setShowContent(false);

    if (typeof window !== "undefined") {
      sessionStorage.setItem(
        "pageTransition",
        JSON.stringify({
          x,
          y,
          color,
          duration,
          targetPath,
        })
      );
    }

    // Navigate after animation completes
    setTimeout(() => {
      window.location.href = targetPath;
    }, duration * 1000);
  };

  const completeTransition = () => {
    setIsTransitioning(false);
    setTransitionState("none");
    setShowContent(true);
  };

  return (
    <TransitionContext.Provider
      value={{
        startTransition,
        completeTransition,
        isTransitioning,
        transitionState,
      }}
    >
      <div
        style={{
          opacity: showContent ? 1 : 0,
          transition: "opacity 0.3s ease",
          visibility: showContent ? "visible" : "hidden",
        }}
      >
        {children}
      </div>

      <AnimatePresence>
        {isTransitioning && options && (
          <motion.div
            className={cn(
              "fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]",
              options.backgroundColor
            )}
            style={{ position: "fixed" }}
          >
            {transitionState === "exit" ? (
              <motion.div
                className="absolute rounded-full"
                initial={{
                  width: "4px",
                  height: "4px",
                  left: options.x - 2,
                  top: options.y - 2,
                  backgroundColor: options.color,
                }}
                animate={{
                  width: Math.max(window.innerWidth, window.innerHeight) * 3,
                  height: Math.max(window.innerWidth, window.innerHeight) * 3,
                  left:
                    options.x -
                    (Math.max(window.innerWidth, window.innerHeight) * 3) / 2,
                  top:
                    options.y -
                    (Math.max(window.innerWidth, window.innerHeight) * 3) / 2,
                }}
                transition={{
                  duration: options.duration,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            ) : (
              // Enter animation - circle shrinks
              <motion.div
                className="absolute rounded-full"
                initial={{
                  width: Math.max(window.innerWidth, window.innerHeight) * 3,
                  height: Math.max(window.innerWidth, window.innerHeight) * 3,
                  left:
                    options.x -
                    (Math.max(window.innerWidth, window.innerHeight) * 3) / 2,
                  top:
                    options.y -
                    (Math.max(window.innerWidth, window.innerHeight) * 3) / 2,
                  backgroundColor: options.color,
                }}
                animate={{
                  width: "4px",
                  height: "4px",
                  left: options.x - 2,
                  top: options.y - 2,
                  opacity: 0,
                }}
                transition={{
                  duration: options.duration,
                  ease: [0.4, 0, 0.2, 1],
                }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
};

export default TransitionProvider;
