"use client";

import ProjectDetails from "@/components/project/ProjectDetails";
import ProjectLayout from "@/components/project/ProjectLayout";

export default function ChatAppProject() {
  return (
    <ProjectLayout backgroundColor="bg-[#0372c1]">
      <ProjectDetails
        name="Dragon Paraboxing Kraków"
        description="I developed a real-time chat application using React, Node.js, and Socket.io, delivering a fast, responsive, and seamless communication platform. 💬⚡ The app enables instant messaging, and user presence tracking, ensuring a smooth and engaging user experience."
        secondDescription="The website provides key information about the organization, events, training schedules, and ways to get involved."
        desktopImage={"/chat_desktop.png"}
        stack={[
          "React – For a dynamic and interactive front-end",
          "Node.js & Express – Providing a robust and scalable backend",
          "Socket.io – Enabling real-time, bidirectional communication",
          "Tailwind CSS – Ensuring a clean and modern UI",
          "Authentication – Secure login and user management",
        ]}
        mobileImage={"/chat_mobile.png"}
        websiteLink="https://chat-app-frontend-gcfo.onrender.com/auth"
        githubLink="https://github.com/Ontonieja/chat-app"
        backgroundColor="bg-[#0372c1]"
      />
    </ProjectLayout>
  );
}
