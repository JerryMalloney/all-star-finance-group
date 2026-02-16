import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "Seguros de Salud",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/seguros-de-salud",
  },
  {
    title: "Poliza de Seguros Suplementarios",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/poliza-de-seguros-suplementarios",
  },
  {
    title: "Seguros de Vida y Gastos Finales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/seguros-de-vida-y-gastos-finales",
  },
  {
    title: "Seguros de Accidente",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/seguros-de-accidente",
  },
  {
    title: "Seguros Dentales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/seguros-dentales",
  },
  {
    title: "Seguros de Automoviles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/seguros-de-automoviles",
  },
  {
    title: "Servicios de Taxes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/servicios-de-taxes",
  },
  {
    title: "Gastos Finales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.",
    href: "/services/gastos-finales",
  },
];

const Services = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold tracking-widest text-blue-900">
            Services
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-800">
            SEGUROS PRINCIPALES
          </h2>
          <div className="mx-auto h-1 w-24 bg-yellow-500" />
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group block  bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] transition hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-yellow-200 bg-yellow-500">
                    <span className="text-3xl font-bold text-white">+</span>
                  </div>
                  <h3 className="text-base font-semibold text-slate-800">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm text-slate-500 leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="p-2">
                <div className="bg-brand-secondary px-6 py-3 text-center text-sm font-semibold text-white">
                  Ver más
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
