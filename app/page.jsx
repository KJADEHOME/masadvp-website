import Link from "next/link";
import { Header, Footer, ProductGrid } from "./components";
import { capabilities } from "./site-data";

export const metadata = {
  title: "MASA Development International Limited",
  description:
    "Global sourcing for toys, home textile and lifestyle products with compliant supplier resources and responsive customer support.",
  keywords: [
    "toy sourcing",
    "home textile sourcing",
    "product sourcing",
    "B2B sourcing",
    "Shanghai sourcing"
  ],
  alternates: {
    canonical: "https://www.masadvp.com"
  },
  openGraph: {
    title:
      "MASA | Toy, Home Textile, Pet & Lifestyle Product Sourcing from China",
    description:
      "Sourcing partner since 2008. Toys, home textile, pet products, sunglasses, umbrellas and lifestyle goods from audited Chinese factories, with OEM/ODM support.",
    url: "https://www.masadvp.com",
    siteName: "MASA Development International",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.masadvp.com/assets/og-masa.jpg",
        width: 1200,
        height: 630,
        alt: "MASA Development International - product sourcing from China since 2008"
      }
    ]
  }
};

export default function HomePage() {
  return (
    <div className="site-shell">
      <link rel="preload" as="image" href="/assets/hero-left.jpg" fetchPriority="high" />
      <link rel="preload" as="image" href="/assets/hero-right.jpg" fetchPriority="high" />
      <Header active="Home" />
      <main>
        <section className="hero" aria-label="MASA Development International">
          <div className="hero-side hero-side-left" aria-hidden="true" />
          <div className="hero-content">
            <div className="hero-copy">
              <h1>Toy, Home Textile & Lifestyle Product Sourcing</h1>
              <p>
                MASA Development International Limited supports international
                customers with multi-category product development, compliant
                supplier resources and responsive sourcing coordination.
              </p>
              <div className="button-row">
                <Link className="button primary" href="/products">
                  View Products
                </Link>
                <Link className="button secondary" href="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-side hero-side-right" aria-hidden="true" />
        </section>

        <section className="section">
          <div className="content-width">
            <div className="section-head">
              <p className="eyebrow">Since 2008</p>
              <h2>MASA Development International Limited</h2>
              <p className="lead">
                MASA was set up in UK since 2008, our Liaison Shanghai office
                was established in 2010 upon business development request.
              </p>
            </div>
            <div className="intro-copy">
              <p>
                After Covid-19 suffering period, our company not only survived
                during such a difficult environment but also expanded our
                business range far beyond expectation. Since 2022, we set up
                our branch office in Yiwu China area in order to support
                overseas online/offline ODM customers.
              </p>
              <p>
                Sunglasses, Umbrellas, foot-wears, bags are our top 4 lines in
                general, while we also provide variety of textile items
                including hats/gloves, stationery, sporting goods, plush toys,
                hair accessory, blankets, etc.
              </p>
              <p>
                We are keen in licensed items and have strong compliant factory
                database with all kinds of certificate including ICTI, GSV,
                BSCI, COC, Sedex, etc. With the fast expansion of business, we
                developed a multi-national customers chain around the world
                especially for big-scale retailers and supermarkets.
              </p>
            </div>
            <div className="value-grid">
              <div className="value-card">
                <h3>Reliable Sourcing</h3>
                <p>
                  Vendor selection, supplier audits and compliance support for
                  international retail and lifestyle brands.
                </p>
              </div>
              <div className="value-card">
                <h3>Flexible Product Support</h3>
                <p>
                  Development for toys, home textile, home decor, stationery,
                  sports and seasonal lifestyle ranges.
                </p>
              </div>
              <div className="value-card">
                <h3>Responsive Communication</h3>
                <p>
                  Dedicated sourcing coordination with fast follow-up by email
                  and project updates.
                </p>
              </div>
            </div>
            <div className="stats">
              <div className="stat">
                <strong>2008</strong>
                <span>Founded in the UK</span>
              </div>
              <div className="stat">
                <strong>2010</strong>
                <span>Shanghai liaison office established</span>
              </div>
              <div className="stat">
                <strong>2022</strong>
                <span>Yiwu branch office established</span>
              </div>
              <div className="stat">
                <strong>Global</strong>
                <span>Customer chain and supplier coordination</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section alt">
          <div className="section-head center">
            <p className="eyebrow">Product</p>
            <h2>Multi-Category Product Support</h2>
          </div>
          <ProductGrid />
        </section>

        <section className="section">
          <div className="section-head center">
            <p className="eyebrow">Capability</p>
            <h2>Built for Sourcing Teams</h2>
          </div>
          <div className="capability-grid content-width">
            {capabilities.map((item) => (
              <div className="capability" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
