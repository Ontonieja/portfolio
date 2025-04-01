import techStack from "@/lib/techStack";
import TechTile from "./TechTile";
import AnimatedTextTyping from "../ui/AnimatedTextTyping";
import AnimatedSectionHeading from "../ui/AnimatedSectionHeading";
import AnimatedTiles from "../ui/AnimatedTiles";

export default function TechStackPanel() {
  return (
    <div className="flex flex-col items-center">
      <AnimatedTextTyping text="Constantly trying to improve" />
      <AnimatedSectionHeading>My Tech Stack</AnimatedSectionHeading>

      <AnimatedTiles className="flex flex-wrap mx-auto max-w-[896px] justify-center gap-2 lg:gap-4  mt-8 lg:mt-16">
        {techStack.map(({ icon, title }) => (
          <TechTile icon={icon} title={title} key={title} />
        ))}
      </AnimatedTiles>
    </div>
  );
}
