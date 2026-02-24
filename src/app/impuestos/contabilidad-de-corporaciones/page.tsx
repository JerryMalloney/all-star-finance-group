import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title:
    "Contabilidad de Corporaciones en Estados Unidos | All Start Finance Group LLC",
  description:
    "Servicio de contabilidad corporativa para mantener tus finanzas organizadas, cumplir con obligaciones fiscales y mejorar la toma de decisiones de tu empresa.",
  keywords: [
    "contabilidad de corporaciones",
    "bookkeeping para empresas",
    "contabilidad empresarial en estados unidos",
    "servicios contables",
    "all star finance group llc",
  ],
  alternates: {
    canonical: "/impuestos/contabilidad-de-corporaciones",
  },
  openGraph: {
    title:
      "Contabilidad de Corporaciones en Estados Unidos | All Start Finance Group LLC",
    description:
      "Organiza ingresos, gastos y reportes de tu empresa con apoyo contable profesional y acompañamiento continuo.",
    type: "website",
    url: "/impuestos/contabilidad-de-corporaciones",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Contabilidad de corporaciones en Estados Unidos"
        imgSrc="/taxes5.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Contabilidad de Corporaciones
            </h1>
            <p className=" text-lg ">
              Mantén la salud financiera de tu empresa con registros claros,
              reportes confiables y procesos contables bien estructurados.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Gestión contable para empresas"
        imgSrc="/taxes4.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué cubre la contabilidad corporativa?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Gestionamos el registro ordenado de ingresos y gastos, conciliación
            bancaria, clasificación de transacciones y reportes periódicos para
            que conozcas el desempeño real de tu negocio y tomes decisiones con
            información actualizada.
          </p>
        }
      />
      <Section2
        imgAlt="Beneficios de una contabilidad organizada"
        imgSrc="/taxes6.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Ventajas de llevar tu contabilidad al día
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Una contabilidad consistente facilita la preparación de impuestos,
              mejora el control de flujo de efectivo y reduce riesgos de errores
              administrativos. También te permite planificar crecimiento con una
              base financiera sólida.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Asesoría contable personalizada"
        imgSrc="/mariela10.jpeg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Soporte contable según tu operación
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Adaptamos el servicio al tamaño y ritmo de tu empresa. En All Star
            Finance Group te acompañamos con comunicación clara y seguimiento
            constante para que tu contabilidad respalde tus metas de negocio.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Cada cuánto debo actualizar mi contabilidad?",
            answer:
              "Lo ideal es mantenerla actualizada de forma mensual para tener visibilidad real del negocio y evitar acumulación de trabajo al cierre fiscal.",
          },
          {
            question: "¿La contabilidad corporativa ayuda con mis impuestos?",
            answer:
              "Sí. Una contabilidad bien organizada simplifica la preparación de impuestos y mejora la precisión de la información reportada.",
          },
          {
            question:
              "¿Puedo recibir asesoría si mi empresa está en otro estado?",
            answer:
              "Sí, brindamos atención remota para empresas en distintos estados de Estados Unidos, con acompañamiento profesional en cada etapa.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes de contabilidad corporativa
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Responde tus dudas sobre control financiero, reportes y
              cumplimiento contable para tu empresa.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
