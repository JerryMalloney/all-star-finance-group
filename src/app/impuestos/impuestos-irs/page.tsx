import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Impuestos IRS en Estados Unidos | All Start Finance Group LLC",
  description:
    "Asesoría profesional para preparación y presentación de impuestos IRS en Estados Unidos. Te ayudamos a declarar correctamente, reducir errores y cumplir con fechas clave.",
  keywords: [
    "impuestos irs",
    "declaración de impuestos en estados unidos",
    "taxes para latinos",
    "preparador de impuestos",
    "all star finance group llc",
  ],
  alternates: {
    canonical: "/impuestos/impuestos-irs",
  },
  openGraph: {
    title: "Impuestos IRS en Estados Unidos | All Start Finance Group LLC",
    description:
      "Presenta tus impuestos con orientación clara y acompañamiento profesional para personas, familias y trabajadores independientes.",
    type: "website",
    url: "/impuestos/impuestos-irs",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría de impuestos IRS en Estados Unidos"
        imgSrc="/taxes1.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Impuestos IRS
            </h1>
            <p className=" text-lg ">
              Te ayudamos a preparar y presentar tu declaración con precisión,
              cumplimiento y enfoque estratégico para proteger tus finanzas en
              Estados Unidos.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Preparación profesional de impuestos"
        imgSrc="/taxes2.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué incluye nuestro servicio de impuestos IRS?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Revisamos tus ingresos, deducciones y créditos aplicables para
            construir una declaración completa y correctamente documentada. Te
            orientamos sobre formularios, requisitos y fechas límite para que
            presentes con mayor seguridad y evites contratiempos con el IRS.
          </p>
        }
      />
      <Section2
        imgAlt="Planificación fiscal y cumplimiento tributario"
        imgSrc="/taxes3.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Beneficios de una asesoría fiscal profesional
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Una buena preparación reduce errores, mejora tu organización
              financiera y te ayuda a identificar oportunidades legales de
              ahorro fiscal. Nuestro objetivo es que cumplas con claridad y
              tomes decisiones informadas para tu próximo año contributivo.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Acompañamiento personalizado en impuestos"
        imgSrc="/mariela9.jpeg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Acompañamiento claro en cada etapa
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te explicamos cada paso en español e
            inglés para que entiendas tu declaración y tomes decisiones con
            confianza. Trabajamos con enfoque humano, profesional y alineado a
            tus metas personales o de negocio.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Qué documentos necesito para declarar impuestos?",
            answer:
              "Depende de tu caso, pero normalmente se consideran identificación, formularios de ingresos (como W-2 o 1099), gastos deducibles y documentos de dependientes.",
          },
          {
            question: "¿Puedo declarar si trabajo por cuenta propia?",
            answer:
              "Sí. Te ayudamos a organizar ingresos y gastos de negocio para cumplir con el IRS y optimizar tu planificación tributaria.",
          },
          {
            question: "¿Qué pasa si presento tarde mi declaración?",
            answer:
              "Podrían aplicarse multas o intereses. Por eso te guiamos para presentar a tiempo o evaluar opciones disponibles según tu situación.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre impuestos IRS
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resuelve tus dudas sobre declaraciones, requisitos y fechas con
              orientación práctica y profesional.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
