import { Page, PageHero } from "../components";
import { pageHeroContactImage } from "../site-data";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact MASA Development International Limited for toy, home textile and lifestyle product sourcing inquiries."
};

export default function ContactPage() {
  return (
    <Page active="Contact Us">
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
                  Email: <a href="mailto:services@masadvp.com">services@masadvp.com</a>
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
      </main>
    </Page>
  );
}
