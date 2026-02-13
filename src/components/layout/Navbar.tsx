import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-10 w-full py-5">
      <div className="">
        <div className="mx-auto flex container items-center justify-between px-4 py-2 text-xs font-medium text-brand-primary sm:px-6 lg:px-8">
          <div className="hidden flex-wrap items-center gap-4 md:flex">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s-7-4.35-7-10a7 7 0 1 1 14 0c0 5.65-7 10-7 10Z"
                />
                <circle cx="12" cy="11" r="2.5" />
              </svg>
              <span>Example 123, Example 123</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 6l8 7 8-7M4 18h16"
                />
              </svg>
              <a
                className="transition hover:text-white"
                href="mailto:example@example.com"
              >
                Example@example.com
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
        <a className="flex items-center gap-3" href="#">
          <span className="sr-only">All Star Finance Group</span>
          <Image
            src="/logo.png"
            alt="All Star Finance Group"
            width={220}
            height={64}
            className="h-12 w-auto md:h-14"
            priority
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <a
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="#"
          >
            About us
          </a>
          <button
            className="group inline-flex items-center gap-1 text-sm font-medium text-white transition hover:text-brand-primary"
            type="button"
          >
            Services
            <svg
              className="h-3 w-3 text-white transition group-hover:text-brand-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <a
            className="text-sm font-medium text-white transition hover:text-brand-primary"
            href="#"
          >
            Contacts
          </a>
        </nav>

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
      </div>
    </header>
  );
};

export default Navbar;
