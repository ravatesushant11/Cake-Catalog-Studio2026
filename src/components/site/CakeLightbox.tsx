import { useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { cakeWhatsapp, type Cake } from "@/data/shop";
import { CakeImage } from "./CakeImage";

export function CakeLightbox({ cake, onClose }: { cake: Cake | null; onClose: () => void }) {
  useEffect(() => {
    if (!cake) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [cake, onClose]);

  if (!cake) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cake.name}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/45 p-0 backdrop-blur-sm sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl overflow-hidden rounded-t-[1.75rem] border border-border bg-card shadow-[var(--shadow-lift)] sm:rounded-[1.75rem]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/90 text-charcoal backdrop-blur"
        >
          <X className="size-5" />
        </button>

        <div className="grid max-h-[88vh] overflow-y-auto sm:grid-cols-[1.2fr_1fr] sm:overflow-visible">
          <CakeImage
            src={cake.image}
            alt={`${cake.name} — 100% pure veg ${cake.category.toLowerCase()}`}
            eager
            className="aspect-square w-full bg-cream object-cover"
          />
          <div className="flex flex-col justify-center gap-3 p-6 sm:p-8">
            <p className="eyebrow">{cake.category}</p>
            <h3 className="text-2xl text-charcoal sm:text-3xl">{cake.name}</h3>
            <p className="text-sm leading-relaxed text-cocoa">{cake.description}</p>
            <p className="font-display text-lg text-charcoal">
              {cake.price === null ? "Price on WhatsApp" : `₹${cake.price}`}
            </p>
            <a
              href={cakeWhatsapp(cake.name, cake.image)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-base font-semibold text-ivory transition-colors hover:bg-cocoa"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Order Now
            </a>
            <p className="text-xs text-muted-foreground">
              100% pure veg · Please order at least 1 day in advance · Home delivery ₹100
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
