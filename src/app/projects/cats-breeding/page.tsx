"use client";

import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectLayout from "@/components/project/ProjectLayout";

export default function DragonProjectPage() {
  return (
    <ProjectLayout backgroundColor="bg-[#8AB7DF]">
      <ProjectDetails
        name="Cats Breeding Company"
        description="I created an official website for a cat breeding cattery 🐾 using Next.js and a custom CMS to manage cat profiles and breeding information. The platform is fast, user-friendly, and exudes feline elegance! 😸"
        secondDescription="The website showcases essential information about the cattery, breeding plans, available kittens, and detailed profiles of each cat. The custom CMS makes it easy to update profiles, upload new photos, and share news with potential adopters."
        desktopImage={"/cats_desktop.png"}
        stack={[
          "Next.js – For a high-performance, server-side rendered experience",
          "Tailwind CSS – Ensuring a modern, responsive design",
          "Custom CMS – Effortlessly manage cat profiles, breeding plans, and news",
          "Accessibility – An intuitive and inclusive experience for all visitors",
          "SEO Optimization – Enhances discoverability in search engines",
        ]}
        mobileImage={"/cats_mobile.png"}
        websiteLink="https://samoszczescie.pl/"
        githubLink="https://github.com/Ontonieja/cats-breeding"
        backgroundColor="bg-[#8AB7DF]"
      />
    </ProjectLayout>
  );
}
