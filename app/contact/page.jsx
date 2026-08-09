import { Page, PageHero } from "../components";
import { pageHeroImage } from "../site-data";
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
          image={pageHeroImage}
        />
        <section className="section alt" id="message">
          <div className="content-width contact-layout">
            <ContactForm />
            <aside className="contact-panel">
              <h2>Contact</h2>
              <div className="contact-list">
                <p>MASA Development International Limited</p>
                <p>Email: services@masadvp.com</p>
                <p>Phone: 13817878221</p>
                <p>
                  Send product details, target market, quantity range and any
                  compliance requirements. The MASA team will follow up by
                  email.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </Page>
  );
}
