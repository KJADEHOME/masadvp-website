import { Page, PageHero } from "../components";
import { pageHeroContactImage } from "../site-data";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Our Sourcing Team in China",
  description:
    "Contact MASA Development International for toy, pet products, home textile and lifestyle sourcing. B2B inquiries answered within 24 hours by our Shanghai team.",
  alternates: {
    canonical: "https://www.masadvp.com/contact"
  }
};

const faqs = [
  {
    q: "What is your minimum order quantity (MOQ)?",
    a: "MOQ depends on the product category and level of customization. Promotional and stock items can start from a few hundred pieces, while fully customized OEM products usually require 1,000 to 5,000 pieces per design. We will confirm the exact MOQ with your quotation."
  },
  {
    q: "Do you support OEM and ODM product development?",
    a: "Yes. We provide full OEM and ODM support including design brief review, sample development, material selection, packaging design and testing coordination, working directly with audited factories in our supplier network."
  },
  {
    q: "Which certifications can your factories provide?",
    a: "Our supplier database includes factories with ICTI, GSV, BSCI, COC, Sedex and other compliance certificates. We also coordinate product testing such as EN71, ASTM, REACH and OEKO-TEX according to your market requirements."
  },
  {
    q: "How do I get a quotation?",
    a: "Email service@masadvp.com or use the inquiry form with your product requirements, target quantity, target market and compliance needs. Our team aims to respond within 24 hours with pricing and lead time."
  },
  {
    q: "Can you consolidate different products into one shipment?",
    a: "Yes. Because we source multiple categories such as toys, pet products, home textile, umbrellas and paper items, we can consolidate your mixed-container orders in one shipment to reduce freight cost."
  }
];

export default function ContactPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a }
    }))
  };

  return (
    <Page active="Contact Us">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <main>
        <PageHero
          title="Contact Us"
          breadcrumb="Home - Contact Us"
          image={pageHeroContactImage}
        />
        <section className="section alt" id="message">
          <div className="content-width contact-layout">
            <ContactForm />
            <aside className="contact-panel">
              <h2>Contact</h2>
              <div className="contact-list">
                <p>MASA Development International Limited</p>
                <p>
                  Email: <a href="mailto:service@masadvp.com">service@masadvp.com</a>
                </p>
                <p>
                  For B2B inquiries, please email your product requirements,
                  target market and compliance details. We aim to respond within
                  24 hours.
                </p>
                <p>
                  You may also use the inquiry form for structured sourcing
                  details and faster follow-up.
                </p>
              </div>
            </aside>
          </div>
        </section>
        <section className="section">
          <div className="content-width">
            <div className="section-head">
              <p className="eyebrow">FAQ</p>
              <h2>Sourcing Questions, Answered</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <div className="faq-item" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Page>
  );
}
