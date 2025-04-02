import { IconType } from "react-icons";

interface ContactTileProps {
  title: string;
  Icon: IconType;
  href: string;
}

export default function ContactTile({ title, Icon, href }: ContactTileProps) {
  return (
    <a
      href={title === "Email" ? `mailto:${href}` : `tel:${href}`}
      className="flex items-center w-full px-4 py-3 gap-4 bg-zinc-100 hover:scale-[102%] duration-300 ease-in-out rounded-2xl"
    >
      <div className="p-2 rounded-full bg-blue-100">
        <Icon className="text-blue-500 size-6" />
      </div>
      <div className="flex flex-col">
        <p>{title}</p>
        <p className="text-light-gray text-sm">{href}</p>
      </div>
    </a>
  );
}
