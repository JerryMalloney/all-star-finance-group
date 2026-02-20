"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
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
              href="https://x.com"
              aria-label="Twitter"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.53 3.5h2.74l-6 6.86L21 20.5h-5.2l-4.07-5.03L6.6 20.5H3.85l6.42-7.34L3 3.5h5.33l3.68 4.6 5.52-4.6Zm-.96 15.46h1.52L7.6 4.91H6.02l10.55 14.05Z" />
              </svg>
            </a>
            <a
              className="transition hover:text-white"
              href="https://instagram.com"
              aria-label="Instagram"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 10.5Zm5.5-3.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
              </svg>
            </a>
            <a
              className="transition hover:text-white"
              href="https://linkedin.com"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3.5A2 2 0 1 0 5.2 7.5a2 2 0 0 0 .02-4ZM20.5 20h-3.4v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86V20H9.8V8.5h3.27v1.57h.05c.45-.86 1.55-1.77 3.18-1.77 3.4 0 4.02 2.24 4.02 5.15V20Z" />
              </svg>
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

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <Link
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="/"
          >
            Home
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
            Contact
          </Link>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <button
              className="inline-flex items-center justify-center rounded-md border border-white/30 p-2 text-white transition hover:border-brand-primary hover:text-brand-primary md:hidden"
              type="button"
              aria-label="Open menu"
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
            <SheetTitle className="sr-only">Mobile menu</SheetTitle>
            <div className="mt-10 flex h-full flex-col gap-6 px-2 pb-6">
              <nav aria-label="Mobile" className="flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/"
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    className="rounded-md px-3 py-2 text-base font-medium transition hover:bg-brand-primary/10 hover:text-brand-primary"
                    href="/about"
                  >
                    About us
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
                    Contact
                  </Link>
                </SheetClose>
              </nav>

              <div className="h-px w-full bg-zinc-200" />

              <div className="space-y-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-700">
                <div>
                  <p className="font-semibold text-zinc-900">Location</p>
                  <p>8095 NW 8TH ST MIAMI FLORIDA 33126</p>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Phone</p>
                  <a
                    className="transition hover:text-brand-primary"
                    href="tel:+17866033503"
                  >
                    +1 (786) 603-3503
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-zinc-900">Email</p>
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
                  href="https://x.com"
                  aria-label="Twitter"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.53 3.5h2.74l-6 6.86L21 20.5h-5.2l-4.07-5.03L6.6 20.5H3.85l6.42-7.34L3 3.5h5.33l3.68 4.6 5.52-4.6Zm-.96 15.46h1.52L7.6 4.91H6.02l10.55 14.05Z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition hover:border-brand-primary hover:text-brand-primary"
                  href="https://instagram.com"
                  aria-label="Instagram"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5A5.5 5.5 0 1 1 6.5 12 5.5 5.5 0 0 1 12 8.5Zm0 2A3.5 3.5 0 1 0 15.5 12 3.5 3.5 0 0 0 12 10.5Zm5.5-3.75a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
                  </svg>
                </a>
                <a
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-zinc-200 text-zinc-700 transition hover:border-brand-primary hover:text-brand-primary"
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M6.94 8.5H3.5V20h3.44V8.5ZM5.22 3.5A2 2 0 1 0 5.2 7.5a2 2 0 0 0 .02-4ZM20.5 20h-3.4v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.08 1.41-2.08 2.86V20H9.8V8.5h3.27v1.57h.05c.45-.86 1.55-1.77 3.18-1.77 3.4 0 4.02 2.24 4.02 5.15V20Z" />
                  </svg>
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
