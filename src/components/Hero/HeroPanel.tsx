import SocialLinks from "../SocialLinks";
import BlurredShape from "../ui/BlurredShape";
import HeroImageWithLabel from "./HeroImageWithLabel";
import HeroText from "./HeroText";

export default function HeroPanel() {
  return (
    <div className="h-[80svh] w-full bg-section-background items-center relative rounded-2xl xl:rounded-[22px] flex justify-center p-4 xl:p-8 overflow-hidden">
      <BlurredShape className="-top-10 -right-10 h-[400px] w-[240px] md:w-[320px] md:h-[300px] xl:w-[360px] 2xl:w-[500px] bg-[#FDDBA799] opacity-80"></BlurredShape>
      <BlurredShape className="-bottom-16 -right-16 h-[400px] w-[220px] md:w-[320px] md:h-[500px] lg:w-[400px] xl:w-[460px] 2xl:w-[700px]  rotate-[40deg]  bg-[#83DC9F99] opacity-70" />
      <div className="flex flex-col items-center">
        <HeroImageWithLabel />
        <HeroText />
      </div>
      <div className="ml-4 mb-4 xl:ml-8 xl:mb-8 flex gap-4 xl:gap-8 absolute bottom-0 left-0">
        <SocialLinks />
      </div>
    </div>
  );
}
