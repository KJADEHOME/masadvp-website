import { Page, PageHero } from "../../components";
import { pageHeroNewsImage, siteUrl } from "../../site-data";

const ARTICLE_PATH = "/news/cat-tree-sourcing-from-china";
const ARTICLE_TITLE =
  "Sourcing Cat Trees from China: A Buyer's Guide for Pet Brands";

export const metadata = {
  title: ARTICLE_TITLE,
  description:
    "Cat furniture is bulky, multi-material and easy to get wrong. How pet brands should specify board grade, sisal, stability and carton dimensions before committing to tooling and MOQ.",
  alternates: {
    canonical: `${siteUrl}${ARTICLE_PATH}`
  },
  openGraph: {
    title: `${ARTICLE_TITLE} | MASA Insights`,
    description:
      "Board grade, sisal, tip-over stability and dimensional weight: the four decisions that determine whether a cat tree programme makes money.",
    url: `${siteUrl}${ARTICLE_PATH}`,
    siteName: "MASA Development International",
    type: "article",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/assets/pet-cover.jpg`,
        width: 900,
        height: 600,
        alt: "Golden retriever and tabby cat resting together"
      }
    ]
  }
};

const faqs = [
  {
    q: "What is a realistic MOQ for a custom cat tree?",
    a: "It depends far more on packaging than on the product. Standard carton sizes support low minimums, because the factory is buying existing boxes. A custom carton with your printing typically requires a die and a run of several thousand units, so most brands launch with one or two SKUs on standard cartons and add branded packaging once reorder volume is predictable."
  },
  {
    q: "Particleboard or plywood?",
    a: "Particleboard is cheaper and is what most entry-price cat trees use. It holds screws less securely and swells if it gets wet, which matters in a product that carries a cat's body weight and sees occasional accidents. Plywood costs more but resists screw pull-out better and survives moisture. The failure mode to design against is a platform working loose, not the board breaking."
  },
  {
    q: "Why do cat trees arrive damaged so often?",
    a: "Because they are large, heavy and mostly empty space. Cartons get crushed in transit, and the parts that fail first are the tips of posts and the corners of platforms. Reinforcing corner protection and shipping the structure partly unassembled with cam locks reduces both damage and carton volume."
  },
  {
    q: "How long does development take?",
    a: "For a new SKU using existing cartons and standard components, sampling commonly runs two to three weeks and production a further three to five weeks. Custom carton tooling and custom-moulded parts add several weeks. Peak-season bookings tighten everything, so plan backwards from your in-store date rather than from your purchase order."
  },
  {
    q: "Do I need product testing for cat furniture?",
    a: "There is no single universal standard for cat trees the way there is for children's products, but buyers increasingly ask for stability, load and material documentation. At minimum, agree a load test for platforms and a tip-over test for the assembled unit, and request material safety documentation for fabrics, adhesives and finishes."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "A sourcing guide for cat furniture: board grade, sisal specification, stability engineering, carton dimensions and dimensional weight for pet brands buying from China.",
  datePublished: "2026-09-22",
  dateModified: "2026-09-22",
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
    acceptedAnswer: { "@type": "Answer", text: item.a }
  }))
};

export default function CatTreeSourcingPage() {
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
              <p className="eyebrow">Category Guide - September 22, 2026</p>
              <h1>{ARTICLE_TITLE}</h1>

              <figure className="article-figure">
                <img
                  src="/assets/pet-cover.jpg"
                  alt="Golden retriever and tabby cat resting together"
                  width="900"
                  height="600"
                  loading="lazy"
                  decoding="async"
                />
              </figure>

              <p>
                Cat furniture looks like a simple product. It is a box with
                posts, fabric and rope. In practice it is one of the more
                demanding categories to source well, because four separate
                decisions have to line up before the first purchase order —
                and three of them are usually made by accident.
              </p>

              <h2>Decision one: what the structure is made of</h2>
              <p>
                Almost every cat tree sold at entry price uses particleboard,
                wrapped in plush fabric. It is cheap, it is flat, and it is what
                your competitor is using. The question is whether it suits your
                positioning.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Board</th>
                    <th>Behaviour</th>
                    <th>Where it fits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Particleboard</td>
                    <td>
                      Lower cost; screw joints loosen with repeated loading;
                      swells and loses integrity when wet
                    </td>
                    <td>Entry price points, light use, shorter product life</td>
                  </tr>
                  <tr>
                    <td>Plywood</td>
                    <td>
                      Better screw retention, more dimensionally stable,
                      tolerant of occasional moisture
                    </td>
                    <td>Mid to premium ranges, larger cats, heavier use</td>
                  </tr>
                  <tr>
                    <td>Solid wood</td>
                    <td>Strongest and heaviest; adds cost and freight weight</td>
                    <td>Design-led and premium ranges</td>
                  </tr>
                </tbody>
              </table>
              <p>
                The failure to design against is not a snapped board. It is a
                platform that works loose over months of a cat launching onto
                it, which surfaces as a one-star review rather than a return.
              </p>

              <h2>Decision two: the scratching surface</h2>
              <p>
                Sisal rope remains the default because it is durable and
                replaceable in the field. The specification details that
                actually change the product are rope diameter, wrap tension and
                coverage. Thin rope wrapped loosely shreds quickly and looks
                worn within weeks; a tighter wrap of heavier rope costs more but
                is the difference between a product that survives a year and one
                that does not.
              </p>
              <p>
                Carpet-wrapped posts are cheaper and appeal to buyers who want a
                softer look, but they shed and trap hair. Corrugated cardboard
                scratch pads are a separate, higher-turnover item rather than a
                substitute for a post.
              </p>

              <h2>Decision three: stability, which is a safety issue</h2>
              <p>
                A cat tree that tips is not a quality complaint, it is an injury
                risk. Stability comes from three things, and all three are
                cheap to get right at the design stage and expensive to fix
                afterwards.
              </p>
              <ul>
                <li>
                  <strong>Base mass and footprint.</strong> Weight low and
                  spread wide. A tall tower on a narrow base will fail
                  regardless of how well it is built.
                </li>
                <li>
                  <strong>Centre of gravity.</strong> The highest platform
                  should not sit directly above the narrowest part of the base.
                </li>
                <li>
                  <strong>Wall anchoring.</strong> For units above roughly a
                  metre, supply an anti-tip strap and treat it as part of the
                  product, not an accessory.
                </li>
              </ul>
              <p>
                Agree a tip-over test before tooling: load the top platform,
                apply a lateral force, and specify the point at which the unit
                must remain upright. Writing this into the specification is what
                makes it enforceable.
              </p>

              <h2>Decision four: the carton, which decides your margin</h2>
              <p>
                This is the decision most brands make last and regret first.
                Cat trees are large and mostly air, which means freight is
                billed on volume rather than weight.
              </p>
              <p>
                Most air and courier tariffs use volumetric weight, calculated
                from the carton&apos;s length, width and height divided by a
                dimensional factor. A carton that is a few centimetres oversized
                in each dimension can move a shipment into the next chargeable
                bracket across an entire container. Two levers control this:
              </p>
              <ul>
                <li>
                  <strong>Knock-down design.</strong> Shipping platforms and
                  posts flat with cam locks or bolts reduces carton volume
                  substantially, at the cost of some assembly by the customer.
                </li>
                <li>
                  <strong>Carton consolidation.</strong> Re-dimensioning boxes
                  to fit a standard pallet footprint often beats squeezing a few
                  millimetres from each side.
                </li>
              </ul>
              <p>
                For ocean freight you are paying for cubic metres; for
                last-mile delivery in the United States you may also be paying
                dimensional weight twice, once inbound to the warehouse and
                again outbound to the customer. Model both before you set the
                retail price.
              </p>

              <h2>What to send a factory</h2>
              <p>
                A cat tree brief that comes back with a usable quotation
                contains:
              </p>
              <ul>
                <li>Assembled dimensions and the height of each platform</li>
                <li>Board grade and thickness for every panel</li>
                <li>Rope diameter, wrap specification and coverage per post</li>
                <li>Fabric composition, colour reference and pile height</li>
                <li>Assembled weight target and maximum carton dimensions</li>
                <li>Target retail price, so the factory can propose trade-offs</li>
                <li>Carton markings, barcodes and any retail compliance labels</li>
              </ul>
              <p>
                Omitting the carton constraint is the most common omission, and
                the most costly, because it is fixed at the end of development
                when there is no time left to redesign the product.
              </p>

              <h2>Where cat furniture is made</h2>
              <p>
                Cat furniture production clusters in Zhejiang and Shandong,
                alongside pet beds and plush pet accessories. Many factories
                that make <a href="/products/pet">pet products</a> for export
                handle cat trees and pet beds on the same floor, which is useful
                if you want one supplier across a range rather than one per
                category.
              </p>
              <p>
                If your range also includes{" "}
                <a href="/products/hometextile">home textiles</a> or{" "}
                <a href="/products/toy">toys</a>, consolidating factory
                management reduces the number of quality systems you have to
                keep current.
              </p>

              <h2>FAQ: cat furniture sourcing</h2>
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}

              <h2>Planning a cat furniture range</h2>
              <p>
                MASA Development International sources pet furniture, beds,
                apparel, bags and toys for pet brands and retail programmes,
                alongside{" "}
                <a href="/products">eight other product categories</a>. We
                coordinate board and fabric development, stability testing,
                carton engineering and retail-ready packaging from one brief.
              </p>
              <p>
                <a href="/contact">Tell us your target price and platform
                height</a> and we will come back with a specification that can
                actually hold it.
              </p>
            </article>
          </div>
        </section>
      </main>
    </Page>
  );
}
