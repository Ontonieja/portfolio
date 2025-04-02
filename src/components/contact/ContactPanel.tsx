import ContactForm from "./ContactForm";
import AdvancedGradientText from "../ui/AnimatedGradientText";
import Image from "next/image";
import { MdOutlineMailOutline } from "react-icons/md";
import ContactTile from "../ui/ContactTile";

export default function ContactPanel() {
  return (
    <div className="bg-section-background rounded-2xl w-full py-4 md:py-12 px-4 h-full ">
      <div className="max-w-[1040px] mx-auto flex flex-col md:flex-row gap-4 lg:gap-10 flex-1 w-full h-full max-md:min-h-[800px]">
        <div className="flex flex-col  w-full md:w-1/2 h-1/2 md:h-full shadow-lg bg-white rounded-2xl  p-4 lg:p-8 gap-y-6">
          <AdvancedGradientText text="Get in Touch" className="font-medium" />
          <h3 className="text-2xl md:text-4xl font-medium tracking-wide">
            Drop Me a Message
          </h3>
          <p className="text-light-gray text-sm">
            Have a question, a project, or just want to say hi? I’m always up
            for a chat! Let’s connect and build something cool.
          </p>
          <div className="h-[1px] w-full bg-gray-300"></div>
          <ContactForm />
        </div>
        <div className="flex flex-col gap-4 border w-full max-md:flex-1 md:w-1/2">
          <div className="bg-white h-4/5 max-md:hidden shadow-lg z-0 rounded-2xl relative overflow-hidden">
            <Image
              src="/contact_photo.png"
              alt="Contact photo"
              fill
              className="object-cover z-50"
            />
          </div>
          <div className="flex-1 bg-white shadow-lg rounded-2xl flex flex-col gap-2 p-4">
            <ContactTile
              Icon={MdOutlineMailOutline}
              title="Email"
              href="maksymilianr11@gmail.com"
            />
            <ContactTile
              Icon={MdOutlineMailOutline}
              title="Phone"
              href="+48 530 898 033"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
