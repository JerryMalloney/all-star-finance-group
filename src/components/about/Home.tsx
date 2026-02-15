import Image from "next/image";
import EmailForm from "../shared/EmailForm";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        alt=""
        fill
        src={"/hero2.jpg"}
        className="object-cover object-[25%_40%]"
      />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[10%] bg-black/35 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl ml-auto">
            <div className="space-y-4 border-l-6 border-brand-primary  text-white p-6">
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
