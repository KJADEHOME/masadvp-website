import { CategoryNav, Page, PageHero, ProductGrid } from "../components";
import { pageHeroImage } from "../site-data";

export const metadata = {
  title: "Products",
  description:
    "Explore MASA product sourcing categories including toys, home textile, home decor, shoes, sporting goods, seasonal items and paper items."
};

export default function ProductsPage() {
  return (
    <Page active="Product">
      <main>
        <PageHero
          title="Product"
          breadcrumb="Home - Product"
          image={pageHeroImage}
        />
        <section className="section">
          <CategoryNav />
          <ProductGrid />
        </section>
      </main>
    </Page>
  );
}
