import { Page, PageHero } from "../../components";
import { pageHeroNewsImage, siteUrl } from "../../site-data";

const ARTICLE_PATH = "/news/pet-exports-us-tariff-price";
const ARTICLE_TITLE = "Pet Exports to the U.S. Turned Positive. The Price Didn't.";
const ARTICLE_DATE = "2026-09-25";

export const metadata = {
  title: ARTICLE_TITLE,
  description:
    "August customs data gave pet exports their first positive U.S. month under the new tariff structure — up 16.2% year on year — while the average export price fell 10%. What the volume-price split means for quotations, order timing and market mix.",
  alternates: {
    canonical: `${siteUrl}${ARTICLE_PATH}`
  },
  openGraph: {
    title: `${ARTICLE_TITLE} | MASA Insights`,
    description:
      "Volume up 29.6%, value up 23.0%, average export price down 10.0%. The U.S. door reopened on volume, not on margin — and the tariff stack now sits at 37.5% for most pet lines.",
    url: `${siteUrl}${ARTICLE_PATH}`,
    siteName: "MASA Development International",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/assets/news-pet-exports-price.jpg`,
        width: 1000,
        height: 624,
        alt: "Shelves of pet food bags and pet toys in a pet store aisle"
      }
    ]
  }
};

const faqs = [
  {
    q: "Did the new Section 301 tariff replace the 10% global surcharge?",
    a: "Yes. The 10% global surcharge expired in July and was replaced by a new Section 301 tariff arising from a forced-labour investigation, which adds 12.5% on China. It is a replacement tariff, not an additional layer sitting on top of the surcharge."
  },
  {
    q: "Does the 12.5% Section 301 tariff stack with the 2018 lists?",
    a: "For most pet lines, yes. The 12.5% stacks fully on the original 25% from the 2018 Section 301 lists, which puts the combined rate at 37.5% before any MFN base duty is applied. Section 232 tariffs, by contrast, do not stack with it."
  },
  {
    q: "Can the 12.5% rate go higher?",
    a: "The U.S. side has committed that replacement tariffs on China will not exceed 20%, so the current 12.5% carries stated room above it. That headroom is the reason a quotation which ignores it has an expiry date nobody agreed to."
  },
  {
    q: "Why did U.S. volumes rise while export prices fell?",
    a: "Two effects are working together. Exports to the U.S. turned positive year on year at +16.2% in August, the first full month under the structure that took effect in late July, and part of that rests on a low base a year earlier. At the same time the average export price fell 10.0% year on year, to RMB 25,500 per tonne. The direction is real; the size is flattered."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "August customs data shows pet exports up 29.6% in volume and 23.0% in value, with U.S. volumes turning positive while the average export price fell 10.0%. A reading of the tariff stack and what the split means for suppliers and buyers.",
  datePublished: ARTICLE_DATE,
  dateModified: ARTICLE_DATE,
  author: {
    "@type": "Organization",
    name: "MASA Development International Limited"
  },
  publisher: {
    "@type": "Organization",
    name: "MASA Development International Limited",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/assets/masa-logo.svg`
    }
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${siteUrl}${ARTICLE_PATH}`
  }
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
};

export default function PetExportsTariffArticlePage() {
  return (
    <Page active="News">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <PageHero
          title="News"
          breadcrumb="Home - News"
          image={pageHeroNewsImage}
          titleTag="p"
        />
        <section className="section">
          <div className="content-width article-layout">
            <article className="article-body">
              <p className="eyebrow">Market Insight - September 25, 2026</p>
              <h1>{ARTICLE_TITLE}</h1>
              <figure className="article-figure">
                <img
                  src="/assets/news-pet-exports-price.jpg"
                  alt="Shelves of pet food bags and pet toys in a pet store aisle"
                  width="1000"
                  height="624"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <p>
                August data gave pet exports their first positive U.S. month
                under the new tariff structure. Volume came back. Price did not.
              </p>

              <h2>First, the numbers</h2>
              <p>
                Customs figures released September 21 put pet food exports at
                38,000 tonnes, up 29.6% year on year, with a value of USD 143
                million, up 23.0%. Exports to the U.S. turned positive year on
                year at +16.2% — the first full month under the structure that
                took effect in late July.
              </p>
              <p>
                One caveat belongs next to those figures: part of the U.S.
                increase rests on a low base last August. The direction is
                real; the size is flattered.
              </p>

              <h2>Now the number that matters</h2>
              <p>
                The average export price fell 10.0% year on year, to RMB 25,500
                per tonne — USD 3,752 a tonne, down 5.1%. Value growth ran well
                below volume growth. Volume is doing the work; price is not
                following.
              </p>
              <p>
                Germany was up 10.9% and the UK up 16.8%. Europe is the
                faster-growing destination this year, and that is worth
                watching in its own right.
              </p>

              <h2>The tariff side needs a precise reading</h2>
              <p>
                The 10% global surcharge expired in July and was replaced by a
                new Section 301 tariff — the outcome of a forced-labour
                investigation — adding 12.5% on China. For most pet lines it
                stacks on the original 25% from the 2018 lists: 37.5% before
                any MFN base duty.
              </p>
              <p>
                Two details matter. It is a replacement tariff, and the U.S.
                side has committed that replacement tariffs on China will not
                exceed 20% — so the current 12.5% has stated room above it. It
                also stacks fully with the old Section 301, while Section 232
                tariffs do not stack with it.
              </p>

              <h2>What this means for suppliers</h2>
              <p>
                The U.S. door reopened on volume, not on margin. Raw material
                costs are up, RMB appreciation shrinks dollar invoices, and
                unit prices are still falling. Three pressures running against
                the same number.
              </p>
              <p>
                The lines that hold through this pattern are the ones that can
                show where every cost sits — material, freight, MFN, each
                tariff layer — instead of quoting one blended number. A blended
                price is comfortable in August and indefensible in November.
              </p>

              <h2>What this means for buyers</h2>
              <p>
                Low prices now come with a question attached: is the supplier
                cutting into quality and capacity, or into a cushion that no
                longer exists? Falling unit prices have a floor, and floors
                arrive suddenly.
              </p>
              <p>
                Ask how a quote is built before the order, not after the
                shipment. A supplier who can walk you through material,
                conversion, freight and each duty layer is a supplier who still
                knows where the money goes.
              </p>

              <h2>Three things worth doing on either side of the table</h2>
              <ol>
                <li>
                  <strong>Write the tariff stack into the quotation</strong>,
                  line by line. The 12.5% has declared headroom; a quote that
                  ignores that is a quote with an expiry date nobody agreed to.
                </li>
                <li>
                  <strong>
                    Treat the U.S. upturn as an order-timing window, not a
                    pricing window.
                  </strong>{" "}
                  Volume is back; margin is not. Lock quantities, not rates.
                </li>
                <li>
                  <strong>Watch Europe.</strong> Germany and the UK are growing
                  faster than the U.S. A portfolio weighted to a single market
                  is carrying policy risk that another market currently does
                  not.
                </li>
              </ol>
              <p>
                The orders came back. The price has not. Telling those two
                apart is the work of this quarter.
              </p>

              <h2>FAQ: reading the pet export numbers</h2>
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}

              <h2>Where this sits in a sourcing programme</h2>
              <p>
                Tariff layers change which market a programme should be built
                for, but they do not change what has to be verified at the
                factory: material grade, compliance testing, packing and
                carton configuration. Those are the same disciplines whether
                the container leaves for Los Angeles or Hamburg.
              </p>
              <p>
                MASA Development International has sourced pet products from
                China since 2008 — cat trees, beds, apparel, bags, toys and
                accessories — alongside{" "}
                <a href="/products">home textile, ceramics, glass and lifestyle
                goods</a>.{" "}
                <a href="/contact">Send us the line you are planning</a> for
                the U.S. or Europe and we will come back with a cost breakdown
                that separates material, freight and each tariff layer.
              </p>
            </article>
          </div>
        </section>
      </main>
    </Page>
  );
}
