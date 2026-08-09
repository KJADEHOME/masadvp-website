import { Page, PageHero } from "../components";
import { newsItems, pageHeroImage } from "../site-data";

export const metadata = {
  title: "News",
  description:
    "Company updates from MASA Development International Limited."
};

export default function NewsPage() {
  return (
    <Page active="News">
      <main>
        <PageHero title="News" breadcrumb="Home - News" image={pageHeroImage} />
        <section className="section">
          <div className="content-width">
            <div className="section-head">
              <p className="eyebrow">Updates</p>
              <h2>Company News & Product Notes</h2>
            </div>
            <div className="product-grid">
              {newsItems.map((item) => (
                <article className="product-card" key={item.title}>
                  <div className="product-card-body">
                    <p className="eyebrow">{item.date}</p>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
