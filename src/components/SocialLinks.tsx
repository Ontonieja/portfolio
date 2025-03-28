import { FaGithubAlt } from "react-icons/fa6";
import SocialLink from "./ui/SocialLink";
import { IoLogoLinkedin } from "react-icons/io5";

export default function SocialLinks() {
  return (
    <>
      <SocialLink
        href="https://github.com/Ontonieja"
        Icon={FaGithubAlt}
        text="Github"
      />
      <SocialLink
        href="https://www.linkedin.com/in/maksymilian-rusnak/"
        Icon={IoLogoLinkedin}
        text="Linkedin"
      />
    </>
  );
}
