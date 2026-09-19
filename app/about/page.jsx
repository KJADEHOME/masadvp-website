import { Page, PageHero } from "../components";
import { capabilities, pageHeroAboutImage } from "../site-data";

export const metadata = {
  title: "About Our Sourcing Company | MASA Since 2008",
  description:
    "MASA Development International: UK-founded sourcing company since 2008 with Shanghai and Yiwu offices, audited toy, pet and lifestyle product factories across China."
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
            </div>
            <div className="intro-copy">
              <p>
                MASA was set up in UK since 2008, our Liaison Shanghai office
                was established in 2010 upon business development request.
              </p>
              <p>
                After Covid-19 suffering period, our company not only survived
                during such a difficult environment but also expanded our
                business range far beyond expectation.
              </p>
              <p>
                Since 2022, we set up our branch office in Yiwu China area in
                order to support overseas online/offline ODM customers. Up till
                now, we already developed quite a few large-scale COC factories
                to this business.
              </p>
              <p>
                Accessory category has been now one of our leading product
                development ranges after so many years business engagement.
                Sunglasses, Umbrellas, foot-wears, bags are our top 4 lines in
                general, while we also provide variety of textile items
                including hats/gloves, stationery, sporting goods, plush toys,
                hair accessory, blankets, etc.
              </p>
              <p>
                We are keen in licensed items and have strong compliant factory
                database with all kinds of certificate including ICTI, GSV,
                BSCI, COC, Sedex, etc.
              </p>
              <p>
                With the fast expansion of business, we developed a
                multi-national customers chain around the world especially for
                big-scale retailers and supermarkets.
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
