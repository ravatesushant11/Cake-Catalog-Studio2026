import {
  CalendarDays,
  Truck,
  Leaf,
  Sparkles,
  Cake,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import {
  generalWhatsapp,
  logoAlt,
  logoImage,
  mapsUrl,
  shop,
  whatsappUrl,
} from "@/data/shop";
import { useReveal } from "./useReveal";

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl text-charcoal sm:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-cocoa">{subtitle}</p>
      )}
    </div>
  );
}

export function OrderInformation() {
  const reveal = useReveal<HTMLDivElement>();
  const items = [
    {
      icon: CalendarDays,
      title: "Order 1 Day in Advance",
      text: "Please place your cake order at least one day before your required date.",
    },
    {
      icon: Truck,
      title: "Home Delivery Available",
      text: `Home delivery is available for ${shop.deliveryCharge}.`,
    },
    {
      icon: Leaf,
      title: "100% Pure Veg",
      text: "All our cakes are pure vegetarian.",
    },
  ];

  return (
    <section className="bg-[image:var(--gradient-warm)] py-16 sm:py-20">
      <div
        ref={reveal.ref}
        className={`mx-auto grid max-w-6xl gap-4 px-5 sm:gap-5 md:grid-cols-3 lg:px-8 ${reveal.className}`}
      >
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="surface-card p-6 sm:p-7">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-champagne/70 text-cocoa">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-xl text-charcoal">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-cocoa">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function CustomCakeSection() {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section id="custom-cakes" className="bg-ivory py-16 sm:py-24">
      <div
        ref={reveal.ref}
        className={`mx-auto max-w-5xl px-5 lg:px-8 ${reveal.className}`}
      >
        <div className="overflow-hidden rounded-[2rem] border border-gold-soft/70 bg-[image:var(--gradient-champagne)] px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-14 sm:py-16">
          <span className="inline-flex size-12 items-center justify-center rounded-full bg-card text-cocoa shadow-[var(--shadow-soft)]">
            <Sparkles className="size-5" aria-hidden="true" />
          </span>
          <h2 className="mt-6 text-3xl text-charcoal sm:text-4xl">
            Have Your Own Cake Idea?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-cocoa">
            Have a special design in mind? Send us your reference or tell us what
            you are looking for and we'll discuss your requirements.
          </p>
          <a
            href={whatsappUrl(
              `Hello ${shop.name}, I have my own cake design idea. I would like to discuss my requirements.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-7 py-4 text-base font-semibold text-ivory shadow-[var(--shadow-lift)] transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Discuss Your Cake on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUs() {
  const reveal = useReveal<HTMLDivElement>();
  const items = [
    {
      icon: Leaf,
      title: "100% Pure Veg",
      text: "Every cake we prepare is pure vegetarian.",
    },
    {
      icon: Cake,
      title: "Freshly Prepared",
      text: "Cakes are made fresh for your date and occasion.",
    },
    {
      icon: Sparkles,
      title: "Beautiful Designs",
      text: "From simple cream cakes to detailed designer work.",
    },
    {
      icon: MessageCircle,
      title: "Easy WhatsApp Ordering",
      text: "Send us a message and we'll take it from there.",
    },
  ];

  return (
    <section id="about" className="bg-cream/60 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead
          eyebrow="About Us"
          title="Why Choose Shivnandan?"
          subtitle="A neighbourhood dairy and cake shop in Hiwarkheda, preparing pure veg cakes for every celebration."
        />
        <div
          ref={reveal.ref}
          className={`mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 ${reveal.className}`}
        >
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="surface-card p-6 text-center">
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-champagne/70 text-cocoa">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg text-charcoal">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowToOrder() {
  const reveal = useReveal<HTMLDivElement>();
  const steps = [
    ["01", "Browse Our Cakes", "Look through our collection of pure veg cakes."],
    ["02", "Choose Your Favourite", "Open a cake to see it in detail."],
    ["03", "Order on WhatsApp", "Tap Order Now and share your date and size."],
  ];

  return (
    <section className="bg-ivory py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHead eyebrow="Simple Process" title="How to Order" />
        <div
          ref={reveal.ref}
          className={`mt-10 grid gap-4 sm:gap-6 md:grid-cols-3 ${reveal.className}`}
        >
          {steps.map(([n, title, text]) => (
            <div key={n} className="surface-card p-7">
              <span className="font-display text-4xl text-gold">{n}</span>
              <h3 className="mt-3 text-xl text-charcoal">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cocoa">{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-sm font-semibold text-cocoa">
          Please order at least 1 day in advance.
        </p>
      </div>
    </section>
  );
}

export function ContactSection() {
  const reveal = useReveal<HTMLDivElement>();
  const rows = [
    { icon: Phone, label: "Phone", value: shop.phone, href: `tel:+91${shop.phone}` },
    { icon: Mail, label: "Email", value: shop.email, href: `mailto:${shop.email}` },
    { icon: MapPin, label: "Address", value: shop.address, href: mapsUrl },
  ];

  return (
    <section id="contact" className="bg-cream/60 py-16 sm:py-24">
      <div
        ref={reveal.ref}
        className={`mx-auto max-w-5xl px-5 lg:px-8 ${reveal.className}`}
      >
        <SectionHead
          eyebrow="Get in Touch"
          title="Contact Us"
          subtitle="Call or message us and we'll help you choose the right cake."
        />
        <div className="mt-10 surface-card p-6 sm:p-10">
          <h3 className="text-2xl text-charcoal">{shop.name}</h3>
          <p className="mt-1 text-sm text-cocoa">{shop.owner}</p>

          <dl className="mt-7 grid gap-5 sm:grid-cols-3">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <div key={label}>
                <dt className="eyebrow flex items-center gap-2">
                  <Icon className="size-3.5" aria-hidden="true" />
                  {label}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-charcoal">
                  <a
                    href={href}
                    target={label === "Address" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="hover:text-cocoa hover:underline"
                  >
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`tel:+91${shop.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-5 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-cocoa"
            >
              <Phone className="size-4" aria-hidden="true" /> Call Now
            </a>
            <a
              href={generalWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-card px-5 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
            >
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
            </a>
            <a
              href={`mailto:${shop.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-card px-5 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
            >
              <Mail className="size-4" aria-hidden="true" /> Email
            </a>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-card px-5 py-3.5 text-sm font-semibold text-charcoal transition-colors hover:bg-cream"
            >
              <MapPin className="size-4" aria-hidden="true" /> Get Directions
            </a>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            100% pure veg · Order at least 1 day in advance · Home delivery{" "}
            {shop.deliveryCharge}
          </p>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const links = [
    ["Home", "#home"],
    ["Cakes", "#cakes"],
    ["Custom Cakes", "#custom-cakes"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];

  return (
    <footer className="border-t border-border bg-ivory pb-28 pt-14 sm:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <img
            src={logoImage}
            alt={logoAlt}
            className="h-14 w-auto object-contain"
            loading="lazy"
          />
          <p className="mt-4 text-sm text-cocoa">{shop.owner}</p>
          <p className="mt-3 text-sm leading-relaxed text-cocoa">
            {shop.address}
          </p>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cocoa">
            <li>
              <a href={`tel:+91${shop.phone}`} className="hover:text-charcoal">
                {shop.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${shop.email}`} className="hover:text-charcoal">
                {shop.email}
              </a>
            </li>
          </ul>
          <ul className="mt-6 space-y-2 text-sm font-medium text-charcoal">
            <li>100% Pure Veg</li>
            <li>Order 1 Day in Advance</li>
            <li>Home Delivery {shop.deliveryCharge}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cocoa">
            {links.map(([label, href]) => (
              <li key={href}>
                <a href={href} className="hover:text-charcoal">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={generalWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-cocoa"
          >
            Order on WhatsApp <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-5 text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} {shop.name}. All rights reserved.
      </p>
    </footer>
  );
}

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-ivory/95 p-3 backdrop-blur-md sm:hidden">
      <a
        href={generalWhatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-base font-semibold text-ivory"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        Order on WhatsApp
      </a>
    </div>
  );
}
