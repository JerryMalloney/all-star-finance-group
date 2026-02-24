import type { Metadata } from "next";
import Hero from "@/components/services/Home";
import Cta from "@/components/shared/Cta";
import ImpuestosServices from "@/components/shared/ImpuestosServices";
import React from "react";

export const metadata: Metadata = {
  title:
    "Servicios de Impuestos en Estados Unidos | All Start Finance Group LLC",
  description:
    "Conoce nuestros servicios de impuestos: declaraciones IRS, contabilidad corporativa, nuevas corporaciones y actualizaciones de empresas en Estados Unidos.",
  keywords: [
    "servicios de impuestos",
    "impuestos irs",
    "contabilidad de corporaciones",
    "crear corporación",
    "all star finance group llc",
  ],
  alternates: {
    canonical: "/impuestos",
  },
  openGraph: {
    title:
      "Servicios de Impuestos en Estados Unidos | All Start Finance Group LLC",
    description:
      "Asesoría profesional en impuestos y gestión corporativa para personas y negocios en Estados Unidos.",
    type: "website",
    url: "/impuestos",
    locale: "en_US",
  },
};

const Page = () => {
  return (
    <div>
      <Hero />
      <ImpuestosServices />
      <Cta />
    </div>
  );
};

export default Page;
