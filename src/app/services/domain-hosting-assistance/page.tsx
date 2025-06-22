import DomainHosting from "@/components/DomainHosting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Domain & Hosting Services - LogiBrix | Starting ₹199/month",
  description:
    "Professional domain registration & hosting services by LogiBrix. Premium hosting from ₹199/month, free SSL, 99.9% uptime. Domain registration from ₹699. Get your business online today!",
  keywords: [
    "domain registration India",
    "web hosting services",
    "cheap domain registration",
    "affordable web hosting",
    "domain and hosting",
    "SSL certificate",
    "website hosting",
    "domain name registration",
    "shared hosting",
    "VPS hosting",
    "dedicated hosting",
    "cloud hosting India",
    "domain hosting combo",
    "business hosting",
    "LogiBrix hosting",
    "domain transfer",
    "hosting migration",
    "email hosting",
    "WordPress hosting",
    "secure hosting"
  ],
  openGraph: {
    title: "Domain & Hosting Services - LogiBrix | Premium Hosting from ₹199",
    description: "Get your business online with LogiBrix domain & hosting services. Premium hosting, free SSL, 99.9% uptime guarantee. Domain registration from ₹699.",
    url: "https://logibrix.in/services/domain-hosting-assistance",
    siteName: "LogiBrix",
    images: [
      {
        url: "https://logibrix.in/images/domain-hosting-og.jpg",
        width: 1200,
        height: 630,
        alt: "LogiBrix Domain & Hosting Services"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Domain & Hosting Services - Premium Hosting from ₹199/month",
    description: "Professional domain registration & hosting by LogiBrix. Free SSL, 99.9% uptime, 24/7 support. Get online today!",
    images: ["https://logibrix.in/images/domain-hosting-twitter.jpg"]
  },
  alternates: {
    canonical: "https://logibrix.in/services/domain-hosting-assistance"
  }
};

const DomainHostingPage = () => {
  return (
    <>
      <DomainHosting />
    </>
  );
};

export default DomainHostingPage;
