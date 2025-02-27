import Image from "next/image";
const portfolioImg = "/portfolio_photo.jpg";

export default function HeroImageWithLabel() {
  return (
    <div className="relative">
      <div className="relative size-20 md:size-24 lg:size-28 xl:size-32 overflow-hidden rounded-full border-[3px] border-white mb-5 md:mb-10 ">
        <Image
          src={portfolioImg}
          alt="Portfolio photo"
          fill
          quality={100}
          className="object-cover -rotate-6"
          priority
        />
      </div>
      <div className="absolute left-full -translate-x-[15%] xl:-translate-x-1/4 top-1/2 -translate-y-1/2 bg-white py-1 px-2 md:px-4 rounded-md transform -rotate-6 whitespace-nowrap text-xs md:text-sm z-10">
        <p>Maksymilian 👋🏻</p>
      </div>
    </div>
  );
}
