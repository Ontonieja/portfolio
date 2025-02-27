import { cn } from "@/lib/utils";
import Link from "next/link";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  text: string;
}
export default function SocialLink({ href, Icon, text }: SocialLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "text-lg xl:text-2xl uppercase relative transition-all duration-300",
        href.includes("github")
          ? "hover:text-[#6e40c9] hover:drop-shadow-[0_0_10px_rgba(110,64,201,0.5)]"
          : "hover:text-blue-500 hover:drop-shadow-[0_0_10px_rgba(10,102,194,0.5)]"
      )}
    >
      <span className="flex gap-2 items-center group">
        <Icon className="size-5 xl:size-6 transition-all duration-100 group-hover:rotate-6 group-hover:scale-110" />
        {text}
      </span>
    </Link>
  );
}
