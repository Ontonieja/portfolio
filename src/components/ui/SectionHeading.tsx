import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "large";
}

export default function SectionHeading({
  children,
  className,
  size = "default",
}: SectionHeadingProps) {
  const sizeClass = size === "default" ? "text-3xl" : "text-4xl lg:text-5xl";
  return (
    <h2 className={cn("text-3xl font-bold", className, sizeClass)}>
      {children}
    </h2>
  );
}
