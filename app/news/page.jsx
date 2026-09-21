import { Page, PageHero } from "../components";
import { newsItems, pageHeroNewsImage } from "../site-data";

export const metadata = {
  title: "Sourcing News & Insights",
  description:
    "Updates and insights from MASA Development International on toy, pet products, home textile and lifestyle goods sourcing from China.",
  alternates: {
    canonical: "https://www.masadvp.com/news"
  }
};

export default function NewsPage() {
  return (
    <Page active="News">
      <main>
        <PageHero title="News" breadcrumb="Home - News" image={pageHeroNewsImage} />
        <section className="section">
          <div className="content-width">
            <div className="section-head">
              <p className="eyebrow">Updates</p>
              <h2>Company News & Product Notes</h2>
            </div>
            <div className="news-grid">
              {newsItems.map((item) =>
                item.featured ? (
                  <article className="news-card news-card-featured" key={item.title}>
                    <a className="news-card-link" href={item.href}>
                      <div
                        className="news-card-image"
                        style={{ "--image": `url(${item.image})` }}
                        role="img"
                        aria-label={item.title}
                      />
                      <div className="news-card-body">
                        <p className="eyebrow">{item.date} - Featured Insight</p>
                        <h3>{item.title}</h3>
                        <p>{item.excerpt}</p>
                        <span className="news-card-more">Read the full article &rarr;</span>
                      </div>
                    </a>
                  </article>
                ) : (
                  <article className="news-card" key={item.title}>
                    <div className="news-card-body">
                      <p className="eyebrow">{item.date}</p>
                      <h3>{item.title}</h3>
                      <p>{item.excerpt}</p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
