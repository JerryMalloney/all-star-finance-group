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
              <h2 className="text-4xl font-semibold">
                Información de Contacto
              </h2>
              <div className="text-lg">
                <p className="font-bold">Correo electrónico:</p>
                <p>
                  <a
                    href="mailto:lmariela1977@gmail.com"
                    className="text-white transition hover:text-white/80"
                  >
                    lmariela1977@gmail.com
                  </a>
                </p>
              </div>
              <div className="text-lg">
                <p className="font-bold">Teléfono:</p>
                <p>
                  <a
                    href="tel:+17866033503"
                    className="text-white transition hover:text-white/80"
                  >
                    +1 (786) 603-3503
                  </a>
                </p>
              </div>
              <div className="text-lg">
                <p className="font-bold">Ubicación:</p>
                <p>8095 NW 8TH ST MIAMI FLORIDA 33126</p>
              </div>
            </div>
            <div>
              <div className="bg-brand-secondary h-2 w-full mb-2"></div>

              <div className="p-10 bg-brand-primary text-black space-y-5">
                <h1 className="text-4xl  md:text-4xl font-semibold ">
                  Solicita tu asesoría personalizada
                </h1>
                <p className=" text-lg ">
                  Completa el formulario y nuestro equipo se comunicará contigo
                  para orientarte con opciones claras, accesibles y adaptadas a
                  tus necesidades.
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
