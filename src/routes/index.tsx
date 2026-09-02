import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { CakeGallery } from "@/components/site/CakeGallery";
import {
  ContactSection,
  CustomCakeSection,
  Footer,
  HowToOrder,
  MobileOrderBar,
  OrderInformation,
  WhyChooseUs,
} from "@/components/site/Sections";
import { shop, mapsUrl } from "@/data/shop";

const title = "Shivnandan Doodh Dairy & Cake Shop | 100% Pure Veg Cakes";
const description =
  "Shivnandan Doodh Dairy & Cake Shop offers freshly prepared 100% pure veg cakes for birthdays, anniversaries and special occasions. Order through WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Bakery",
          name: shop.name,
          description,
          telephone: `+91${shop.phone}`,
          email: shop.email,
          servesCuisine: "Cakes",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Hiwarkheda Road, Yeole Complex, Near Vanimangal Karyalay",
            postalCode: "431103",
            addressCountry: "IN",
          },
          hasMap: mapsUrl,
          founder: { "@type": "Person", name: shop.owner },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main>
        <Hero />
        <OrderInformation />
        <CakeGallery />
        <CustomCakeSection />
        <WhyChooseUs />
        <HowToOrder />
        <ContactSection />
      </main>
      <Footer />
      <MobileOrderBar />
    </div>
  );
}
