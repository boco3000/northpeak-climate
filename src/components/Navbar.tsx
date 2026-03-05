"use client";

import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { useState } from "react";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <Container className="flex h-24 items-center justify-between sm:h-28">
        <Link
          href="/"
          className="flex shrink-0 items-center select-none transition duration-200 ease-out hover:-translate-y-0.5"
        >
          {/* Single source logo to keep size identical across themes */}
          <Image
            src="/logo-horizontal-dark.png"
            alt="NorthPeak Climate"
            width={950}
            height={250}
            priority
            className="block select-none h-auto w-[180px] sm:w-[220px] lg:w-[260px] dark:invert"
          />
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="hidden items-center gap-6 text-sm font-medium tracking-tight md:flex">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-md px-2 py-1 transition duration-200 ease-out hover:bg-white/5 hover:underline ${
                    isActive
                      ? "font-medium underline"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Button href="/contact" variant="outline" className="px-3 py-2">
            <span className="md:hidden">Request</span>
            <span className="hidden md:inline">Request Service</span>
          </Button>
          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`absolute h-[2px] w-6 bg-current transition duration-200 ease-out ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-current transition duration-200 ease-out ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-current transition duration-200 ease-out ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t md:hidden">
          <Container className="py-3">
            <nav className="flex flex-col gap-2 text-sm">
              {nav.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2 transition ${
                      isActive
                        ? "bg-black text-white dark:bg-white dark:text-black"
                        : "opacity-80 hover:opacity-100 hover:bg-black/5 dark:hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
