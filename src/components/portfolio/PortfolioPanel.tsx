import projectTiles from "@/lib/projectTiles";
import SectionHeading from "../ui/SectionHeading";
import ProjectTile from "./ProjectTile";
import AnimatedTiles from "../ui/AnimatedTiles";

export default function PortfolioPanel() {
  return (
    <div className="w-full">
      <SectionHeading className="px-4 xl:px-8 mb-6 md:mb-8 lg:mb-12">
        Portfolio
      </SectionHeading>
      <div className="flex flex-col gap-6 lg:gap-12">
        <AnimatedTiles
          className="flex flex-col md:flex-row gap-6 lg:gap-12 flex-wrap"
          once={true}
        >
          {projectTiles
            .map(
              (
                {
                  heading,
                  TileContent,
                  className,
                  link,
                  description,
                  transitionColor,
                  tileProps,
                },
                index
              ) => (
                <ProjectTile
                  key={heading}
                  heading={heading}
                  description={description}
                  link={link}
                  className={className}
                  bigger={index % 4 === 0 || index % 4 === 3}
                  tileContent={
                    <TileContent
                      {...tileProps}
                      heading={heading}
                      blocksColor={tileProps?.blocksColor || ""}
                    />
                  }
                  transitionColor={transitionColor}
                />
              )
            )
            .slice(0, 2)}
        </AnimatedTiles>

        <AnimatedTiles
          className="flex flex-col md:flex-row gap-6 lg:gap-12 flex-wrap"
          once={true}
        >
          {projectTiles
            .map(
              (
                {
                  heading,
                  TileContent,
                  className,
                  link,
                  description,
                  transitionColor,
                  tileProps,
                },
                index
              ) => (
                <ProjectTile
                  key={heading}
                  heading={heading}
                  description={description}
                  link={link}
                  className={className}
                  bigger={index % 4 === 0 || index % 4 === 3}
                  tileContent={
                    <TileContent
                      {...tileProps}
                      heading={heading}
                      blocksColor={tileProps?.blocksColor || ""}
                    />
                  }
                  transitionColor={transitionColor}
                />
              )
            )
            .slice(2, 4)}
        </AnimatedTiles>
      </div>
    </div>
  );
}
