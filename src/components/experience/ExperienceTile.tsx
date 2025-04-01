import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

interface ExperienceTileProps {
  date: string;
  jobTitle: string;
  location: string;
  companyName: string;
  description: string[];
  logo: string;
}

export default function ExperienceTile({
  date,
  jobTitle,
  location,
  companyName,
  description,
  logo,
}: ExperienceTileProps) {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 mb-10 md:mb-20 lg:mb-30 2xl:mb-40 text-sm relative">
      <div className="md:w-[244px] lg:w-[284px] relative">
        <div className="h-full">
          <div className="sticky top-40 flex flex-col space-y-2">
            <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white z-10 -translate-x-1/2">
              <div className="h-4 w-4 border border-neutral-300 bg-neutral-200 rounded-full"></div>
            </div>
            <div className="pl-10">
              <span className="tracking-wide uppercase text-light-gray mt-2">
                {date}
              </span>
              <p className="text-lg max-sm:text-nowrap md:text-xl lg:text-2xl text-black/90 font-medium">
                {jobTitle}
              </p>
              <div className="flex items-center gap-1.5">
                <Image
                  src={logo}
                  alt={`Logo of ${companyName}`}
                  className="object-contain h-auto"
                  width={40}
                  height={0}
                />
                <span>{companyName}</span>
              </div>
              <div className="flex items-center gap-1.5 text-light-gray sm:mt-1">
                <IoLocationOutline className="size-3.5" />
                <span>{location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-md:pl-10 max-md:mt-4 flex-1">
        <ul className="list-disc space-y-2 max-md:pl-5">
          {description.map((item, idx) => (
            <li key={idx} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
