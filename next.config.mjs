/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  // allow HMR connections from local network addresses during development
  allowedDevOrigins: ["localhost", "192.168.1.5"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/Product.html",
        destination: "/products",
        permanent: true
      },
      {
        source: "/new.html",
        destination: "/news",
        permanent: true
      },
      {
        source: "/message.html",
        destination: "/contact#message",
        permanent: true
      },
      {
        source: "/Contact.html",
        destination: "/contact",
        permanent: true
      },
      {
        source: "/About.html",
        destination: "/about",
        permanent: true
      },
      {
        source: "/Producttoy_catalogid_26_cid_24.html",
        destination: "/products/toy",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
