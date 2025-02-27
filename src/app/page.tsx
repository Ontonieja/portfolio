import HeroPanel from "@/components/Hero/HeroPanel";
import SectionWrapper from "@/components/SectionWrappers";

export default function Home() {
  return (
    <main className="flex flex-col space-y-12 px-6 xl:px-12">
      <SectionWrapper id="/" className="md:mt-2">
        <HeroPanel />
      </SectionWrapper>
      <SectionWrapper id="about" className="h-screen bg-red-500">
        <div></div>
      </SectionWrapper>
    </main>
  );
}
