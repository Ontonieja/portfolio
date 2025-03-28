import Image from "next/image";

export default function ChatAppTileContent() {
  return (
    <div className="flex justify-center relative w-full h-full mt-8">
      <div className="absolute top-0 md:-top-4 2xl:top-0  right-10 md:right-20 2xl:right-40 max-w-[50px] 2xl:max-w-[70px]">
        <Image
          src="/cloud.png"
          width={121}
          height={83}
          alt="cloud"
          className="object-contain"
        />
      </div>

      <div className="absolute top-6 md:top-4 lg:top-32 left-0 2xl:left-16 max-w-[40px] xl:max-w-50 2xl:max-w-[70px] ">
        <Image
          src="/envelope.png"
          width={121}
          height={83}
          alt="cloud"
          className="object-contain"
        />
      </div>

      <div className="absolute -bottom-4 xl:-bottom-12 2xl:bottom-0 right-10 2xl:right-20 max-w-[35px] xl:max-w-[40px] 2xl:max-w-[60px]">
        <Image
          src="/emoji.png"
          width={95}
          height={92}
          alt="cloud"
          className="object-contain"
        />
      </div>
      <div className="h-auto w-full z-10 max-w-[500px] 2xl:max-w-[560px] relative">
        <Image
          src="/chat_tile.png"
          alt="phone"
          fill
          quality={100}
          className="object-contain mt-4"
        />
      </div>
    </div>
  );
}
