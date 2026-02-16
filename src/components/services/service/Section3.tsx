import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section3 = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className=" space-y-6">
            <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight">
              Lorem ipsum dolor
              <br />
              sit amet
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
                  <span>Discovery Call</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque vel quam venenatis, posuere turpis vitae, aliquam
                  nisi. Sed magna eros, sodales id efficitur sed, vestibulum id
                  quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="border border-slate-200 border-b-0 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>Review</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  We review goals, budgets, and timelines to align on the next
                  steps before moving into the process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="border border-slate-200 border-b-0 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>Implementation</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  A structured plan is delivered with milestones, deliverables,
                  and accountability for consistent progress.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="border border-slate-200 rounded-xl px-5 shadow-sm"
              >
                <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                  <span>Teamwork</span>
                  <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                    +
                  </span>
                  <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                    −
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                  Collaboration keeps the process transparent, efficient, and
                  aligned with your priorities.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
