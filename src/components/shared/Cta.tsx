import Image from "next/image";
import React from "react";

const Cta = () => {
  return (
    <section className="relative overflow-hidden">
      <Image
        alt="Call to action"
        fill
        src="/cta.jpg"
        className="object-cover"
        priority
      />

      <div className="relative bg-[#003756AD] px-4 py-24 md:py-32 lg:py-40">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="space-y-5 p-6 text-white md:p-8">
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">
                Lorem ipsum dolor
                <br />
                sit amet
              </h2>
              <p className="text-base leading-relaxed md:text-lg">
                Perumnas cluster housing is the right choice for those of you
                who are looking for comfortable, safe and affordable housing.
                With the cluster concept
              </p>
              <button className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
