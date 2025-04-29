import ContactForm from "./ContactForm";
import AdvancedGradientText from "../ui/AnimatedGradientText";
import Image from "next/image";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

import ContactTile from "../ui/ContactTile";

export default function ContactPanel() {
  return (
    <div className="bg-section-background rounded-2xl w-full py-4 md:py-12 px-4 h-full">
      <div className="max-w-[1040px] mx-auto flex flex-col md:flex-row gap-4 lg:gap-10 flex-1 w-full h-full">
        <div className="md:hidden bg-white h-80 shadow-lg rounded-2xl relative overflow-hidden w-full">
          <Image
            src="/contact_photo.png"
            alt="Contact photo"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2 h-full shadow-lg bg-white rounded-2xl p-4 lg:p-8 gap-y-6 order-1 md:order-none">
          <AdvancedGradientText text="Get in Touch" className="font-medium" />
          <h3 className="text-2xl md:text-4xl font-medium tracking-wide">
            Drop Me a Message
          </h3>
          <p className="text-light-gray text-sm">
            Have a question, a project, or just want to say hi? I&apos;m always
            up for a chat! Let&apos;s connect and build something cool.
          </p>
          <div className="h-[1px] w-full bg-gray-300"></div>
          <ContactForm />
        </div>

        <div className="hidden md:flex flex-col gap-4 w-full md:w-1/2">
          <div className="bg-white h-4/5 shadow-lg rounded-2xl relative overflow-hidden">
            <Image
              src="/contact_photo.png"
              alt="Contact photo"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 bg-white shadow-lg rounded-2xl flex flex-col gap-2 p-4">
            <ContactTile
              Icon={MdOutlineMailOutline}
              title="Email"
              href="maksymilianr11@gmail.com"
            />
            <ContactTile
              Icon={MdOutlinePhone}
              title="Phone"
              href="+48 530 898 033"
            />
          </div>
        </div>

        <div className="md:hidden bg-white shadow-lg rounded-2xl order-3 flex flex-col gap-2 p-4">
          <ContactTile
            Icon={MdOutlineMailOutline}
            title="Email"
            href="maksymilianr11@gmail.com"
          />
          <ContactTile
            Icon={MdOutlinePhone}
            title="Phone"
            href="+48 530 898 033"
          />
        </div>
      </div>
    </div>
  );
}
