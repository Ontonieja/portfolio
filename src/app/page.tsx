import AboutPanel from "@/components/About/AboutPanel";
import Navbar from "@/components/header/Navbar";
import HeroPanel from "@/components/Hero/HeroPanel";
import PageTransition from "@/components/PageTransition";
import PortfolioPanel from "@/components/portfolio/PortfolioPanel";
import SectionWrapper from "@/components/SectionWrappers";
import TechStackPanel from "@/components/tech-stack/TechStackPanel";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col space-y-6 md:space-y-8 lg:space-y-12 px-4 xl:px-12">
        <PageTransition>
          <SectionWrapper id="/" className="md:mt-2">
            <HeroPanel />
          </SectionWrapper>
          <SectionWrapper id="about">
            <AboutPanel />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <PortfolioPanel />
          </SectionWrapper>
          <SectionWrapper id="techStack">
            <TechStackPanel />
          </SectionWrapper>
        </PageTransition>
      </main>
    </>
  );
}
