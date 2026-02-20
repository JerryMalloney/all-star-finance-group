import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title:
    "Póliza de Seguros Suplementarios en Estados Unidos | All Start Finance Group LLC",
  description:
    "Conoce cómo funcionan los seguros suplementarios y cómo te ayudan a cubrir deducibles, copagos, hospitalización y pérdida de ingresos. Asesoría clara para familias latinas en EE. UU.",
  keywords: [
    "seguros suplementarios",
    "póliza de seguros suplementarios",
    "seguro suplemental en estados unidos",
    "cobertura de deducibles y copagos",
    "seguro por incapacidad temporal",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/poliza-de-seguros-suplementarios",
  },
  openGraph: {
    title:
      "Póliza de Seguros Suplementarios en Estados Unidos | All Start Finance Group LLC",
    description:
      "Protege tu economía con cobertura adicional para gastos médicos no cubiertos al 100% por tu seguro principal.",
    type: "website",
    url: "/services/poliza-de-seguros-suplementarios",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría de seguros suplementarios en Estados Unidos"
        imgSrc="/hero4.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Póliza de Seguros Suplementarios
            </h1>
            <p className=" text-lg ">
              Complementa tu seguro médico principal y protege tu bolsillo ante
              gastos inesperados que pueden afectar tu estabilidad financiera.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Cobertura de seguros suplementarios para deducibles y copagos"
        imgSrc="/general2.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué es un seguro suplementario?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Los seguros suplementarios son pólizas adicionales que no reemplazan
            tu seguro de salud tradicional. Su función es ayudarte a cubrir
            gastos que, en muchos casos, el plan médico principal no paga al
            100%, como deducibles, copagos, hospitalización o costos derivados
            de una incapacidad temporal.
          </p>
        }
      />
      <Section2
        imgAlt="Beneficios del seguro suplementario para familias"
        imgSrc="/general.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Por qué puede ser clave para tu economía?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Mientras tu seguro médico se enfoca en la atención clínica, el
              seguro suplementario te brinda apoyo económico extra para cubrir
              lo pendiente. Esto puede incluir pagos directos para deducibles,
              copagos o incluso apoyo por pérdida de ingresos, ayudándote a
              mantener tus finanzas bajo control durante momentos difíciles.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora en seguros suplementarios"
        imgSrc="/mariela1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Asesoría personalizada con Mariela Linares
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Evaluamos tu cobertura actual y tus riesgos financieros para
            recomendarte una póliza suplementaria adecuada a tu realidad. Con
            una explicación clara y sin tecnicismos, te ayudamos a entender qué
            protección adicional necesitas y cómo evitar gastos inesperados en
            el futuro.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question:
              "¿El seguro suplementario reemplaza mi seguro de salud principal?",
            answer:
              "No. Es una cobertura adicional diseñada para complementar tu plan médico y ayudarte con gastos que no quedan cubiertos al 100%.",
          },
          {
            question: "¿Qué gastos puede cubrir una póliza suplementaria?",
            answer:
              "Dependiendo del plan, puede ayudarte con deducibles, copagos, hospitalización y, en algunos casos, pérdida de ingresos por incapacidad.",
          },
          {
            question: "¿Cómo sé qué tipo de cobertura suplementaria necesito?",
            answer:
              "Analizamos tu seguro actual, tu presupuesto y tus necesidades familiares para recomendar la opción más conveniente y sostenible.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre seguros suplementarios
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Aclara tus dudas sobre cobertura adicional y toma decisiones más
              seguras para proteger tu salud y tu estabilidad económica.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
