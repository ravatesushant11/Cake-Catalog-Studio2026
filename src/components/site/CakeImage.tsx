import { useEffect, useRef, useState } from "react";
import { Cake as CakeIcon } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  sizes?: string;
};

/**
 * Renders the ORIGINAL cake photograph. If the photo file has not been added
 * yet, an elegant ivory placeholder is shown — we never substitute another
 * cake image.
 */
export function CakeImage({ src, alt, className = "", eager, sizes }: Props) {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const el = imgRef.current;
    // Catch images that already failed before hydration attached onError.
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);



  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-[image:var(--gradient-champagne)] text-center ${className}`}
        role="img"
        aria-label={`${alt} — photograph coming soon`}
      >
        <CakeIcon className="size-7 text-gold" aria-hidden="true" />
        <span className="eyebrow px-4 text-[0.62rem] leading-relaxed">
          Photo coming soon
        </span>
      </div>
    );
  }

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      sizes={sizes}
      loading={eager ? "eager" : "lazy"}
      decoding={eager ? "sync" : "async"}
      fetchPriority={eager ? "high" : "auto"}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
