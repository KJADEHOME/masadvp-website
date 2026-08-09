import { Page, PageHero } from "../components";
import { capabilities, pageHeroImage } from "../site-data";

export const metadata = {
  title: "About Us",
  description:
    "Learn about MASA Development International Limited, its UK foundation, Shanghai liaison office and compliant supplier resources."
};

export default function AboutPage() {
  return (
    <Page active="About Us">
      <main>
        <PageHero
          title="About Us"
          breadcrumb="Home - About Us"
          image={pageHeroImage}
        />
        <section className="section">
          <div className="content-width">
            <div className="section-head">
              <p className="eyebrow">MASA Development International Limited</p>
              <h2>Global product sourcing with responsive local support.</h2>
              <p className="lead">
                MASA was set up in the UK in 2008. The Shanghai liaison office
                was established in 2010 upon business development request,
                helping international customers coordinate products, suppliers
                and communication across multiple categories.
              </p>
            </div>
            <div className="intro-copy">
              <p>
                Toy and home textile are MASA's two main product categories,
                while the team also provides a variety of hardline items
                including home items, stationery, sporting goods, pets, shopping
                bags, shoes and seasonal lifestyle products.
              </p>
              <p>
                MASA maintains a strong compliant factory database with supplier
                resources supporting certificates and standards including ICTI,
                GSV, BSCI and COC. With the expansion of business, MASA has
                developed a multinational customer chain around the world.
              </p>
            </div>
          </div>
        </section>
        <section className="section alt">
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
    </Page>
  );
}
