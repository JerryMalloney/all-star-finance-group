import Hero from "@/components/home/Home";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Services from "@/components/shared/Services";

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
