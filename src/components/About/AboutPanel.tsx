import DotLottie from "../DotLottie";
import BlurredShape from "../ui/BlurredShape";
import SectionHeading from "../ui/SectionHeading";
import AboutText from "./AboutText";

export default function AboutPanel() {
  return (
    <div className="bg-section-background w-full p-4 pb-8 xl:px-8 md:pb-12 xl:pb-16 rounded-2xl xl:rounded-[22px] relative overflow-hidden">
      <BlurredShape className="-bottom-14 -right-14 w-[220px] h-[140px] md:h[200px]  md:w-[240px] lg:w-[300px] xl:w-[340px]   bg-[#86a4ffc4] -rotate-[30deg]" />
      <div className="flex flex-col md:flex-row xl:space-x-4 space-y-6 items-start z-20">
        <div className="w-full md:w-3/4 2xl:w-[70%]">
          <SectionHeading title="About me" />
          <AboutText />
        </div>
        <div className="md:w-1/4 h-full flex items-center  max-md:mx-auto justify-center z-20">
          <div className="overflow-hidden max-w-[240px]  md:max-w-[320px] py-4 ">
            <DotLottie
              src="/computer_animation.lottie"
              loop
              autoplay
              className="h-auto transform scale-[200%] md:scale-[200%] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
