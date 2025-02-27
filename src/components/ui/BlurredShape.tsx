import { cn } from "@/lib/utils";

export default function BlurredShape({ className }: { className: string }) {
  return (
    <div className={cn("absolute z-0  blur-3xl rounded-full", className)}></div>
  );
}
