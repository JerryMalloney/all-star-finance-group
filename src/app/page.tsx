import type { Metadata } from "next";
import Hero from "@/components/home/Home";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Services from "@/components/shared/Services";

export const metadata: Metadata = {
  title: "All Start Finance Group LLC | Seguros en Miami, FL",
  description:
    "All Start Finance Group LLC ayuda a familias y negocios en Miami, Florida con seguros de salud, vida, dental, automóviles y gastos finales. Asesoría personalizada en español e inglés.",
  keywords: [
    "seguros en miami",
    "agencia de seguros miami",
    "seguro de salud miami",
    "seguro de vida miami",
    "seguro dental miami",
    "seguro de auto miami",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "All Start Finance Group LLC | Seguros en Miami, FL",
    description:
      "Cobertura de seguros para individuos, familias y negocios en Miami. Planes claros, atención rápida y acompañamiento local.",
    type: "website",
    url: "/",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Services />
      <Section5 />
      <Section6 />
    </div>
  );
}
