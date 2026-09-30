import Link from "next/link";
import {
  alibabaStore,
  footerItems,
  navItems,
  pageHeroImage,
  productCategories
} from "./site-data";

export function Header({ active = "" }) {
  const left = navItems.slice(0, 2);
  const right = navItems.slice(2);

  return (
    <header className="site-header">
      <nav className="nav-group" aria-label="Primary navigation left">
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
      <Link className="brand-link" href="/" aria-label="MASA home">
        <img src="/assets/masa-logo.svg" alt="MASA Development International" />
      </Link>
      <nav className="nav-group" aria-label="Primary navigation right">
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
          <p>Email: <a href="mailto:service@masadvp.com">service@masadvp.com</a></p>
          <p>We respond to B2B inquiries within 24 hours.</p>
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

export function PageHero({
  title,
  breadcrumb,
  image = pageHeroImage,
  titleTag: TitleTag = "h1"
}) {
  return (
    <>
      <section
        className="page-hero"
        style={{ "--image": `url(${image})` }}
        aria-label={title}
      >
        <TitleTag className="page-hero-title">{title}</TitleTag>
      </section>
      <div className="breadcrumb">{breadcrumb}</div>
    </>
  );
}

export function ProductGrid() {
  return (
    <div className="product-grid content-width">
      {productCategories.map((category) => {
        const card = (
          <>
            <img
              className="product-card-image"
              src={category.image}
              alt={`${category.name} product category`}
              loading="lazy"
              decoding="async"
            />
            <div className="product-card-body">
              <h3>{category.name}</h3>
              <p>{category.summary}</p>
            </div>
          </>
        );

        if (category.externalUrl) {
          return (
            <a
              className="product-card"
              href={category.externalUrl}
              key={category.slug}
              target="_blank"
              rel="noreferrer"
            >
              {card}
            </a>
          );
        }

        return (
          <Link
            className="product-card"
            href={`/products/${category.slug}`}
            key={category.slug}
          >
            {card}
          </Link>
        );
      })}
    </div>
  );
}

// One-click route to the Alibaba.com storefront. The whole banner is a single
// link rather than a heading plus a button, because the buyers who use the
// store arrive on a phone and a full-width tap target is what they aim at.
export function StoreBanner() {
  return (
    <a
      className="store-banner"
      href={alibabaStore.url}
      target="_blank"
      rel="noopener"
      aria-label={`${alibabaStore.bannerHeading} — opens in a new tab`}
    >
      <span className="store-banner-logo">
        <img
          src={alibabaStore.logo}
          alt="MASA store logo on Alibaba.com"
          loading="lazy"
          decoding="async"
        />
      </span>
      <span className="store-banner-copy">
        <span className="store-banner-kicker">{alibabaStore.kicker}</span>
        <strong>{alibabaStore.bannerHeading}</strong>
        <span className="store-banner-body">{alibabaStore.bannerBody}</span>
        <span className="store-banner-meta">
          {alibabaStore.storeName} · {alibabaStore.storeMeta}
        </span>
      </span>
      <span className="store-banner-cta">Visit the store</span>
    </a>
  );
}

export function CategoryNav() {
  return (
    <nav className="category-nav" aria-label="Product categories">
      {productCategories.map((category) => {
        if (category.externalUrl) {
          return (
            <a
              href={category.externalUrl}
              key={category.slug}
              target="_blank"
              rel="noreferrer"
            >
              {category.name}
            </a>
          );
        }

        return (
          <Link href={`/products/${category.slug}`} key={category.slug}>
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}
