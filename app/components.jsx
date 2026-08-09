import Link from "next/link";
import {
  footerItems,
  navItems,
  pageHeroImage,
  productCategories
} from "./site-data";

export function Header({ active = "" }) {
  const left = navItems.slice(0, 3);
  const right = navItems.slice(3);

  return (
    <header className="nav-wrap">
      <nav className="nav-side" aria-label="Primary navigation left">
        {left.map((item) => (
          <Link
            className={`nav-link ${active === item.label ? "active" : ""}`}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <Link className="brand-lockup" href="/" aria-label="MASA home">
        <div className="brand-card">
          <img src="/assets/masa-logo.svg" alt="MASA Development International" />
        </div>
      </Link>
      <nav className="nav-side" aria-label="Primary navigation right">
        {right.map((item) => (
          <Link
            className={`nav-link ${active === item.label ? "active" : ""}`}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <nav className="footer-nav" aria-label="Footer navigation">
            {footerItems.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
          <small>
            COPYRIGHT © 2026 MASA DEVELOPMENT INTERNATIONAL LIMITED
          </small>
        </div>
        <div className="footer-contact">
          <p>Phone: 13817878221</p>
          <p>Email: services@masadvp.com</p>
        </div>
      </div>
    </footer>
  );
}

export function Page({ active, children }) {
  return (
    <div className="site-shell">
      <Header active={active} />
      {children}
      <Footer />
    </div>
  );
}

export function PageHero({ title, breadcrumb, image = pageHeroImage }) {
  return (
    <>
      <section
        className="page-hero"
        style={{ "--image": `url(${image})` }}
        aria-label={title}
      >
        <h1>{title}</h1>
      </section>
      <div className="breadcrumb">{breadcrumb}</div>
    </>
  );
}

export function ProductGrid() {
  return (
    <div className="product-grid content-width">
      {productCategories.map((category) => (
        <Link
          className="product-card"
          href={`/products/${category.slug}`}
          key={category.slug}
        >
          <div
            className="product-card-image"
            style={{ "--image": `url(${category.image})` }}
            role="img"
            aria-label={`${category.name} product category`}
          />
          <div className="product-card-body">
            <h3>{category.name}</h3>
            <p>{category.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="Product categories">
      {productCategories.map((category) => (
        <Link href={`/products/${category.slug}`} key={category.slug}>
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
