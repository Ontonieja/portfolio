import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  text: string;
  isProjectPage?: boolean;
}
export default function SocialLink({
  href,
  Icon,
  text,
  isProjectPage,
}: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        " uppercase relative transition-all duration-300",
        isProjectPage ? "sm:text-lg" : "sm:text-lg xl:text-2xl",
        href.includes("github")
          ? "hover:text-[#6e40c9] hover:drop-shadow-[0_0_15px_rgba(110,64,201,0.6)]"
          : "hover:text-blue-500 hover:drop-shadow-[0_0_15px_rgba(10,102,194,0.6)]"
      )}
    >
      <span className="flex gap-1 sm:gap-2 items-center group">
        <Icon
          className={cn(
            "transition-all duration-100 group-hover:rotate-6 group-hover:scale-110",
            isProjectPage ? "sm:size-5" : "size-4 xl:size-6 "
          )}
        />
        {text}
      </span>
    </Link>
  );
}
