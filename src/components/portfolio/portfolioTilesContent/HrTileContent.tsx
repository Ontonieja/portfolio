import Image from "next/image";

export default function HrTileContent() {
  return (
    <div className="absolute -bottom-24 2xl:-bottom-32 xl:right-32 left-0 xl:left-28 w-[300px] 2xl:w-[400px] h-full z-0">
      <Image
        src="/hr_tile.png"
        alt="phone"
        fill
        quality={100}
        className="object-contain"
      />
    </div>
  );
}
