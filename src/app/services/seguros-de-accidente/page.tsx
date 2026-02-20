import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Seguros de Accidente en Estados Unidos | All Start Finance Group LLC",
  description:
    "Protege tus finanzas con seguros de accidente en Estados Unidos. Cobertura para gastos médicos, hospitalización y apoyo económico ante imprevistos, con asesoría personalizada.",
  keywords: [
    "seguro de accidente en estados unidos",
    "cobertura por accidentes",
    "seguro suplementario de accidente",
    "protección financiera por lesiones",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-de-accidente",
  },
  openGraph: {
    title:
      "Seguros de Accidente en Estados Unidos | All Start Finance Group LLC",
    description:
      "Encuentra cobertura por accidentes con respaldo económico y asesoría clara para elegir la mejor opción para tu familia.",
    type: "website",
    url: "/services/seguros-de-accidente",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría en seguros de accidente en Estados Unidos"
        imgSrc="/accidentes1.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros de Accidente
            </h1>
            <p className=" text-lg ">
              Obtén respaldo económico ante imprevistos y protege tu estabilidad
              financiera con una cobertura diseñada para tu realidad.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Cobertura de seguro de accidente"
        imgSrc="/accidentes2.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué cubre un seguro de accidente?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Dependiendo del plan, puede ofrecer apoyo por hospitalización,
            tratamientos médicos, recuperación y otros gastos derivados de una
            lesión accidental. Esta cobertura ayuda a reducir el impacto
            económico cuando ocurre un evento inesperado.
          </p>
        }
      />
      <Section2
        imgAlt="Beneficios de póliza de accidente"
        imgSrc="/accidentes3.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Por qué es importante esta protección?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Un accidente puede generar gastos médicos y pérdidas de ingresos
              en poco tiempo. Con una póliza adecuada, cuentas con una ayuda
              adicional para mantener tus finanzas estables mientras te
              recuperas.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora de seguros de accidente"
        imgSrc="/mariela1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Asesoría personalizada para tu cobertura
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group evaluamos tu situación personal y laboral
            para ayudarte a elegir una póliza de accidente clara, útil y acorde
            con tu presupuesto. Te explicamos cada detalle para que tomes una
            decisión informada y segura.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿El seguro de accidente reemplaza mi seguro de salud?",
            answer:
              "No. Es una cobertura complementaria que puede ayudarte con gastos adicionales ocasionados por un accidente.",
          },
          {
            question: "¿Qué tipo de accidentes suelen estar cubiertos?",
            answer:
              "La cobertura varía por póliza, pero generalmente incluye lesiones accidentales, hospitalización y ciertos gastos médicos relacionados.",
          },
          {
            question: "¿Cómo sé qué plan de accidente me conviene?",
            answer:
              "Comparamos beneficios, límites de cobertura y costo mensual para recomendarte una opción práctica y sostenible.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre seguros de accidente
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resolvemos las dudas más comunes para que elijas tu cobertura con
              mayor claridad y confianza.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
