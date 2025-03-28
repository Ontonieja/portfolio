import { cn } from "@/lib/utils";

export default function SectionHeading({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return <h2 className={cn("text-3xl font-bold ", className)}>{title}</h2>;
}
