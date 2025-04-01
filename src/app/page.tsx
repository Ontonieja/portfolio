import AboutPanel from "@/components/About/AboutPanel";
import ExperiencePanel from "@/components/experience/ExperiencePanel";
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
      <main className="flex flex-col px-4 xl:px-12">
        <PageTransition>
          <SectionWrapper id="/" className="md:mt-2 !pt-0">
            <HeroPanel />
          </SectionWrapper>
          <SectionWrapper id="about">
            <AboutPanel />
          </SectionWrapper>

          <SectionWrapper id="projects">
            <PortfolioPanel />
          </SectionWrapper>
          <SectionWrapper id="tech-stack" spacing="large">
            <TechStackPanel />
          </SectionWrapper>

          <SectionWrapper id="experience" spacing="extralarge">
            <ExperiencePanel />
          </SectionWrapper>
        </PageTransition>
      </main>
    </>
  );
}
