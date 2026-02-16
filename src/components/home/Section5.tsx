"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";

const Section5 = () => {
  const testimonials = useMemo(
    () => [
      {
        name: "Laura M.",
        title: "Cliente en Miami",
        message:
          "Me ayudaron a encontrar un plan de salud para mi familia en poco tiempo. Explicaron todo con claridad y sin presión.",
        rating: 5,
        image: "/section1.jpg",
      },
      {
        name: "Carlos R.",
        title: "Dueño de negocio",
        message:
          "Necesitaba proteger mi negocio y mi auto comercial. El equipo fue rápido, profesional y muy atento.",
        rating: 5,
        image: "/section1.jpg",
      },
      {
        name: "Ana P.",
        title: "Cliente de seguros de vida",
        message:
          "Recibí orientación para elegir seguro de vida y gastos finales. Excelente servicio en español.",
        rating: 4,
        image: "/section1.jpg",
      },
    ],
    [],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="hidden lg:block absolute left-0 top-0 h-full w-[35%] bg-[#0b146e]" />
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[65%] bg-[#f2b705]" />
      <div className="relative z-2 max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="rounded-xl bg-[#0b146e] lg:bg-transparent px-6 py-10 lg:px-12">
            <div className="max-w-md">
              <div className="relative rounded-2xl bg-white p-6 shadow-2xl">
                <div className="absolute -top-8 left-5 ">
                  <div className="relative h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      alt={active.name}
                      fill
                      className="object-cover"
                      src={active.image}
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {active.name}
                      </p>
                      <p className="text-xs text-slate-500">{active.title}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[#f2b705]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={`star-${index}`}
                        className={
                          index < active.rating
                            ? "text-[#f2b705]"
                            : "text-slate-300"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-slate-700 leading-relaxed">
                  {active.message}
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={goPrev}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f2b705] text-[#0b146e] transition hover:scale-105"
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={goNext}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-[#f2b705] text-[#0b146e] transition hover:scale-105"
                >
                  →
                </button>
                <div className="ml-3 flex items-center gap-2">
                  {testimonials.map((_, index) => (
                    <span
                      key={`dot-${index}`}
                      className={`h-2.5 w-2.5 rounded-full ${
                        index === activeIndex ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-[#f2b705] px-6 py-10 lg:bg-transparent lg:px-12">
            <div className="max-w-md space-y-5 text-slate-900">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight text-slate-900">
                Clientes en USA
                <br />
                recomiendan nuestro servicio
              </h2>
              <p className="text-sm sm:text-base text-slate-800/80">
                Nuestro compromiso es ayudarte a asegurar lo que más importa:
                tu salud, tu familia, tus finanzas y tu tranquilidad, desde
                Miami hasta el resto del país.
              </p>
              <button className="inline-flex items-center justify-center rounded-md bg-[#0b146e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b146e]/90">
                Hablar con un asesor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
