import Link from "next/link";
import { notFound } from "next/navigation";
import { CategoryNav, Page } from "../../components";
import { productCategories, siteUrl } from "../../site-data";
import { categoryContent } from "../../category-content";

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
      title: "Page not found"
    };
  }

  return {
    title: category.metaTitle || `${category.name} Sourcing from China | MASA`,
    description: category.summary,
    alternates: {
      canonical: `${siteUrl}/products/${category.slug}`
    }
  };
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params;
  const category = productCategories.find(
    (item) => item.slug === resolvedParams.category
  );

  if (!category) {
    notFound();
  }

  const content = categoryContent[category.slug];
  const canonical = `${siteUrl}/products/${category.slug}`;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Product",
        item: `${siteUrl}/products`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: category.name,
        item: canonical
      }
    ]
  };

  const faqJsonLd =
    content && content.faqs && content.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: content.faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a }
          }))
        }
      : null;

  return (
    <Page active="Product">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      ) : null}
      <main className="category-page-layout">
        <section className="category-page-top">
          <CategoryNav />
        </section>

        <section className="category-list-layout">
          <aside className="category-feature-panel">
            <div className="category-feature-card">
              <h1 className="category-feature-title">{category.name}</h1>
              <div
                className="category-feature-image"
                style={{ "--image": `url(${category.image})` }}
                role="img"
                aria-label={`${category.name} sourcing category`}
              />
            </div>
          </aside>

          <section className="category-product-gallery">
            {category.products.map((item) => (
              <div className="category-product-tile" key={item.image}>
                <img
                  className="category-product-image"
                  src={item.image}
                  alt={item.alt || `${item.name} - ${category.name} product`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="category-product-name">{item.name}</div>
              </div>
            ))}
          </section>
        </section>

        {category.intro && category.intro.length > 0 ? (
          <section className="section">
            <div className="content-width category-intro">
              <h2>{category.name} Sourcing Service</h2>
              {category.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ) : null}

        {content && content.sections ? (
          <section className="section">
            <div className="content-width category-intro">
              {content.sections.map((block) => (
                <div key={block.heading}>
                  <h2>{block.heading}</h2>
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {content && content.faqs && content.faqs.length > 0 ? (
          <section className="section alt">
            <div className="content-width">
              <h2>{category.name} Sourcing Questions</h2>
              <div className="faq-list">
                {content.faqs.map((item) => (
                  <div className="faq-item" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {content && content.related && content.related.length > 0 ? (
          <section className="section">
            <div className="content-width category-intro">
              <h2>Related Reading</h2>
              <ul>
                {content.related.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href="/contact">
                    Send us your specification for a quotation
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        ) : null}

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
