import { CategoryNav, Page, PageHero, ProductGrid } from "../components";
import { pageHeroProductImage } from "../site-data";

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
          image={pageHeroProductImage}
        />
        <section className="section">
          <div className="content-width">
            <div className="section-head center">
              <p className="eyebrow">Product Categories</p>
              <h2>Comprehensive Sourcing Solutions</h2>
              <p className="lead">
                Explore MASA's sourcing categories for toys, home textile,
                home decor, shoes, sporting goods, seasonal items and paper
                products. Each category is supported by compliant suppliers and
                responsive coordination.
              </p>
            </div>
            <CategoryNav />
            <ProductGrid />
          </div>
        </section>
      </main>
    </Page>
  );
}
