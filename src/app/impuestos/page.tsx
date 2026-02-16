import Hero from "@/components/services/Home";
import Cta from "@/components/shared/Cta";
import ImpuestosServices from "@/components/shared/ImpuestosServices";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <ImpuestosServices />
      <Cta />
    </div>
  );
};

export default page;
