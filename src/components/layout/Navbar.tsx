"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-10 w-full py-1 transition-all duration-300 ${
        isScrolled ? "bg-black/40 backdrop-blur-2xl" : "bg-transparent"
      }`}
    >
      <div className="">
        <div className="mx-auto flex container items-center justify-between px-4 py-2 text-xs font-medium text-brand-primary sm:px-6 lg:px-8">
          <div className="hidden flex-wrap items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              <FiMapPin className="h-4 w-4" />
              <span>8095 NW 8TH ST MIAMI FLORIDA 33126</span>
            </div>
            <div className="flex items-center gap-2">
              <FiPhone className="h-4 w-4" />
              <a
                className="transition hover:text-white"
                href="tel:+17866033503"
              >
                +1 (786) 603-3503
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="h-4 w-4" />
              <a
                className="transition hover:text-white"
                href="mailto:lmariela1977@gmail.com"
              >
                lmariela1977@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              className="transition hover:text-white"
              href="https://www.facebook.com/share/1GeDf8q1H6/?mibextid=wwXIfr"
              aria-label="Facebook"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              className="transition hover:text-white"
              href="https://www.instagram.com/allstarfinancegroupllc?utm_source=qr&igsh=NTg3bjB3OGk2aGlj"
              aria-label="Instagram"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto flex container items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="sr-only">All Star Finance Group</span>
          <Image
            src="/logo.png"
            alt="All Star Finance Group"
            width={200}
            height={64}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-8 md:flex"
        >
          <Link
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="/"
          >
            Inicio
          </Link>
          <Link
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="/about"
          >
            Sobre Nosotros
          </Link>
          <Link
            className="group inline-flex items-center gap-1 text-sm font-medium text-white transition hover:text-brand-primary"
            href="/services"
          >
            Seguros
          </Link>
          <Link
            className="group inline-flex items-center gap-1 text-sm font-medium text-white transition hover:text-brand-primary"
            href="/impuestos"
          >
            Impuestos
          </Link>
          <Link
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="/contact"
          >
            Contacto
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white transition hover:border-brand-primary hover:text-brand-primary md:hidden"
              type="button"
              aria-label="Abrir menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>

          <SheetContent
            className="border-zinc-200 bg-white text-zinc-900"
            side="right"
          >
            <SheetTitle className="sr-only">Menú móvil</SheetTitle>
            <div className="mt-10 flex h-full flex-col gap-6 px-2 pb-6">
              <nav aria-label="Móvil" className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/"
                  >
                    Inicio
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/about"
                  >
                    Sobre Nosotros
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/services"
                  >
                    Seguros
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/impuestos"
                  >
                    Impuestos
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/contact"
                  >
                    Contacto
                  </Link>
                </SheetClose>
              </nav>

              <div className="h-px w-full bg-zinc-200" />

              <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700">
                <div>
                  <p className="font-semibold text-zinc-900">Ubicación</p>
                  <p>8095 NW 8TH ST MIAMI FLORIDA 33126</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Teléfono</p>
                  <a
                    className="transition hover:text-brand-primary"
                    href="tel:+17866033503"
                  >
                    +1 (786) 603-3503
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">
                    Correo electrónico
                  </p>
                  <a
                    className="transition hover:text-brand-primary"
                    href="mailto:lmariela1977@gmail.com"
                  >
                    lmariela1977@gmail.com
                  </a>
                </div>
              </div>

              <div className="mt-auto flex items-center gap-2 pt-2">
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition hover:border-brand-primary hover:text-brand-primary"
                  href="https://www.facebook.com/share/1GeDf8q1H6/?mibextid=wwXIfr"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="h-5 w-5" />
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition hover:border-brand-primary hover:text-brand-primary"
                  href="https://www.instagram.com/allstarfinancegroupllc?utm_source=qr&igsh=NTg3bjB3OGk2aGlj"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
