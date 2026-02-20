import Image from "next/image";
import Link from "next/link";
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
                Protege lo que más importa
              </h2>
              <p className="text-base leading-relaxed md:text-lg">
                Recibe asesoría personalizada para elegir el seguro ideal para
                tu salud, tu familia y tu futuro en Estados Unidos.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary/90"
              >
                Contáctanos hoy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
