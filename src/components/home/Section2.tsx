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
              Servicios de seguros
              <br />
              para todo USA
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Desde planes individuales hasta protección para familias y negocios,
            te ayudamos a comparar opciones y tomar decisiones con confianza.
            Respuesta rápida, atención bilingüe y acompañamiento cercano en todo
            Estados Unidos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-3 shadow-sm">
              <Image
                alt="Consulting"
                src="/salud.jpg"
                width={420}
                height={280}
                className="h-auto w-full object-cover aspect-10/7"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Seguro de Salud
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Te orientamos para elegir cobertura médica adecuada para ti y tu
              familia en Estados Unidos, con opciones claras y accesibles.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 shadow-sm">
              <Image
                alt="Advisory"
                src="/finales.jpg"
                width={420}
                height={280}
                className="h-auto w-full object-cover aspect-10/7"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Seguros de Vida y Gastos Finales
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Protege el bienestar financiero de tus seres queridos con pólizas
              que se ajustan a tu etapa de vida y presupuesto.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 shadow-sm">
              <Image
                alt="Planning"
                src="/automovil.jpg"
                width={420}
                height={280}
                className="h-auto w-full object-cover aspect-10/7"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">
              Seguros de Automóviles
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed">
              Obtén ayuda para encontrar cobertura de auto confiable en USA, con
              opciones competitivas y soporte personalizado, incluyendo clientes
              en Miami.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
