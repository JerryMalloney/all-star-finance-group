import Image from "next/image";
import Link from "next/link";
import React from "react";

const companyLinks = ["Home", "About us", "Seguros", "Impuestos", "Contact"];
const moreLinks = ["Email us", "Call us", "Visit us"];

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
              8095 NW 8TH ST MIAMI FLORIDA 33126
            </p>

            <div className="space-y-2 text-sm text-white/80 sm:text-base">
              <a
                className="block transition hover:text-white"
                href="mailto:lmariela1977@gmail.com"
              >
                lmariela1977@gmail.com
              </a>
              <a
                className="block transition hover:text-white"
                href="tel:+17866033503"
              >
                +1 (786) 603-3503
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:justify-self-end">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Navigation
              </h3>
              <ul className="mt-7 space-y-4">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href={
                        item === "Home"
                          ? "/"
                          : item === "About us"
                          ? "/about"
                          : item === "Seguros"
                          ? "/services"
                          : item === "Impuestos"
                          ? "/impuestos"
                          : "/contact"
                      }
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
                Contact
              </h3>
              <ul className="mt-7 space-y-4">
                {moreLinks.map((item) => (
                  <li key={item}>
                    <a
                      href={
                        item === "Email us"
                          ? "mailto:lmariela1977@gmail.com"
                          : item === "Call us"
                          ? "tel:+17866033503"
                          : "https://maps.google.com/?q=8095+NW+8TH+ST+MIAMI+FLORIDA+33126"
                      }
                      target={item === "Visit us" ? "_blank" : undefined}
                      rel={item === "Visit us" ? "noreferrer" : undefined}
                      className="text-base text-white/80 transition hover:text-white"
                    >
                      {item}
                    </a>
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
