"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { useState } from "react";

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
    <header className="border-b">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          NorthPeak Climate
        </Link>

        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            {nav.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:underline ${
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

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center rounded-md border px-3 py-2 text-sm sm:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? "Close" : "Menu"}
          </button>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Request Service
          </Link>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t sm:hidden">
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
