import Image from "next/image";
import React from "react";

const Section2 = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16">
          <div className="space-y-4">
            <div className="h-1 w-20 bg-blue-900" />
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900">
              Lorem ipsum dolor
              <br />
              sit amet
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Check out our best service you can possibly orders in building your
            company and don&apos;t forget to ask via our email or our customer
            service if you are interested in using our services
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-3 shadow-sm">
              <Image
                alt="Consulting"
                src="/hero.png"
                width={420}
                height={280}
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Lorem Impsu
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Industrial development is our main line of business. We do Factory
              Construction, Warehouse and others
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 shadow-sm">
              <Image
                alt="Advisory"
                src="/mariela1.jpg"
                width={420}
                height={280}
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Lorem Impsu
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Our experience building in the Commercial field includes
              Showrooms, Supermalls and Office Buildings
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 shadow-sm">
              <Image
                alt="Planning"
                src="/section1.jpg"
                width={420}
                height={280}
                className="h-auto w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Lorem Impsu
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Residential development is the beginning that has shaped us to
              this day. Our development includes Houses &amp; Apartments
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
