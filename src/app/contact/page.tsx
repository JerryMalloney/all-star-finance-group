import type { Metadata } from "next";
import Hero from "@/components/contact/Home";
import Section1 from "@/components/contact/Section1";
import Section2 from "@/components/contact/Section2";
import React from "react";

export const metadata: Metadata = {
  title: "Contacto | All Start Finance Group LLC",
  description:
    "Contáctanos para recibir asesoría personalizada en seguros y servicios financieros en Estados Unidos. Atención en español, respuesta rápida y acompañamiento profesional.",
  keywords: [
    "contacto seguros en estados unidos",
    "asesoría de seguros en miami",
    "agencia de seguros en español",
    "all start finance group contacto",
    "seguros para latinos en usa",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contacto | All Start Finance Group LLC",
    description:
      "Habla con nuestro equipo y recibe orientación clara para elegir la cobertura adecuada para ti y tu familia.",
    type: "website",
    url: "/contact",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  );
};

export default Page;
