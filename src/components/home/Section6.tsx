import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section6 = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="max-w-lg space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              Preguntas frecuentes
              <br />
              sobre seguros en USA
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Si estás buscando seguro de salud, vida, dental, auto o cobertura
              para gastos finales, aquí respondemos dudas comunes de nuestros
              clientes en Estados Unidos, incluyendo Miami, Florida.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-5"
            >
              <AccordionItem
                value="item-1"
                className="border border-slate-200 border-b-0 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>¿Qué tipo de seguro necesito?</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Depende de tus metas y situación actual. Evaluamos tu perfil,
                  presupuesto y prioridades para recomendar coberturas de salud,
                  vida, auto, dental o gastos finales que sí te aporten valor.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-slate-200 border-b-0 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>¿Pueden ayudarme en español?</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Sí. Atendemos clientes en español e inglés para que entiendas
                  claramente tus opciones, costos, beneficios y exclusiones
                  antes de tomar una decisión.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-slate-200 border-b-0 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>¿Cuánto tarda el proceso?</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  En muchos casos puedes recibir opciones el mismo día. Nuestro
                  objetivo es simplificar el proceso para que tengas cobertura
                  activa lo antes posible.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-slate-200 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>¿Atienden en todo Estados Unidos?</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Sí. Trabajamos con clientes en todo Estados Unidos,
                  ofreciendo asesoría personalizada por teléfono, correo o cita
                  directa según tu preferencia, con base en Miami.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
