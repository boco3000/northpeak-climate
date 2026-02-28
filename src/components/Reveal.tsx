"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Reveal({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect(); // reveal once
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[
        // initial state
        "transition duration-500 ease-out",
        "motion-reduce:transition-none motion-reduce:transform-none",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}