import Image from "next/image";
import React from "react";
import { Briefcase, Clock3, ShieldCheck, Tag } from "lucide-react";

const features = [
  {
    id: "confianza",
    title: "Confianza",
    description:
      "Construimos relaciones basadas en credibilidad, cercanía y respeto en cada asesoría.",
    icon: Briefcase,
  },
  {
    id: "transparencia",
    title: "Transparencia",
    description:
      "Explicamos cada opción de forma clara y honesta, sin letras pequeñas ni procesos confusos.",
    icon: Tag,
  },
  {
    id: "educacion",
    title: "Educación",
    description:
      "Creemos que la información es poder y que todas las personas merecen entender su cobertura.",
    icon: Clock3,
  },
  {
    id: "comunidad",
    title: "Comunidad",
    description:
      "Trabajamos con compromiso real porque también somos parte de la comunidad latina en EE. UU.",
    icon: ShieldCheck,
  },
];

const Section1 = () => {
  return (
    <section className="bg-[#efefef] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
              Nuestra misión y visión
            </h2>
            <div className="h-2 w-58 bg-brand-secondary" />
            <p className="text-lg leading-relaxed ">
              Nuestra misión es demostrar que sí existen opciones claras,
              accesibles y confiables para proteger lo más valioso: la salud, la
              familia y el futuro. Nuestra visión es convertirnos en un
              referente nacional en asesoría de seguros, reconocido por la
              confianza, la transparencia y el compromiso con la comunidad
              latina en los Estados Unidos.
            </p>
            <p className="text-lg leading-relaxed ">
              Mariela Linares, fundadora y asesora de seguros, lidera este
              proyecto con experiencia, profesionalismo y un genuino deseo de
              ayudar. Como latina, conoce de primera mano los retos de la
              comunidad hispana y acompaña a cada familia con soluciones
              personalizadas y cercanas.
            </p>
          </div>

          <div>
            <Image
              src="/mariela1.jpg"
              alt="Mariela Linares, fundadora y asesora de seguros"
              width={960}
              height={620}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.id} className="space-y-5">
                <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#f8e29f]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4b400] text-white">
                    <Icon size={26} strokeWidth={2.3} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold ">{feature.title}</h3>
                <p className="text-lg leading-relaxed ">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section1;
