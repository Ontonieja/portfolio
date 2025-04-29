import CatsBreedingTileContent from "@/components/portfolio/portfolioTilesContent/CatsBreedingTileContent";
import ChatAppTileContent from "@/components/portfolio/portfolioTilesContent/ChatAppTileContent";
import DesktopTileContent from "@/components/portfolio/portfolioTilesContent/DesktopTileContent";
import HrTileContent from "@/components/portfolio/portfolioTilesContent/HrTileContent";
import { ProjectTile } from "@/types/tileTypes";

const projectTiles: ProjectTile[] = [
  {
    heading: "Dragon Paraboxing Kraków",
    description: "Website for Cracow paraboxing organization",
    link: "/projects/dragon",
    className: "bg-[#24242A]",
    transitionColor: "#24242A",
    TileContent: DesktopTileContent,
    tileProps: {
      blocksColor: "bg-[#1F1F22]",
      imageUrl: "/dragon_image.png",
    },
  },
  {
    heading: "Samo szczęście",
    description: "Website with CMS for cats breeding company",
    link: "/projects/cats-breeding",
    className: "bg-[#8AB7DF]",
    transitionColor: "#8AB7DF",
    TileContent: CatsBreedingTileContent,
  },
  {
    heading: "HR management app",
    description:
      "Web application for managing human resources and employee information",
    link: "/projects/hr-management",
    className: "bg-[#6f52f4]",
    transitionColor: "#6f52f4",
    TileContent: HrTileContent,
  },
  {
    heading: "Chat App",
    description:
      "Chat application with contact management and messaging features",
    link: "/projects/chat-app",
    className: "bg-[#0372c1]",
    transitionColor: "#0372c1",
    TileContent: ChatAppTileContent,
    tileProps: {
      blocksColor: "bg-[#0468b0]",
      imageUrl: "/chat_desktop.png",
    },
  },
];

export default projectTiles;
