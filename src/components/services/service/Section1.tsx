import Image from "next/image";
import React, { ReactNode } from "react";

const Section1 = ({
  title,
  description,
  imgAlt,
  imgSrc,
}: {
  title: ReactNode;
  description: ReactNode;
  imgAlt: string;
  imgSrc: string;
}) => {
  return (
    <section className="bg-[#efefef] py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-6">
            {title}
            <div className="h-2 w-58 bg-brand-secondary" />
            {description}
          </div>

          <div>
            <Image
              src={imgSrc}
              alt={imgAlt}
              width={960}
              height={620}
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
