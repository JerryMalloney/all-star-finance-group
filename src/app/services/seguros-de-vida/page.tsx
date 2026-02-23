import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Seguros de Vida en Estados Unidos | All Start Finance Group LLC",
  description:
    "Protege el futuro de tu familia con seguros de vida en Estados Unidos. Recibe asesoría personalizada para elegir una póliza clara, accesible y adaptada a tus objetivos financieros.",
  keywords: [
    "seguro de vida en estados unidos",
    "póliza de vida para latinos",
    "asesoría de seguros de vida",
    "protección financiera familiar",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-de-vida",
  },
  openGraph: {
    title: "Seguros de Vida en Estados Unidos | All Start Finance Group LLC",
    description:
      "Encuentra el seguro de vida ideal para proteger a tus seres queridos y construir estabilidad financiera a largo plazo.",
    type: "website",
    url: "/services/seguros-de-vida",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría de seguros de vida para familias en Estados Unidos"
        imgSrc="/hero3.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros de Vida
            </h1>
            <p className=" text-lg ">
              Protege a quienes más amas con una cobertura diseñada para brindar
              respaldo económico, tranquilidad y estabilidad en el futuro.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Beneficios de un seguro de vida"
        imgSrc="/hero4.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué es un seguro de vida?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Es un contrato que paga un beneficio a tus beneficiarios en caso de
            fallecimiento. Esta protección ayuda a reemplazar ingresos, mantener
            la estabilidad del hogar y cubrir compromisos financieros
            importantes para que tu familia pueda continuar con mayor
            tranquilidad.
          </p>
        }
      />
      <Section2
        imgAlt="Cobertura y planificación con seguro de vida"
        imgSrc="/salud2.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Por qué contratar una póliza de vida?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Un seguro de vida fortalece tu planificación financiera y protege
              a tu familia frente a escenarios inesperados. Además de brindar
              protección, algunas pólizas permanentes pueden ayudarte a
              construir ahorro con valor en efectivo y darte acceso a recursos
              para metas futuras, como educación, retiro o proyectos personales,
              según las condiciones del plan. En productos como el IUL (Indexed
              Universal Life), el valor en efectivo puede crecer con interés
              acreditado en función de índices de mercado, sujeto a límites,
              costos y reglas de la póliza. Te orientamos para elegir una opción
              clara, sostenible y alineada con tus objetivos a corto y largo
              plazo.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora de seguros de vida"
        imgSrc="/mariela2.png"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Acompañamiento personalizado
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te guiamos paso a paso para comparar
            opciones, entender beneficios y elegir la póliza más adecuada para
            tu etapa de vida. Nuestro enfoque es claro, profesional y alineado
            con tu presupuesto y tus objetivos familiares.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Quién puede ser beneficiario de mi seguro de vida?",
            answer:
              "Puedes designar a una o varias personas, como cónyuge, hijos u otros familiares, y actualizar esta información cuando lo necesites.",
          },
          {
            question: "¿Cómo se define el monto de cobertura ideal?",
            answer:
              "Depende de tus ingresos, deudas, gastos familiares y metas futuras. Te ayudamos a calcular una cobertura realista y sostenible.",
          },
          {
            question: "¿Puedo obtener una póliza si tengo condiciones médicas?",
            answer:
              "Sí, existen opciones según tu perfil y la aseguradora. Evaluamos alternativas para encontrar una cobertura adecuada a tu situación.",
          },
          {
            question: "¿Qué es un IUL y cómo funciona para ahorro a futuro?",
            answer:
              "El IUL (Indexed Universal Life) es un tipo de seguro de vida permanente que combina protección con acumulación de valor en efectivo. Ese valor puede crecer con interés vinculado al desempeño de índices, bajo parámetros de la póliza como topes, piso, cargos y costos. En ciertos casos, permite acceso a efectivo en el futuro, por ejemplo mediante préstamos o retiros, de acuerdo con las condiciones del contrato.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre seguro de vida
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resuelve tus dudas y elige tu póliza con información clara,
              asesoría profesional y enfoque en la protección de tu familia.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
