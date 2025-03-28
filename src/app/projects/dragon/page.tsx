"use client";

import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectLayout from "@/components/project/ProjectLayout";

export default function DragonProjectPage() {
  return (
    <ProjectLayout backgroundColor="bg-project-background">
      <ProjectDetails
        name="Dragon Paraboxing Kraków"
        description="I developed the official website for Cracow Paraboxing Organization using Next.js, delivering a fast, SEO-friendly, and accessible platform for athletes and supporters. 🥊"
        secondDescription="The website provides key information about the organization, events, training schedules, and ways to get involved."
        desktopImage={"/dragon_image.png"}
        stack={[
          "Next.js – For a performant, server-side rendered experience",
          "Tailwind CSS – For a clean and responsive UI",
          "Accessibility – Ensuring the website is inclusive and user-friendly",
          "SEO Optimization – Improving discoverability through best practices",
        ]}
        mobileImage={"/dragon_mobile.png"}
        websiteLink="https://dragonparaboxing.pl/"
        githubLink="https://dragonparaboxing.pl/"
        backgroundColor="bg-project-background"
      />
    </ProjectLayout>
  );
}
