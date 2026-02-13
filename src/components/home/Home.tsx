import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <Image alt="" fill src={"/mariela1.jpg"} />
      <div className="relative py-[50%] md:py-[30%] lg:py-[25%] xl:py-[15%] bg-black/35 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl ml-auto">
            <div className="bg-brand-primary h-2 wfull mb-2"></div>
            <div className="space-y-4  bg-white text-black p-12">
              <h1 className="text-4xl  md:text-4xl font-semibold ">
                Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
              </h1>
              <p className=" text-lg ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                vel quam venenatis, posuere turpis vitae, aliquam nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
