import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative">
      <Image
        alt="Asesoría de seguros para familias latinas en Estados Unidos"
        fill
        src={"/hero2.jpg"}
        className="object-cover object-[25%_40%]"
      />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[10%] bg-black/35 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl ml-auto">
            <div className="space-y-4 border-l-6 border-brand-primary  text-white p-6">
              <h1 className="text-4xl  md:text-4xl font-semibold ">
                Sobre Nosotros
              </h1>
              <p className=" text-lg ">
                Nacimos con un propósito claro: derribar barreras de información
                y acceso para que más familias latinas puedan elegir su seguro
                en Estados Unidos con claridad, confianza y acompañamiento real.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
