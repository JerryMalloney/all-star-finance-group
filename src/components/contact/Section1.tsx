"use client";

import EmailForm from "../shared/EmailForm";

const Section1 = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute bg-brand-secondary h-[60%] w-full top-1/5  "></div>
      <div className="container mx-auto px-4 py-[6%]">
        <div className="">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
            <div className="my-auto space-y-2 bg-brand-secondary lg:bg-none  p-10">
              <h2 className="text-4xl font-semibold">Contact Information</h2>
              <div className="text-lg">
                <p className="font-bold">Email:</p>
                <p>test@test.com</p>
              </div>
              <div className="text-lg">
                <p className="font-bold">Phone:</p>
                <p>
                  <a
                    href="tel:+"
                    className="text-white transition hover:text-white/80"
                  >
                    1+ (000) 000-0000
                  </a>
                </p>
              </div>
            </div>
            <div>
              <div className="bg-brand-secondary h-2 w-full mb-2"></div>

              <div className="p-10 bg-brand-primary text-black space-y-5">
                <h1 className="text-4xl  md:text-4xl font-semibold ">
                  Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
                </h1>
                <p className=" text-lg ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vel quam venenatis, posuere turpis vitae, aliquam
                  nisi.
                </p>
                <EmailForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
