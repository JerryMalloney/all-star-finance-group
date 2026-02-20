import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Seguro de Salud en Estados Unidos | All Start Finance Group LLC",
  description:
    "Asesoría personalizada para elegir seguro de salud en Estados Unidos. Comparamos planes médicos, costos y coberturas para familias, trabajadores independientes y nuevos inmigrantes.",
  keywords: [
    "seguro de salud en estados unidos",
    "planes médicos para latinos",
    "asesoría de seguro médico",
    "seguro de salud para inmigrantes",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-de-salud",
  },
  openGraph: {
    title: "Seguro de Salud en Estados Unidos | All Start Finance Group LLC",
    description:
      "Te ayudamos a entender coberturas, deducibles y beneficios para elegir un plan de salud claro y accesible.",
    type: "website",
    url: "/services/seguros-de-salud",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría de seguros de salud en Estados Unidos"
        imgSrc="/salud.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros de Salud en Estados Unidos
            </h1>
            <p className=" text-lg ">
              Te acompañamos a elegir el plan médico que realmente se adapta a
              tu presupuesto, tus necesidades y la protección de tu familia.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Cobertura y beneficios de seguro de salud"
        imgSrc="/salud1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué incluye un seguro de salud?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Un buen plan puede cubrir consultas médicas, especialistas,
            emergencias, hospitalización, medicamentos recetados y servicios
            preventivos. Nuestro equipo te explica de forma sencilla cómo
            funcionan los deducibles, copagos y red de proveedores para que
            tomes decisiones con seguridad.
          </p>
        }
      />
      <Section2
        imgAlt="Comparación de planes de seguro médico"
        imgSrc="/salud2.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Cómo te ayudamos a elegir tu plan?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Analizamos tus médicos preferidos, tus necesidades de salud y tu
              capacidad de pago para comparar opciones reales del mercado.
              Nuestro objetivo es que obtengas una cobertura útil, accesible y
              alineada con tu situación actual, sin complicaciones.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora de seguros"
        imgSrc="/mariela1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Asesoría cercana con Mariela Linares
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Como fundadora y asesora, Mariela te guía paso a paso para resolver
            dudas, evitar errores comunes y entender exactamente qué estás
            contratando. Si eres inmigrante o estás comprando seguro por primera
            vez, recibirás una orientación humana, clara y totalmente
            personalizada.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Puedo obtener seguro de salud si soy inmigrante?",
            answer:
              "Sí, existen opciones según tu estatus migratorio, estado de residencia e ingresos. Te orientamos para identificar los planes para los que calificas.",
          },
          {
            question: "¿Cuándo puedo inscribirme en un plan médico?",
            answer:
              "Puedes aplicar durante el período de inscripción abierta o por un evento de vida calificado, como mudanza, matrimonio o pérdida de cobertura.",
          },
          {
            question: "¿Cómo sé si un plan realmente me conviene?",
            answer:
              "Comparamos prima mensual, deducible, copagos, red médica y beneficios para recomendarte la opción más equilibrada para tu caso.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre seguro de salud
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resolvemos las dudas más comunes para que tomes una decisión
              informada y segura sobre tu cobertura médica.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
