import Image from "next/image";
import React, { ReactNode } from "react";

const Section2 = ({
  content,
  imgSrc,
  imgAlt,
}: {
  content: ReactNode;
  imgSrc: string;
  imgAlt: string;
}) => {
  return (
    <section className="relative bg-white">
      <div className="hidden lg:block absolute right-0 top-1/2 h-[80%] w-[62%] -translate-y-1/2 bg-brand-primary" />
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="relative flex justify-center lg:justify-end">
            <div className="shadow-xl">
              <Image
                alt={imgAlt}
                width={520}
                height={420}
                className="h-auto w-full max-w-130 object-cover aspect-10/8"
                src={imgSrc}
              />
            </div>
          </div>
          <div className="bg-brand-primary lg:bg-transparent rounded-md p-8 lg:p-12">
            <div className="max-w-md space-y-5 text-slate-900">
              {content}
              <button className="inline-flex items-center justify-center  bg-brand-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
