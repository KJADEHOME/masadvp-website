import "./globals.css";

const siteUrl = "https://www.masadvp.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MASA Development International Limited",
    template: "%s | MASA Development International"
  },
  description:
    "MASA Development International Limited supports global toy, home textile, home decor and lifestyle product sourcing with compliant supplier resources.",
  keywords: [
    "MASA Development International",
    "toy sourcing",
    "home textile sourcing",
    "lifestyle product sourcing",
    "global sourcing",
    "Shanghai sourcing"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "MASA Development International Limited",
    description:
      "Toy, home textile and lifestyle product sourcing support since 2008.",
    url: siteUrl,
    siteName: "MASA Development International",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true
  },
  other: [
    { name: "geo.region", content: "CN-31" },
    { name: "geo.placename", content: "Shanghai, China" },
    { name: "geo.position", content: "31.2304;121.4737" },
    { name: "ICBM", content: "31.2304,121.4737" }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
