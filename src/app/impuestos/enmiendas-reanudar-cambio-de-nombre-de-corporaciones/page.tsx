import type { Metadata } from "next";
import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title:
    "Enmiendas, Reanudación y Cambio de Nombre de Corporaciones | All Start Finance Group LLC",
  description:
    "Gestiona enmiendas corporativas, reactivación de empresa y cambio de nombre con acompañamiento profesional para mantener tu negocio en cumplimiento.",
  keywords: [
    "enmiendas de corporaciones",
    "reanudar corporación",
    "cambio de nombre de empresa",
    "actualización corporativa",
    "all star finance group llc",
  ],
  alternates: {
    canonical:
      "/impuestos/enmiendas-reanudar-cambio-de-nombre-de-corporaciones",
  },
  openGraph: {
    title:
      "Enmiendas, Reanudación y Cambio de Nombre de Corporaciones | All Start Finance Group LLC",
    description:
      "Actualiza el estado legal de tu corporación con procesos claros, documentación correcta y seguimiento profesional.",
    type: "website",
    url: "/impuestos/enmiendas-reanudar-cambio-de-nombre-de-corporaciones",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero
        imgAlt="Gestión de enmiendas y cambios corporativos"
        imgSrc="/hero4.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Enmiendas, Reanudar y Cambio de Nombre de Corporaciones
            </h1>
            <p className=" text-lg ">
              Actualiza tu corporación con procesos ordenados para mantener tu
              empresa activa, alineada y en cumplimiento legal.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Trámites de enmiendas corporativas"
        imgSrc="/taxes7.jpg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            ¿Cuándo necesitas una enmienda o reanudación?
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Si cambian datos clave de tu empresa, su estructura o su estado
            legal, es importante tramitar la actualización correspondiente.
            También te apoyamos cuando necesitas reactivar una corporación
            inactiva o gestionar su cambio de nombre.
          </p>
        }
      />
      <Section2
        imgAlt="Beneficios de mantener tu corporación al día"
        imgSrc="/taxes3.jpg"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              ¿Por qué mantener estos trámites al día?
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Mantener tu corporación actualizada evita riesgos operativos,
              facilita gestiones bancarias y fortalece la credibilidad de tu
              negocio ante clientes, proveedores y entidades regulatorias.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Asesoría profesional para trámites corporativos"
        imgSrc="/mariela12.jpeg"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Gestión profesional de principio a fin
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            En All Star Finance Group analizamos tu situación y preparamos la
            documentación necesaria para que el proceso sea claro y eficiente.
            Te acompañamos en cada etapa para minimizar errores y tiempos
            innecesarios.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "¿Qué tipo de cambios requieren una enmienda?",
            answer:
              "Cambios en nombre, estructura, dirección registrada u otros datos corporativos relevantes pueden requerir enmiendas formales según el estado.",
          },
          {
            question: "¿Qué significa reanudar una corporación?",
            answer:
              "Es restablecer una empresa que quedó inactiva o fuera de cumplimiento para que pueda operar nuevamente conforme a las normas aplicables.",
          },
          {
            question: "¿Puedo cambiar el nombre de mi corporación?",
            answer:
              "Sí, es posible mediante el trámite correspondiente. Te ayudamos a validar disponibilidad y completar el proceso correctamente.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Preguntas frecuentes sobre actualizaciones corporativas
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Aclara dudas sobre enmiendas, reactivación y cambio de nombre para
              mantener tu empresa en regla.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default Page;
