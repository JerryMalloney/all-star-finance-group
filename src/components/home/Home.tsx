import Image from "next/image";
import EmailForm from "../shared/EmailForm";

const Hero = () => {
  return (
    <div className="relative">
      <Image alt="" fill src={"/hero.png"} className="object-cover" />
      <div className="relative py-[40%] md:py-[30%] lg:py-[25%] xl:py-[10%] bg-black/35 px-4">
        <div className="container mx-auto">
          <div className="max-w-xl ml-auto">
            <div className="bg-brand-primary h-2 w-full mb-2"></div>
            <div className="space-y-4  bg-white text-black p-12">
              <h1 className="text-4xl  md:text-4xl font-semibold ">
                All Start Finance Group LLC, Seguros confiables en USA
              </h1>
              <p className=" text-lg ">
                Protege tu salud, tu familia, tu auto y tu futuro con asesoría
                personalizada. Ofrecemos pólizas de seguro a nivel nacional en
                todo Estados Unidos, con sede en Miami, para ayudarte a elegir
                coberturas claras, accesibles y adaptadas a tu presupuesto.
              </p>
              <EmailForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
