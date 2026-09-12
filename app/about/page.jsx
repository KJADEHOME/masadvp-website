import { Page, PageHero } from "../components";
import { capabilities, pageHeroAboutImage } from "../site-data";

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
          image={pageHeroAboutImage}
        />
        <section className="section">
          <div className="content-width">
            <div className="section-head">
              <p className="eyebrow">MASA Development International Limited</p>
              <h2>Global product sourcing with responsive local support.</h2>
              <p className="lead">
                MASA was founded in the UK in 2008. Our Shanghai liaison office
                began operations in 2010 to give international customers closer
                sourcing coordination and compliance support.
              </p>
            </div>
            <div className="intro-copy">
              <p>
                We focus on toy and home textile sourcing, while also supporting
                hardline categories like home decor, stationery, sports, pets,
                seasonal lifestyle and paper-based products.
              </p>
              <p>
                MASA maintains a compliant supplier network capable of handling
                ICTI, GSV, BSCI and COC requirements, with a client-first
                process for international retail and private-label programs.
              </p>
            </div>
          </div>
        </section>
        <section className="section alt">
          <div className="content-width">
            <div className="section-head center">
              <p className="eyebrow">What We Offer</p>
              <h2>Trusted sourcing for international buyers</h2>
            </div>
            <div className="capability-grid">
              {capabilities.map((item) => (
                <div className="capability" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
