import Link from "next/link";
import { CategoryNav, Page, PageHero } from "../../components";
import { pageHeroImage, productCategories, siteUrl } from "../../site-data";

export function generateStaticParams() {
  return productCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = productCategories.find(
    (item) => item.slug === resolvedParams.category
  );

  if (!category) {
    return {
      title: "Product Category"
    };
  }

  return {
    title: `${category.name} Products`,
    description: category.summary,
    alternates: {
      canonical: `${siteUrl}/products/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category =
    productCategories.find((item) => item.slug === resolvedParams.category) ||
    productCategories[0];

  return (
    <Page active="Product">
      <main>
        <PageHero
          title="Product"
          breadcrumb={`Home - Product - ${category.name}`}
          image={pageHeroImage}
        />
        <section className="section">
          <CategoryNav />
          <div className="content-width contact-layout">
            <aside className="contact-panel">
              <h2>{category.name}</h2>
              <div className="contact-list">
                {category.subcategories.map((item) => (
                  <Link href="/contact#message" key={item}>
                    {item}
                  </Link>
                ))}
              </div>
            </aside>
            <div>
              <div className="section-head">
                <p className="eyebrow">Product Category</p>
                <h2>{category.name} Sourcing Support</h2>
                <p className="lead">{category.summary}</p>
              </div>
              <div className="product-grid">
                {category.products.map((item) => (
                  <Link className="product-card" href="/contact#message" key={item}>
                    <div
                      className="product-card-image"
                      style={{ "--image": `url(${category.image})` }}
                      role="img"
                      aria-label={`${item} example`}
                    />
                    <div className="product-card-body">
                      <h3>{item}</h3>
                      <p>
                        Contact MASA to discuss development, samples, supplier
                        resources and project requirements.
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
