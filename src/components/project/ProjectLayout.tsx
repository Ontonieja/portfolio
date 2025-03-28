import Navbar from "../header/Navbar";
import PageTransition from "../PageTransition";

interface ProjectLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function ProjectLayout({
  children,
  backgroundColor,
}: ProjectLayoutProps) {
  return (
    <>
      <Navbar backgroundColor={backgroundColor} />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
