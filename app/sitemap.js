import { newsItems, productCategories, siteUrl } from "./site-data";

const pageUpdated = {
  "": "2026-09-20",
  "/about": "2026-09-20",
  "/products": "2026-09-20",
  "/news": "2026-09-22",
  "/contact": "2026-09-20",
  "/privacy-policy": "2026-09-20"
};

const defaultUpdated = "2026-09-20";

export default function sitemap() {
  const articleDates = {};
  newsItems.forEach((item) => {
    if (item.href && item.date) articleDates[item.href] = item.date;
  });

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/news",
    "/news/pet-subscription-economy",
    "/news/china-supplier-verification",
    "/news/cat-tree-sourcing-from-china",
    "/news/pet-brands-small-batch-manufacturing",
    "/contact",
    "/privacy-policy"
  ];
  const productRoutes = productCategories.map(
    (category) => `/products/${category.slug}`
  );

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(
      articleDates[route] || pageUpdated[route] || defaultUpdated
    ),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
