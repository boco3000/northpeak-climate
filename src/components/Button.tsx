import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "sm" | "md";

type CommonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<"button">, "className" | "children"> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  };

type Props = ButtonAsButton | ButtonAsLink;

export function Button(props: Props) {
  const { variant = "outline", size = "md", className = "", children } = props;

  const base =
    "inline-flex items-center justify-center rounded-md border font-medium transition " +
    "active:scale-[0.98] motion-reduce:active:scale-100";

  const sizes = size === "sm" ? "px-3 py-2 text-sm" : "px-4 py-2 text-sm";

  const variants =
    variant === "primary"
      ? "bg-black text-white hover:opacity-90 dark:bg-white dark:text-black"
      : variant === "ghost"
        ? "border-transparent hover:bg-black/5 dark:hover:bg-white/10"
        : "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black";

  const cls = `${base} ${sizes} ${variants} ${className}`;

  if ("href" in props) {
    const { href, ...rest } = props;
    return (
      <Link {...rest} href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={cls}>
      {children}
    </button>
  );
}
