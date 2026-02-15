import Hero from "@/components/services/Home";
import Cta from "@/components/shared/Cta";
import Services from "@/components/shared/Services";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Cta />
    </div>
  );
};

export default page;
