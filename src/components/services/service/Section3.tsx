import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Section3 = ({
  content,
  faqs,
}: {
  content: React.ReactNode;
  faqs: { question: string; answer: string }[];
}) => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className=" space-y-6">{content}</div>

          <div className="space-y-4">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="space-y-5"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  value={`item-${index + 1}`}
                  key={index}
                  className="border border-slate-200 border-b-0 rounded-xl px-5 shadow-sm"
                >
                  <AccordionTrigger className="group text-base font-semibold text-slate-900 [&>svg]:hidden">
                    <span>{faq.question}</span>
                    <span className="ml-auto text-lg text-slate-500 group-data-[state=open]:hidden">
                      +
                    </span>
                    <span className="ml-auto text-lg text-slate-500 hidden group-data-[state=open]:inline">
                      −
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
