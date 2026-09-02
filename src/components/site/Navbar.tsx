import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { generalWhatsapp, logoAlt, logoImage, shop } from "@/data/shop";

const links = [
  { label: "Home", href: "#home" },
  { label: "Cakes", href: "#cakes" },
  { label: "Custom Cakes", href: "#custom-cakes" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-border bg-ivory/90 backdrop-blur-md shadow-[var(--shadow-soft)]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8"
      >
        <a href="#home" aria-label={shop.name} className="flex items-center py-1">
          <img
            src={logoImage}
            alt={logoAlt}
            width={1908}
            height={654}
            className="h-11 w-auto object-contain sm:h-14"
          />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm font-medium text-cocoa transition-colors hover:text-charcoal after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={generalWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-ivory shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Order on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-charcoal lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-ivory px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-border/70 py-4 text-base font-medium text-charcoal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={generalWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-base font-semibold text-ivory"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
