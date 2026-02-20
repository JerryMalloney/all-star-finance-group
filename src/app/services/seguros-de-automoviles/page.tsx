import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title:
    "Seguros de Automóviles en Estados Unidos | All Start Finance Group LLC",
  description:
    "Encuentra seguros de automóviles en Estados Unidos con coberturas claras y precios competitivos. Asesoría personalizada para elegir la póliza ideal según tu vehículo y presupuesto.",
  keywords: [
    "seguro de auto en estados unidos",
    "seguros de automóviles",
    "póliza de carro para latinos",
    "cobertura full coverage auto",
    "aseguradora de autos en miami",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-de-automoviles",
  },
  openGraph: {
    title:
      "Seguros de Automóviles en Estados Unidos | All Start Finance Group LLC",
    description:
      "Te ayudamos a comparar coberturas de auto y elegir una póliza confiable para conducir con tranquilidad.",
    type: "website",
    url: "/services/seguros-de-automoviles",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría en seguros de automóviles en Estados Unidos"
        imgSrc="/automovil.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros de Automóviles
            </h1>
            <p className=" text-lg ">
              Protege tu vehículo y tu tranquilidad con una póliza diseñada para
              tu realidad, tu presupuesto y tu forma de conducir en Estados
              Unidos.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Coberturas de seguro de auto"
        imgSrc="/automovil2.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué cubre un seguro de auto?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Dependiendo del plan, puedes tener cobertura de responsabilidad
            civil, daños a tu vehículo, robo, colisión, gastos médicos y
            protección frente a conductores no asegurados. Te explicamos cada
            opción de forma simple para que elijas una póliza útil y acorde a
            tus necesidades.
          </p>
        }
      />
      <Section2
        imgAlt="Comparación de pólizas de automóviles"
        imgSrc="/hero4.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Cómo elegir la mejor póliza?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Analizamos tu historial de manejo, tipo de vehículo, uso diario y
              presupuesto para comparar opciones reales del mercado. Así
              encuentras una cobertura equilibrada entre protección, costo
              mensual y beneficios importantes para ti.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora de seguros de automóviles"
        imgSrc="/mariela1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Acompañamiento profesional y cercano
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te ayudamos a entender términos,
            coberturas y condiciones para que tomes decisiones informadas.
            Nuestro objetivo es que conduzcas con seguridad, respaldo y la
            confianza de tener la protección adecuada.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question:
              "¿Qué cobertura mínima necesito para conducir en EE. UU.?",
            answer:
              "Depende del estado donde resides, ya que cada uno establece requisitos mínimos de responsabilidad civil. Te orientamos según tu ubicación.",
          },
          {
            question: "¿Puedo asegurar un auto si es mi primera póliza?",
            answer:
              "Sí. Existen opciones para nuevos conductores o personas sin historial previo en seguros. Comparamos alternativas para encontrar la mejor opción.",
          },
          {
            question: "¿Cómo puedo bajar el costo mensual del seguro de auto?",
            answer:
              "El precio puede mejorar ajustando deducibles, coberturas y descuentos disponibles. Revisamos tu perfil para optimizar costo y protección.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre seguros de auto
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resuelve tus dudas principales para elegir una póliza de
              automóviles con mayor claridad y confianza.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
