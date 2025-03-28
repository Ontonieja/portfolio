export interface DesktopTileContentProps {
  imageUrl?: string;
  blocksColor: string;
  heading: string;
}

export interface TileProps {
  blocksColor: string;
  imageUrl: string;
}

export interface ProjectTile {
  heading: string;
  description: string;
  link: string;
  className: string;
  transitionColor: string;
  TileContent: React.FC<DesktopTileContentProps>;
  tileProps?: TileProps;
}
