import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="relative bg-white">
      <div className="hidden lg:block absolute left-0 top-1/2 h-[70%] w-[62%] -translate-y-1/2 bg-brand-primary" />
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="bg-brand-primary lg:bg-transparent rounded-md p-8 lg:p-12">
            <div className="max-w-md space-y-5 text-slate-900">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Cobertura de seguros
                <br />
                para Miami y sus alrededores
              </h2>
              <p className="text-sm sm:text-base text-slate-800/80">
                Trabajamos contigo para encontrar planes de salud, vida,
                accidente, dental y automóviles que realmente se ajusten a tus
                necesidades. Nuestro equipo local te guía paso a paso.
              </p>
              <button className="inline-flex items-center justify-center  bg-brand-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Solicitar asesoría
              </button>
            </div>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="shadow-xl">
              <Image
                alt="Consultant"
                width={520}
                height={420}
                className="h-auto w-full max-w-130 object-cover"
                src={"/section1.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
