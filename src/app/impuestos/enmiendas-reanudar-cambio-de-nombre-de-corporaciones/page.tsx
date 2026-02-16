import Hero from "@/components/services/service/Home";
import Section1 from "@/components/services/service/Section1";
import Section2 from "@/components/services/service/Section2";
import Section3 from "@/components/services/service/Section3";
import Cta from "@/components/shared/Cta";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero
        imgAlt="Hero Image"
        imgSrc="/hero2.jpg"
        content={
          <>
            <h1 className="text-4xl  md:text-4xl font-semibold ">
              Lorem ipsum dolor sit amet,Lorem ipsum dolor sit
            </h1>
            <p className=" text-lg ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vel quam venenatis, posuere turpis vitae, aliquam nisi.
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Hero Image"
        imgSrc="/hero.png"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Lorem ipsum dolor
            <br />
            sit amet
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        }
      />
      <Section2
        imgAlt="Section Image"
        imgSrc="/hero.png"
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Lorem ipsum dolor
              <br />
              sit amet
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Perumnas cluster housing is the right choice for those of you who
              are looking for comfortable, safe and affordable housing. With the
              cluster concept
            </p>
          </>
        }
      />
      <Section1
        imgAlt="Another Image"
        imgSrc="/hero.png"
        title={
          <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
            Lorem ipsum dolor
            <br />
            sit amet
          </h2>
        }
        description={
          <p className="text-lg leading-relaxed ">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus
            mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        }
      />
      <Section3
        faqs={[
          {
            question: "What is your return policy?",
            answer: "Our return policy is 30 days.",
          },
          {
            question: "Do you offer technical support?",
            answer: "Yes, we offer 24/7 technical support.",
          },
          {
            question: "Where are you located?",
            answer: "We are located in New York City.",
          },
        ]}
        content={
          <>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-800/80">
              Here are some of out FAQs. If you have any other quesitons
              you&apos;d like answered please feel free to email us.
            </p>
          </>
        }
      />
      <Cta />
    </div>
  );
};

export default page;
