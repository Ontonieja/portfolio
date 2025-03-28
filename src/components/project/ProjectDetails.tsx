import SectionWrapper from "@/components/SectionWrappers";
import PortfolioBackHeading from "./PortfolioBackHeading";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectDetailsProps {
  name: string;
  description: string;
  secondDescription: string;
  stack: string[];
  desktopImage: string;
  mobileImage: string;
  websiteLink: string;
  githubLink: string;
  backgroundColor: string;
}

export default function ProjectDetails({
  name,
  description,
  secondDescription,
  stack,
  desktopImage,
  mobileImage,
  websiteLink,
  githubLink,
  backgroundColor,
}: ProjectDetailsProps) {
  return (
    <main className={cn("px-6 xl:px-12 overflow-hidden", backgroundColor)}>
      <SectionWrapper className="text-white flex flex-col min-h-screen overflow-hidden max-w-[1512px] mx-auto">
        <PortfolioBackHeading
          projectName={name}
          transitionBackgroundColor={backgroundColor}
        />
        <article className="xl:ml-[52px] mt-6 xl:mt-8 2xl:mt-12 grid grid-cols-1 lg:grid-cols-2 w-full gap-5 lg:gap-10 relative xl:text-lg 2xl:text-xl">
          <div className="flex flex-col gap-4 xl:gap-8">
            <p>{description}</p>
            <p>{secondDescription}</p>
            <h2 className="text-2xl lg:text-3xl font-bold">
              Tech Stack & Features 👨‍💻‍
            </h2>
            <ol className="space-y-1 2xl:space-y-2">
              {stack.map((item: string, index: number) => {
                const splittedText = item.split("–");

                return (
                  <li key={index} className="flex gap-1">
                    <span>
                      <strong>{splittedText[0]}</strong>
                      {` - ${splittedText[1]}`}
                    </span>
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="w-full xl:pr-12 ">
            <div className="relative w-full 2xl:max-w-[686px] h-full max-h-full self-center">
              <Image
                src={desktopImage}
                alt={`${name} project image`}
                width={1212}
                height={918}
                priority
                className="w-full h-auto rounded-[22px]"
              />
            </div>
          </div>
        </article>

        <article className="xl:ml-[52px] mt-4 md:mt-12 lg:mt-16 xl:mt-24 flex flex-col md:flex-row gap-10 2xl:gap-20 relative">
          <div className="w-[328px] h-full min-h-[540px] relative order-2 md:order-1 max-md:mx-auto">
            <div className="absolute top-0 left-0  w-full overflow-hidden rounded-[32px]">
              <Image
                src={mobileImage}
                alt={`${name} project image`}
                width={328}
                height={702}
                priority
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8 order-1 md:order-2">
            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl ">
              Dive into the code, or see the live version in action! 🚀
            </h3>
            <div className="flex flex-col max-sm:mt-2 font-bold text-[50px] md:text-[70px] lg:text-[100px] xl:text-[120px] 2xl:text-[158px]">
              <Link
                href={websiteLink}
                target="_blank"
                className="text-transform: uppercase underline-animation"
              >
                Live Website
              </Link>
              <Link
                href={githubLink}
                target="_blank"
                className=" text-transform: uppercase -mt-4 lg:-mt-12 2xl:-mt-20 2xl:ml-20 self-end underline-animation"
              >
                Github
              </Link>
            </div>
          </div>
        </article>
      </SectionWrapper>
    </main>
  );
}
