"use client";

import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectLayout from "@/components/project/ProjectLayout";

export default function DragonProjectPage() {
  return (
    <ProjectLayout backgroundColor="bg-[#6f52f4]">
      <ProjectDetails
        name="HR Management App"
        description="I developed a powerful HR Management App using React, Tailwind CSS, and Node.js, providing businesses with an efficient way to manage employees, payroll, and administrative workflows. 🏢"
        secondDescription="The platform streamlines tasks such as employee onboarding, attendance tracking, payroll processing, and performance evaluations, ensuring a seamless HR experience."
        desktopImage={"/hr_desktop.png"}
        stack={[
          "React – For a dynamic and interactive user interface",
          "Tailwind CSS – For a clean, modern, and responsive design",
          "Express & Node.js – Enabling a scalable and efficient backend",
          "Prisma & PostgreSQL – Ensuring robust and secure data management",
        ]}
        mobileImage={"/hr_mobile.png"}
        websiteLink="https://github.com/Ontonieja/hr-management-api"
        githubLink="https://github.com/Ontonieja/hr-management-api"
        backgroundColor="bg-[#6f52f4]"
      />
    </ProjectLayout>
  );
}
