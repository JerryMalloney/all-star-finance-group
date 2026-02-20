import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Seguros Dentales en Estados Unidos | All Start Finance Group LLC",
  description:
    "Descubre planes de seguros dentales en Estados Unidos para prevención, limpiezas, tratamientos y cuidado familiar. Asesoría clara para elegir cobertura dental según tu presupuesto.",
  keywords: [
    "seguros dentales en estados unidos",
    "plan dental para familias",
    "cobertura dental preventiva",
    "seguro dental para latinos",
    "aseguradora dental en miami",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-dentales",
  },
  openGraph: {
    title: "Seguros Dentales en Estados Unidos | All Start Finance Group LLC",
    description:
      "Te ayudamos a elegir un plan dental con cobertura útil para mantener tu salud bucal y la de tu familia.",
    type: "website",
    url: "/services/seguros-dentales",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría de seguros dentales en Estados Unidos"
        imgSrc="/dental1.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros Dentales
            </h1>
            <p className=" text-lg ">
              Protege tu sonrisa con planes dentales pensados para prevención,
              tratamientos y cuidado continuo para ti y tu familia.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Cobertura de seguros dentales"
        imgSrc="/dental2.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué cubre un seguro dental?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Dependiendo del plan, puedes tener cobertura para limpiezas,
            chequeos, radiografías, empastes, extracciones y otros
            procedimientos esenciales. Contar con seguro dental ayuda a reducir
            costos y a mantener una atención preventiva constante.
          </p>
        }
      />
      <Section2
        imgAlt="Comparación de planes de seguro dental"
        imgSrc="/dental3.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Cómo elegir el mejor plan dental?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Te ayudamos a comparar prima mensual, deducibles, red de
              proveedores, períodos de espera y beneficios anuales para
              encontrar una póliza dental que se adapte a tu presupuesto y a tus
              necesidades reales.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Asesoría profesional para seguros dentales"
        imgSrc="/mariela1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Asesoría clara y personalizada
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te orientamos para entender cada detalle
            del plan dental antes de contratar. Nuestro objetivo es que tomes
            decisiones informadas y consigas una cobertura útil para tu salud
            bucal a corto y largo plazo.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿El seguro dental incluye limpiezas de rutina?",
            answer:
              "Sí, muchos planes incluyen servicios preventivos como limpiezas y evaluaciones periódicas, aunque la cobertura varía según la póliza.",
          },
          {
            question: "¿Puedo usar cualquier dentista con mi plan?",
            answer:
              "Depende de la red de proveedores del plan. Te ayudamos a validar si tu dentista actual está incluido o qué opciones tienes cerca.",
          },
          {
            question: "¿Cuándo empieza la cobertura dental?",
            answer:
              "Algunos beneficios inician de inmediato y otros pueden tener período de espera. Revisamos cada detalle para evitar sorpresas.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre seguros dentales
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Conoce los puntos clave antes de contratar y elige tu plan dental
              con mayor confianza.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
