import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title:
    "Seguros de Gastos Finales en Estados Unidos | All Start Finance Group LLC",
  description:
    "Conoce cómo los seguros de gastos finales ayudan a proteger a tu familia ante costos inesperados y brindan respaldo económico en momentos importantes.",
  keywords: [
    "seguros de gastos finales",
    "cobertura de gastos finales",
    "protección familiar en estados unidos",
    "póliza de respaldo económico",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-gastos-finales",
  },
  openGraph: {
    title:
      "Seguros de Gastos Finales en Estados Unidos | All Start Finance Group LLC",
    description:
      "Obtén una cobertura clara y accesible para evitar cargas económicas a tu familia cuando más necesita estabilidad.",
    type: "website",
    url: "/services/seguros-gastos-finales",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría en seguros de gastos finales"
        imgSrc="/gastos-finales3.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros de Gastos Finales
            </h1>
            <p className=" text-lg ">
              Una cobertura pensada para brindar respaldo económico y aliviar la
              presión financiera de tu familia en momentos sensibles.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Cobertura de gastos finales para familias"
        imgSrc="/gastos-finales1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué son los seguros de gastos finales?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Son pólizas diseñadas para cubrir costos de cierre y otros gastos
            que pueden surgir de forma inesperada. Esta protección ayuda a que
            tu familia cuente con apoyo económico inmediato y pueda enfocarse en
            lo realmente importante.
          </p>
        }
      />
      <Section2
        imgAlt="Beneficios de una póliza de gastos finales"
        imgSrc="/gastos-finales2.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Por qué considerar esta cobertura?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Un plan de gastos finales permite planificar con anticipación y
              reducir el impacto económico para tus seres queridos. Con la
              cobertura adecuada, tu familia tiene mayor estabilidad para
              atender compromisos importantes sin desbalancear sus finanzas.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora de gastos finales"
        imgSrc="/mariela1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Acompañamiento personalizado
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te ayudamos a evaluar opciones, entender
            beneficios y elegir una póliza alineada con tu presupuesto.
            Recibirás orientación clara, cercana y profesional para tomar una
            decisión segura.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Qué puede cubrir un seguro de gastos finales?",
            answer:
              "Dependiendo del plan, puede ayudar con costos de cierre y otros gastos importantes para reducir la carga económica familiar.",
          },
          {
            question: "¿Quién puede contratar esta cobertura?",
            answer:
              "Existen diferentes opciones según edad, perfil y presupuesto. Te orientamos para encontrar la alternativa que mejor se ajuste a tu situación.",
          },
          {
            question: "¿Cómo elegir el monto ideal de protección?",
            answer:
              "Analizamos tus necesidades familiares y capacidad de pago para recomendar una cobertura equilibrada y sostenible.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre gastos finales
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resuelve tus dudas clave y conoce cómo esta cobertura puede
              proteger la estabilidad económica de tu familia.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
