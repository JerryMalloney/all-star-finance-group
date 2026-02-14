import React from "react";

const Section3 = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.png')" }}
      />
      <div className="absolute inset-0 bg-slate-900/60" />

      <div className="relative container mx-auto px-4 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="flex justify-center flex-wrap w-full gap-6 text-white lg:flex-row lg:gap-12">
            <div>
              <p className="text-3xl font-semibold">
                300<span className="text-brand-primary font-bold">+</span>
              </p>
              <p className="text-sm text-white/80">Happy</p>
              <p className="text-sm text-white/80">Client</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">
                900<span className="text-brand-primary font-bold">+</span>
              </p>
              <p className="text-sm text-white/80">Amazing</p>
              <p className="text-sm text-white/80">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">
                20<span className="text-brand-primary font-bold">+</span>
              </p>
              <p className="text-sm text-white/80">Awards</p>
              <p className="text-sm text-white/80">Winning</p>
            </div>
          </div>

          <div className="hidden lg:block w-full lg:ml-auto lg:max-w-2xl">
            <div className=" bg-linear-to-r from-yellow-500 via-amber-500 to-teal-600 p-6 text-white shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-5">
                <div className="space-y-1">
                  <p className="text-sm">General</p>
                  <p className="text-lg font-semibold">Project</p>
                </div>
                <div className="">
                  <div className="flex items-center gap-1">
                    <p className="text-3xl font-semibold">25</p>
                    <p className="text-sm text-white/90">Years</p>
                  </div>
                  <p className="text-lg text-white/90 font-bold">Operated</p>
                </div>
                <p className="text-sm text-white/90 leading-relaxed lg:flex-1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
