import Image from "next/image";
import React from "react";
import { Briefcase, Clock3, ShieldCheck, Tag } from "lucide-react";

const features = [
  {
    id: "business",
    title: "Lorem Impsu",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum .",
    icon: Briefcase,
  },
  {
    id: "pricing",
    title: "Lorem Impsu",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum .",
    icon: Tag,
  },
  {
    id: "speed",
    title: "Lorem Impsu",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum .",
    icon: Clock3,
  },
  {
    id: "security",
    title: "Lorem Impsu",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum .",
    icon: ShieldCheck,
  },
];

const Section1 = () => {
  return (
    <section className="bg-[#efefef] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-6">
            <h2 className="text-4xl font-bold leading-tight  sm:text-5xl">
              Lorem ipsum dolor
              <br />
              sit amet
            </h2>
            <div className="h-2 w-58 bg-brand-secondary" />
            <p className="text-lg leading-relaxed ">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus
              mus.Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa.
            </p>
          </div>

          <div>
            <Image
              src="/mariela1.jpg"
              alt="Team member"
              width={960}
              height={620}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-12">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.id} className="space-y-5">
                <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#f8e29f]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4b400] text-white">
                    <Icon size={26} strokeWidth={2.3} />
                  </div>
                </div>

                <h3 className="text-4xl font-bold ">{feature.title}</h3>
                <p className="text-lg leading-relaxed ">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Section1;
