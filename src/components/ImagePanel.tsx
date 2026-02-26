import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  src: string;
  alt: string;
  aspect?: "4/3" | "16/9" | "1/1";
  overlay?: ReactNode; 
  priority?: boolean;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

export function ImagePanel({
  src,
  alt,
  aspect = "4/3",
  overlay,
  priority = false,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border">
      <div className={`relative ${aspectClass[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        {overlay ? (
          <>
            {/* readability layer */}
            <div className="absolute inset-0 bg-black/40" />
            {/* overlay content */}
            <div className="absolute inset-0 flex items-end p-6">
              <div className="max-w-sm text-white">{overlay}</div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}