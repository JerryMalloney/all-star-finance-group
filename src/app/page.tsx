import type { Metadata } from "next";
import Hero from "@/components/home/Home";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Services from "@/components/shared/Services";

export const metadata: Metadata = {
  title: "All Start Finance Group LLC | Seguros en USA",
  description:
    "All Start Finance Group LLC ofrece pólizas de seguro a nivel nacional en Estados Unidos para familias y negocios. Asesoría personalizada en español e inglés, con sede en Miami.",
  keywords: [
    "seguros en usa",
    "agencia de seguros usa",
    "seguro de salud usa",
    "seguro de vida usa",
    "seguro dental usa",
    "seguro de auto usa",
    "seguros en miami",
    "all start finance group llc",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "All Start Finance Group LLC | Seguros en USA",
    description:
      "Pólizas de seguro a nivel nacional para individuos, familias y negocios en Estados Unidos, con atención personalizada desde nuestra sede en Miami.",
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
