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

export const pageHeroImage = "/assets/pagehero.jpg";

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
    metaTitle: "Sunglasses & Ski Goggles Sourcing from China | MASA",
    summary:
      "Sunglasses and ski goggles sourcing for retail, sport and outdoor promotions.",
    intro: [
      "MASA Development International helps retailers, importers and promotional buyers source sunglasses and ski goggles directly from certified factories in China. Our range covers fashion sunglasses, sport sunglasses, polarized lenses, kids sunglasses, ski goggles and snowboard goggles, with full support for OEM designs, custom logos, lens coatings and retail-ready packaging.",
      "With sourcing offices in Shanghai and Yiwu, we audit every factory for quality systems and compliance before production, and coordinate samples, inspection and shipment so your eyewear program arrives on schedule. Whether you need seasonal promotion volumes or a private label eyewear collection, our team provides responsive quotations and factory-matched solutions."
    ],
    image: "/assets/sunglasses-cover.jpg",
    subcategories: ["Fashion Sunglasses", "Sport Goggles", "Ski Goggles"],
    products: makeProducts(sunglassesImages, "Sunglasses")
  },
  {
    slug: "toy",
    name: "Toy",
    metaTitle: "Toy Sourcing & Manufacturing in China | MASA",
    summary:
      "Plastic toys, plush toys, wooden toys, pet toys and remote control product sourcing support.",
    intro: [
      "Toys are our founding category. Since 2008 MASA has supported international retailers, toy brands and supermarkets with toy sourcing and manufacturing across China, covering plastic toys, plush and stuffed toys, wooden toys, educational toys, remote control toys, die-cast vehicles and dolls.",
      "Every toy factory in our supplier network is audited for ICTI, GSV, BSCI and COC compliance, and we coordinate EN71 and ASTM testing, sample development, golden samples and pre-shipment inspection. From licensed character programs to promotional toy ranges, our Shanghai and Yiwu teams manage development and production follow-up so your toy lines land safely and on time."
    ],
    image: "/assets/toy-cover.jpg",
    subcategories: ["Plastic Toy", "Plush Toy", "Wooden Toy", "Pets Toy", "RC Toy"],
    products: makeProducts(toyImages, "Toy")
  },
  {
    slug: "hometextile",
    name: "Hometextile",
    metaTitle: "Home Textile Sourcing from China | MASA",
    summary:
      "Home textile development resources for everyday family, nursery and lifestyle ranges.",
    intro: [
      "MASA coordinates home textile sourcing from China for bedding, blankets, cushions, nursery textiles, kitchen textiles and seasonal decorative fabrics. We work with mills and sewing facilities in Zhejiang, Jiangsu and Shandong that serve European and American retail programs every day.",
      "Our team supports fabric selection, color matching, sample development, OEKO-TEX and REACH compliance, packaging design and consolidated shipping. Whether you are building an own-label bedding range or need promotional blanket programs for seasonal campaigns, we match your quality level and target price with the right factory."
    ],
    image: "/assets/hometextile.jpg",
    subcategories: ["Bedding", "Nursery Textile", "Cushion", "Blanket"],
    products: makeProducts(homeTextileImages, "Home Textile")
  },
  {
    slug: "sporting-goods",
    name: "Sporting goods",
    metaTitle: "Sporting Goods Sourcing from China | MASA",
    summary:
      "Sporting, outdoor and activity items for family recreation and retail programs.",
    intro: [
      "We source sporting goods and outdoor activity products for family recreation, sports retail and promotional programs, including fitness accessories, camping and beach items, water sports products, yard games and seasonal sporting sets.",
      "MASA's supplier network covers specialized sporting goods clusters in Zhejiang and Guangdong, with factory audits, product testing coordination and full development follow-up. From single promotional giveaways to complete own-brand sporting ranges, we handle sampling, pricing, production tracking and quality inspection end to end."
    ],
    image: "/assets/sporting-scene.jpg",
    subcategories: ["Outdoor Play", "Training Items", "Recreation"],
    products: makeProducts(sportingGoodsImages, "Sporting Goods")
  },
  {
    slug: "shoes",
    name: "Shoes",
    metaTitle: "Shoes & Footwear Sourcing from China | MASA",
    summary:
      "Seasonal, lifestyle and children-oriented footwear sourcing coordination.",
    intro: [
      "MASA provides shoes and footwear sourcing from China for seasonal collections, lifestyle brands and children-oriented retail programs. Our range includes slippers, sandals, canvas shoes, sport shoes, rain boots and winter boots, developed with factories in Fujian, Zhejiang and Guangdong footwear clusters.",
      "We support last and sole development, material sourcing, size grading, sample confirmation and social compliance audits, coordinating every step from design brief to container loading. Whether you need a promotional slipper program or a full private label footwear line, our team keeps quality, cost and delivery under control."
    ],
    image: "/assets/shoes-cover.jpg",
    subcategories: ["Casual Shoes", "Children Shoes", "Seasonal Footwear"],
    products: makeProducts(shoesImages, "Shoes")
  },
  {
    slug: "paper-items",
    name: "Paper Items",
    metaTitle: "Paper Items & Stationery Sourcing | MASA",
    summary:
      "Paper-based products, packaging and stationery support for lifestyle ranges.",
    intro: [
      "From stationery and greeting cards to paper gift bags and custom packaging, MASA sources paper-based products for retailers, book chains and lifestyle brands. Our suppliers specialize in notebooks, sticky notes, paper crafts, party paper goods and FSC-certified packaging solutions.",
      "We manage artwork, printing proofing, material options and certification such as FSC, and consolidate paper items with your other sourced products to reduce shipping cost. This makes us a practical single-point partner for complete retail and promotional programs that mix hardlines with paper goods."
    ],
    image: "/assets/paper-cover.jpg",
    subcategories: ["Stationery", "Packaging", "Paper Gifts"],
    products: makeProducts(paperImages, "Paper Items")
  },
  {
    slug: "home-deco",
    name: "Home Deco",
    metaTitle: "Home Decoration Products Sourcing | MASA",
    summary:
      "Home decoration and lifestyle products for retail, promotional and private label programs.",
    intro: [
      "Our home decoration sourcing covers seasonal decor, storage and organization, artificial plants, photo frames, candles and lifestyle gift items for retail chains, promotional distributors and private label brands.",
      "Working together with our KJADE Home product team, we develop decoration programs that match European and American seasonal trends, coordinate material development and samples, and follow production through to inspection and shipment. Visit KJADE Home to explore our ready-to-order home decoration collections."
    ],
    image: "/assets/home-decor.jpg",
    subcategories: ["Room Decor", "Storage", "Lifestyle Gifts"],
    externalUrl: "https://www.kjadehome.com/",
    products: makeProducts(homeDecoImages, "Home Deco")
  },
  {
    slug: "umbrella",
    name: "Umbrella",
    metaTitle: "Umbrella Sourcing & Manufacturing in China | MASA",
    summary:
      "Umbrella and weather protection sourcing for retail, promotional and seasonal programs.",
    intro: [
      "Umbrellas are one of our top four product lines. MASA sources rain umbrellas, folding umbrellas, golf umbrellas, kids umbrellas and fashion umbrellas from the umbrella manufacturing hub of Shangyu and Xiamen, serving promotional distributors and retail programs across Europe and the United States.",
      "We support custom printing, fabric and frame selection, wind-resistance testing and full container or consolidated shipments. From 10,000-piece promotional giveaways to structured retail umbrella ranges with private label branding, our team coordinates development, samples and inspection so every shipment opens smoothly."
    ],
    image: "/assets/20140705051341K4BceK4Bce.jpg",
    subcategories: ["Rain Umbrella", "Folding Umbrella", "Fashion Umbrella"],
    products: makeProducts(umbrellaImages, "Umbrella")
  },
  {
    slug: "pet",
    name: "Pet",
    metaTitle: "Pet Products Sourcing from China | MASA",
    summary:
      "Pet furniture, beds, apparel, bags, accessories and toy sourcing for pet brands and retail programs.",
    intro: [
      "Pet products are one of our fastest-growing sourcing categories. MASA helps pet brands, pet shops and retail chains source cat trees and cat furniture, pet beds, pet apparel, pet carrier bags, collars and harnesses, feeding accessories and pet toys from vetted factories in Zhejiang and Shandong.",
      "We coordinate plush and wooden cat tree development, fabric and filling selection, strength and safety testing, private label branding and retail-ready packaging. Whether you are launching an own-brand pet collection or expanding a seasonal pet toy range, our Shanghai and Yiwu teams manage sampling, pricing, compliance and production follow-up from brief to shipment."
    ],
    image: "/assets/pet-cover.jpg",
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
