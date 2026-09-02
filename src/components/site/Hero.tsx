import { MessageCircle, Leaf, ArrowRight, CalendarClock, Bike } from "lucide-react";
import { shop, generalWhatsapp, heroImage, heroImageAlt } from "@/data/shop";
import { CakeImage } from "./CakeImage";

const trust = [
  { icon: Leaf, label: "100% Pure Veg" },
  { icon: CalendarClock, label: "Order 1 Day in Advance" },
  { icon: Bike, label: `Home Delivery ${shop.deliveryCharge}` },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[image:var(--gradient-warm)] pb-20 pt-28 sm:pb-28 sm:pt-36"
    >
      {/* soft luxury depth */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-40 size-[34rem] rounded-full bg-champagne/45 blur-[90px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[26rem] rounded-full bg-beige/50 blur-[80px]"
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 hidden w-[42rem] -translate-x-1/2 text-gold/25 lg:block"
        viewBox="0 0 600 120"
        fill="none"
      >
        <path
          d="M0 90C120 20 240 20 300 60s180 40 300-30"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8">
        {/* ---------- copy ---------- */}
        <div className="hero-in text-center lg:text-left">
          <p className="eyebrow font-semibold">{shop.name}</p>

          <h1 className="mt-5 text-[2.4rem] leading-[1.04] text-charcoal sm:text-6xl lg:text-[4.15rem]">
            Sweet Moments Deserve a{" "}
            <span className="relative italic text-cocoa">
              Beautiful Cake
              <svg
                aria-hidden="true"
                className="absolute -bottom-2 left-0 w-full text-gold/60"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M1 6C50 1 150 1 199 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cocoa sm:text-lg lg:mx-0">
            Freshly prepared 100% pure veg cakes for birthdays, anniversaries and
            every special celebration.
          </p>

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold-soft bg-card px-4 py-2 text-[0.68rem] font-semibold tracking-[0.18em] text-veg uppercase shadow-[var(--shadow-soft)]">
            <Leaf className="size-3.5" aria-hidden="true" />
            100% Pure Veg
          </span>

          {/* hero image on mobile sits before the CTAs */}
          <div className="mt-11 lg:hidden">
            <HeroVisual />
            <HeroActions />
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
            {trust.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 text-sm font-medium text-cocoa"
              >
                <Icon className="size-4 text-gold" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- visual (desktop) ---------- */}
        <div className="hidden lg:block">
          <HeroVisual />
          <HeroActions />
        </div>
      </div>
    </section>
  );
}

function HeroActions() {
  return (
    <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
      <a
        href="#cakes"
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-base font-semibold text-ivory shadow-[var(--shadow-lift)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa"
      >
        Explore Our Cakes
        <ArrowRight
          className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
      <a
        href={generalWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-soft bg-card px-7 py-4 text-base font-semibold text-charcoal shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
      >
        <MessageCircle className="size-4 text-veg" aria-hidden="true" />
        Order on WhatsApp
      </a>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual relative mx-auto max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="absolute inset-x-8 -bottom-5 h-24 rounded-full bg-champagne/70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="hero-float absolute -left-4 top-10 size-16 rounded-full border border-gold/30 sm:-left-6 sm:size-20"
      />
      <div
        aria-hidden="true"
        className="hero-float absolute -right-3 bottom-16 size-10 rounded-full bg-[image:var(--gradient-champagne)] shadow-[var(--shadow-soft)] [animation-delay:1.4s]"
      />

      <div className="relative overflow-hidden rounded-t-[14rem] rounded-b-[3rem] border border-gold-soft/70 bg-card p-3 shadow-[var(--shadow-lift)]">
        <CakeImage
          src={heroImage}
          alt={heroImageAlt}
          eager
          sizes="(min-width: 1024px) 45vw, 90vw"
          className="aspect-4/5 w-full rounded-t-[13rem] rounded-b-[2.4rem] object-cover"
        />
      </div>
    </div>
  );
}
