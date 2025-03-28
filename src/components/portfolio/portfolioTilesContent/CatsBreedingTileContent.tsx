import Image from "next/image";

export default function CatsBreedingTileContent() {
  return (
    <div className="absolute -bottom-16 2xl:-bottom-20 xl:right-20 right-0 w-[300px] 2xl:w-[400px] h-full z-0">
      <Image
        src="/cat_phone.png"
        alt="phone"
        fill
        quality={100}
        className="object-contain"
      />
    </div>
  );
}
