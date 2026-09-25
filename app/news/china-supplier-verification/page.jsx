import { Page, PageHero } from "../../components";
import { pageHeroNewsImage, siteUrl } from "../../site-data";

const ARTICLE_PATH = "/news/china-supplier-verification";
const ARTICLE_TITLE = "How to Verify a Chinese Supplier Before You Place an Order";

export const metadata = {
  title: ARTICLE_TITLE,
  description:
    "A practical verification checklist for importers: how to read a Chinese business license, confirm audit certificates with the issuing body, tell a factory from a trading company, and spot the red flags that precede bad shipments.",
  alternates: {
    canonical: `${siteUrl}${ARTICLE_PATH}`
  },
  openGraph: {
    title: `${ARTICLE_TITLE} | MASA Insights`,
    description:
      "Business license checks, certificate verification, factory versus trading company, and the payment red flags worth walking away from.",
    url: `${siteUrl}${ARTICLE_PATH}`,
    siteName: "MASA Development International",
    type: "article",
    locale: "en_US"
  }
};

const faqs = [
  {
    q: "Can I verify a Chinese company for free?",
    a: "Yes. The National Enterprise Credit Information Publicity System (gsxt.gov.cn) publishes registration data for Chinese companies at no cost. It is in Chinese, and the legal name must be entered exactly, so ask your supplier for the registered Chinese name rather than relying on their English trade name."
  },
  {
    q: "What does a Chinese business license actually prove?",
    a: "It proves the legal entity exists and is registered, and it shows the registered capital, address, legal representative and approved business scope. It does not prove manufacturing capability, product quality or financial health. A license is the starting point of verification, not the end of it."
  },
  {
    q: "How do I confirm a BSCI or ICTI certificate is genuine?",
    a: "Do not rely on the PDF the supplier sends you. Ask for the audit ID and check it against the issuing scheme — amfori for BSCI, the ICTI Ethical Toy Program, or the platform the audit was lodged on. Certificates also carry an audit date and a validity window; an expired or superseded report is common and worth catching early."
  },
  {
    q: "Is it a problem if my supplier is a trading company rather than a factory?",
    a: "Not automatically. Many competent export agents add real value in quality control, consolidation and communication. The problem is being told you are buying from a factory when you are not, because it changes who is accountable when something goes wrong."
  },
  {
    q: "Should I always insist on a third-party inspection?",
    a: "For any order where a defect would be expensive to fix after shipment, yes. Refusal to allow a pre-shipment inspection by a recognised inspection body is one of the clearest warning signs in China sourcing."
  }
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: ARTICLE_TITLE,
  description:
    "A practical verification checklist for importers sourcing from China: business license checks, audit certificate verification, factory versus trading company, and payment red flags.",
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
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
};

export default function ChinaSupplierVerificationPage() {
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
              <p className="eyebrow">Sourcing Guide - September 22, 2026</p>
              <h1>{ARTICLE_TITLE}</h1>

              <p>
                Most sourcing disasters are visible before the deposit is paid.
                They hide in documents nobody reads carefully, in certificates
                that expired two years ago, and in answers that arrive a little
                too smoothly.
              </p>
              <p>
                None of the checks below require a consultant, a paid
                subscription or a factory visit. They require an afternoon and a
                willingness to ask the same question twice.
              </p>

              <h2>Start with the registered entity, not the trade name</h2>
              <p>
                Almost every Chinese exporter presents an English trade name.
                That name has no legal standing. Ask for the registered Chinese
                company name and the Unified Social Credit Identifier, an
                18-character code printed on the business license.
              </p>
              <p>
                With the Chinese name you can search the National Enterprise
                Credit Information Publicity System, the official registry run
                by China&apos;s market regulator. It is free, it is in Chinese,
                and it will show you the legal representative, registered
                capital, registered address, incorporation date and any
                administrative penalties on record.
              </p>
              <p>
                Three things in that record deserve attention. Registered
                capital that looks implausibly small for the order you are
                placing. An address that turns out to be a residential building
                or a shared office. And a business scope that does not include
                manufacturing — which brings us to the next point.
              </p>

              <h2>Read the business scope before you believe &quot;our factory&quot;</h2>
              <p>
                A Chinese business license lists an approved business scope. If
                the scope covers trading, import and export, or technology
                services but not production or manufacturing, the company is not
                licensed as a manufacturer — whatever the website says.
              </p>
              <p>
                This does not make them a bad partner. Trading companies and
                export agents handle consolidation, quality control and
                paperwork that a single factory often cannot. What matters is
                that you know which one you are dealing with, because
                accountability differs. If a defect appears, a trading company
                has to go back to a factory you have never spoken to.
              </p>
              <p>
                The fastest way to tell them apart in conversation: ask which
                processes are done in-house and which are subcontracted. A
                factory will describe plating, stitching, injection moulding or
                kiln capacity without hesitation. A trading company will talk
                about their partner factories.
              </p>

              <h2>Verify certificates at the source, never from the PDF</h2>
              <p>
                A certificate sent as a PDF proves only that someone can edit a
                PDF. Verification means going to the organisation that issued
                the audit.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Scheme</th>
                    <th>What it covers</th>
                    <th>How to verify</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>amfori BSCI</td>
                    <td>Social compliance, labour practices</td>
                    <td>Check the audit ID in the amfori platform</td>
                  </tr>
                  <tr>
                    <td>ICTI Ethical Toy Program</td>
                    <td>Ethical manufacturing for toys</td>
                    <td>Verify through the programme, not the certificate copy</td>
                  </tr>
                  <tr>
                    <td>Sedex / SMETA</td>
                    <td>Labour, health, safety, environment</td>
                    <td>Confirm the report is shared through Sedex</td>
                  </tr>
                  <tr>
                    <td>ISO 9001</td>
                    <td>Quality management system</td>
                    <td>Check the certification body&apos;s public register</td>
                  </tr>
                  <tr>
                    <td>GSV</td>
                    <td>Supply chain security</td>
                    <td>Confirm with the issuing audit firm</td>
                  </tr>
                </tbody>
              </table>
              <p>
                Two details catch more problems than forgery does. First, the
                audit date: social compliance audits typically expire, and a
                lapsed report is far more common than a fake one. Second, the
                audited site: a group may hold a valid certificate for one
                facility while your order is produced at another.
              </p>
              <p>
                If your product touches children, food contact or electrical
                safety, certificate checks are not optional. Toy programmes
                generally need EN71 or ASTM F963 testing; ceramics and
                glassware sold into the United States may fall under FDA
                requirements; textiles increasingly require OEKO-TEX or REACH
                documentation. Ask which tests apply to your product and who
                pays for them.
              </p>

              <h2>Use samples as a control, not a preview</h2>
              <p>
                A good sample tells you almost nothing on its own, because
                factories make samples carefully and production less so. What
                matters is whether the sample becomes a written standard.
              </p>
              <ul>
                <li>
                  Approve a pre-production sample and have it signed, dated and
                  retained by both sides as the golden sample.
                </li>
                <li>
                  Put the specification in writing: dimensions, tolerances,
                  materials, colour references, packaging and carton markings.
                </li>
                <li>
                  Agree the inspection standard in advance — AQL levels, who
                  inspects, and what happens if the shipment fails.
                </li>
                <li>
                  For repeat orders, reseal and compare against the original
                  golden sample rather than a fresh one.
                </li>
              </ul>

              <h2>The payment and behaviour red flags</h2>
              <p>
                Payment terms in China sourcing are negotiable and not
                suspicious in themselves. A 30% deposit with the balance before
                shipment is common; letters of credit and open account terms
                exist for established relationships. What matters is where the
                money goes and what happens when you push back.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>Signal</th>
                    <th>Why it matters</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Payment requested to a personal bank account</td>
                    <td>
                      Funds leave the corporate entity, which makes recovery
                      essentially impossible if the order fails
                    </td>
                  </tr>
                  <tr>
                    <td>Refusal to permit third-party pre-shipment inspection</td>
                    <td>
                      The single strongest predictor of a quality dispute
                    </td>
                  </tr>
                  <tr>
                    <td>Price far below every other quotation</td>
                    <td>
                      Usually resolved later through substituted material or
                      reduced weight, after the deposit is committed
                    </td>
                  </tr>
                  <tr>
                    <td>Pressure to decide today, or a quote that expires in hours</td>
                    <td>
                      Manufactured urgency is a negotiation tactic, not a
                      production constraint
                    </td>
                  </tr>
                  <tr>
                    <td>Vague answers about subcontracting</td>
                    <td>
                      You cannot audit capacity you are not allowed to see
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2>Doing this across several categories</h2>
              <p>
                Verification is per entity, not per category. A supplier who is
                excellent at ceramics may have no compliant resource for{" "}
                <a href="/products/pet">pet products</a> or{" "}
                <a href="/products/toy">toys</a>, and each new factory brings a
                fresh round of license checks, certificate validation and
                sampling.
              </p>
              <p>
                This is where a sourcing partner earns their fee: the same
                verification discipline applied across{" "}
                <a href="/products">nine product categories</a>, with audit
                documentation kept current rather than reconstructed at the
                start of every order.
              </p>

              <h2>FAQ: verifying Chinese suppliers</h2>
              {faqs.map((item) => (
                <div key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}

              <h2>Where to start</h2>
              <p>
                If you are evaluating a new supplier this week, do the licence
                check and one certificate verification before you discuss price.
                Both take under an hour and both can save a deposit.
              </p>
              <p>
                MASA Development International has coordinated manufacturing in
                China since 2008, working with audited factories across toy,
                home textile, pet, eyewear, umbrella and lifestyle categories.{" "}
                <a href="/contact">Send us the supplier details</a> you are
                reviewing and we will tell you what the documents do and do not
                establish.
              </p>
            </article>
          </div>
        </section>
      </main>
    </Page>
  );
}
