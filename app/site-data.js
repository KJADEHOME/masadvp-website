export const siteUrl = "https://www.masadvp.com";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Product", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Contact Us", href: "/contact" }
];

export const footerItems = [
  ...navItems,
  { label: "Privacy Policy", href: "/privacy-policy" }
];

export const heroSlides = [
  {
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1600&q=80",
    alt: "Children playing outdoors"
  },
  {
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=80",
    alt: "Colorful toy collection"
  },
  {
    image:
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?auto=format&fit=crop&w=1600&q=80",
    alt: "Children's toys and learning products"
  },
  {
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1600&q=80",
    alt: "Bright toy blocks"
  },
  {
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1600&q=80",
    alt: "Home and family lifestyle products"
  }
];

export const pageHeroImage =
  "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=1600&q=80";

const sunglassesImages = [
  "sunglasses-01.jpg","sunglasses-02.jpg","sunglasses-03.jpg","sunglasses-04.jpg","sunglasses-05.jpg",
  "sunglasses-06.jpg","sunglasses-07.jpg","sunglasses-08.jpg","sunglasses-09.jpg","sunglasses-10.jpg",
  "sunglasses-11.jpg","sunglasses-12.jpg","sunglasses-13.jpg","sunglasses-14.jpg","sunglasses-15.jpg"
];

const toyImages = [
  "toy-10.jpg","toy-01.jpg","toy-02.jpg","toy-03.jpg","toy-04.jpg","toy-05.jpg","toy-06.jpg","toy-07.jpg","toy-08.jpg","toy-09.jpg","toy-11.jpg","toy-12.jpg","toy-13.jpg","toy-14.jpg","toy-15.jpg"
];

const homeTextileImages = [
  "hometextile-01.jpg","hometextile-02.jpg","hometextile-03.jpg","hometextile-04.jpg","hometextile-05.jpg","hometextile-06.jpg","hometextile-07.jpg","hometextile-08.jpg","hometextile-09.jpg","hometextile-10.jpg","hometextile-11.jpg","hometextile-12.jpg","hometextile-13.jpg","hometextile-14.jpg","hometextile-15.jpg","hometextile-16.jpg","hometextile-17.jpg","hometextile-18.jpg","hometextile-19.jpg"
];

const sportingGoodsImages = [
  "sporting-01.jpg","sporting-02.jpg","sporting-03.jpg","sporting-04.jpg","sporting-05.jpg",
  "sporting-06.jpg","sporting-07.jpg","sporting-08.jpg","sporting-09.jpg","sporting-10.jpg",
  "sporting-11.jpg","sporting-12.jpg"
];

const shoesImages = [
  "shoes-01.jpg","shoes-02.jpg","shoes-03.jpg","shoes-04.jpg","shoes-05.jpg","shoes-06.jpg",
  "shoes-07.jpg","shoes-08.jpg","shoes-09.jpg","shoes-10.jpg","shoes-11.jpg","shoes-12.jpg",
  "shoes-13.jpg","shoes-14.jpg","shoes-15.jpg","shoes-16.jpg","shoes-17.jpg","shoes-18.jpg",
  "shoes-19.jpg","shoes-20.jpg","shoes-21.jpg","shoes-22.jpg"
];

const paperImages = [
  "paper-01.jpg","paper-02.jpg","paper-03.jpg","paper-04.jpg","paper-05.jpg","paper-06.jpg","paper-07.jpg"
];

const homeDecoImages = ["home-decor.jpg"];
const umbrellaImages = [
  "umbrella-01.jpg","umbrella-02.jpg","umbrella-03.jpg","umbrella-04.jpg","umbrella-05.jpg","umbrella-06.jpg",
  "umbrella-07.jpg","umbrella-08.jpg","umbrella-09.jpg","umbrella-10.jpg","umbrella-11.jpg","umbrella-12.jpg",
  "umbrella-13.jpg","umbrella-14.jpg","umbrella-15.jpg"
];

const petImages = [
  "pet-01.jpg","pet-02.jpg","pet-03.jpg","pet-04.jpg","pet-05.jpg","pet-06.jpg",
  "pet-07.jpg","pet-08.jpg","pet-09.jpg","pet-10.jpg","pet-11.jpg","pet-12.jpg",
  "pet-13.jpg","pet-14.jpg","pet-15.jpg","pet-16.jpg","pet-17.jpg","pet-18.jpg",
  "pet-19.jpg","pet-20.jpg","pet-21.jpg","pet-22.jpg","pet-23.jpg","pet-24.jpg",
  "pet-25.jpg","pet-26.jpg","pet-27.jpg","pet-28.jpg","pet-29.jpg","pet-30.jpg",
  "pet-31.jpg","pet-32.jpg","pet-33.jpg","pet-34.jpg"
];

function makeProducts(imageFiles, label) {
  return imageFiles.map((file, index) => ({
    name: `${label} ${index + 1}`,
    image: `/assets/${file}`,
    detail: `${label} product sample ${index + 1}.`
  }));
}

export const productCategories = [
  {
    slug: "sunglasses",
    name: "Sunglasses & Ski Goggles",
    summary:
      "Sunglasses and ski goggles sourcing for retail, sport and outdoor promotions.",
    image: "/assets/sunglasses-cover.jpg",
    subcategories: ["Fashion Sunglasses", "Sport Goggles", "Ski Goggles"],
    products: makeProducts(sunglassesImages, "Sunglasses")
  },
  {
    slug: "toy",
    name: "Toy",
    summary:
      "Plastic toys, plush toys, wooden toys, pet toys and remote control product sourcing support.",
    image: "/assets/toy-cover.jpg",
    subcategories: ["Plastic Toy", "Plush Toy", "Wooden Toy", "Pets Toy", "RC Toy"],
    products: makeProducts(toyImages, "Toy")
  },
  {
    slug: "hometextile",
    name: "Hometextile",
    summary:
      "Home textile development resources for everyday family, nursery and lifestyle ranges.",
    image: "/assets/hometextile.jpg",
    subcategories: ["Bedding", "Nursery Textile", "Cushion", "Blanket"],
    products: makeProducts(homeTextileImages, "Home Textile")
  },
  {
    slug: "sporting-goods",
    name: "Sporting goods",
    summary:
      "Sporting, outdoor and activity items for family recreation and retail programs.",
    image: "/assets/sporting-scene.jpg",
    subcategories: ["Outdoor Play", "Training Items", "Recreation"],
    products: makeProducts(sportingGoodsImages, "Sporting Goods")
  },
  {
    slug: "shoes",
    name: "Shoes",
    summary:
      "Seasonal, lifestyle and children-oriented footwear sourcing coordination.",
    image: "/assets/shoes-cover.jpg",
    subcategories: ["Casual Shoes", "Children Shoes", "Seasonal Footwear"],
    products: makeProducts(shoesImages, "Shoes")
  },
  {
    slug: "paper-items",
    name: "Paper Items",
    summary:
      "Paper-based products, packaging and stationery support for lifestyle ranges.",
    image: "/assets/paper-cover.jpg",
    subcategories: ["Stationery", "Packaging", "Paper Gifts"],
    products: makeProducts(paperImages, "Paper Items")
  },
  {
    slug: "home-deco",
    name: "Home Deco",
    summary:
      "Home decoration and lifestyle products for retail, promotional and private label programs.",
    image: "/assets/home-decor.jpg",
    subcategories: ["Room Decor", "Storage", "Lifestyle Gifts"],
    externalUrl: "https://www.kjadehome.com/",
    products: makeProducts(homeDecoImages, "Home Deco")
  },
  {
    slug: "umbrella",
    name: "Umbrella",
    summary:
      "Umbrella and weather protection sourcing for retail, promotional and seasonal programs.",
    image: "/assets/20140705051341K4BceK4Bce.jpg",
    subcategories: ["Rain Umbrella", "Folding Umbrella", "Fashion Umbrella"],
    products: makeProducts(umbrellaImages, "Umbrella")
  },
  {
    slug: "pet",
    name: "Pet",
    summary:
      "Pet furniture, beds, apparel, bags, accessories and toy sourcing for pet brands and retail programs.",
    image: "/assets/pet-01.jpg",
    subcategories: ["Cat Tree", "Pet Bed", "Pet Apparel", "Pet Accessories", "Pet Bag", "Pet Toy"],
    products: makeProducts(petImages, "Pet")
  }
];

export const capabilities = [
  {
    title: "Compliant Factory Resources",
    text: "Supplier resources supporting requirements such as ICTI, GSV, BSCI and COC."
  },
  {
    title: "Product Development",
    text: "Coordinating design ideas, samples, materials, packing and production follow-up."
  },
  {
    title: "Multi-Category Sourcing",
    text: "Toy, home textile, home decor, seasonal, paper and hardline product support."
  },
  {
    title: "Global Customer Support",
    text: "Serving international retail and sourcing teams with responsive communication."
  }
];

export const newsItems = [
  {
    title: "Product Sourcing Support for Global Lifestyle Programs",
    date: "2026-08-03",
    excerpt:
      "MASA continues to support toy, home textile and home lifestyle product development for international customers."
  },
  {
    title: "Compliance-Focused Supplier Coordination",
    date: "2026-07-18",
    excerpt:
      "Factory compliance resources remain an important part of MASA's sourcing and supplier communication process."
  },
  {
    title: "New Website Experience in Development",
    date: "2026-07-10",
    excerpt:
      "MASA is preparing a refreshed website with clearer product categories, inquiry forms and search-friendly structure."
  }
];

export const pageHeroAboutImage = "/assets/hero-about.jpg";
export const pageHeroProductImage = "/assets/hero-product.jpg";
export const pageHeroNewsImage = "/assets/hero-news.jpg";
export const pageHeroContactImage = "/assets/hero-contact.jpg";
