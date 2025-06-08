/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/static-website",
        destination: "/services/static-website",
      },
      {
        source: "/dynamic-website",
        destination: "/services/dynamic-website",
      },
      {
        source: "/e-commerce-website",
        destination: "/services/e-commerce-website",
      },
      {
        source: "/domain-hosting-assistance",
        destination: "/services/domain-hosting-assistance",
      },
    ];
  },
};

module.exports = nextConfig;
