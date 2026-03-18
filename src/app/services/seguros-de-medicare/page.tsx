import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Seguros de Medicare en Estados Unidos | All Start Finance Group LLC",
  description:
    "Recibe asesoría personalizada sobre Medicare en Estados Unidos. Te ayudamos a entender cobertura, elegibilidad y opciones para elegir un plan claro y conveniente.",
  keywords: [
    "medicare en estados unidos",
    "asesoría de medicare",
    "planes medicare para latinos",
    "cobertura médica para adultos mayores",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/services/seguros-de-medicare",
  },
  openGraph: {
    title: "Seguros de Medicare en Estados Unidos | All Start Finance Group LLC",
    description:
      "Te orientamos para entender Medicare, comparar opciones y elegir una cobertura médica alineada con tu etapa de vida.",
    type: "website",
    url: "/services/seguros-de-medicare",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Asesoría de Medicare en Estados Unidos"
        imgSrc="/salud.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Seguros de Medicare
            </h1>
            <p className=" text-lg ">
              Te ayudamos a entender tus opciones de Medicare para que elijas
              una cobertura médica clara, conveniente y adaptada a tu etapa de
              vida en Estados Unidos.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Cobertura y beneficios de Medicare"
        imgSrc="/salud1.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Qué es Medicare y qué puede incluir?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Medicare es un programa de cobertura médica para personas que
            califican por edad o por ciertas condiciones específicas. Según el
            plan, puede ayudarte con servicios hospitalarios, consultas
            médicas, medicamentos recetados y opciones adicionales para una
            protección más completa. Nuestro equipo te explica cada parte en
            palabras sencillas para que entiendas bien tu cobertura.
          </p>
        }
      />
      <Section2
        imgAlt="Asesoría para elegir un plan de Medicare"
        imgSrc="/general.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Cómo te ayudamos a elegir tu plan?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Revisamos contigo tus médicos, tus medicamentos, tu presupuesto y
              el tipo de cobertura que buscas para comparar opciones con mayor
              claridad. Ya sea que estés comenzando con Medicare o evaluando un
              cambio de plan, te acompañamos paso a paso para que tomes una
              decisión informada y con confianza.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Mariela Linares asesora de Medicare"
        imgSrc="/mariela12.jpeg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Acompañamiento cercano y personalizado
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group te orientamos con paciencia y atención
            personalizada para resolver dudas sobre cobertura, beneficios y
            costos. Queremos que entiendas exactamente qué estás evaluando y
            que avances con tranquilidad hacia una opción que realmente se
            adapte a tus necesidades.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Quién puede calificar para Medicare?",
            answer:
              "Generalmente califican personas de 65 años o más y, en algunos casos, personas más jóvenes con ciertas condiciones o situaciones específicas. Revisamos tu caso para orientarte mejor.",
          },
          {
            question: "¿Qué diferencia hay entre Medicare Original y otros planes?",
            answer:
              "Dependiendo de la opción que elijas, la forma en que accedes a médicos, hospitales, medicamentos y beneficios adicionales puede cambiar. Te ayudamos a comparar esas diferencias de forma clara.",
          },
          {
            question: "¿Puedo revisar mi cobertura actual y cambiar de plan?",
            answer:
              "Sí, en ciertos períodos y según tu situación, puede ser posible evaluar cambios. Analizamos tu cobertura actual y te explicamos qué alternativas podrían ajustarse mejor a tus necesidades.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre Medicare
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Resolvemos dudas comunes para ayudarte a entender tus opciones y
              avanzar con mayor seguridad.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
