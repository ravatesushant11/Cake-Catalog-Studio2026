import { MessageCircle } from "lucide-react";
import { cakeWhatsapp, type Cake } from "@/data/shop";
import { CakeImage } from "./CakeImage";

export function CakeCard({ cake, onOpen }: { cake: Cake; onOpen: (cake: Cake) => void }) {
  return (
    <article className="group surface-card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]">
      <button
        type="button"
        onClick={() => onOpen(cake)}
        aria-label={`View ${cake.name} larger`}
        className="relative block overflow-hidden bg-cream"
      >
        <CakeImage
          src={cake.image}
          alt={`${cake.name} — 100% pure veg ${cake.category.toLowerCase()}`}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
        />
        <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/45 to-transparent px-3 pb-3 pt-8 text-left text-sm font-semibold text-ivory sm:px-4 sm:pb-4 sm:text-base">
          {cake.name}
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <p className="eyebrow">{cake.category}</p>
        <h3 className="mt-2 text-base leading-snug text-charcoal sm:text-lg">{cake.name}</h3>
        <p className="mt-2 text-sm font-medium text-cocoa">
          {cake.price === null ? "Price on WhatsApp" : `₹${cake.price}`}
        </p>
        <a
          href={cakeWhatsapp(cake.name, cake.image)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-4 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-cocoa"
        >
          <MessageCircle className="size-4" aria-hidden="true" />
          Order Now
        </a>
      </div>
    </article>
  );
}
