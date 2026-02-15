import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="relative bg-white">
      <div className="hidden lg:block absolute right-0 top-1/2 h-[80%] w-[62%] -translate-y-1/2 bg-brand-primary" />
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="relative flex justify-center lg:justify-end">
            <div className="shadow-xl">
              <Image
                alt="Consultant"
                width={520}
                height={420}
                className="h-auto w-full max-w-130 object-cover aspect-10/8"
                src={"/section1.jpg"}
              />
            </div>
          </div>
          <div className="bg-brand-primary lg:bg-transparent rounded-md p-8 lg:p-12">
            <div className="max-w-md space-y-5 text-slate-900">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                Lorem ipsum dolor
                <br />
                sit amet
              </h2>
              <p className="text-sm sm:text-base text-slate-800/80">
                Perumnas cluster housing is the right choice for those of you
                who are looking for comfortable, safe and affordable housing.
                With the cluster concept
              </p>
              <button className="inline-flex items-center justify-center  bg-brand-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Asesoria
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
