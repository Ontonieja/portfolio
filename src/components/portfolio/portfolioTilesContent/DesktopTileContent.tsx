import { cn } from "@/lib/utils";
import { DesktopTileContentProps } from "@/types/tileTypes";
import Image from "next/image";

export default function DesktopTileContent({
  imageUrl,
  blocksColor,
  heading,
}: DesktopTileContentProps) {
  return (
    <div className="flex justify-center mt-6 md:mt-8 lg:mt-12 relative w-full h-full max-h-[420px]">
      <div className="flex justify-around gap-4">
        <div
          className={cn(
            "hidden xl:block absolute right-0 top-0 h-full w-[100px] 2xl:w-[150px] rounded-3xl transform translate-x-1/2 2xl:translate-x-1/3 ",
            blocksColor
          )}
        ></div>
        <div
          className={cn(
            "hidden xl:block lg:absolute left-0 top-0 h-full w-[100px] 2xl:w-[150px] rounded-3xl transform -translate-x-1/2 2xl:-translate-x-1/3 ",
            blocksColor
          )}
        ></div>
        <div className="overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={`${heading} work image`}
              fill
              className="rounded-2xl h-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}
