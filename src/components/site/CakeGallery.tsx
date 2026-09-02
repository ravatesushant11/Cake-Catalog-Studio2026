import { useMemo, useState } from "react";
import { cakes, categories, type Cake } from "@/data/shop";
import { CakeCard } from "./CakeCard";
import { CakeLightbox } from "./CakeLightbox";
import { useReveal } from "./useReveal";

export function CakeGallery() {
  const [active, setActive] = useState<string>("All Cakes");
  const [open, setOpen] = useState<Cake | null>(null);
  const reveal = useReveal<HTMLDivElement>();

  const shown = useMemo(
    () =>
      active === "All Cakes"
        ? cakes
        : cakes.filter((c) => c.category === active),
    [active],
  );

  return (
    <section id="cakes" className="bg-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Collection</p>
          <h2 className="mt-3 text-4xl text-charcoal sm:text-5xl">Our Cakes</h2>
          <p className="mt-4 text-base leading-relaxed text-cocoa">
            Choose from our collection of freshly prepared 100% pure veg cakes.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Cake categories"
          className="mt-9 flex flex-wrap justify-center gap-2 sm:gap-3"
        >
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={isActive}
                type="button"
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] transition-all sm:px-5 ${
                  isActive
                    ? "border-charcoal bg-charcoal text-ivory shadow-[var(--shadow-soft)]"
                    : "border-border bg-card text-cocoa hover:border-gold-soft hover:bg-cream"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div
          ref={reveal.ref}
          className={`mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 ${reveal.className}`}
        >
          {shown.map((cake) => (
            <CakeCard key={cake.id} cake={cake} onOpen={setOpen} />
          ))}
        </div>

        {shown.length === 0 && (
          <p className="mt-10 text-center text-sm text-cocoa">
            No cakes in this category yet — message us on WhatsApp and we'll
            help.
          </p>
        )}
      </div>

      <CakeLightbox cake={open} onClose={() => setOpen(null)} />
    </section>
  );
}
