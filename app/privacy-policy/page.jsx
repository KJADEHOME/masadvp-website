import { Page, PageHero } from "../components";
import { pageHeroImage } from "../site-data";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for MASA Development International Limited website inquiries.",
  alternates: {
    canonical: "https://www.masadvp.com/privacy-policy"
  }
};

export default function PrivacyPolicyPage() {
  return (
    <Page>
      <main>
        <PageHero
          title="Privacy Policy"
          breadcrumb="Home - Privacy Policy"
          image={pageHeroImage}
        />
        <section className="section">
          <div className="content-width intro-copy">
            <p>
              MASA Development International Limited collects contact details
              submitted through this website only to respond to business
              inquiries and communicate about requested products or services.
            </p>
            <p>
              Inquiry information may include name, email address, company,
              country or region, phone number, product interest and message
              content. MASA does not sell inquiry information to third parties.
            </p>
            <p>
              To request correction or deletion of inquiry information, please
              contact service@masadvp.com.
            </p>
          </div>
        </section>
      </main>
    </Page>
  );
}
