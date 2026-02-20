import type { Metadata } from "next";
import Hero from "@/components/about/Home";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Cta from "@/components/shared/Cta";
import React from "react";

export const metadata: Metadata = {
  title: "Sobre Nosotros | All Start Finance Group LLC",
  description:
    "Conoce la misión, visión y valores de All Start Finance Group LLC. Acompañamos a familias latinas e inmigrantes en Estados Unidos con asesoría de seguros clara, confiable y personalizada.",
  keywords: [
    "sobre nosotros seguros usa",
    "asesoría de seguros latinos",
    "seguros para inmigrantes en estados unidos",
    "all start finance group llc",
    "mariela linares seguros",
    "agencia de seguros en español",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Sobre Nosotros | All Start Finance Group LLC",
    description:
      "Impulsamos decisiones informadas para proteger la salud, la familia y el futuro de la comunidad latina en Estados Unidos.",
    type: "website",
    url: "/about",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | All Start Finance Group LLC",
    description:
      "Asesoría de seguros en español para familias latinas e inmigrantes en Estados Unidos.",
  },
};

const Page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Cta />
    </div>
  );
};

export default Page;
