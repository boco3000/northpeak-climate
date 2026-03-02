"use client";

import { Button } from "./Button";

type Props = {
  targetId: string;
  href: string; // fallback href, e.g. "/#services"
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

export function ScrollToIdButton({
  targetId,
  href,
  children,
  variant = "outline",
  className = "",
}: Props) {
  return (
    <Button
      href={href}
      variant={variant}
      className={className}
      onClick={(e) => {
        // If already on homepage, force scroll every click
        if (window.location.pathname === "/") {
          e.preventDefault();
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      {children}
    </Button>
  );
}