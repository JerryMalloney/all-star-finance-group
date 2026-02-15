import Hero from "@/components/about/Home";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Cta from "@/components/shared/Cta";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Cta />
    </div>
  );
};

export default page;
