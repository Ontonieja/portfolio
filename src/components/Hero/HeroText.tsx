import Button from "../ui/Button";

export default function HeroText() {
  return (
    <div className="md:max-w-[95%] lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[60%] text-center flex-col flex justify-center items-center z-10 ">
      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
        Hey, I’m Max – a Software Developer with Hands-on Experience
      </h1>
      <p className="text-lg md:text-2xl mt-3 md:mt-8 md:max-w-[70%] ">
        Building both frontend and backend to create smooth, functional
        applications. 👨🏼‍💻
      </p>
      <Button variant="primary" size="large" className="mt-6 md:mt-12">
        Contact me
      </Button>
    </div>
  );
}
