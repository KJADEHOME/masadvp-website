import Link from "next/link";
import { CategoryNav, Page } from "../../components";
import { productCategories, siteUrl } from "../../site-data";

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
      <main className="category-page-layout">
        <section className="category-page-top">
          <CategoryNav />
        </section>

        <section className="category-list-layout">
          <aside className="category-feature-panel">
            <div className="category-feature-card">
              <div className="category-feature-title">{category.name}</div>
              <div
                className="category-feature-image"
                style={{ "--image": `url(${category.image})` }}
                role="img"
                aria-label={`${category.name} feature image`}
              />
            </div>
          </aside>

          <section className="category-product-gallery">
            {category.products.map((item) => (
              <div className="category-product-tile" key={item.name}>
                <div
                  className="category-product-image"
                  style={{ "--image": `url(${item.image})` }}
                  role="img"
                  aria-label={`${item.name} product sample`}
                />
                <div className="category-product-name">{item.name}</div>
              </div>
            ))}
          </section>
        </section>

        {category.externalUrl ? (
          <section className="category-external-row">
            <a
              className="button primary"
              href={category.externalUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit KJADE Home
            </a>
          </section>
        ) : null}
      </main>
    </Page>
  );
}
