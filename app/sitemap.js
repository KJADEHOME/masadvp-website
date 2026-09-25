import { productCategories, siteUrl } from "./site-data";

export default function sitemap() {
  const now = new Date();
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
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
