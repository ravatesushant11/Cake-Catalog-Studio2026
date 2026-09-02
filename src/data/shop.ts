/**
 * SINGLE SOURCE OF TRUTH — edit business info and cake data here only.
 *
 * IMAGES: drop the 40 original cake photographs into  public/images/cakes/
 * named cake-01.jpg ... cake-40.jpg (or change the `image` path below).
 * Until a file exists, the card shows an elegant placeholder — no cake is
 * ever invented or AI-generated.
 */

export const shop = {
  name: "Shivnandan Doodh Dairy & Cake Shop",
  brandTop: "Shivnandan",
  brandBottom: "Doodh Dairy & Cake Shop",
  owner: "Nikhil Vijay Baware",
  phone: "7058581436",
  phoneIntl: "917058581436",
  email: "bawarenikhil2@gmail.com",
  address:
    "Hiwarkheda Road, Yeole Complex, Near Vanimangal Karyalay, 431103",
  deliveryCharge: "₹100",
} as const;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  shop.address,
)}`;

export function whatsappUrl(message: string) {
  return `https://wa.me/${shop.phoneIntl}?text=${encodeURIComponent(message)}`;
}

/** Main "Order on WhatsApp" CTA — exact link provided by the shop owner. */
export const generalWhatsapp =
  "https://api.whatsapp.com/send/?phone=917058581436&text=Hello+Shivnandan+Doodh+Dairy+%26+Cake+Shop%2C%0AI+would+like+to+place+a+cake+order.%0A%0APlease+share+the+available+cake+designs%2C+sizes%2C+prices+and+delivery+details.%0A%0AThank+you.&type=phone_number&app_absent=0";

export function cakeWhatsapp(cakeName: string, cakeImage: string) {
  const imageUrl =
    typeof window === "undefined"
      ? cakeImage
      : new URL(cakeImage, window.location.origin).href;

  return whatsappUrl(
    `Hello ${shop.name}, I would like to order ${cakeName}. Please share the available sizes, price, and delivery details.\n\nCake photo: ${imageUrl}`,
  );
}

export const categories = [
  "All Cakes",
  "Birthday Cakes",
  "Chocolate Cakes",
  "Anniversary Cakes",
  "Designer Cakes",
  "Custom Cakes",
] as const;

export type Category = Exclude<(typeof categories)[number], "All Cakes">;

export type Cake = {
  id: number;
  name: string;
  category: Category;
  image: string;
  /** null => shows "Price on WhatsApp". Never invent a price. */
  price: number | null;
  description: string;
};

const plan: Array<[string, Category, string]> = [
  ["Pink Ruffle Pearl Cake", "Birthday Cakes", "A pink ruffle cake decorated with elegant sugar pearls."],
  ["Pink Butterfly Cake", "Birthday Cakes", "A cheerful pink cake decorated with delicate butterflies."],
  ["Pink Butterfly Tiered Cake", "Designer Cakes", "A tiered pink celebration cake with butterfly details."],
  ["Chhota Bheem Birthday Cake", "Custom Cakes", "A colourful Chhota Bheem themed cake for a fun birthday."],
  ["Chhota Bheem Green and Blue Cake", "Custom Cakes", "A green and blue Chhota Bheem themed celebration cake."],
  ["White and Red Rose Birthday Cake", "Birthday Cakes", "A white cake decorated with red roses for a birthday celebration."],
  ["White and Red Rose Wedding Cake", "Anniversary Cakes", "An elegant white wedding cake decorated with red roses."],
  ["Blue and White Swirl Cake", "Birthday Cakes", "A blue and white cake finished with smooth swirl piping."],
  ["Blue Ocean Pearl Cake", "Birthday Cakes", "A blue and white celebration cake decorated with pearl sprinkles."],
  ["Red Velvet Rose Cake", "Birthday Cakes", "A red velvet style cake decorated with elegant cream roses."],
  ["Red and Pink Rose Birthday Cake", "Birthday Cakes", "A birthday cake decorated with red and pink roses."],
  ["Red Rose Celebration Cake", "Birthday Cakes", "A celebration cake decorated with elegant red roses."],
  ["Purple and White Flower Cake", "Designer Cakes", "A purple and white cake decorated with elegant piped flowers."],
  ["Pink Kitty Dream Cake", "Custom Cakes", "A playful pink kitty-themed cake for a dreamy celebration."],
  ["Sunshine Blossom Cake", "Birthday Cakes", "A bright celebration cake decorated with cheerful blossom details."],
  ["Black Chocolate Almond Cake", "Chocolate Cakes", "A rich black chocolate cake finished with almond decoration."],
  ["Sunny Floral Dream Cake", "Birthday Cakes", "A bright celebration cake decorated with cheerful floral details."],
  ["Blue Cherry Drip Cake", "Birthday Cakes", "A blue celebration cake with cherries and a drip finish."],
  ["Royal Blue Pearl Cake", "Birthday Cakes", "A royal blue celebration cake decorated with elegant pearls."],
  ["Black Chocolate Drip Birthday Cake", "Birthday Cakes", "A dark chocolate birthday cake with a glossy drip finish."],
  ["Golden Bloom Cake", "Birthday Cakes", "A bright celebration cake with a warm golden bloom design."],
  ["Pistachio Saffron Blossom", "Designer Cakes", "An elegant blossom cake inspired by pistachio and saffron tones."],
  ["Pink Buttercream Rosette Cake", "Birthday Cakes", "A pink buttercream cake decorated with elegant rosettes."],
  ["Ombre Cream Designer Cake", "Designer Cakes", "Smooth ombre cream finish."],
  ["Chocolate Bar Loaded Cake", "Chocolate Cakes", "Loaded with chocolate bars and a rich drizzle finish."],
  ["Sweet Blue Ocean Dream Cake", "Birthday Cakes", "A dreamy blue celebration cake with ocean-inspired details."],
  ["Red Rose Birthday Cake", "Birthday Cakes", "A white celebration cake decorated with red and pink roses."],
  ["Blue Number Celebration Cake", "Birthday Cakes", "A blue celebration cake decorated with a personalised number."],
  ["White Gold Floral Drip Cake", "Designer Cakes", "A white cake with golden drip decoration and fresh floral details."],
  ["Black Chocolate Birthday Cake", "Chocolate Cakes", "A dark chocolate birthday cake with cream rosettes and sprinkles."],
  ["Chocolate Bar Birthday Cake", "Chocolate Cakes", "A chocolate drip cake decorated with chocolate bars and a birthday topper."],
  ["Red and Pink Butterfly Cake", "Birthday Cakes", "A white celebration cake decorated with pink butterflies and red ribbons."],
  ["Doraemon Theme Cake", "Custom Cakes", "A colourful Doraemon themed cake for a fun celebration."],
  ["Barbie Doll Cake", "Custom Cakes", "A purple designer cake decorated with a Barbie doll."],
  ["Barbie Butterfly Doll Cake", "Custom Cakes", "A lavender rosette cake decorated with butterflies and a Barbie doll."],
  ["Barbie Butterfly Doll Cake", "Custom Cakes", "A lavender rosette cake decorated with butterflies and a Barbie doll."],
  ["Pink Butterfly Celebration Cake", "Birthday Cakes", "A pink and white celebration cake with delicate butterfly details."],
  ["Doraemon Theme Cake", "Custom Cakes", "A colourful Doraemon themed cake for a fun celebration."],
  ["Pink Butterfly Celebration Cake", "Birthday Cakes", "A pink and white celebration cake with delicate butterfly details."],
  ["Pink Buttercream Rosette Cake", "Birthday Cakes", "A pink buttercream cake decorated with elegant rosettes."],
];

export const cakes: Cake[] = plan.map(([name, category, description], i) => ({
  id: i + 1,
  name,
  category,
  image: `/images/cakes/cake-${String(i + 1).padStart(2, "0")}.jpg`,
  price: null,
  description,
}));

/**
 * BRAND ASSETS — single source of truth.
 * Replace these two files to update the whole site:
 *   public/images/logo/logo.png       → logo (navbar + footer)
 *   public/images/hero/hero-cake.jpg  → hero image
 */
export const logoImage = "/images/logo/logo.png";
export const logoAlt = `${shop.name} logo`;

export const heroImage = "/images/hero/hero-cake.jpg";
export const heroImageAlt =
  "Freshly prepared 100% pure veg celebration cake from Shivnandan Doodh Dairy & Cake Shop";
