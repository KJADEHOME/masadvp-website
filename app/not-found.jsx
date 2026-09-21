import Link from "next/link";
import { Page } from "./components";
import { productCategories } from "./site-data";

export default function NotFound() {
  return (
    <Page>
      <main>
        <section className="section not-found">
          <div className="content-width">
            <p className="eyebrow">Error 404</p>
            <h1>Page Not Found</h1>
            <p className="lead">
              This page has moved or no longer exists. Older product pages from
              our previous website are no longer available. Browse our current
              sourcing categories below, or contact our team for a specific
              product inquiry.
            </p>
            <div className="not-found-links">
              {productCategories.map((category) => (
                <Link key={category.slug} href={`/products/${category.slug}`}>
                  {category.name}
                </Link>
              ))}
            </div>
            <p className="not-found-actions">
              <Link className="button primary" href="/products">
                All product categories
              </Link>
              <Link className="button" href="/contact">
                Contact our sourcing team
              </Link>
            </p>
          </div>
        </section>
      </main>
    </Page>
  );
}
