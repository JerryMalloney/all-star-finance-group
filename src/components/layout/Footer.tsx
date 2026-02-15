import Image from "next/image";
import Link from "next/link";
import React from "react";

const companyLinks = [
  "Lorem ipsum",
  "Dolor sit",
  "Amet consectetur",
  "Adipiscing elit",
];
const moreLinks = ["Lorem amet", "Ipsum dolor"];

const Footer = () => {
  return (
    <footer className="bg-[#17191f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="space-y-8">
            <Link href="/" className="inline-flex">
              <Image
                src="/logo-white.png"
                alt="Lorem ipsum"
                width={330}
                height={70}
                className="h-auto w-64 object-contain  sm:w-72"
                priority
              />
            </Link>

            <p className="max-w-xl text-sm leading-8 text-white/70 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:justify-self-end">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Lorem ipsum
              </h3>
              <ul className="mt-7 space-y-4">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base text-white/80 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Dolor sit
              </h3>
              <ul className="mt-7 space-y-4">
                {moreLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-base text-white/80 transition hover:text-white"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
