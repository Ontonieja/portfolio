import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      className={cn("w-full  mx-auto max-w-[1920px]", className)}
      id={id}
    >
      {children}
    </section>
  );
}
