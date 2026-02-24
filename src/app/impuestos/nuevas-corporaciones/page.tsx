import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Registro de Nuevas Corporaciones | All Start Finance Group LLC",
  description:
    "Te ayudamos a crear tu nueva corporación en Estados Unidos con orientación sobre estructura, documentación y cumplimiento inicial para operar con orden.",
  keywords: [
    "nuevas corporaciones",
    "crear empresa en estados unidos",
    "registro de corporación",
    "formación de negocios",
    "all star finance group llc",
  ],
  alternates: {
    canonical: "/impuestos/nuevas-corporaciones",
  },
  openGraph: {
    title: "Registro de Nuevas Corporaciones | All Start Finance Group LLC",
    description:
      "Inicia tu negocio con acompañamiento profesional para registrar tu corporación y cumplir requisitos desde el primer día.",
    type: "website",
    url: "/impuestos/nuevas-corporaciones",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Registro de nuevas corporaciones en Estados Unidos"
        imgSrc="/hero6.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Nuevas Corporaciones
            </h1>
            <p className=" text-lg ">
              Convierte tu idea en una estructura empresarial formal con apoyo
              experto para comenzar con bases legales y financieras sólidas.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Proceso para crear una corporación"
        imgSrc="/taxes1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué incluye la creación de una corporación?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Te orientamos en la selección de la estructura adecuada, preparación
            de documentos, registro y pasos iniciales de cumplimiento. Nuestro
            enfoque busca que inicies operaciones de forma organizada y con
            claridad sobre tus responsabilidades.
          </p>
        }
      />
      <Section2
        imgAlt="Beneficios de formalizar tu negocio"
        imgSrc="/taxes3.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Beneficios de formalizar tu empresa
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Constituir una corporación puede facilitar acceso a oportunidades
              comerciales, mejorar tu organización financiera y fortalecer la
              imagen de tu negocio ante clientes y aliados estratégicos.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Asesoría para emprendedores"
        imgSrc="/mariela11.jpeg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Acompañamiento para emprender con confianza
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te guiamos desde el inicio para que
            entiendas cada paso y avances con una estrategia realista. Nuestro
            compromiso es ayudarte a construir una empresa preparada para
            crecer.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Cuánto tarda crear una nueva corporación?",
            answer:
              "El tiempo puede variar según el estado y el tipo de trámite, pero te acompañamos para avanzar de manera ágil y con documentación correcta.",
          },
          {
            question: "¿Qué estructura me conviene para comenzar?",
            answer:
              "Depende de tus metas, actividad y proyección financiera. Evaluamos tu caso para recomendarte la opción más conveniente.",
          },
          {
            question: "¿Puedo abrir mi empresa aunque sea mi primer negocio?",
            answer:
              "Sí. Te ofrecemos orientación paso a paso para que entiendas requisitos y tomes decisiones con seguridad desde el primer día.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre nuevas corporaciones
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Conoce respuestas clave para iniciar tu empresa con mejor
              preparación y enfoque estratégico.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
