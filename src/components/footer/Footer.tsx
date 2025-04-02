import { FaGithubAlt } from "react-icons/fa6";
import SocialLink from "../ui/SocialLink";
import { IoLogoLinkedin } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="w-full mt-12 md:mt-16 lg:mt-24 bg-project-background  text-white">
      <div className="flex justify-end px-4 xl:px-12 py-4 items-center gap-4 ">
        <p className="">@Maksymilian Rusnak 2025</p>

        <SocialLink
          href="https://github.com/Ontonieja"
          Icon={FaGithubAlt}
          isProjectPage={true}
        />
        <SocialLink
          href="https://github.com/Ontonieja"
          Icon={IoLogoLinkedin}
          isProjectPage={true}
        />
      </div>
    </footer>
  );
}
