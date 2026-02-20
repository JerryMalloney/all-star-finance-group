import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Servicios de Taxes en Estados Unidos | All Start Finance Group LLC",
  description:
    "Recibe asesoría profesional en servicios de taxes en Estados Unidos. Te ayudamos con preparación de impuestos, organización de documentos y cumplimiento fiscal con claridad y confianza.",
  keywords: [
    "servicios de taxes",
    "preparación de impuestos en estados unidos",
    "taxes para latinos",
    "declaración de impuestos",
    "asesoría fiscal en miami",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/servicios-de-taxes",
  },
  openGraph: {
    title: "Servicios de Taxes en Estados Unidos | All Start Finance Group LLC",
    description:
      "Organiza tus impuestos con acompañamiento profesional y soluciones prácticas para personas y familias.",
    type: "website",
    url: "/services/servicios-de-taxes",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría profesional en servicios de taxes"
        imgSrc="/hero5.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Servicios de Taxes
            </h1>
            <p className=" text-lg ">
              Simplificamos tu proceso de impuestos para que cumplas con
              seguridad, orden y tranquilidad en cada temporada fiscal.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Preparación de taxes en Estados Unidos"
        imgSrc="/taxes1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué incluyen nuestros servicios de taxes?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Te apoyamos en la preparación y revisión de tu declaración,
            organización de documentos y orientación general para cumplir con
            tus responsabilidades fiscales. Nuestro enfoque es claro,
            profesional y adaptado a tu situación personal.
          </p>
        }
      />
      <Section2
        imgAlt="Asesoría para declaración de impuestos"
        imgSrc="/taxes2.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Acompañamiento paso a paso
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Te guiamos para entender fechas clave, requisitos y opciones
              disponibles, minimizando errores comunes y mejorando tu proceso.
              Queremos que presentes tus taxes con confianza y mayor control de
              tu planificación financiera.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Planificación fiscal para familias"
        imgSrc="/taxes3.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Enfoque práctico y personalizado
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Analizamos tu perfil para orientarte con soluciones fiscales
            realistas y ordenadas. Ya sea que declares por primera vez o busques
            mejorar tu proceso actual, nuestro equipo te acompaña con una
            asesoría cercana y profesional.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Qué documentos necesito para preparar mis taxes?",
            answer:
              "Normalmente se requieren formularios de ingresos, identificación y comprobantes de gastos aplicables. Te indicamos exactamente qué reunir según tu caso.",
          },
          {
            question: "¿Puedo recibir ayuda si es mi primera declaración?",
            answer:
              "Sí, te guiamos en todo el proceso para que entiendas cada paso y presentes tu declaración con seguridad.",
          },
          {
            question: "¿Cómo evito errores comunes al declarar impuestos?",
            answer:
              "Con revisión previa, documentación ordenada y asesoría profesional. Nuestro objetivo es ayudarte a presentar información correcta y completa.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre servicios de taxes
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Respondemos las dudas más comunes para que gestiones tus impuestos
              con mayor claridad y tranquilidad.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
