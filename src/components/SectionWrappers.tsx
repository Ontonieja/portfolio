import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: "default" | "large" | "extralarge";
}

export default function SectionWrapper({
  children,
  className,
  id,
  spacing = "default",
}: SectionWrapperProps) {
  const spacingClasses = {
    default: "pt-6 md:pt-8 lg:pt-12",
    large: "pt-12 md:pt-16 lg:pt-24",
    extralarge: "pt-24 md:pt-32 lg:pt-40",
  };

  return (
    <section
      className={cn(
        "w-full mx-auto max-w-[1920px]",
        className,
        spacingClasses[spacing]
      )}
      id={id}
    >
      {children}
    </section>
  );
}
